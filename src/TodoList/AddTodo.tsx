import React, { Dispatch, FormEvent, ReactElement, SetStateAction, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todos } from './Types'

interface AddTodoProps {
  setTodos: Dispatch<SetStateAction<Todos>>
}

export const AddTodo = ({ setTodos }: AddTodoProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputRef?.current != null) {
      setTodos((previousState: Todos) => [
        ...previousState,
        {
          value: inputRef?.current?.value,
          isDone: false,
          id: uuidv4()
        }
      ])
    }
  }

  return (
        <form onSubmit={handleOnSubmit}>
            <input ref={inputRef} name="add item" placeholder="Add Item" />
            <button type="submit">Add</button>
        </form>
  )
}
