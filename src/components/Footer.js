import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <section>
                <div style={footerContainerStyle}>
                    <h1>LET'S START</h1>
                    <h3>UIDE / Intercambio de Libros / 2024</h3>
                </div>
            </section>
        </footer>
    );
};

    const footerStyle = {
        backgroundColor: '#000000', // Color de fondo del footer
        color: '#ffffff', // Color del texto
        padding: '20px',
        textAlign: 'center'
    };
  
  const footerContainerStyle = {
    backgroundColor: '#000000',
    padding: '20px',
    textAlign: 'center'
  };

export default Footer;
