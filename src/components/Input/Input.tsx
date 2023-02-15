import { type } from 'os';
import React, { ChangeEvent, FC, InputHTMLAttributes, KeyboardEventHandler, useState } from 'react';
//cоздать универсальный инпут !
type InputType = {
    callback?: (title: string) => void
    type?: 'text' | 'checkbox'
    // isDone?: boolean
}

export const Input: FC<InputType> = ({ callback, type }) => {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    


    const onChangekHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyDownHandler=(e: React.KeyboardEvent<HTMLInputElement>)=>{
        setError(error)
     if (e.key==='Enter'){
        console.log('addTask') /// add func addTask
     }

    }

    return (
        // type === 'text' ?
            <input value={title} onChange={onChangekHandler} onKeyDown={onKeyDownHandler} /> 
            // <input type='checkbox' />

    )
}