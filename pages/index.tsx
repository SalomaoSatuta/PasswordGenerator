import styles from '../styles/main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar'
import {useState} from 'react'
export default function(){

    const[copiedText, setCopiedText] = useState('')
    const[isCopied, setIsCopied] = useState(false)

    const copyToClipboard = () => {

    } 


    return (
        <>
            <Navbar/>
            <div style={{marginTop:'50px'}} className={styles.flexContainer}>
                <div className={styles.row}> 
                    <div className={styles.flexItem}>
                        <h1>Gerador de Passwords Seguras</h1>
                        <span>Crie instantaneamente passwords seguras e aleatórias para as suas autenticações </span>
                        
                        <div style={{marginTop:'15px'}}>
                            <small style={{textAlign:'left', fontWeight:'lighter'}}>
                                Parametrização de password
                            </small>

                            <div className='row'>

                                <div className='col-md-6'>

                                    <div className='row mt-4'>
                                        <div className='col-md-7'>
                                            <label>Tamanho da senha</label>
                                        </div>
                                        <div className='col-md-5'>
                                            <input type='number' className={styles.lengthInput} />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-md-7'>
                                            <label>Caracteres minúsculos</label>
                                        </div>
                                        <div className='col-md-5'>
                                            <input type='checkbox' /> (abcdefgh)
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-md-7'>
                                            <label>Caracteres maiúsculos</label>
                                        </div>
                                        <div className='col-md-5'>
                                            <input type='checkbox' /> (ABCDEFGH)
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6'>

                                    <div className='row mt-4'>
                                        <div className='col-md-7'>
                                            <label>Símbolos</label>
                                        </div>
                                        <div className='col-md-5'>
                                            ( @#$% )
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-md-7'>
                                            <label>Números</label>
                                        </div>
                                        <div className='col-md-5'>
                                            ( 123456 )
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-md-7'>
                                            <label>Caracteres Ambiguos</label>
                                        </div>
                                        <div className='col-md-5'>
                                            ( [] () / * : ) 
                                        </div>
                                    </div>

                                </div>
                                
                            </div>

                        </div>


                        <div>
                            <input className={styles.passInput} />
                        </div>
                        
                       


                        <button className={styles.copyButton}>
                            Gerar Senha Segura!
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
}