import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsReducer = contactSlice.reducer;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const { addContact, deleteContact, changeFilter } = contactSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
