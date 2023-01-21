import '../styles.css'
import { Todo } from './Types'
import React, { memo, ReactElement } from 'react'

interface TodoProps {
  key: string
  todo: Todo
  onChange: (todo: Todo) => void
}

export const TodoComponent = memo(({ key, todo, onChange }: TodoProps): ReactElement => {
  const handleOnChange = (): void => {
    const updatedTodo: Todo = todo
    updatedTodo.isDone = !updatedTodo.isDone
    onChange(updatedTodo)
  }

  return (
    <li key={key} className={todo.isDone ? 'checked' : ''}>
      <input id={todo.value} type="checkbox" onChange={handleOnChange} />
      <label htmlFor={todo.value}>{todo.value}</label>
    </li>
  )
})

TodoComponent.displayName = 'TodoComponent'
