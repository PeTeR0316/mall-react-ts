import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../components/header'
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import DetailThumbnail from '../../components/detail/detail-thumbnail';
import DetailMenu from '../../components/detail/detail-menu';
import DetailInfo from '../../components/detail/detail-info';

const ProductInfo = () => {
    const [productId, setProductId] = useState<string>('')

    //상품 아이디 파라미터 가져오기
    function getParameterByName(name:string) { 
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); 
        const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(window.location.search); 
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
    }


    useEffect(() => {
        //상품 아이디 가져오기
        setProductId(getParameterByName('product').toUpperCase());
    },[])


    return (
        <div>
            <Header />
            <Nav />
            <DetailThumbnail productId={productId} />
            <DetailMenu />
            <DetailInfo productId={productId} />
            <Footer />
        </div>
    )
};

export default ProductInfo;