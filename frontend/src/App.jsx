import React, { useState } from 'react'

export default function App(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(data.success){
        setStatus('success')
        setForm({name:'', email:'', message:''})
      } else {
        setStatus('error')
      }
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="container">
      <header>
        <h1>English Academy</h1>
        <p>Aprende inglés con nuestros cursos online y presenciales.</p>
      </header>

      <main>
        <section className="hero">
          <h2>Bienvenido</h2>
          <p>Regístrate para recibir más información.</p>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Nombre
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </label>
            <label>
              Mensaje
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
            <div className="actions">
              <button type="submit">Enviar</button>
              <span className="status">{status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado ✅' : status === 'error' ? 'Error al enviar' : ''}</span>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} English Academy</small>
      </footer>
    </div>
  )
}
