import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import navbarlogo from '../public/images/securepassforge.jpg'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container,
} from 'reactstrap';

export default function(args: any){
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
          <div className='shadow' style={{
            display: 'block', width: '100%',backgroundColor:'white'
            }}>
                <Container>
                <Navbar color="white" light expand="md">
                        <NavbarBrand href="../public/images/securepassforge.jpg">
                            <img src='/images/securepassforge.jpg' className='img-thumbnail img-responsive border-0 bg-transparent' width={250} />
                        </NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">FAQ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">CONTACTO</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                </Container>
            </div >
        </>
    )

}