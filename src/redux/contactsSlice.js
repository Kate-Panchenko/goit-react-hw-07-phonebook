import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { fetchContacts, deleteContact, addContact } from './operations';

const contactsInitialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {},

  // reducers: {
  //   addContact: {
  //     reducer(state, { payload }) {
  //       state.contacts.push(payload);
  //     },
  //     prepare(values) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: values.name,
  //           number: values.number,
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, { payload }) {
  //     state.contacts = state.contacts.filter(contact => contact.id !== payload);
  //   },
  //   changeFilter(state, { payload }) {
  //     state.filter = payload;
  //   },
  // },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = null;
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    });
    // builder.addMatcher()
  },
});

export const contactsReducer = contactSlice.reducer;

// export const { addContact, deleteContact, changeFilter } = contactSlice.actions;

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
