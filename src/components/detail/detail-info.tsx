import React, { useState } from "react";
import styled from "styled-components";

import IMAGES from '../../assets/images';

interface DetailProductProps {
    productId: string;
}

const DetailInfoStyle = styled.div`
    width: 70%;
    min-width: 1400px;
    text-align: center;
    margin: 0 auto;
`;

const DetailInfo = ({productId}:DetailProductProps) => {
    const productName = `${productId}`;    

    const [imgSrc, setImgSrc] = useState([
        IMAGES.PRODUCT_IMG1.detail1,
        IMAGES.PRODUCT_IMG1.detail2,
        IMAGES.PRODUCT_IMG1.detail3,
        IMAGES.PRODUCT_IMG1.detail4,
        IMAGES.PRODUCT_IMG1.detail5,
        IMAGES.PRODUCT_IMG1.detail6,
    ]);

    return(
        <DetailInfoStyle>
            {imgSrc.map((detailSrc, index) => {
                return (
                    <img src={detailSrc} alt="detail_img"/>
                )
            })}
        </DetailInfoStyle>
    )
};

export default DetailInfo;