import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Serviços</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#"
                      >
                        Consultas
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Durante a entrevista inicial, todas as queixas, dúvidas e sintomas do(a) paciente serão expostas pelos responsáveis para uma profissional neuropsicóloga. Exames e relatórios relacionados às dificuldades apresentadas também deverão ser apresentados neste momento. Caso o(a) paciente seja adulto, o conteúdo será exposto pelo(a) mesmo(a) e, não será necessária a presença dos responsáveis.<br />
                        As consultas são previamente agendadas de 2ª à 6ª feira, no horário comercial, e terão uma hora de duração. Quando o(a) paciente possuir menos de 18 anos de idade, esta consulta deverá ser agendada pelos responsáveis, os quais deverão também estar presentes na entrevista inicial com a neuropsicóloga.<br />
                        Neste momento será possível descartar causas que não se enquadrem no diagnóstico de Distúrbio de Aprendizagem, Distúrbio do Desenvolvimento Neuropsicomotor, então, encaminhar o(a) paciente ao profissional adequado. Caso seja verificada a necessidade da avaliação multi e interdisciplinar, a própria profissional irá conceder as informações necessárias sobre este processo.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#"
                      >
                        Avaliações
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>
                        A Equipe Multidisciplinar é composta por Fonoaudiólogas, Psicopedagogas e Neuropsicólogas para atender crianças, adolescentes e adultos que apresentam  Distúrbios de Aprendizagem e/ou Distúrbios do Desenvolvimento Neuropsicomotor.<br />
                        Em geral, a Equipe Multidisciplinar é solicitada quando há a necessidade de um laudo para auxiliar educadores, terapeutas e pais de pessoas com Dislexia e/outros Distúrbios de Aprendizagem.<br />
                        O trabalho da Equipe Multidisciplinar se inicia quando há o acolhimento dos pacientes adultos ou dos pais dos pacientes menores de 18 anos numa Primeira Entrevista, que é a ocasião em que a Psicóloga/Neuropsicóloga vai ouvir as queixas, os problemas do paciente, o seu histórico de vida, as situações em que se apresentam e, assim, vai verificar se o caso apresentado é passível de avaliação.<br />
                        Quando a avaliação se aplica ao caso, são marcadas consultas com a Psicóloga/Neuropsicóloga e com a Fonoaudióloga/Psicopedagoga. Nessas consultas, são aplicados testes específicos a cada área e idade.<br />
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#"
                      >
                        Intervenções
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Independentemente de quais forem as diversidades ou dificuldades nos processos de desenvolvimento e aprendizagem, a intervenção terapêutica sempre se faz necessária. Intervenções pontuais voltadas às particularidades de cada caso objetivam auxiliar na superação e adaptação de limitações e dificuldades, visando impulsionar o pleno desenvolvimento. Para crianças, adolescentes e adultos com desempenho atípico ou atrasado, a intervenção correta também ajudará no fortalecimento da autoestima e autovalorização.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#"
                      >
                        Reforço Escolar
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>
                        PORTUGUÊS
                        ​Idade: Todas as idades.
                        Com foco nos conteúdos gramaticais, leitura e escrita, o curso de português tem como objetivo auxiliar o aluno na absorção do conteúdo e aplicação correta da língua portuguesa no cotidiano do aluno.
                        REFORÇO ESCOLAR
                        ​Idade: Todas as idades.
                        O reforço escolar tem como objetivo auxiliar o alunos nas matérias da escola onde exista dificuldade de compreensão e absorção do conteúdo. Ao mesmo tempo que trabalha o conteúdo importante para o desempenho nas provas, também auxilia no desenvolvimento da habilidade de aprender a aprender.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
