import './AboutUs.css';

function AboutUs() {
  return (
    <div className="page-container">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p className="about-subtitle">
          Conoce a nuestro equipo y nuestra misión.
        </p>
      </div>

      <div className="about-content">
        <div className="mission-section">
          <h2>Nuestra Misión</h2>
          <p>
            Insetar texto aquí
          </p>
        </div>

        <div className="values-section">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Insetar texto</h3>
              <p>Insetar texto</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Insetar texto</h3>
              <p>Insetar texto</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Insetar texto</h3>
              <p>Insetar texto</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Insetar texto</h3>
              <p>Insetar texto</p>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h2>Insetar texto</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Insetar texto</h3>
              <p className="member-role">Insetar texto</p>
              <p>Insetar texto</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Insetar texto</h3>
              <p className="member-role">CTO</p>
              <p>Insetar texto</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>Insetar texto</h3>
              <p className="member-role">Insetar texto</p>
              <p>Insetar texto</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍📊</div>
              <h3>Insetar texto</h3>
              <p className="member-role">Insetar texto</p>
              <p>Insetar texto</p>
            </div>
          </div>
        </div>

        <div className="story-section">
          <h2>Nuestra Historia</h2>
          <div className="story-content">
            <p>
              Insetar texto
            </p>
            <p>
              Insetar texto
            </p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Insetar texto</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>Insetar texto</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>Insetar texto</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Insetar texto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;