import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyle = styled.div`
    width: 70%;
    min-width: 1400px;
    padding: 10px 0px;
    margin: 0 auto;

    .mainMenu {
        display: flex;
        justify-content: space-between;
        width: 100%
        height: 40px;
        margin: 0px;
        
        .mainMenuList {
            display: inline-block;
            padding: 0px 5px;
            font-size: 13px
        }
    }
`;

const Nav = () => {
    return (
        <NavStyle>
            <ul className="mainMenu">
                <li className="mainMenuList">
                    <Link to="/">
                        HANDMADE
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        R,MADE
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        BEST
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        NEW
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        아우터
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        상의
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        팬츠
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        스커트
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        원피스
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        신발/가방
                    </Link>
                </li>
                <li className="mainMenuList">
                    <Link to="/">
                        악세사리
                    </Link>
                </li>
            </ul>
        </NavStyle>
    )
};

export default Nav;