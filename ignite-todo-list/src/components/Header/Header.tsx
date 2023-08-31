// assets
import logo from "../../assets/Logo.svg"
// styles
import styles from "./Header.module.css"



// COMPONENTE // 
export const Header = () => {

// JSX
    return (

      <div className={styles.header}>
        <img src={logo} alt="logo_to-do" />
      </div>

    )
}
  
  