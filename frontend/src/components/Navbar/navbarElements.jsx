import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #90deab;
    height: 85px; 
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        color: #000000;
    }
`;

export const Hamburger = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        tranform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex; 
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.div`
    font-size: 35px;    
    font-family: Arial, Helvetica, sans-serif;
    height: 80px;
    
    border: 3px blue;
    border-width: thick;

`;

export const LogoNavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &.active{
        color: #000000;
    }
`;
// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;
//     @media screen and (max-width: 768px){
//         display: none;
//     }
// `;

// export const NavBtnLink = styled(Link)`
//     border-radius: 4px;
//     background: #808080;
//     padding: 10px 22px;
//     color: #000000;
//     outline: none;
//     border: none; 
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     margin-left: 24px;
//     &:hover {
//         transition: all 0.2s ease-in-out;
//         background: #fff;
//         color: #808080;
//     }
// `;