import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  // useHistory serve pra fazer a navegacao por meio de uma funcao js quando nao podemos usar Link
  const history = useHistory()

  async function handleRegister(e) {
    // para prevenir o comportamento padrao do formulario que eh carregar de novo a pagina quando o formulario eh enviado
    e.preventDefault()
    const data = { name, email, whatsapp, city, uf }

    try {
      // como verificado no Insomnia, tenho uma rota ongs do tipo post que recebe as infomarcoes iguais ao data
      // por padrao o axios jah envia no formato json, entao nao preciso acrescentar mais nada
      // uso await pois quero esperar a funcao rodar primeiro pra depois pegar a resposta
      // se uso await aqui, sou obrigada a usa o async antes da funcao
      const response = await api.post('ongs', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (err) {
      alert('Erro no cadastro. Tente novamente!')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be The Hero" />
          <h1>Cadastro</h1>
          <p> Faça seu cadastro, entre na plateforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          <div className="input-group">
            <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
            <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
