import React from 'react';

import DraggableCardSlider from '../components/DraggableCardSlider'; // Import the DraggableCardSlider component
import Slideshow from '../components/Slideshow';


const LandingPageContainer = ({ items }) => {

    const fashionItems = items.filter(item => item.category === 'FASHION');
    const electronicsItems = items.filter(item => item.category === 'ELECTRONICS');
    const beautyAndWellnessItems = items.filter(item => item.category === 'BEAUTY_AND_WELLNESS');

    return (
        <>
            <div className='handleLists'>
                <DraggableCardSlider items={fashionItems} category="Fashion" />
            </div>
            <Slideshow />
            <div className='handleLists'>
                <DraggableCardSlider items={electronicsItems} category="Electronics" />
            </div>
        </>
    );
}

export default LandingPageContainer;
