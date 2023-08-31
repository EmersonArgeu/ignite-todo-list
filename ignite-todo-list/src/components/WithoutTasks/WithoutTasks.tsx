// assets
import Clipboard from "../../assets/Clipboard.svg"
// styles
import styles from "./withoutTasks.module.css"



// COMPONENTE // 
export const WithoutTasks = () => {

// JSX
    return(

        <div className={styles.withoutTaskContainer}>

            <img src={Clipboard} alt="clipboard-image" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        
        </div>
        
    )
}