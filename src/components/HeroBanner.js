import React from 'react';

const HeroBanner = () => {
  // You can fetch dynamic content from an API or use static content here
  const dynamicContent = {
    title: 'Emojipedia',
    subtitle: 'Fell the feelings',
    image: 'https://w0.peakpx.com/wallpaper/918/880/HD-wallpaper-multiple-yellow-smiley-emoji-emoji.jpg',
  };

  return (
    <div className="hero-banner">
      <img src={dynamicContent.image} alt="Hero Banner" />
      <div className="hero-content">
        <h1>{dynamicContent.title}</h1>
        <p>{dynamicContent.subtitle}</p>
        {/* Add any other dynamic content as needed */}
      </div>
    </div>
  );
};

export default HeroBanner;
