import React, { FC, useState } from 'react';
import { FilterType } from '../App';
import { Button } from './Button/Button';
// import { FilterType } from "../App"
import { EditableSpan } from "./EditableSpan/EditableSpan"


export type TodolistType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterType) => void
    addTask: (value: string) => void
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

// {id,title,filter}
// : FC<TodolistType>

export const Todolist: FC<TodolistType> = ({ title, tasks, removeTask, changeFilter, addTask }) => {

    const renderTasks = tasks.map(t =>
        <li key={t.id}>
            <input type="checkbox" checked={t.isDone} /><span>{t.title}</span>
            <button onClick={() => removeTask(t.id)}>✖️</button>
        </li>
    )

    const changeFilterCallback = (value: FilterType) => {
        changeFilter(value)
    }
    const [value, setValue] = useState('')

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        addTask(value)
        setValue('')
    }

    const onKeyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            addTaskHandler()
        }
    }
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input onChange={onChangeHandler} value={value} onKeyDown={onKeyDownHandler} />
                    <Button name={'+'} callback={addTaskHandler} />
                </div>
                <ul>
                    {renderTasks}
                </ul>
                <div>
                    <Button name={'All'} callback={() => changeFilterCallback('all')} />
                    <Button name={'Active'} callback={() => changeFilterCallback('active')} />
                    <Button name={'Completed'} callback={() => changeFilterCallback('completed')} />
                </div>
            </div>
        </div>
    )
}