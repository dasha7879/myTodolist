import React, { useState } from 'react';
import { v4 } from 'uuid'
import './App.css';
import { Input } from './components/Input/Input';
import { TaskType, Todolist } from './components/Todolist'


export type FilterType = 'all' | 'active' | 'completed'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: v4(), title: "HTML&CSS", isDone: true },
    { id: v4(), title: "JS", isDone: true },
    { id: v4(), title: "ReactJS", isDone: false },
    { id: v4(), title: "HTML&CSS", isDone: true },
    { id: v4(), title: "JS", isDone: true },
    { id: v4(), title: "ReactJS", isDone: false }
  ])

  const [filter, setFilter] = useState<FilterType>('all')
  let tasksForTodolist = tasks;

  if (filter === 'active') {
    tasksForTodolist = tasks.filter(t => !t.isDone)
  }
  if (filter === 'completed') {
    tasksForTodolist = tasks.filter(t => t.isDone)
  }
  const changeFilter = (value: FilterType) => {
    setFilter(value)
  }

  const removeTask = (taskId: string) => {
    return setTasks(tasks.filter(t => t.id !== taskId))
  }

  const addTask = (value:string) => {
    let newtask = { id: v4(), title: value , isDone: true }
    let newTasks = [newtask, ...tasks]
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <Todolist title='what to learn' 
                tasks={tasksForTodolist} 
                removeTask={removeTask} 
                changeFilter={changeFilter}
                addTask = {addTask}
                 />
    </div>

  );
}

export default App;
function v1() {
  throw new Error('Function not implemented.');
}

