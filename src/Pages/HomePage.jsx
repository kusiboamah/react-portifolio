import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particles />
            </div>
            <div className='typography'>
                <h1>Hi I'm <span>Emmanuel Kusi Boamah</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='icons'>
                    <a href='https://facebook.com' className='icon i-facebook'><FacebookIcon/></a>
                    <a href='https://github.com' className='icon i-github'><GithubIcon/></a>
                    <a href='https://youtube.com' className='icon i-youtube'><YoutubeIcon/></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        /* position: absolute; */
        height: 100vh;
        top: 0;
        left: 0;
    } 

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 70%;
        .icons {
            display: flex;
            padding: 25px 0;
            justify-content: center;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover {
                    border-color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg {
                    margin: 1rem;
                }
                
            }
            .i-facebook {
            background-color: #0441ca;
            &:hover{
                color: var(--white-color);
            }
        }    
        .i-github {
            background-color: #23262d;
            &:hover{
                color: var(--white-color);
            }
        }    
        .i-youtube {
            background-color: red;
            &:hover{
                color: var(--white-color);
            }
            }    
        }
    }

`;

export default HomePage;
