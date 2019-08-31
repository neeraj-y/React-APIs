import React from 'react';

const Cat = ({mouse}) => (
    <img 
        alt='cat' 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdI6OZ95kfdIoIHaE_9F10zB-07gwPPSMoiIQ4AqlQRgdJfTG' 
        style={{position: 'absolute', left: mouse.x, top: mouse.y}}    
    />
)

export default Cat;