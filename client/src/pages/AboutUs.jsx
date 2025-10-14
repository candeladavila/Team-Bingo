import './AboutUs.css';

function AboutUs() {
  return (
    <div className="page-container">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p className="about-subtitle">
          Conoce a nuestro equipo y nuestra historia.
        </p>
      </div>

      <div className="about-content">
        {/* SECCIÓN DEL EQUIPO - Aparece primero */}
        <div className="team-section">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <img src="/team/member1.jpg" alt="Miembro 1" />
              </div>
              <h3>Nombre Completo 1</h3>
              <a href="https://github.com/usuario1" target="_blank" rel="noopener noreferrer" className="github-link">
                <span className="github-icon">🐙</span>
                @usuario1
              </a>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/team/member2.jpg" alt="Miembro 2" />
              </div>
              <h3>Nombre Completo 2</h3>
              <a href="https://github.com/usuario2" target="_blank" rel="noopener noreferrer" className="github-link">
                <span className="github-icon">🐙</span>
                @usuario2
              </a>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/team/member3.jpg" alt="Miembro 3" />
              </div>
              <h3>Nombre Completo 3</h3>
              <a href="https://github.com/usuario3" target="_blank" rel="noopener noreferrer" className="github-link">
                <span className="github-icon">🐙</span>
                @usuario3
              </a>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <img src="/team/member4.jpg" alt="Miembro 4" />
              </div>
              <h3>Nombre Completo 4</h3>
              <a href="https://github.com/usuario4" target="_blank" rel="noopener noreferrer" className="github-link">
                <span className="github-icon">�</span>
                @usuario4
              </a>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE VALORES */}
        <div className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">�</div>
              <h3>Innovación</h3>
              <p>Creamos soluciones innovadoras que marcan la diferencia en el mundo de la tecnología accesible.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Colaboración</h3>
              <p>Trabajamos en equipo para crear experiencias que conecten y empoderen a todas las personas.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">�</div>
              <h3>Accesibilidad</h3>
              <p>Nos comprometemos a crear tecnología que sea inclusiva y accesible para todos.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">�</div>
              <h3>Creatividad</h3>
              <p>Pensamos fuera de la caja para encontrar soluciones únicas y efectivas.</p>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE HISTORIA */}
        <div className="story-section">
          <h2>Nuestra Historia</h2>
          <div className="story-content">
            <p>
              Todo comenzó cuando cuatro estudiantes apasionados por la tecnología y la inclusión se conocieron durante un hackathon. 
              Compartíamos una visión común: crear herramientas que hicieran la tecnología más accesible para todos.
            </p>
            <p>
              Lo que empezó como un proyecto universitario se convirtió en una misión. Decidimos formar Team Bingo 
              con el objetivo de desarrollar soluciones innovadoras que rompan las barreras digitales y hagan que 
              la tecnología sea verdaderamente para todos.
            </p>
            <p>
              Hoy, continuamos trabajando juntos, combinando nuestras diferentes habilidades y perspectivas para 
              crear productos que no solo funcionen bien, sino que también sean inclusivos y accesibles desde el primer día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;