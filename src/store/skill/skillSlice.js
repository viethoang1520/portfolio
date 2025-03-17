import { createSlice } from '@reduxjs/toolkit'

const skillSlice = createSlice({
  name: 'skill',
  initialState: {
    showAll: false
  },
  reducers: {
    showAllSkills: (state, action) => {
      state.showAll = true
    },
    collapseSkills: (state, action) => { 
      state.showAll = false
    }
  }
})

export const { showAllSkills, collapseSkills } = skillSlice.actions
export default skillSlice.reducer
