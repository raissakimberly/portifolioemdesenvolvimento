import { useState, useEffect } from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
// import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt="logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('Projects')} >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/raissa-kimberly-12b103246/"><img src={navIcon1 } alt="linkedIn" /></a>
                            <a href="https://github.com/raissakimberly"><img src={navIcon2} alt="GitHub" /></a>
                            <a href="https://instagram.com/codebykimbie"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <button className="vvd">
      <a href="mailto:raissakimberlyhp@gmail.com?subject=Portifólio de desenvolvedora&body=Ol%C3%A1.%20Estou%20te%20contatando%20porque%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20voc%C3%AA!%20%0A%0AQuando%20podemos%20marcar%20uma%20reuni%C3%A3o%3F%0A%0AAtenciosamente%2C%0A" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span>Vamos nos Conectar!</span>
      </a>
    </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

