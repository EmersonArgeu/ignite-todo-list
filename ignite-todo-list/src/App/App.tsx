// components
import { Header } from "../components/Header/Header"
import { InputBar } from "../components/InputBar/InputBar"
import { Task } from "../components/Task/Task"
import { TaskHeader } from "../components/TaskHeader/TaskHeader"
import { WithoutTasks } from "../components/WithoutTasks/WithoutTasks"
// hooks
import { useState } from "react"
// packages
import { v4 as uuidv4 } from 'uuid';
// styles
import styles from "./App.module.css"

//interfaces
export interface interTask {
  id: string;
  title: string;
  isCompleted: boolean;
}



// COMPONENTE // 
export const App = () => {

//states
  const [tasks, setTasks] = useState<interTask[]>([])

// functions
  const addTask = (task: string) => {
    
    setTasks(
      [...tasks,
        {
          id: uuidv4(),
          title: task,
          isCompleted: false
        }
      ]
    )
  }

  const toggleStatus = (newTask: interTask[]) => {
    setTasks(newTask)
  }

  const deleteTask = (newTask: interTask[]) => {
    setTasks(newTask)
  }

// JSX
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <InputBar onAddTask={addTask} tasks={tasks}/>
        <TaskHeader tasks={tasks}/>
        {
          (tasks.length !== 0) ? (
                tasks.map((task) => (
                  <Task key={task.id} task={task} tasks={tasks} onToggleStatus={toggleStatus} onDelete={deleteTask}/>
                ))
              ) : (
                <WithoutTasks/>
              )
        }
      </div>
    </>
  )
}

