import React from 'react';

const Footer = () => {
  return (
    <footer 
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        color: 'white',
        textAlign: 'center',
        padding: '1px 0', // Increased padding for more spacing
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
        fontWeight: 'bold',
        fontSize: '14px',
        height : '45px' // Increased font size
      }}
      className='bg-primary'
    >
      <div className="container">
        <p style={{ margin: 0 }}>
          Powered by <span style={{ }}>Acowale</span> © {new Date().getFullYear()}
        </p>
        {/* Add the tagline below the Acowale line */}
        <p style={{  fontSize: '14px', opacity: 0.8 }}>
          Delivering top-notch news with precision and care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
