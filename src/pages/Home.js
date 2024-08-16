import React, { useState } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipData, setTooltipData] = useState({});

  const handleButtonClick = (data) => {
    setTooltipData(data);
    setShowTooltip(true);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
    setTooltipData({});
  };

  const books = [
    {
      title: 'Título del Libro 1',
      author: 'Autor 1',
      isbn: '1234567890',
      description: 'Descripción del Libro 1',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 1',
      publicationDate: '2024-01-01',
    },
    {
      title: 'Título del Libro 2',
      author: 'Autor 2',
      isbn: '0987654321',
      description: 'Descripción del Libro 2',
      available: 'No',
      imageUrl: '#',
      status: 'Usado',
      category: 'Categoría 2',
      publicationDate: '2024-02-01',
    },
    {
      title: 'Título del Libro 3',
      author: 'Autor 3',
      isbn: '1122334455',
      description: 'Descripción del Libro 3',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 3',
      publicationDate: '2024-03-01',
    },
    {
      title: 'Título del Libro 4',
      author: 'Autor 3',
      isbn: '1122334455',
      description: 'Descripción del Libro 3',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 3',
      publicationDate: '2024-03-01',
    },
    {
      title: 'Título del Libro 5',
      author: 'Autor 3',
      isbn: '1122334455',
      description: 'Descripción del Libro 3',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 3',
      publicationDate: '2024-03-01',
    },
    {
      title: 'Título del Libro 6',
      author: 'Autor 3',
      isbn: '1122334455',
      description: 'Descripción del Libro 3',
      available: 'Sí',
      imageUrl: '#',
      status: 'Nuevo',
      category: 'Categoría 3',
      publicationDate: '2024-03-01',
    }
  ];

  return (
    <section>
      <div style={bookContainerStyle}>
        {books.map((book, index) => (
          <div key={index} style={bookStyle}>
            <img className="imagen5" src={book.imageUrl} alt="Portada" />
            <h4>{book.title}</h4>
            <button className="boton1" onClick={() => handleButtonClick(book)}>
              + Info
            </button>
          </div>
        ))}
      </div>

      {showTooltip && (
        <div className="tooltip" style={tooltipStyle}>
          <h4>{tooltipData.title}</h4>
          <p><strong>Autor:</strong> {tooltipData.author}</p>
          <p><strong>ISBN:</strong> {tooltipData.isbn}</p>
          <p><strong>Descripción:</strong> {tooltipData.description}</p>
          <p><strong>Disponible:</strong> {tooltipData.available}</p>
          <p><strong>Estado:</strong> {tooltipData.status}</p>
          <p><strong>Categoría:</strong> {tooltipData.category}</p>
          <p><strong>Fecha de Publicación:</strong> {tooltipData.publicationDate}</p>
          <button onClick={handleCloseTooltip}>Cerrar</button>
        </div>
      )}
    </section>
  );
};

const bookContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px',
};

const bookStyle = {
  margin: '20px',
};

const tooltipStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: 1000,
  maxWidth: '600px',
  overflowY: 'auto',
};

export default Home;
