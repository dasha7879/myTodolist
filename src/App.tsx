import React, { useState } from 'react';
import { v4 } from 'uuid'
import './App.css';
import { Input } from './components/Input/Input';
import { TaskType, Todolist, TodolistType } from './components/Todolist'


export type FilterType = 'all' | 'active' | 'completed'

type TasksStateType = {
  [key: string]: TaskType[]
}

function App() {

  // const todoListTitle_1: string = "What to learn"
  // let todolistId1 = v4();
  // let todolistId2 = v4();

  // let [todolists, setTodolists] = useState<Array<TodolistType>>([
  //   { id: todolistId1, title: "What to learn", filter: "all" },
  //   { id: todolistId2, title: "What to buy", filter: "all" }
  // ])

  // let [tasks, setTasks] = useState<TasksStateType>({
  //   [todolistId1]: [
  //     { id: v4(), title: "HTML&CSS", isDone: true },
  //     { id: v4(), title: "JS", isDone: true }
  //   ],
  //   [todolistId2]: [
  //     { id: v4(), title: "Milk", isDone: true },
  //     { id: v4(), title: "React Book", isDone: true }
  //   ]
  // });


  return (
    // <div className="App">
    //   {/* <Todolist id={todolistId1} title="What to learn" filter = 'all'/> */}
    //   <Input  type='text' callback={()=>{}}/>
    // </div>
    <div className="App">
    <div>
        <h3>What to learn</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
            <li><input type="checkbox" checked={true}/> <span>JS</span></li>
            <li><input type="checkbox" checked={false}/> <span>React</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
</div>
  );
}

export default App;
function v1() {
  throw new Error('Function not implemented.');
}

