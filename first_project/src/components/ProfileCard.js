// Import React library
import React from 'react';

// Corrected functional ProfileCard component
const ProfileCard = ({ name, age, location}) => {
  return (
    <div>
      <h2>Hello, I'm {name}!</h2>
      <p>My age is {age} years old.</p>
      <p>I am from {location}</p>
    </div>
  );
};

// Export the component
export default ProfileCard;
