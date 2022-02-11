import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IMAGES from '../../assets/images';


interface sliderProps {
    /** 슬라이더 아이템 요소 */
    children: React.ReactNode;
    /** 커스텀 클래스 */
    className?: string;
    /** 자동재생 (속도 설정시 number 타입으로) */
    autoplay?: boolean | number;
    /** 슬라이더 속도 */
    speed?: number;
    /** 반복 여부 */
    loop?: boolean;
    arrows?: boolean;
}

interface itemsProps {
    item: string,
    name: string
}

const SlideShowStyle = styled.div`
    width: 70%;
    min-width: 1400px;
    margin: 0 auto;
    margin-bottom: 100px;

    .slide-show-frame{
        width: 300%;
        over-flow: hidden;

        .slide-show-list {
            display: inline-block;

            .slide-img {
                width: ${window.innerWidth};
                height: auto;
                display: inline-block;
            }
        }
    }

    .slideImg {
        width:100%;
        height: auto;
    }
`;

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop: true,
    };

    const items:itemsProps[] = [
        {
            item: `${IMAGES.SLIDE_IMG_1}`,
            name: '이벤트 이미지01'
        },
        {
            item: `${IMAGES.SLIDE_IMG_2}`,
            name: '이벤트 이미지02'
        },
        {
            item: `${IMAGES.SLIDE_IMG_3}`,
            name: '이벤트 이미지03'
        },    
    ]

    return(
        <SlideShowStyle>
            <Slider {...settings}>
                {/* {children} */}
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.item} alt={item.name} className="slideImg" />
                        </div>
                    )
                })}
            </Slider>
        </SlideShowStyle>
    )
}

export default Slick;