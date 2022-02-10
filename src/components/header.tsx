import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IMAGES from '../assets/images'

const HeaderStyle = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;

    .mainLogo {
        width: 200px;
        display: inline-block;
        
    }

    .userMenu {
        display: inline-block;
        height: 40px;
        margin: 0px;

        .userMenuList {
            display: inline-block;
            padding: 0px 5px;
        }

        .userMenuList:not(:first-child) {
            border-left: 1px solid #ddd;
        }
    }
`;

const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/">
                <img src={`${IMAGES.LOGO}`} className="mainLogo" alt="LOGO" />
            </Link>

            
            <ul className="userMenu">
                <li className="userMenuList">
                    <Link to="/login">
                        LOGIN
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="/join">
                        JOIN
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="cart">
                        CART
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="order">
                        ORDER
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="mypage">
                        MYPAGE
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="notice">
                        NOTICE
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="community">
                        COMMUNITY
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="review">
                        REVIEW
                    </Link>
                </li>
                <li className="userMenuList">
                    <Link to="">
                        
                    </Link>
                </li>
                {/* SNS 아이콘 */}
            </ul>
        </HeaderStyle>
    )
};

export default Header;