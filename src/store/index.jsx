import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from '../slices/sidebarSlice'

export default configureStore({
  reducer: {
    hide:sideBarReducer
}
})