import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'


export default function Login() {
  return (
    <div className='login--page'>
      
      <div className='login--container'>
          <h2>Entrar</h2>
          <input type="text" placeholder='E-mail'></input>
          <input className='login--password' type="password" placeholder='Senha'></input>
          <button className='login--enter'>Entrar</button>
            <h3>Ou</h3>
          <Link to="/cadastro"><button className='login--new' >Criar nova conta</button></Link>
      </div>

    </div>

  )
}

