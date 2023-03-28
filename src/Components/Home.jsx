import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import img from "../img/image-hero-desktop.png"
import svg1 from "../img/client-databiz.svg"
import svg2 from "../img/client-audiophile.svg"
import svg3 from "../img/client-meet.svg"
import svg4 from "../img/client-maker.svg"

function Home() {
    return (
        <>
            <Container>
                <Row className='home'>
                    <Col className="home-left ">
                        <div>
                            <h1>Make <br /> remote work</h1>
                            <p>Get your team in sync, no matter your location. Streamline processes,
                                create team rituals, and watch productivity soar.</p>
                            <button className="btn">Learn more</button><br />
                            <img src={svg1} alt="" className='mx-2' />
                            <img src={svg2} alt="" className='mx-2' />
                            <img src={svg3} alt="" className='mx-2' />
                            <img src={svg4} alt="" className='mx-2' />
                        </div>
                    </Col>
                    <Col className="home-right" ><img src={img} alt="img" /></Col></Row>
            </Container>
        </>
    )
}

export default Home
