import React from 'react';

const Location = () => {
    return (
        <div className='mx-auto lg:flex items-center justify-center gap-28 mt-12'>
            <div className=''>
                <iframe width="620" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=ok%20Carlifornia%2092028,%20USA+(Luciana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </div>
            <div>
                <img className='w-[400px] h-[400px] ml-12' src="https://i.ibb.co/FWjHqPx/map-4735510-3934191.webp" alt="" />
            </div>
        </div>
    );
};

export default Location;