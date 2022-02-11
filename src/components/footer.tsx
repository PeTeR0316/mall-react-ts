import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    width: 100%;

    .footerMenuContainer {
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;

        .footerMenu {
            width: 70%;
            min-width: 1400px;
            padding: 15px 0;
            margin: 0 auto;
    
            .footerMenuList {
                display: inline-block;
                font-size: 13px;
                :not(:first-child) {
                    padding-left: 10px;
                    margin-left: 10px;
                    border-left: 1px solid #e7e7e7;
                }
            }
        }
    }

    .infoContainer {
        width: 70%;
        min-width: 1400px;
        padding: 30px 0;
        margin: 0 auto;

        .info{
            font-size: 14px;

            .infoList {
                margin: 15px 0;

                .infoTitle {
                    display: inline-block;
                    width: 150px;
                    margin-right: 10px;
                }
            }
        }
    }

    .textRed {
        color: #ff0000;
    }
`

const Footer = () => {
    return(
        <FooterStyle>
            <div className='footerMenuContainer'>
                <ul className='footerMenu'>
                    <li className="footerMenuList">회사소개</li>
                    <li className="footerMenuList">이용약관</li>
                    <li className="footerMenuList textRed">개인정보처리방침</li>
                    <li className="footerMenuList">이용안내</li>
                </ul>
            </div>

            <div className="infoContainer">
                <ul className="info">
                    <li className="infoList">
                        <span className="infoTitle">CUSTOMER CENTER</span>
                        <span className="infoContents">
                            <strong className='textRed'>02-999-9993</strong>
                            평일 오전 10:00 ~ 오후 5:00 / 점심시간 오후 12:00 ~ 오후 1:00 / 토, 일, 공휴일 휴무
                        </span>
                    </li>
                    <li className="infoList">
                        <span className="infoTitle">ACCOUNT INFO</span>
                        <span className="infoContents">
                        우리 1005-101-335115 농협 1141-01-057383 국민 729601-04-138751 신한 100-024-368599 기업 039-053616-01-012 주식회사 엠제이엔엠(MJ&M)
                        </span>
                    </li>
                    <li className="infoList">
                        <span className="infoTitle">RETURN / EXCHANGE</span>
                        <span className="infoContents">
                            서울시 성북구 숭인로14, 1층 CJ대한통운 '다바걸' 자세한 교환·반품절차 안내는 문의란 및 공지사항을 참고해주세요
                        </span>
                    </li>
                    <li className="infoList">
                        <span className="infoTitle">COMPANY</span>
                        <span className="infoContents">
                            주식회사 엠제이앤엠 OWNER 문인기 EMAIL dabagirl@naver.com MAIL-ORDER-LICENSE 2021-서울성동-02012
                        </span>
                    </li>
                    <li className="infoList">
                        <span className="infoTitle">ADDRESS</span>
                        <span className="infoContents">
                            04797 서울특별시 성동구 아차산로11길 18 (성수동2가) 쁘렝땅빌딩 5층 BUSINESS LICENSE 201-86-05562
                        </span>
                    </li>
                    <li className="infoList">
                        <span>
                            COPYRIGHT © 다바걸 ALL RIGHTS RESERVED. HOSTING CAFE24 DESIGNED By DFLOOR
                        </span>
                    </li>
                </ul>
            </div>
        </FooterStyle>
    )
};

export default Footer;