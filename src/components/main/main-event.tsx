import React from 'react';
import styled from 'styled-components';

import IMAGES from '../../assets/images';

interface eventsProps {
    item: string,
    name: string
}

const EventStyled = styled.div`
    width: 70%;
    min-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    .eventImg {
        width: 100%;
    }
`;

const MainEvent = (() => {
    const events:eventsProps[] = [
        {
            item: `${IMAGES.EVENT_IMG.img1}`,
            name: '슬라이드 이미지01'
        },
        {
            item: `${IMAGES.EVENT_IMG.img2}`,
            name: '슬라이드 이미지02'
        },
        {
            item: `${IMAGES.EVENT_IMG.img3}`,
            name: '슬라이드 이미지03'
        },    
        {
            item: `${IMAGES.EVENT_IMG.img4}`,
            name: '슬라이드 이미지03'
        },    
    ]

    return (
        <EventStyled>
            {events.map((event, index) => {
                return (
                    <div key={index}>
                        <img src={event.item} alt={event.name} className="eventImg" />
                    </div>
                )
            })}
        </EventStyled>
    )
});

export default MainEvent;