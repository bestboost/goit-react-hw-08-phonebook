import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilters = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    const normolizedFilter = filters.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  }
);
