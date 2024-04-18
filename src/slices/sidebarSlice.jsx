import { createSlice } from '@reduxjs/toolkit'

export const sidebarSlice = createSlice({
  name: 'hide',
  initialState: {
    value: false
  },
  reducers: {
toggle: state => {
    state.value = !state.value;
},
  }
})

export const { toggle} = sidebarSlice.actions

export default sidebarSlice.reducer
