import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './Session/userSession.js'

export default configureStore({
  reducer: {
    Token: tokenReducer,
  },
})