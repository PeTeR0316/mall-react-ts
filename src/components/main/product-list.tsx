import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom';

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
    width: 70%;
    min-width: 1400px;
    margin: 0 auto;
    margin-bottom: 100px;
    
    .titleArea {
        width: 100%;
        text-align: center;
    }

    .productListArea {

    }

    .productList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        li {
            display: inline-block;
            margin: 0 25px 25px 0;
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
    const [listNum, setListNum] = useState<number>(1);
    const [imgSrc, setImgSrc] = useState([
        IMAGES.PRODUCT_IMG.img1,
        IMAGES.PRODUCT_IMG.img2,
        IMAGES.PRODUCT_IMG.img3,
        IMAGES.PRODUCT_IMG.img4,
        IMAGES.PRODUCT_IMG.img5,
        IMAGES.PRODUCT_IMG.img6,
        IMAGES.PRODUCT_IMG.img7,
        IMAGES.PRODUCT_IMG.img8,
    ]);
    const clickProduct = useParams();

    return (
        <ProductListStyle>
            <div className='titleArea'>
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>

            <div className='productListArea'>
                <ul className='productList'>
                    {imgSrc.map((src, index) => {
                        if(index < listNum * 4)
                        return(
                            <li>
                                <Link to={`/product/?product=product_img1`}>
                                    <img src={src} 
                                        className="productImg" 
                                        alt="productImg" 
                                        key="product_img1"
                                    />
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <button type='button' 
                className='moreBtn'
                onClick={() => setListNum(listNum + 1)}
            >
                더보기 +
            </button>
        </ProductListStyle>
    )
}

export default ProductList;