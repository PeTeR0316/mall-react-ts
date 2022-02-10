import React from 'react';
import styled from 'styled-components';

import Header from '../../components/header'
import Nav from '../../components/nav';
import Slick from '../../components/main/main-slick';
import MainEvent from '../../components/main/main-event'
import WeeklyHot from '../../components/main/weekly-hot'
import ProductList from '../../components/main/product-list';

const MainPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Slick />
            <MainEvent />
            <WeeklyHot />
            <ProductList title="NEW" subTitle="매일매일 신상품 업데이트! 10% 할인!" />
            <ProductList title="BLACK LABEL" subTitle="다바걸 프리미엄라인,블랙라벨 시리즈 ~50%OFF" />
            <ProductList title="BEST CHOICE" subTitle="다바걸 베스트 상품" />
        </>
    )
};

export default MainPage;