import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';

const Navbar1 = (props) => {

  return (
    <Navbar expand="lg" className={`navbar-${props.mode} bg-${props.mode}`}>
      <Container>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form.Check 
              style={{color: 'gray'}}
              type="switch"
              id="custom-switch"
              label={props.mode=='light' ? "Enable Dark Mode":"Enable Light Mode"}
              onClick={props.toggleMode}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Navbar1.propTypes ={
  title: PropTypes.string.isRequired // PropTypes.string.isRequired - should not be undefined then.
}

Navbar1.defaultProps = {
  title: 'Set title Here'
}

export default Navbar1
