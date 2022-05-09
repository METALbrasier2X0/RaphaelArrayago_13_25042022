import { createSlice } from '@reduxjs/toolkit'

export const userSession = createSession({
  name: 'session',
  initialState: {
    value: 0
  },
  reducers: {
    Init: state => {
      state.value += 1
    },
    Modify: state => {
      state.value -= 1
    }  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = userSession.actions

export default userSession.reducer