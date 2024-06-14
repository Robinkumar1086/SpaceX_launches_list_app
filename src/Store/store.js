import { configureStore } from '@reduxjs/toolkit'
import userreducer from '../Store/userSlice'
import authReducer from '../Store/authslice'

export const store = configureStore({
  reducer: {
    data : userreducer,
    auth : authReducer 
  },
})
