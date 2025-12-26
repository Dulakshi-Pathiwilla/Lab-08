import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="bg-white border-bottom shadow-sm"
      style={{ marginLeft: 120,marginRight:120, borderRadius: 10, overflow: 'hidden', padding:"10px" }}
    >
      <div className="container py-3">
        <h1 className="h4 mb-0 text-success fw-semibold" style={{ textAlign: 'center' }}>
          🌿Mini Plant Manager
        </h1>
      </div>
    </header>
  );
};

export default Header;