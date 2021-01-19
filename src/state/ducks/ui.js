import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {},
});

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: null,
  reducers: {
    addBreadcrumb: (state, { payload }) => {
      return payload;
    },
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'violet',
  reducers: {
    toggleTheme: (state, { payload }) => {
      document.body.setAttribute('data-theme', payload);
      return payload;
    },
  },
});

export const { addBreadcrumb } = breadcrumbSlice.actions;
export const { toggleTheme } = themeSlice.actions;

export default {
  uiModal: modalSlice.reducer,
  breadcrumb: breadcrumbSlice.reducer,
  theme: themeSlice.reducer,
};
