
import React, {useState, useEffect} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
// CSS
import styles from './Login.module.css'

const Login = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")


  const {login, error: authError, loading} = useAuthentication()



  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    const user = {

      email,
      password
    }


    const res = await login(user)

    console.log(res)

  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])
  
  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para ultilizar o sistema !</p>
      <form onSubmit={handleSubmit}>       
        {/* EMAIL */}
        <label>
          <span>E-mail:</span>
          <input type="email"
            name='email'
            required
            placeholder='Email do Usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        {/* SENHA */}
        <label>
          <span>Senha:</span>
          <input type="password"
            name='password'
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        {/* CONFIRMAR SENHA */}
        
        {/* BOTAO */}
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login