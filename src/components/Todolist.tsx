import React, { FC, useState } from 'react';
import { FilterType } from '../App';
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

    return (
        // <div className="todolist">
        //     <EditableSpan title={title} />
        // </div>
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {renderTasks}
                </ul>
                <div>
                    <button onClick={() =>changeFilter('all')}>All</button>
                    <button onClick={() =>changeFilter('active')}>Active</button>
                    <button onClick={() =>changeFilter('completed')}>Completed</button>
                </div>
            </div>
        </div>
    )
}