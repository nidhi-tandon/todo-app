import React, { ReactElement, useCallback, useState } from 'react'
import { AddTodo } from './AddTodo'
import { TodoComponent } from './Todo'
import '../styles.css'
import { Todo, Todos } from './Types'

const getUpdated = (todos: Todos, todo: Todo): Todos => {
  const updatedTodos = [...todos]
  const index = updatedTodos.findIndex((item) => item.id === todo.id)
  updatedTodos[index] = todo
  return updatedTodos
}

export const TodoList = (): ReactElement => {
  const [todos, setTodos] = useState<Todos>([])

  const handleOnChange = useCallback((todo: Todo): void => {
    setTodos((todos) => getUpdated(todos, todo))
  }, [])

  return (
        <div className="container">
            <ul>
                {todos?.map((todo) => {
                  return <TodoComponent key={todo.id} todo={todo} onChange={handleOnChange} />
                })}
            </ul>
            <AddTodo setTodos={setTodos} />
        </div>
  )
}

TodoList.displayName = 'TodoList'
