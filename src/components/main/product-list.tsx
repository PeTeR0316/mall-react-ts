import React from 'react'
import styled from 'styled-components'

import IMAGES from '../../assets/images';

interface ProductListProps {
    title: string;
    subTitle: string;
}

interface itemsProps {
    img: string,
    name: string,
}

const ProductListStyle = styled.div`
    margin-bottom: 100px;
    
    .titleArea {
        width: 100%;
        text-align: center;
    }

    .productListArea {

    }

    .productList {
        li {
            display: inline-block;
            margin-bottom: 25px;
            :not(:first-child) {
                margin-left: 25px;
            }
        }
    }

    .moreBtn {
        width: 300px;
        height: 45px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        border: none;
        border-radius: 5px;
        :hover {
            color: #ffffff;
            background-color: #3f3f3f;
            cursor: pointer;
        }
    }
`;

const ProductList = ({title, subTitle} : ProductListProps) => {

    return (
        <ProductListStyle>
            <div className='titleArea'>
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>

            <div className='productListArea'>
                <ul className='productList'>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img1} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img2} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img3} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img4} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img5} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img6} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img7} className="productImg" alt="productImg" />
                    </li>
                    <li>
                        <img src={IMAGES.PRODUCT_IMG.img8} className="productImg" alt="productImg" />
                    </li>
                </ul>
            </div>

            <button type='button' className='moreBtn'>더보기 +</button>
        </ProductListStyle>
    )
}

export default ProductList;