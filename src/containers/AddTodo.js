import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      
        <input ref={node => (input = node)} />
        <button type="submit" onClick={e=>{dispatch(addTodo(input.value))}}>Add Todoss</button>
      
    </div>
  )
}

export default connect()(AddTodo)