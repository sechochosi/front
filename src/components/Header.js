import React from 'react';


const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>EXCHANGES THE BOOKS</h1>
      <h2>UIDE</h2>
      <div style={footerContentStyle}>
        <a href="/Home" style={linkStyle}>Home</a> | 
        <a href="/About" style={linkStyle}>About</a> | 
        <a href="/Contact" style={linkStyle}>Contact</a> | 
        <a href="/Login" style={linkStyle}>Login</a> | 
        <a href="/Register" style={linkStyle}>Register</a> |
        <a href="/Messager" style={linkStyle}>Menssage</a> |
        <a href="/Exchanges" style={linkStyle}>Exchanges</a> |
        <a href="/Recommendations" style={linkStyle}>RecommendationsAdmin</a> |
        <a href="/RecommendationsList" style={linkStyle}>Recommendations</a> |
        <a href="/Perfil" style={linkStyle}>Perfil</a> |
        <a href="/BookCreate" style={linkStyle}>BookCreate</a> |
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#7d002d',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const footerContentStyle = {
  maxWidth: '100%',
  height: 'auto',
  padding: '10px',
};

const linkStyle = {
  color: '#ffffff', // Color blanco para los enlaces
  textDecoration: 'none' // Elimina el subrayado
};

export default Header;
