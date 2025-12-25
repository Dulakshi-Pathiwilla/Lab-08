import React from 'react';


const Header: React.FC = () => {
  return (
    <header
      className="bg-white border-bottom shadow-sm"

    >

      <div className="mb-4">
    
        <h1 className="bg-white border-bottom shadow-sm" style={{ textAlign: 'center' }}>
          🌿Mini Plant Manager
        </h1>
      </div>
    </header>
  );
};

export default Header;