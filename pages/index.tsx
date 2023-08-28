import styles from '../styles/main.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../component/Navbar'
import {use, useState} from 'react'
import crypto from 'crypto'

export default function(){

    const [password, setPassword] = useState('')
    const [length, setLength] = useState(12)
    const [useUppercase, setUseUppercase] = useState(true)
    const [useLowercase, setUseLowercase] = useState(true)
    const [useNumbers, setUseNumbers] = useState(true)
    const [useSymbols, setUseSymbols] = useState(true)
    const [useAmbiguous, setUseAmbiguous] = useState(true)
    const [randomPassword, setRandomPassword] = useState('')

    const generatePassword = () => {
        const characters = [];
        if (useUppercase) characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        if (useLowercase) characters.push('abcdefghijklmnopqrstuvwxyz')
        if (useNumbers) characters.push('0123456789')
        if (useSymbols) characters.push('!@#$%^&*()-_=+[]{}|;:,.<>?')
        if (useAmbiguous) characters.push('il1Lo0O')
    
        const allCharacters = characters.join('')
        const passwordArray = []

        for (let i = 0; i < length; i++) {
             const randomBytes = crypto.randomBytes(1);
      const randomIndex = randomBytes[0] % allCharacters.length;
      passwordArray.push(allCharacters[randomIndex]);
        }

        setRandomPassword(passwordArray.join(''))
    };

    const copyToClipboard = () =>{
        
        // Copiar para a área de transferência
        navigator.clipboard.writeText(randomPassword)
        .then(() => console.log('Senha copiada para a área de transferência'))
        .catch(err => console.error('Erro ao copiar senha:', err));

    }

    return (
        <>
            <Navbar/>
            <div style={{marginTop:'50px'}} className={styles.flexContainer}>
                <div className={styles.row}> 
                    <div className={styles.flexItem}>
                        <h1>Gerador de Passwords Seguras</h1>
                        <span>Crie instantaneamente passwords seguras e aleatórias para as suas autenticações </span>
                        
                        <div>
                            <input alt='Clique aqui para copiar' onClick={copyToClipboard} value={randomPassword} className={styles.passInput} placeholder='Após gerar, a sua senha aparecerá aqui...' />
                        </div>

                        <div style={{marginTop:'25px'}}>

                            <div className='card border-0 shadow'>
                                <div className='card-header bg-transparent'>
                                    <small style={{textAlign:'left', fontWeight:'lighter'}}>
                                        Parametrização de password
                                    </small>
                                </div>
                                <div className='card-body'>

                                    <div className='row'>

                                        <div className='col-md-6'>

                                            <div className='row mt-4'>
                                                <div className='col-md-7'>
                                                    <small>Tamanho da senha</small>
                                                </div>
                                                <div className='col-md-5'>
                                                    <input type='number' 
                                                    className={styles.lengthInput} placeholder='Ex: 01' 
                                                    value={length}
                                                    onChange={(e) => setLength(Number(e.target.value))}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-md-7'>
                                                    <small>Caracteres minúsculos</small>
                                                </div>
                                                <div className='col-md-5'>
                                                    <input type='checkbox' 
                                                    checked={useLowercase}
                                                    onChange={() => setUseLowercase(!useLowercase)}
                                                    /> 
                                                    <small> (abcdefgh)</small>
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-md-7'>
                                                    <small>Caracteres maiúsculos</small>
                                                </div>
                                                <div className='col-md-5'>
                                                    <input type='checkbox' 
                                                        checked={useUppercase}
                                                        onChange={() => setUseUppercase(!useUppercase)}
                                                    /> 
                                                    <small> (ABCDEFGH)</small>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='col-md-6'>

                                            <div className='row mt-4'>
                                                <div className='col-md-7'>
                                                    <small>Símbolos</small>
                                                </div>
                                                <div className='col-md-5'>
                                                    <input type='checkbox' 
                                                        checked={useSymbols}
                                                        onChange={() => setUseSymbols(!useSymbols)}
                                                    /> 
                                                   <small> ( @#$% )</small>
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-md-7'>
                                                    <small>Números</small>
                                                </div>
                                                <div className='col-md-5'>
                                                    <input type='checkbox' 
                                                        checked={useNumbers}
                                                        onChange={() => setUseNumbers(!useNumbers)}
                                                    /> 
                                                    <small> ( 123456 )</small>
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-md-7'>
                                                    <small>Caracteres Ambiguos</small>
                                                </div>
                                                <div className='col-md-5'>
                                                   <input type='checkbox' 
                                                    checked={useAmbiguous}
                                                    onChange={() => setUseAmbiguous(!useAmbiguous)}
                                                   /> 
                                                   <small> ( [] () / * : )</small> 
                                                </div>
                                            </div>

                                        </div>

                                        <div className='col-md-12 mt-3'>
                                            <button className={styles.copyButton} onClick={generatePassword}>
                                                Gerar Senha Segura!
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}