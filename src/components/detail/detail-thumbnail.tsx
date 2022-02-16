import React, { useState } from "react";
import styled from "styled-components";

import IMAGES from '../../assets/images';

interface DetailProductProps {
    productId: string;
}

const DetailThumbnailStyle = styled.div`
    width: 70%;
    min-width: 1400px;
    border-bottom: 1px solid #e4e4e4;
    padding: 50px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;

    .thumbnailContainer {
        width: 40%;
        display: inline-block;
        
    }

    .optionContainer {
        display: inline-block;
        width: 40%;
        vertical-align: top;

        .optionList {
            border-top: 2px solid #575757;
        }

        .productBtnList {
            display: flex;
            justify-content: space-between;

            .productBtn {
                display: inline-block;
                width: 32%;
                height: 48px;
                border: 2px solid #e7e7e7;
                text-align: center;
                line-height: 48px;

                :first-child {
                    background-color: #424242;
                    border: 2px solid #424242;
                    color: #ffffff;

                    :hover {
                        background-color: #ffffff;
                        color: #424242;
                    }
                }

                :hover {
                    border: 2px solid #424242;
                }
            }
        }
    }
`

const DetailThumbnail = ({productId}:DetailProductProps) => {
    const [imgSrc, setImgSrc] = useState(IMAGES.PRODUCT_IMG1.detail1);

    return(
        <DetailThumbnailStyle>
            <div className="thumbnailContainer">
                <img src={imgSrc} alt="" />
            </div>

            <div className="optionContainer">
                <ul className="optionList">
                    <li>[블랙라벨]부르넬헤링본울핸드(한정수량)</li>
                    <li>
                        <p>은은한 헤링본 패턴의 고급스러움이 느껴지는</p>
                        <p>NO.115 부르넬헤링본울핸드</p>
                    </li>
                    <li>
                        <p>
                            <span>price</span>
                            <span>89,000원</span>
                        </p>
                        <p>
                            <span>sale price</span>
                            <span>59,700원(29,300원 할인)</span>
                        </p>
                        <p>
                            <span>code</span>
                            <span>P000EANI</span>
                        </p>
                    </li>
                    <li>
                        <div>
                            <span>color</span>
                            <div>
                                색상 리스트
                            </div>
                        </div>
                        <div>
                            <span>size</span>
                            <div>사이즈 리스트</div>
                        </div>
                    </li>
                </ul>

                <span>
                    TOTAL : 0(0개) 
                </span>

                <ul className="productBtnList">
                    <li className="productBtn">바로구매</li>
                    <li className="productBtn">장바구니</li>
                    <li className="productBtn">관심상품</li>
                </ul>
            </div>
        </DetailThumbnailStyle>
    )
};

export default DetailThumbnail;