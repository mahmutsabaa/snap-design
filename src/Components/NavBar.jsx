

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Container, Nav, Navbar, DropdownButton, Dropdown, NavDropdown } from 'react-bootstrap';
import todoimg from "../img/icon-todo.svg"
import calendarimg from "../img/icon-calendar.svg"
import planningimg from "../img/icon-planning.svg"
import remindersimg from "../img/icon-reminders.svg"


function NavBar() {

    return (
        <>
            <Navbar className='navbar ' expand="lg" variant="light"  >
                <Container>
                    <Navbar.Brand href="#home" className="brand"><h1><b>snap</b></h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav className="nav me-auto  ">
                            <NavDropdown title="Feartures" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#Todo List"> <img src={todoimg} alt="" className='me-2' /><span> Todo List</span></NavDropdown.Item>
                                <NavDropdown.Item href="#Calendar">
                                    <img src={calendarimg} alt="" className='me-2' /> <span> Calendar</span>
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#Reminders">
                                    <img src={remindersimg} alt="" className='me-2' /> <span>  Reminders</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#Planning">
                                    <img src={planningimg} alt="" className='me-2' /> <span>  Planning</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Company" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#History"><span> History</span></NavDropdown.Item>
                                <NavDropdown.Item href="#Our Team">
                                    <span> Our Team</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#Blog">
                                    <span>  Blog</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/careers" >Careers</NavLink>
                            <NavLink to="/about" >About</NavLink>
                        </Nav>
                        <Nav className="nav ms-auto">
                            <NavLink to="/login" ><div className="list-item">Login</div></NavLink>
                            <button className="rounded-4">Register</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default NavBar;