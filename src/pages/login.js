import {
    Container,
    Header,
    Content,
    Form,
    ButtonToolbar,
    Button,
    Navbar,
    Panel,
    FlexboxGrid
  } from 'rsuite';

  import {Link} from 'react-router-dom'
  
  const Login = () => (
    <div className="show-fake-browser login-page">
      <Container>
        <Header>
          <Navbar appearance="subtle"  style={{boxShadow: '2px 2px 3px orange'}}>
            <Navbar.Brand>
              C4K Portal
            </Navbar.Brand>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center" style={{margin: '3em'}}>
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel>Username or email address</Form.ControlLabel>
                    <Form.Control name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Link to ='/dashboard'><Button appearance="primary">Login in</Button></Link>
                      <Button appearance="link">Forgot password?</Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );

  export default Login;