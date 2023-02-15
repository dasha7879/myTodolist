import React, { FC, useState } from 'react';
import { FilterType } from "../App"
import { EditableSpan } from "./EditableSpan/EditableSpan"


export type TodolistType = {
    id: string,
    title: string,
    filter: FilterType
}
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}


export const Todolist: FC<TodolistType>= ({id,title,filter}) => {
    return (
        <div className="todolist">
            <EditableSpan title={title} />
        </div>
    )
}