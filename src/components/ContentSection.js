import React from 'react';

const ContentSection = () => {
  // Placeholder content and images
  const placeholderContent = [
    {
      title: 'Smile',
      text: 'Always smile',
      image: 'https://img.freepik.com/premium-vector/smiling-face-emoji_6735-648.jpg?w=2000',
    },
    {
      title: 'admire',
      text: 'admire your people',
      image: 'https://img.freepik.com/premium-vector/top-quality-emoticon-admiration-emoji-surprised-emoticon-amazed-astonished-person-grabbing-yellow-face-emoji-popular-element_686498-2709.jpg?w=2000',
    },
  ];

  return (
    <div className="content-section">
      {placeholderContent.map((section, index) => (
        <div key={index} className="section">
          <img src={section.image} alt={`Section ${index + 1}`} />
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
