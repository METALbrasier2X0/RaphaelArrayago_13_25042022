import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
   
  )
}