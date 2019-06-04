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
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NucleoIcons;

