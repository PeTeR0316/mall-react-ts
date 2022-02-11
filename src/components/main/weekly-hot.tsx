import React from 'react';
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
    img1: string,
    name1: string,
    img2: string,
    name2: string,
    img3: string,
    name3: string,
    img4: string,
    name4: string,
    img5: string,
    name5: string,
    img6: string,
    name6: string,
    img7: string,
    name7: string
}


const WeeklyHotStyle = styled.div`
    width: 100%;
    height: auto;
    background-color: #f0f0f0;
    text-align: center;
    padding-top: 20px;
    margin-bottom: 100px;

    .weeklyContainer {
        width: 70%;
        min-width:1400px;
    }

    .weeklyLeftArea {
        width: 545px;
        height: 545px;
        display: inline-block;
        vertical-align: top;
        margin: 0 10px 10px 0;

        .weeklyBigImg {
            width: 100%;
            height: 100%;
        }
    }

    .weeklyRightArea {
        width: 645px;
        height: 575px;
        display: inline-block;
        margin: 0px;

        .weeklyItemList {
            display: inline-block;
            margin: 0 10px 10px 0;

            .weeklyImg {
                width: 200px;
                height: auto;
            }
        }
    }
`

const WeeklyHot = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const items:itemsProps[] = [
        {
            img1: `${IMAGES.WEEKLY_HOT[0].img1}`,
            name1: 'WEEKLY_HOT 리스트1',
            img2: `${IMAGES.WEEKLY_HOT[0].img2}`,
            name2: 'WEEKLY_HOT 리스트2',
            img3: `${IMAGES.WEEKLY_HOT[0].img3}`,
            name3: 'WEEKLY_HOT 리스트3',
            img4: `${IMAGES.WEEKLY_HOT[0].img4}`,
            name4: 'WEEKLY_HOT 리스트4',
            img5: `${IMAGES.WEEKLY_HOT[0].img5}`,
            name5: 'WEEKLY_HOT 리스트5',
            img6: `${IMAGES.WEEKLY_HOT[0].img6}`,
            name6: 'WEEKLY_HOT 리스트6',
            img7: `${IMAGES.WEEKLY_HOT[0].img7}`,
            name7: 'WEEKLY_HOT 리스트7',
        },
        {
            img1: `${IMAGES.WEEKLY_HOT[1].img1}`,
            name1: 'WEEKLY_HOT 리스트1',
            img2: `${IMAGES.WEEKLY_HOT[1].img2}`,
            name2: 'WEEKLY_HOT 리스트2',
            img3: `${IMAGES.WEEKLY_HOT[1].img3}`,
            name3: 'WEEKLY_HOT 리스트3',
            img4: `${IMAGES.WEEKLY_HOT[1].img4}`,
            name4: 'WEEKLY_HOT 리스트4',
            img5: `${IMAGES.WEEKLY_HOT[1].img5}`,
            name5: 'WEEKLY_HOT 리스트5',
            img6: `${IMAGES.WEEKLY_HOT[1].img6}`,
            name6: 'WEEKLY_HOT 리스트6',
            img7: `${IMAGES.WEEKLY_HOT[1].img7}`,
            name7: 'WEEKLY_HOT 리스트7',
        },
        {
            img1: `${IMAGES.WEEKLY_HOT[2].img1}`,
            name1: 'WEEKLY_HOT 리스트1',
            img2: `${IMAGES.WEEKLY_HOT[2].img2}`,
            name2: 'WEEKLY_HOT 리스트2',
            img3: `${IMAGES.WEEKLY_HOT[2].img3}`,
            name3: 'WEEKLY_HOT 리스트3',
            img4: `${IMAGES.WEEKLY_HOT[2].img4}`,
            name4: 'WEEKLY_HOT 리스트4',
            img5: `${IMAGES.WEEKLY_HOT[2].img5}`,
            name5: 'WEEKLY_HOT 리스트5',
            img6: `${IMAGES.WEEKLY_HOT[2].img6}`,
            name6: 'WEEKLY_HOT 리스트6',
            img7: `${IMAGES.WEEKLY_HOT[2].img7}`,
            name7: 'WEEKLY_HOT 리스트7',
        },
    ]

    return (
        <WeeklyHotStyle>
            <h2>WEEKLY HOT</h2>
            <p>한주동안 핫한 상품을 한번에!</p>

            <Slider {...settings}>
                {items.map((item, index) => {
                    // console.log(`${item.item.img1}`)
                    return (
                        // <div key={index}>
                        //     <img src={item.item} alt={item.name} className="slideImg" />
                        // </div>
                        <div className='weeklyContainer'>
                            <div className='weeklyLeftArea'>
                                <img src={item.img1} alt={item.name1} className="weeklyBigImg" />
                            </div>

                            <ul className='weeklyRightArea'>
                                <li className='weeklyItemList'>
                                    <img src={item.img2} alt={item.name2} className="weeklyImg" />
                                </li>
                                <li className='weeklyItemList'>
                                    <img src={item.img3} alt={item.name3} className="weeklyImg" />
                                </li>
                                <li className='weeklyItemList'>
                                    <img src={item.img4} alt={item.name4} className="weeklyImg" />
                                </li>
                                <li className='weeklyItemList'>
                                    <img src={item.img5} alt={item.name5} className="weeklyImg" />
                                </li>
                                <li className='weeklyItemList'>
                                    <img src={item.img6} alt={item.name6} className="weeklyImg" />
                                </li>
                                <li className='weeklyItemList'>
                                    <img src={item.img7} alt={item.name7} className="weeklyImg" />
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </Slider>
        </WeeklyHotStyle>
    )
};

export default WeeklyHot;