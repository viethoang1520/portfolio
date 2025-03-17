import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/store/theme/themeSlice'
import skillReducer from '@/store/skill/skillSlice'
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    skill: skillReducer
  }
})