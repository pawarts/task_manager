import { configureStore } from '@reduxjs/toolkit'

import dateSlice from './slices/dateSlice'
import popupSlice from './slices/popupSlice'

export const store = configureStore({
  reducer: {
    date: dateSlice,
    popup: popupSlice,
  },
})