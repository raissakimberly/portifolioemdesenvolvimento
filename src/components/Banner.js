import { useState, useEffect } from "react";
import { Container, Row, Col, button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/heardernew.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer.", "UI/UX Designer.", "Front-end Developer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 800;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText;

        if (isDeleting) {
            updateText = fullText.substring(0, text.length - 1);
            setDelta(50); 
        } else {
            updateText = fullText.substring(0, text.length + 1);
            setDelta(150); 
        }

        setText(updateText);

        if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(700); 
        }
    }


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bem-vindos ao meu Portifólio! ***Portifólio em desenvolvimento!***</span>
                        <h1> {`Olá eu sou a Raissa Kimberly! `}<span className="wrap">{text}</span></h1>
                        <p>
                            Meu nome é Raissa Kimberly, tenho 22 anos e sou de Sorocaba, São Paulo.
                             Atualmente, estou cursando o primeiro semestre de Análise de Desenvolvimento 
                             de Sistemas na Fatec-Sorocaba. Além disso, participei de um intenso Bootcamp
                              de programação na SoulCode, onde me aprofundei em React e Node.js, estudando
                               desenvolvimento Web (HTML, CSS, JS), Bootstrap, Firebase, MongoDB, MySQL,
                                Postman e diversos outros assuntos durante as 640 horas em 4 meses. 
                                Sou fluente em Inglês e estou aberta a trabalhar para empresas internacionais.
                                Estou muito entusiasmada para iniciar minha carreira como desenvolvedora, tenho grande interesse em Front-end e 
                                 UX/UI Design.
                        </p>
                        <button onClick={() => console.log('connect')}>Vamos nos conectar!<ArrowRightCircle size={25} /></button>
                    </Col>
                    {<Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>}
                </Row>
            </Container>
        </section>
    )
}