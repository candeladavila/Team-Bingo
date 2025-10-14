import { useState } from 'react';
import './AccessibilityConfiguration.css';

function AccessibilityConfiguration() {
  const [fontSize, setFontSize] = useState('medium');
  const [contrast, setContrast] = useState('normal');
  const [motionReduced, setMotionReduced] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);

  const handleApplySettings = () => {
    // Aplicar configuraciones al documento
    const root = document.documentElement;
    
    // Tamaño de fuente
    switch(fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'medium':
        root.style.fontSize = '16px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      case 'extra-large':
        root.style.fontSize = '22px';
        break;
      default:
        root.style.fontSize = '16px';
    }

    // Contraste
    if (contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Movimiento reducido
    if (motionReduced) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    // Navegación por teclado
    if (keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }

    alert('Configuraciones aplicadas correctamente');
  };

  const handleReset = () => {
    setFontSize('medium');
    setContrast('normal');
    setMotionReduced(false);
    setScreenReader(false);
    setKeyboardNavigation(false);
    
    // Resetear estilos
    const root = document.documentElement;
    root.style.fontSize = '16px';
    document.body.classList.remove('high-contrast', 'reduced-motion', 'keyboard-navigation');
    
    alert('Configuraciones restablecidas a valores por defecto');
  };

  return (
    <div className="page-container">
      <div className="accessibility-header">
        <h1>Configuración de Accesibilidad</h1>
        <p className="accessibility-subtitle">
          Personaliza la experiencia de navegación según tus necesidades
        </p>
      </div>

      <div className="accessibility-content">
        <div className="three-column-layout">
          {/* Columna 1: Configuraciones Visuales */}
          <div className="config-column">
            <div className="config-section">
              <h2>Configuraciones Visuales</h2>
              
              <div className="config-group">
                <label htmlFor="font-size" className="config-label">
                  Tamaño de Texto
                </label>
                <select 
                  id="font-size"
                  value={fontSize} 
                  onChange={(e) => setFontSize(e.target.value)}
                  className="config-select"
                >
                  <option value="small">Pequeño</option>
                  <option value="medium">Mediano</option>
                  <option value="large">Grande</option>
                  <option value="extra-large">Extra Grande</option>
                </select>
              </div>

              <div className="config-group">
                <label htmlFor="contrast" className="config-label">
                  Contraste
                </label>
                <select 
                  id="contrast"
                  value={contrast} 
                  onChange={(e) => setContrast(e.target.value)}
                  className="config-select"
                >
                  <option value="normal">Normal</option>
                  <option value="high">Alto Contraste</option>
                </select>
              </div>
            </div>
          </div>

          {/* Columna 2: Configuraciones de Interacción */}
          <div className="config-column">
            <div className="config-section">
              <h2>Configuraciones de Interacción</h2>
              
              <div className="config-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={motionReduced}
                    onChange={(e) => setMotionReduced(e.target.checked)}
                    className="config-checkbox"
                  />
                  <span className="checkmark"></span>
                  Reducir animaciones
                </label>
                <p className="config-description">
                  Minimiza las animaciones para usuarios sensibles al movimiento
                </p>
              </div>

              <div className="config-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={keyboardNavigation}
                    onChange={(e) => setKeyboardNavigation(e.target.checked)}
                    className="config-checkbox"
                  />
                  <span className="checkmark"></span>
                  Navegación por teclado
                </label>
                <p className="config-description">
                  Resalta elementos enfocados para navegación con teclado
                </p>
              </div>

              <div className="config-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={screenReader}
                    onChange={(e) => setScreenReader(e.target.checked)}
                    className="config-checkbox"
                  />
                  <span className="checkmark"></span>
                  Lector de pantalla
                </label>
                <p className="config-description">
                  Mejora la compatibilidad con tecnologías de asistencia
                </p>
              </div>
            </div>
          </div>

          {/* Columna 3: Atajos e Información */}
          <div className="config-column">
            <div className="config-section">
              <h2>Atajos de Teclado</h2>
              <div className="shortcuts-list">
                <div className="shortcut-item">
                  <span className="shortcut-key">Tab</span>
                  <span className="shortcut-description">Navegar entre elementos</span>
                </div>
                <div className="shortcut-item">
                  <span className="shortcut-key">Enter</span>
                  <span className="shortcut-description">Activar elementos</span>
                </div>
                <div className="shortcut-item">
                  <span className="shortcut-key">Esc</span>
                  <span className="shortcut-description">Cerrar menús</span>
                </div>
                <div className="shortcut-item">
                  <span className="shortcut-key">Ctrl +/-</span>
                  <span className="shortcut-description">Zoom</span>
                </div>
              </div>
            </div>

            <div className="accessibility-info">
              <h3>¿Necesitas ayuda?</h3>
              <p>
                Contacta con nosotros en <a href="mailto:accessibility@teambingo.com">accessibility@teambingo.com</a>
              </p>
              <p>
                Nos comprometemos a hacer Team Bingo accesible para todos.
              </p>
            </div>
          </div>
        </div>

        <div className="config-actions">
          <button 
            onClick={handleApplySettings}
            className="apply-btn"
          >
            Aplicar Configuración
          </button>
          <button 
            onClick={handleReset}
            className="reset-btn"
          >
            Restablecer por Defecto
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityConfiguration;