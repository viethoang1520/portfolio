import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    toggle: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      console.log(state.theme)
    }
  }
})

export const { toggle } = themeSlice.actions
export default themeSlice.reducer
