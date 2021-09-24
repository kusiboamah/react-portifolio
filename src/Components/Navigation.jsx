import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pazani from '../images/pazani.jpeg';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="pazani">
                <img src={pazani} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to='/' activeClassName='active-class' exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' activeClassName='active-class'exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/resume' activeClassName='active-class' exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/portifolio' activeClassName='active-class'exact>Portifolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blogs' activeClassName='active-class' exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' activeClassName='active-class' exact>Contact</NavLink>
                </li>
            </ul> 
            <footer>
                <p>@2021 My Portifolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        border-right: 1px solid var(--border-color);

    .pazani {
        width: 80%;
        border-bottom: 1px solid var(--border-color);
        padding: 1rem 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            
        }
    }
    .nav-items {
        width: 100%;
        text-align: left;
        .active-class {
            background-color: var(--primary-color);
        }
        li{
            display: block;
            a {
                display: block;
                padding: 0.2rem 40px;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover {
                    cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s ease-in-out;
                    z-index: 3;
                    opacity: 0.21;
                    
                }
            }

            a:hover::before {
                width: 100%;
                height: 100%;
            }
        }
    }

    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;

        p{
            padding: 1rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;
