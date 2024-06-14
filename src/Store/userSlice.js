import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  launches : [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchlaunch: (state , action)=>{
      state.launches = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {fetchlaunch} = userSlice.actions

export default userSlice.reducer