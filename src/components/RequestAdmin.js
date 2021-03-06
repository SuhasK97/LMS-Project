import { color } from '@mui/system';
import React from 'react'
import { InputGroup, Table, FormControl, Nav, Navbar, Container, Breadcrumb, Button } from 'react-bootstrap';

function RequestAdmin() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <div>
            <div className='MentorTable'>

                <Breadcrumb>
                    <Breadcrumb.Item href="#" active style={{ color: "rgba(138, 143, 156, 1)" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active style={{ color: "rgba(34, 34, 34, 1)" }}>Request List</Breadcrumb.Item>
                </Breadcrumb>

                <Navbar expand="lg" style={{ background: "#FFFFFF", opacity: "100%", boxshadow: "0px 2px 6px #0000000A" }}>
                    <Container fluid>
                        <h1 style={{ color: "#FAA81D", font: " normal normal 600 16px/22px Open Sans" }}>Request list</h1>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                            </Nav>
                            <div style={{ border: "none", background: "#F4F5F8", opacity: 1, marginRight: '40px', borderRadius: "8px 8px 8px 8px" }}>
                                <InputGroup style={{ marginRight: '250px', background: '#BCBCCB 0% 0% no-repeat padding-box', borderradius: "4px", opacity: 0.5 }} >
                                    <InputGroup.Text id="basic-addon1" style={{ opacity: 0.15, left: "597px", color: "black", marginLeft: "2px" }}><img src={require('./../logo1/search.jpg')} alt='' /></InputGroup.Text>
                                    <FormControl
                                        placeholder="Search "
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        style={{ background: "#F4F5F8", opacity: 1, color: "#43425D " }}
                                    />
                                </InputGroup>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='table' >
                    <Table hover>
                        <thead>
                            <tr style={{
                                top: "224px",
                                left: "104px",
                                width: "1792px",
                                height: "54px",
                                /* UI Properties */
                                background: "#E9EEF7 0% 0% no-repeat padding-box",
                                opacity: "1",
                            }}>
                                <th><input type={'checkbox'} name={"checkbox"} /></th>
                                <th>No</th>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>YOP</th>
                                <th>Percentage</th>
                                <th>Experiance</th>
                                <th>Contact No.</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{
                                top: "278px",
                                left: "105px",
                                width: "1791px",
                                height: "54px",
                                /* UI Properties */
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                opacity: "1", backgroundColor: "#FFFFFF"
                            }}>
                                <td>
                                    <input type={'checkbox'} name={"checkbox"} />
                                </td>
                                <td>01</td>
                                <td>#154234653</td>
                                <td>Aditi</td>
                                <td>2022</td>
                                <td>85%</td>
                                <td>Fresher</td>
                                <td>1234567890</td>
                                <td>
                                    <Button  className='requestbutton1'variant="success" >
                                    Approve
                                    </Button>
                                    <Button className='requestbutton2' variant="danger"  >
                                    Reject
                                    </Button>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default RequestAdmin