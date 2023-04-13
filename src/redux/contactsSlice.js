import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload;
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.contacts.push(payload);
    });
    builder.addMatcher(
      isAnyOf(
        fetchContacts.fulfilled,
        deleteContact.fulfilled,
        addContact.fulfilled
      ),
      state => {
        state.isLoading = false;
        state.error = null;
      }
    );
    builder.addMatcher(
      isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending),
      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        fetchContacts.rejected,
        deleteContact.rejected,
        addContact.rejected
      ),
      (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }
    );
  },
});

export const contactsReducer = contactSlice.reducer;
