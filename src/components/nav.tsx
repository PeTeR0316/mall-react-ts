import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyle = styled.div`
    width: 100%;
    padding: 10px 0px;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;

    .mainMenu {
        width: 70%;
        min-width: 1400px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        
        .mainMenuList {
            display: inline-block;
            padding: 10px 5px;
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