import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light-theme'
  },
  reducers: {
    toggle: (state, action) => {
      state.theme = state.theme === 'light-theme' ? 'dark-theme' : 'light-theme'
    }
  }
})

export const { toggle } = themeSlice.actions
export default themeSlice.reducer
