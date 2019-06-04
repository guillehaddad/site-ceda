import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";

class JavaScript extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoModal: false,
      miniModal: false,
      formModal: false
    };
  }
  toggleModal = modalState => {
    this.setState({
      [modalState]: !this.state[modalState]
    });
  };
  render() {
    return (
      <div className="section section-javascript" id="javascriptComponents">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path5.png")}
        />
        <Container>
          <h3 className="title mb-5">Serviços</h3>
          <Row id="modals">
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal")}
              >
                Consultas
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal2")}
              >
                Avaliações
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal3")}
              >
                Intervenções
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal4")}
              >
                Reforço Escolar
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal5")}
              >
                Transtornos do Espectro Autista (TEA)
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="primary"
                onClick={() => this.toggleModal("demoModal6")}
              >
                Triagem
              </Button>
            </Col>
            
            {/* Start Demo Modal */}
            <Modal
              isOpen={this.state.demoModal}
              toggle={() => this.toggleModal("demoModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Consultas</h4>
              </div>
              <div className="modal-body">
                <p>
                  Durante a entrevista inicial, todas as queixas, dúvidas e sintomas do(a) paciente serão expostas pelos responsáveis para uma profissional neuropsicóloga. Exames e relatórios relacionados às dificuldades apresentadas também deverão ser apresentados neste momento. Caso o(a) paciente seja adulto, o conteúdo será exposto pelo(a) mesmo(a) e, não será necessária a presença dos responsáveis.<br />
                  As consultas são previamente agendadas de 2ª à 6ª feira, no horário comercial, e terão uma hora de duração. Quando o(a) paciente possuir menos de 18 anos de idade, esta consulta deverá ser agendada pelos responsáveis, os quais deverão também estar presentes na entrevista inicial com a neuropsicóloga.<br />
                  Neste momento será possível descartar causas que não se enquadrem no diagnóstico de Distúrbio de Aprendizagem, Distúrbio do Desenvolvimento Neuropsicomotor, então, encaminhar o(a) paciente ao profissional adequado. Caso seja verificada a necessidade da avaliação multi e interdisciplinar, a própria profissional irá conceder as informações necessárias sobre este processo.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal */}

            {/* Start Demo Modal 2*/}
            <Modal
              isOpen={this.state.demoModal2}
              toggle={() => this.toggleModal("demoModal2")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal2")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Avaliação Multi-disciplinar</h4>
              </div>
              <div className="modal-body">
                <p>
                  A Equipe Multidisciplinar é composta por Fonoaudiólogas, Psicopedagogas e Neuropsicólogas para atender crianças, adolescentes e adultos que apresentam  Distúrbios de Aprendizagem e/ou Distúrbios do Desenvolvimento Neuropsicomotor.
                  Em geral, a Equipe Multidisciplinar é solicitada quando há a necessidade de um laudo para auxiliar educadores, terapeutas e pais de pessoas com Dislexia e/outros Distúrbios de Aprendizagem. 
                  O trabalho da Equipe Multidisciplinar se inicia quando há o acolhimento dos pacientes adultos ou dos pais dos pacientes menores de 18 anos numa Primeira Entrevista, que é a ocasião em que a Psicóloga/Neuropsicóloga vai ouvir as queixas, os problemas do paciente, o seu histórico de vida, as situações em que se apresentam e, assim, vai verificar se o caso apresentado é passível de avaliação.
                  Quando a avaliação se aplica ao caso, são marcadas consultas com a Psicóloga/Neuropsicóloga e com a Fonoaudióloga/Psicopedagoga. Nessas consultas, são aplicados testes específicos a cada área e idade.
                  Após a fase de coleta de dados, inicia-se um período de estudos, quando cada profissional avalia os dados obtidos em sua área de atuação.
                  Quando os exames complementares estiverem à disposição da equipe, há uma reunião das especialistas onde serão expostos para cada parte os resultados obtidos durante a Avaliação Multidisciplinar.
                  É neste encontro que se estabelecem o resultado e os encaminhamentos, isto é, estabelece-se qual o distúrbio que o paciente apresenta e quais as intervenções necessárias para o mesmo.
                  A Entrevista Devolutiva, quando o paciente adulto ou os pais de pacientes menores de 18 anos são convocados pela Neuropsicóloga para serem informados sobre os resultados do processo será agendada uma orientação junto ao responsável pelos planos de intervenções oferecidos pela clínica.
                  AVALIAÇÃO COMPLETA
                  De acordo com a hipótese diagnóstica realizada após a entrevista inicial, será apresentado um plano de atendimento com a psicopedagoga, neuropsicóloga e fonoaudióloga.
                  AVALIAÇÃO COMPLEMENTAR
                  Indicação para atendimento em uma ou mais especialidades de acordo com orientação do profissional solicitante.
                  Investigações mais aprofundadas podem ser necessárias para o atendimento de diagnósticos diferenciais e de propostas terapêuticas. Para tanto, à luz dos prévios resultados, avaliações adicionais para atendimento em uma ou mais especialidades poderão ser indicadas.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal2")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal 2*/}

            {/* Start Demo Modal 3*/}
            <Modal
              isOpen={this.state.demoModal3}
              toggle={() => this.toggleModal("demoModal3")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal3")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Intervenções</h4>
              </div>
              <div className="modal-body">
                <p>
                  Independentemente de quais forem as diversidades ou dificuldades nos processos de desenvolvimento e aprendizagem, a intervenção terapêutica sempre se faz necessária. Intervenções pontuais voltadas às particularidades de cada caso objetivam auxiliar na superação e adaptação de limitações e dificuldades, visando impulsionar o pleno desenvolvimento. Para crianças, adolescentes e adultos com desempenho atípico ou atrasado, a intervenção correta também ajudará no fortalecimento da autoestima e autovalorização.
                  PSICOPEDAGOGIA
                  O papel do Psicopedagogo é investigar os problemas existentes no processo do aprendizado. Seu trabalho visa atender, tratar e orientar o aluno e sua família, assim como a Escola e seus Professores, esclarecendo sobre os obstáculos que interferem diariamente na vida do educando.
                  PSICOLOGIA
                  Dentre seus focos de trabalho destacam-se a psicoterapia infantil e com adolescentes, também de adultos, acompanhamento familiar, tratamento especializado e efetivo em TEA – Transtorno do Espectro Autista, sob perspectivas neurodesenvolvimentais, atuação com a criança, a familia e a escola.
                  NEUROPSICOLOGIA
                  A Neuropsicologia tem um papel fundamental na compreensão do funcionamento cerebral e das suas respectivas alterações. Estuda a relação entre a atividade nervosa superior e o comportamento, a cognição, as emoções, a motivação e a vida em relação. A intervenção neuropsicológica consiste em avaliar e reabilitar/estimular as funções cognitivas (memória, atenção, linguagem oral e escrita, cálculo, capacidades visuo-espaciais, planeamento e acção, destreza manual, raciocínio, etc.).
                  FONOAUDIOLOGIA
                  O fonoaudiólogo intervirá nas queixas de atraso no desenvolvimento da fala (linguagem oral). Também é necessário acompanhar as habilidades de leitura, escrita e de adaptação escolar. Quanto mais precoce, intensiva e especializada for a intervenção, melhores serão os resultados.
                  O Treinamento Auditivo em Cabine é um acompanhamento fonoaudiológico para reabilitar pessoas com alteração no exame de Processamento Auditivo Central. O objetivo principal é melhorar a atenção e memória auditiva, discriminação e compreensão auditiva.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal3")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal 3*/}

            {/* Start Demo Modal 4*/}
            <Modal
              isOpen={this.state.demoModal4}
              toggle={() => this.toggleModal("demoModal4")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal4")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Reforço Escolar</h4>
              </div>
              <div className="modal-body">
                <p>
                  PORTUGUÊS
                  ​Idade: Todas as idades.
                  Com foco nos conteúdos gramaticais, leitura e escrita, o curso de português tem como objetivo auxiliar o aluno na absorção do conteúdo e aplicação correta da língua portuguesa no cotidiano do aluno.
                  REFORÇO ESCOLAR
                  ​Idade: Todas as idades.
                  O reforço escolar tem como objetivo auxiliar o alunos nas matérias da escola onde exista dificuldade de compreensão e absorção do conteúdo. Ao mesmo tempo que trabalha o conteúdo importante para o desempenho nas provas, também auxilia no desenvolvimento da habilidade de aprender a aprender.                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal4")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal 4*/}

            {/* Start Demo Modal 5*/}
            <Modal
              isOpen={this.state.demoModal5}
              toggle={() => this.toggleModal("demoModal5")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal5")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Transtorno do Espectro Autista</h4>
              </div>
              <div className="modal-body">
                <p>
                  O autismo acomete pessoas de todas as classes sociais e etnias, ocorre mais em meninos do que em meninas. Os sintomas podem aparecer nos primeiros meses de vida e as pesquisas mostram que uma em cada cem crianças é portadora do espectro. Na nova nomenclatura, o DSM–V (Manual de Diagnóstico e Estatística da Sociedade Norte-Americana de Psiquiatria)usou o termo Transtorno do Espectro Autista (TEA), para abranger a dimensionalidade das características cognitivas e psicológicas e diminuir a ambiguidade que se tinha entre os quadros clínicos.  
                  O Transtorno do Espectro Autista (TEA) é um grupo de desordens de origem neurobiológica marcadas por perturbações do desenvolvimento neurológico com maior comprometimento nas dificuldades de comunicação como dificuldade na fala e em expressar ideias e sentimentos, dificuldade de socialização e um padrão de comportamento restrito e repetitivo. 
                  De acordo com o quadro clínico, o TEA pode ser classificado em:
                  ·  Autismo clássico – grau de comprometimento pode variar de muito. 
                  ·  Autismo de alto desempenho (síndrome de Asperger, na antiga nomenclatura) – os portadores apresentam as mesmas dificuldades dos outros autistas, mas numa medida bem reduzida. 
                  ·  Distúrbio global do desenvolvimento sem outra especificação (DGD-SOE) – os portadores apresentam características dentro do espectro do autismo (dificuldade de comunicação e de interação social), mas os sintomas não são suficientes para preencher totalmente as categorias específicas do transtorno, o que torna o diagnóstico muito mais difícil.
                  O diagnóstico é confirmado quando a criança apresenta características das três áreas que são afetadas no TEA: interação social, alteração comportamental e falhas na comunicação.  O TEA manifesta-se em diferentes graus e intensidade, por isso, a criança pode ser diagnosticada com autismo leve, moderado ou grave conforme o grau de comprometimento que a criança tenha.
                  O TEA possui uma variedade grande de sintomas, representa uma das condições mais heterogêneas da psiquiatria, envolvendo tanto formas mais leves até formas mais graves, o que faz com que o diagnóstico no TEA seja um grande desafio. É fundamental a compreensão dessa variedade de sintomas de cada caso para o bom planejamento de procedimentos clínicos. Por isso é importante procurar uma equipe de profissionais especializados, que compreendam esta variedade de sintomas para a realização do diagnóstico quando há suspeita de TEA. 
                  O diagnóstico é essencialmente clínico. Tem como base os critérios estabelecidos pelo DSM–V (Manual de Diagnóstico e Estatística da Sociedade Norte-Americana de Psiquiatria) e pelo CID-10 (Classificação Internacional de Doenças da OMS). 
                  O diagnóstico deve ser feito o mais precocemente possível para o início de intervenções que ajudarão no desenvolvimento e adaptabilidade da criança em seu ambiente. Ainda que seja apenas suspeita, o paciente se beneficia da intervenção precoce, pois auxilia nas dificuldades reais que ele tenha. Sendo o TEA um transtorno do neurodesenvolvimento, seus sintomas podem ser detectados desde a primeira infância. A identificação precoce minimiza os impactos na vida da criança autista, já que é possível começar uma intervenção antes que os sintomas se agravem e diminui a angustia da família com as dificuldades em lidar com os sintomas do TEA.
                  Crianças com autismo precisam de tratamento e suas famílias precisam de apoio, informação e treinamento. Com tratamento e informação adequados, a vida da criança TEA e sua família pode ser muito mais tranquila.
                  Dra. Wanessa Garcia Santos Oliveira – psicóloga, psicopedagoga, mestra e doutora em Neuropsicologia Cognitiva (USP)
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal5")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal 5*/}

            {/* Start Demo Modal 6*/}
            <Modal
              isOpen={this.state.demoModal6}
              toggle={() => this.toggleModal("demoModal6")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("demoModal6")}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
                <h4 className="title title-up">Triagem</h4>
              </div>
              <div className="modal-body">
                <p>
                  A Classificação Sócio-Econômica possibilita o enquadre de pacientes em planos específicos de atendimento, objetivando a obtenção de desconto no valor da avaliação multi e interdisciplinar.
                  –  Os pacientes deverão ser alunos(as) da Rede Pública de Ensino e ter até 18 anos de idade; –  Alunos de escolas particulares serão atendidos somente mediante a comprovação de bolsas integrais de estudo.
                  ​1 – Encaminhamento Escolar, feito em papel timbrado oficial, assinado e carimbado pela Coordenação Escolar, relatando sumariamente o motivo do encaminhamento – ORIGINAL E CÓPIA;
                  2 – Comprovantes de gastos mensais: 1 (uma) conta de água atual, 1 (uma) conta de luz atual, 1 (uma) conta de telefone atual, 1 (um) recibo de aluguel do imóvel ou do comprovante de financiamento do imóvel atual, a última fatura do cartão de crédito e todas outras despesas fixas mensais que possuir – ORIGINAIS E CÓPIAS;
                  3 – Comprovantes de rendas – Holerites recentes e Carteiras de Trabalho, não só do responsável, mas de quem mais trabalhar na residência do(a) paciente – ORIGINAIS E CÓPIAS;
                  4 – Documentos dos responsáveis e do(a) paciente – RG ou CPF ou Certidão de Nascimento – ORIGINAIS E CÓPIAS;
                  5 – A última declaração do Imposto de Renda, se houver – ORIGINAL E CÓPIA;
                  6 – Laudos e exames médicos de avaliações já realizadas. Por exemplo, relatórios de profissionais, tais como: neurologistas, psicólogos(as), fonoaudiólogos(as), psicopedagogos(as) etc – ORIGINAIS E CÓPIAS.
                  Esta documentação será analisada pelo C.T.A.S. – Centro de Triagem e Atendimento Social – da CEDA.. Após análise, o(a) responsável será comunicado(a) sobre a classificação sócio-econômica do caso, via telefone.
                  *Obs.: Na data marcada para a triagem, os responsáveis deverão trazer TODAS documentações acima listadas. Caso contrário, o atendimento será automaticamente desmarcado.
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  color="danger"
                  type="button"
                  onClick={() => this.toggleModal("demoModal6")}
                >
                  Fechar
                </Button>
              </div>
            </Modal>
            {/* End Demo Modal 6*/}

          </Row>
        </Container>
      </div>
    );
  }
}

export default JavaScript;
