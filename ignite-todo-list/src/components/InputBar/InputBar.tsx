// hooks
import { useState } from "react"
//interfaces
import { interTask } from "../../App/App"
//packages
import { PlusCircle } from "@phosphor-icons/react"
// styles
import styles from "./InputBar.module.css"


// interfaces
interface Props{
    onAddTask: (task: string) => void
    tasks: interTask[]
}



// COMPONENTE // 
export const InputBar = ({ onAddTask, tasks }: Props) => {

// states
    const [titleTask, setTitleTask] = useState("")

// funtions

const onChangeTitleTask = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTitleTask(ev.target.value)  
}

const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    onAddTask(titleTask)
    setTitleTask("") 

    console.log(tasks)
}


// JSX
    return(
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={onChangeTitleTask}
                value={titleTask}
                required
            />
            <button>
                Criar 
                <PlusCircle size={20} />
            </button>
        </form>
    )
}