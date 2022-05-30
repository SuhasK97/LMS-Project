import React from 'react'
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap'
import MiniDrawer from './Drawer'

function NavBar() {
    return (
        <div >
            <Navbar expand="lg" style={{ background: "#FFFFFF", opacity: "100%", boxshadow: "0px 2px 6px #0000000A" }}>
                <Container fluid>
                    <img src={require('./../logo1/logo1.png')} alt=""/>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <div style={{border:"none",background: "#F4F5F8",opacity:1, marginRight: '400px', borderRadius:"4px"}}>
                            <InputGroup style={{  marginRight: '250px', background: '#BCBCCB 0% 0% no-repeat padding-box', borderradius: "4px", opacity: 0.5 }} >
                                <InputGroup.Text id="basic-addon1" style={{  opacity: 0.15, left: "597px", color:"black" , marginLeft:"2px"}}><img src={require('./../logo1/search.jpg')} alt='' /></InputGroup.Text>
                                <FormControl
                                    placeholder="Search Mentor / Employee"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    style={{ background: "#F4F5F8", opacity: 1 , color:"#43425D "}}
                                />
                            </InputGroup>
                            </div>
                        <Button style={{ color: '#075575', border: '1px solid #075575', backgroundColor: 'white', padding: '5px 10px' }}>Logout</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <MiniDrawer/>
        </div>
        
    )
}

export default NavBar