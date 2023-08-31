// interfaces
import { interTask } from "../../App/App"
// styles
import styles from "./TaskHeader.module.css"

//interfaces
interface Props{
    tasks: interTask[]
}


// COMPONENTE // 
export const TaskHeader = ({tasks}: Props) => {
// variables
    const completedTasks = tasks.filter((task) => task.isCompleted).length
    const amountTasks =tasks.length

// JSX
    return(

        <div className={styles.taskHeaderContainer}>

            <div className={styles.taskCreated}>
                <strong>Tarefas criadas</strong>
                <span>{amountTasks}</span>
            </div>
            <div className={styles.taskFinished}>
                <strong>Concluídas</strong>
                <span>{completedTasks} de {amountTasks}</span>
            </div>
            
        </div>
    )
}