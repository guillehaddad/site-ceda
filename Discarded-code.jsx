// NucleoIcons.jsx
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

//IndexNavBar.jsx
<NavItem>
<Button
  className="nav-link d-none d-lg-block"
  color="default"
  onClick={this.scrollToDownload}
>
  <i className="tim-icons icon-cloud-download-93" /> Download
</Button>
</NavItem>

// Tabs.jsx
<div className="mb-3">
<small className="text-uppercase font-weight-bold">
  With icons
</small>
</div>

<NavItem>
<NavLink
  className={classnames({
    active: this.state.iconTabs === 2
  })}
  onClick={e => this.toggleTabs(e, "iconTabs", 2)}
  href="#pablo"
>
  <i className="tim-icons icon-settings-gear-63" />
  Settings
</NavLink>
</NavItem>
<NavItem>
<NavLink
  className={classnames({
    active: this.state.iconTabs === 3
  })}
  onClick={e => this.toggleTabs(e, "iconTabs", 3)}
  href="#pablo"
>
  <i className="tim-icons icon-bag-16" />
  Options
</NavLink>
</NavItem>

<TabPane tabId="link2">
<p>
  Completely synergize resource taxing relationships via
  premier niche markets. Professionally cultivate
  one-to-one customer service with robust ideas. <br />
  <br />
  Dynamically innovate resource-leveling customer service
  for state of the art customer service.
</p>
</TabPane>
<TabPane tabId="link3">
<p>
  Efficiently unleash cross-media information without
  cross-media value. Quickly maximize timely deliverables
  for real-time schemas. <br />
  <br />
  Dramatically maintain clicks-and-mortar solutions
  without functional solutions.
</p>
</TabPane>

<NavItem>
<NavLink
  className={classnames({
    active: this.state.textTabs === 5
  })}
  onClick={e => this.toggleTabs(e, "textTabs", 5)}
  href="#"
>
  Settings
</NavLink>
</NavItem>
<NavItem>
<NavLink
  className={classnames({
    active: this.state.textTabs === 6
  })}
  onClick={e => this.toggleTabs(e, "textTabs", 6)}
  href="#pablo"
>
  Options
</NavLink>
</NavItem>

<TabPane tabId="link5">
<p>
  I will be the leader of a company that ends up being
  worth billions of dollars, because I got the answers. I
  understand culture. I am the nucleus. I think that’s a
  responsibility that I have, to push possibilities, to
  show people, this is the level that things could be at.
  I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that
  things could be at.
</p>
</TabPane>
<TabPane tabId="link6">
<p>
  I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that
  things could be at. So when you get something that has
  the name Kanye West on it, it’s supposed to be pushing
  the furthest possibilities. I will be the leader of a
  company that ends up being worth billions of dollars,
  because I got the answers. I understand culture. I am
  the nucleus.
</p>
</TabPane>

// Download.jsx
<Col className="text-center" lg="8" md="12">
<Button
  className="btn-round"
  color="info"
  href="https://www.creative-tim.com/product/blk-design-system-react?ref=blkdsr-index-page-download-section"
  role="button"
  size="lg"
>
  Download React
</Button>
</Col>

<br />
<br />
<br />
<br />
<Row className="row-grid align-items-center my-md">
  <Col lg="6">
    <h3 className="text-info font-weight-light mb-2">
      Thank you for supporting us!
    </h3>
    <h4 className="mb-0 font-weight-light">
      Let's get in touch on any of these platforms.
    </h4>
  </Col>
  <Col className="text-lg-center btn-wrapper" lg="6">
    <Button
      className="btn-icon btn-round"
      color="twitter"
      id="twitter"
      size="lg"
    >
      <i className="fab fa-twitter" />
    </Button>
    <UncontrolledTooltip delay={0} target="twitter">
      Tweet!
    </UncontrolledTooltip>
    <Button
      className="btn-icon btn-round"
      color="facebook"
      id="facebook"
      size="lg"
    >
      <i className="fab fa-facebook-square" />
    </Button>
    <UncontrolledTooltip delay={0} target="facebook">
      Share!
    </UncontrolledTooltip>
    <Button
      className="btn-icon btn-round"
      color="github"
      href="https://github.com/creativetimofficial"
      id="tooltip877922017"
      size="lg"
      target="_blank"
    >
      <i className="fab fa-github" />
    </Button>
    <UncontrolledTooltip delay={0} target="tooltip877922017">
      Star on Github
    </UncontrolledTooltip>
  </Col>
</Row>

// Javascript.jsx
UncontrolledCarousel

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

<h4 className="mb-5">Modal</h4>

<Col md="4">
<Button
  color="warning"
  onClick={() => this.toggleModal("miniModal")}
>
  Launch Modal Mini
</Button>
</Col>
<Col md="4">
<Button
  color="success"
  onClick={() => this.toggleModal("formModal")}
>
  Launch Modal Form
</Button>
</Col>

<Button color="default" type="button">
                  Nice Button
                </Button>


            {/* Start Mini Modal */}
            <Modal
              modalClassName="modal-mini modal-primary modal-mini"
              isOpen={this.state.miniModal}
              toggle={() => this.toggleModal("miniModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("miniModal")}
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="modal-profile">
                  <i className="tim-icons icon-single-02" />
                </div>
              </div>
              <div className="modal-body">
                <p>Always have an access to your profile</p>
              </div>
              <div className="modal-footer">
                <Button className="btn-neutral" color="link" type="button">
                  Back
                </Button>
                <Button
                  className="btn-neutral"
                  color="link"
                  onClick={() => this.toggleModal("miniModal")}
                  type="button"
                >
                  Close
                </Button>
              </div>
            </Modal>
            {/* End Mini Modal */}
            {/* Start Form Modal */}
            <Modal
              modalClassName="modal-black"
              isOpen={this.state.formModal}
              toggle={() => this.toggleModal("formModal")}
            >
              <div className="modal-header justify-content-center">
                <button
                  className="close"
                  onClick={() => this.toggleModal("formModal")}
                >
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="text-muted text-center ml-auto mr-auto">
                  <h3 className="mb-0">Sign in with</h3>
                </div>
              </div>
              <div className="modal-body">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/github.svg")} />
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <img alt="..." src={require("assets/img/google.svg")} />
                  </Button>
                </div>
                <div className="text-center text-muted mb-4 mt-3">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup
                      className={classnames("input-group-alternative", {
                        "input-group-focus": this.state.passwordFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={e => this.setState({ passwordFocus: true })}
                        onBlur={e => this.setState({ passwordFocus: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup check className="mt-3">
                    <Label check>
                      <Input defaultChecked type="checkbox" />
                      <span className="form-check-sign" />
                      Remember me!
                    </Label>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </div>
            </Modal>
            {/* End Form Modal */}


            <br />
            <br />
            <h4 className="mb-5 mt-3">Datepicker</h4>
            <Row>
              <Col md="4">
                <div className="datepicker-container">
                  <FormGroup>
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Date Picker Here"
                      }}
                    />
                  </FormGroup>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <h4 className="mb-5 mt-3">Popovers</h4>
                <Button
                  color="default"
                  data-container="body"
                  data-content="Here will be some very useful information about his popover."
                  data-placement="top"
                  id="tooltip657685043"
                  size="sm"
                  type="button"
                >
                  On top
                </Button>
                <UncontrolledPopover placement="top" target="tooltip657685043">
                  <PopoverHeader>Popover on Top</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  data-container="body"
                  data-content="Here will be some very useful information about his popover.<br>
   Here will be some very useful information about his popover."
                  data-placement="right"
                  id="tooltip72798464"
                  size="sm"
                  type="button"
                >
                  On right
                </Button>
                <UncontrolledPopover placement="right" target="tooltip72798464">
                  <PopoverHeader>Popover on Right</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                    <br /> Here will be some very useful information about his
                    popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  data-container="body"
                  data-content="Here will be some very useful information about his popover."
                  data-placement="bottom"
                  id="tooltip995717467"
                  size="sm"
                  type="button"
                >
                  On bottom
                </Button>
                <UncontrolledPopover placement="bottom" target="tooltip995717467">
                  <PopoverHeader>Popover on Bottom</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  data-color="primary"
                  data-container="body"
                  data-content="Here will be some very useful information about his popover."
                  data-placement="left"
                  id="tooltip31162359"
                  size="sm"
                  type="button"
                >
                  On left
                </Button>
                <UncontrolledPopover placement="left" target="tooltip31162359">
                  <PopoverHeader>Popover On Left</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
              </Col>
              <Col md="6">
                <h4 className="mb-5 mt-3">Tooltips</h4>
                <Button
                  className="btn-tooltip"
                  color="default"
                  id="tooltip376048342"
                  size="sm"
                >
                  On left
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="left"
                  target="tooltip376048342"
                >
                  Tooltip on left
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip"
                  color="default"
                  id="tooltip297889956"
                  size="sm"
                >
                  On top
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="top"
                  target="tooltip297889956"
                >
                  Tooltip on top
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip"
                  color="default"
                  id="tooltip789511871"
                  size="sm"
                >
                  On bottom
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="tooltip789511871"
                >
                  Tooltip on bottom
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip"
                  color="default"
                  id="tooltip353488548"
                  size="sm"
                >
                  On right
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="right"
                  target="tooltip353488548"
                >
                  Tooltip on right
                </UncontrolledTooltip>
                <div className="clearfix" />
                <br />
                <br />
              </Col>
            </Row>
  


<div className="section">
<Container>
  <div className="title">
    <h3>Carousel</h3>
  </div>
  <Row className="justify-content-between align-items-center">
    <Col className="mb-5 mb-lg-0" lg="5">
      <h1 className="text-white font-weight-light">
        Bootstrap carousel
      </h1>
      <p className="text-white mt-4">
        Black Design comes with three pre-built pages to help you get
        started faster. You can change the text and images and you're
        good to go.
      </p>
      <Button
        className="mt-4"
        color="warning"
        href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
      >
        See all components
      </Button>
    </Col>
    <Col lg="6">
      <UncontrolledCarousel
        items={carouselItems}
        indicators={false}
        autoPlay={false}
      />
    </Col>
  </Row>
</Container>
</div>

