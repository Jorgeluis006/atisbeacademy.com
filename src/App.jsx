import React from 'react'
import CoursesCarousel from './components/CoursesCarousel'
import mascot from './assets/mascot.svg'

const palette = {
  purple: '#791EBA',
  lightPurple: '#C89AB2',
  ivory: '#FFFEF1',
  yellowBright: '#FFF810',
  orange: '#FDBB0F'
}

const courses = [
  { title: 'Inglés', desc: 'Cursos generales y especializados para todos los niveles.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Francés', desc: 'Clases vivenciales para hablar con confianza.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Español para extranjeros', desc: 'Aprende español con enfoque comunicativo.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Club Conversacional', desc: 'Práctica guiada en grupos reducidos.', img: '/src/assets/course-placeholder.svg' },
  { title: 'ConversArte', desc: 'Talleres que mezclan arte y lengua.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Tour Cafetero', desc: 'Experiencia lingüística y cultural.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Cursos para niños', desc: 'Metodologías lúdicas para los más pequeños.', img: '/src/assets/course-placeholder.svg' },
  { title: 'Clases personalizadas', desc: 'Programas 1:1 adaptados a tus objetivos.', img: '/src/assets/course-placeholder.svg' }
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <img src={mascot} alt="Mascota Atisbe" className="mascot" />
          </div>
          <div className="hero-right">
            <h1>Atisbe</h1>
            <p className="tag">Academia de idiomas — Manual de Marca</p>
            <p className="slogan">El mundo a través de los idiomas.</p>
            <a className="cta" href="mailto:info@atisbe.com?subject=Quiero%20saber%20mi%20nivel">¿QUIERES SABER TU NIVEL TOTALMENTE GRATIS?</a>
          </div>
        </div>
      </header>

      <main className="container content">
        <section id="introduccion">
          <h2>Introducción</h2>
          <p>
            Atisbe academia de idiomas nace como una propuesta educativa moderna, cercana y
            emocional, enfocada en romper las barreras del idioma a través de una enseñanza
            práctica, divertida y personalizada. Fundada por tres socias apasionadas por la
            educación y la multiculturalidad, Atisbe ha sido creada con el propósito de
            acompañar a niños, jóvenes y adultos en su camino hacia el dominio de nuevas
            lenguas, no solo como herramientas de comunicación, sino como una puerta hacia
            nuevas oportunidades personales, académicas y profesionales.
          </p>
          <p>
            Este manual de marca tiene como objetivo unificar la identidad visual y verbal de
            Atisbe, garantizando coherencia en todos los canales de comunicación y
            fortaleciendo el reconocimiento de la marca. Aquí se establecen las directrices
            esenciales para el uso correcto del logotipo, tipografía, colores, tono de voz y
            otros elementos visuales que componen el universo gráfico de la academia.
          </p>
        </section>

        <section id="quienes-somos" className="who">
          <h2>Quiénes somos</h2>
          <h3>Breve historia</h3>
          <p>
            Presentación de la academia: Atisbe surge de la pasión por la educación y la
            multiculturalidad. Nuestra trayectoria se basa en metodologías activas y en la
            atención personalizada, acompañando a estudiantes de todas las edades en su
            proceso de aprendizaje.
          </p>

          <h3>Origen del nombre</h3>
          <p>
            El nombre Atisbe nace del verbo atisbar, que significa observar con atención y es una palabra común en Boyacá, región de origen de la socia mayoritaria. Este origen conecta profundamente con la misión de la academia: observar, guiar y acompañar de forma cercana el proceso de aprendizaje de cada estudiante.
          </p>

          <h3>Método ATIKA</h3>
          <p>
            Método ATIKA: enfoque metodológico basado en el aprendizaje progresivo, activo y personalizado. Combinamos la práctica constante con actividades motivadoras para asegurar avances sostenibles.
          </p>
        </section>

        <section id="cursos" className="courses">
          <div className="courses-header">
            <h2>Nuestros cursos <small>(Atendemos 24/7)</small></h2>
            <div className="limit-note">Grupos limitados por curso</div>
          </div>
          <CoursesCarousel courses={courses} />
        </section>

        <section>
          <h2>2. Marca</h2>
          <h3>Filosofía</h3>
          <ul>
            <li><strong>Cercana:</strong> Nos tomamos el tiempo de escuchar, entender y acompañar a cada estudiante en su proceso, creando vínculos genuinos basados en empatía.</li>
            <li><strong>Alegre:</strong> El aprendizaje con Atisbe es dinámico, positivo y divertido. Cada clase busca emocionar e inspirar, no solo enseñar.</li>
            <li><strong>Disciplinada:</strong> Creemos en el poder de la constancia, por eso aplicamos el método Atika para lograr avances sostenibles, paso a paso.</li>
            <li><strong>Motivadora:</strong> Incorporamos elementos que inspiran: desde palabras del día hasta actividades que conectan con el propósito personal de aprender un nuevo idioma.</li>
            <li><strong>Flexible:</strong> Adaptamos nuestros horarios, ritmos y metodologías a las necesidades reales de nuestros estudiantes, porque sabemos que cada proceso es único.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Atisbe — Academia de idiomas • contacto: <a href="mailto:info@atisbe.com">info@atisbe.com</a></p>
        </div>
      </footer>
    </div>
  )
}
