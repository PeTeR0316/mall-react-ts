import React, { useState } from "react";
import styled from "styled-components";

import IMAGES from '../../assets/images';

const DetailMenuStyle = styled.div`
    width: 70%;
    min-width: 1400px;
    padding: 30px;
    margin: 0 auto;

    .detailMenuList {
        margin: 0;
        text-align: center;

        .detailMenuBtn {
            display: inline-block;
            font-size: 13px;
            padding: 0 20px;

            :not(:last-child) {
                border-right: 1px solid #c7c7c7;
            }
        }
    }

    .eventList {
        margin: 100px 0;
        text-align: center;

        .eventListBtn {
            display: inline-block;
            padding: 0 20px;

            :not(:last-child) {
                border-right: 1px dotted #c7c7c7;
            }
        }
    }
`

const DetailMenu = () => {
    return(
        <DetailMenuStyle>
            <ul className="detailMenuList">
                <li className="detailMenuBtn">상품상세정보</li>
                <li className="detailMenuBtn">괸련상품</li>
                <li className="detailMenuBtn">구매가이드</li>
                <li className="detailMenuBtn">구매후기</li>
                <li className="detailMenuBtn">상품문의</li>
            </ul>

            <ul className="eventList">
                <li className="eventListBtn">신규회원가입</li>
                <li className="eventListBtn">등급별 할인</li>
                <li className="eventListBtn">적립금 지원</li>
                <li className="eventListBtn">배송비 지원</li>
            </ul>
        </DetailMenuStyle>
    )
};

export default DetailMenu;