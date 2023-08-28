import styles from '../styles/main.module.css'
import Navbar from '../component/Navbar'

export default function(){
    return (
        <>
            <Navbar/>
            <div style={{marginTop:'130px'}} className={styles.flexContainer}>
                <div className={styles.row}> 
                    <div className={styles.flexItem}>
                        <h1>Gerador de Passwords Seguras</h1>
                        <span>Crie instantaneamente passwords seguras e aleatórias para as suas autenticações </span>

                        <div>
                            <input className={styles.passInput} />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}