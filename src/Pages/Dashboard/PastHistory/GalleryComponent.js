import React from 'react';

const GalleryComponent = ({report}) => {
    return (
        <div>
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={report.reportimage} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    
    </div>
  </div> 
</div>
        </div>
        
    );
};

export default GalleryComponent;