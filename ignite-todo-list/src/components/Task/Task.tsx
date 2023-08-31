// packages
import { Trash } from "@phosphor-icons/react"
// styles
import styles from "./Task.module.css"
import { interTask } from "../../App/App"

// interfaces
interface Props{
    tasks: interTask[]
    task: interTask
    onDelete: (newTask:interTask[]) => void
    onToggleStatus: (newTask:interTask[]) => void
} 



// COMPONENTE // 
export const Task = ({task, tasks, onToggleStatus, onDelete}: Props) => {

// funtions
    const handleChecked = (taskId: string) => {
       const newTask = tasks.map(task => {
            if(task.id === taskId){
                return{
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }else{
                return task
            } 
        })

        onToggleStatus(newTask)
    }

    const handleDelete = (taskId: string) => {
        const newTask = tasks.filter((task) => task.id !== taskId)

        onDelete(newTask)
    }



// JSX
    return(
        
        <div className={styles.taskContainer}>

            <div className={styles.checkboxContainer}>
                <input type="checkbox" id={task.id} onClick={() => handleChecked(task.id)}/>
            </div>

            <div>
                <p className={task.isCompleted === true ? styles.lineThrough : styles.withoutLineThrough}>
                    {task.title}
                </p>
            </div> 
            
            <div className={styles.svgContainer} onClick={() => handleDelete(task.id)}>
                <Trash size={20} />
            </div>
        
        </div>

    )
    
}