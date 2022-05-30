import React from 'react'
import { Button, InputGroup, Table, FormControl, Nav, Navbar, Container, Breadcrumb } from 'react-bootstrap';
import { Chip, Stack } from '@mui/material';

function MentorAdmin() {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <div>
            <div className='MentorTable' >

            <Breadcrumb>
                    <Breadcrumb.Item href="#" active style={{ color: "rgba(138, 143, 156, 1)" }}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active style={{ color: "rgba(34, 34, 34, 1)" }}>Mentor List</Breadcrumb.Item>
                </Breadcrumb>

                <Navbar expand="lg" style={{ background: "#FFFFFF", opacity: "100%", boxshadow: "0px 2px 6px #0000000A" }}>
                    <Container fluid>
                        <h1 style={{ color: "#FAA81D", font: " normal normal 600 16px/22px Open Sans" }}>Mentor list</h1>
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
                                        style={{ background: "#BCBCCB", opacity: 1, color: "#43425D " }}
                                    />
                                </InputGroup>
                            </div>
                            <Button style={{ border: "#D89119", backgroundColor: "#FAA81D" }}>➕ New Mentor</Button>
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
                                <th>Mentor Name</th>
                                <th>Employee ID</th>
                                <th>E-mail ID</th>
                                <th>Skills</th>
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
                                <td>Chandan</td>
                                <td>-</td>
                                <td>-</td>
                                <td style={{marginLeft:"20px"}} >
                                    <div className='chip'>
                                    <Stack direction="row" spacing={0}>
                                        <Chip
                                            label="React"
                                            onClick={handleClick}
                                            onDelete={handleDelete}
                                            style={{ backgroundColor: "#086288" }}
                                        />
                                        <Chip
                                            label="Angular"
                                            variant="outlined"
                                            onClick={handleClick}
                                            onDelete={handleDelete}
                                            style={{ backgroundColor: "#086288" }}
                                        /></Stack>
                                    <Stack direction="column" spacing={0}>
                                        <Chip
                                            label="Java + Spring Boot"
                                            variant="outlined"
                                            onClick={handleClick}
                                            onDelete={handleDelete}
                                            style={{ backgroundColor: "#086288" }}
                                        /></Stack>
                                    <Stack direction="column" spacing={1}>
                                        <Chip
                                            label="Node & Express JS"
                                            variant="outlined"
                                            onClick={handleClick}
                                            onDelete={handleDelete}
                                            style={{ backgroundColor: "#086288" }}
                                        />
                                    </Stack></div>
                                </td>
                                <td>
                                    <Button style={{ backgroundColor: "transparent", border: "none", color: "black" }}><i class="fa-solid fa-pen"></i></Button>
                                    <Button style={{ backgroundColor: "transparent", border: "none", color: "black" }}><i className="fa-solid fa-trash"></i></Button>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default MentorAdmin