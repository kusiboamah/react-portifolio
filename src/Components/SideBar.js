import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function SideBar() {
    return (
        <SideBarStyled>
            <Navigation />
        </SideBarStyled>
    )
}

const SideBarStyled = styled.div`
    width: 16.3 rem;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    position: fixed;
`
export default SideBar;
