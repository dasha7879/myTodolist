import React, { FC, useState } from 'react';
import { FilterType } from '../App';
import { Button } from './Button/Button';
// import { FilterType } from "../App"
import { EditableSpan } from "./EditableSpan/EditableSpan"


export type TodolistType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterType) => void
}


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

// {id,title,filter}
// : FC<TodolistType>

export const Todolist: FC<TodolistType> = ({ title, tasks, removeTask, changeFilter }) => {

    const renderTasks = tasks.map(t =>
        <li key={t.id}>
            <input type="checkbox" checked={t.isDone} /><span>{t.title}</span>
            <button onClick={() => removeTask(t.id)}>✖️</button>
        </li>
    )

    const changeFilterCallback = (value: FilterType) => {
        changeFilter(value)
    }

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input />
                    <Button name={'+'} callback={()=>console.log('TODO add Tasks')} />
                </div>
                <ul>
                    {renderTasks}
                </ul>
                <div>
                    <Button name={'All'} callback={()=>changeFilterCallback('all')}/>
                    <Button name={'Active'} callback={()=>changeFilterCallback('active')}/>
                    <Button name={'Completed'} callback={()=>changeFilterCallback('completed')}/>
                </div>
            </div>
        </div>
    )
}