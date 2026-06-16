// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: false,
  sidebarIsOpen: false,
  mode: 'social'
}

const setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload
    },
    setSidebar(state, action) {
      state.sidebarIsOpen = action.payload
    },
    setMode(state, action) {
      state.mode = action.payload
    }
  }
})

export default setting.reducer

export const { setTheme, setMode, setSidebar } = setting.actions
