import './Nav.css'

function Nav() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="nav">
      <ul className="nav-list">
        
        <li onClick={() => scrollToSection('caraousel')} className="nav-link">Gallery</li>

        <li onClick={() => scrollToSection('globe')} className="nav-link">Footprints</li>

        <li onClick={() => scrollToSection('species')} className="nav-link">Species</li>

        <li onClick={() => scrollToSection('hero')} className="nav-link">Home</li>

        <li onClick={() => scrollToSection('horizontal')} className="nav-link">Skulls</li>

        <li onClick={() => scrollToSection('breakthrough')} className="nav-link">Breakthroughs</li>

        <li onClick={() => scrollToSection('movie')} className="nav-link">Movies</li>

      </ul>
    </nav>
  )
}

export default Nav