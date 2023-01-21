import React, { ReactElement } from 'react'
import './App.css'
import { TodoList } from './TodoList'

function App (): ReactElement {
  return (
    <div className="App">
      <TodoList/>
    </div>
  )
}

export default App
