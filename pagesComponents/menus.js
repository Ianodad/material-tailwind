import React, { useState } from 'react';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import NavbarCollapse from 'components/Navbar/NavbarCollapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import Icon from 'components/Icon/Icon';

export function Menu({ color, menuName }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Navbar color={color}>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{menuName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openMenu}>
                    <Nav>
                        <NavItem active="light" href="#navbar" ripple="light">
                            <Icon name="language" size="xl" />
                            Discover
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            <Icon name="account_circle" size="xl" />
                            Profile
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            <Icon name="settings" size="xl" />
                            Settings
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

export function MenuIcons({ color, menuName }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Navbar color={color}>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{menuName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openMenu}>
                    <Nav>
                        <NavItem active="light" href="#navbar" ripple="light">
                            <Icon name="language" size="xl" />
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            <Icon name="account_circle" size="xl" />
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            <Icon name="settings" size="xl" />
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}

export function MenuLinks({ color, menuName }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Navbar color={color}>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>{menuName}</NavbarBrand>
                    <NavbarToggler
                        onClick={() => setOpenMenu(!openMenu)}
                        ripple="light"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openMenu}>
                    <Nav>
                        <NavItem active="light" href="#navbar" ripple="light">
                            Discover
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            Profile
                        </NavItem>
                        <NavItem href="#navbar" ripple="light">
                            Settings
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
