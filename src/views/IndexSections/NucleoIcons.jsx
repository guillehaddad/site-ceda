import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <div className="section section-nucleo-icons">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <h2 className="title">Quem Somos</h2>
              <h4 className="description">
                Centro de apoio, proposição de solução e orientação às pessoas com dificuldades / transtornos de aprendizagem e distúrbios do desenvolvimento. Atendimento infantil, adolescente, adulto e familiar. <br />
                O Centro Especializado em Distúrbios de Aprendizagem – CEDA, parceira comercial da Associação Brasileira de Dislexia – ABD foi criado com objetivo de poder desenvolver, além das avaliações multi e interdisciplinares na população com queixas de dificuldades de aprendizagens e também do neurodesenvolvimento, as intervenções mais adequadas a cada tipo de dificuldade apresentada. <br />
                Para isto apresenta o “SELO DE QUALIDADE ABD”, sinônimo de pioneirismo e qualidade com seus mais de 30 anos de experiência sob a responsabilidade técnica da equipe multi e interdisciplinar a cargo da Fonoaudióloga e Psicopedagoga Maria Ângela Nogueira Nico. <br />
                A equipe multi e interdisciplinar composta por grupos clínicos especializados em Transtorno do Espectro Autista, Transtornos de Aprendizagem (incluindo a dislexia), Síndromes Genéticas, Paralisia Cerebral e Dificuldades de Aprendizagem está apta a atender de forma conjunta ou individual a todos que buscam respostas ou orientação para suas dificuldades e sintomas.
              </h4>
              <div className="btn-wrapper">
                <Button
                  className="btn-round"
                  color="primary"
                  href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Demo Icons
                </Button>
                <Button
                  className="btn-simple btn-round"
                  color="primary"
                  href="https://nucleoapp.com/?ref=1712"
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  View All Icons
                </Button>
              </div>
            </Col>
          </Row>
          <div className="blur-hover">
            <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
                <i className="icon tim-icons icon-coins" />
                {/* Right 1 */}
                <i className="icon icon-sm tim-icons icon-spaceship" />
                <i className="icon icon-sm tim-icons icon-money-coins" />
                <i className="icon icon-sm tim-icons icon-link-72" />
                {/* Right 2 */}
                <i className="icon tim-icons icon-send" />
                <i className="icon tim-icons icon-mobile" />
                <i className="icon tim-icons icon-wifi" />
                {/* Left 1 */}
                <i className="icon icon-sm tim-icons icon-key-25" />
                <i className="icon icon-sm tim-icons icon-atom" />
                <i className="icon icon-sm tim-icons icon-satisfied" />
                {/* Left 2 */}
                <i className="icon tim-icons icon-gift-2" />
                <i className="icon tim-icons icon-tap-02" />
                <i className="icon tim-icons icon-wallet-43" />
              </div>
              <span className="blur-hidden h5 text-primary">
                Eplore all the 21.000+ Nucleo Icons
              </span>
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;
