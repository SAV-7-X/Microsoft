import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { image, title, description, button, height } = props;

  return (
    <div className="card my-4 w-80 bg-white rounded-lg overflow-hidden" style={{boxShadow:'0px 2px 5px rgb(0,0,0,0.3)'}}>
    <img src={image} className="card-img-top" alt="..." />
    <div className={`card-body p-4 bg-white flex flex-col ${height}`}>
      <h5 className="card-title text-3xl font-bold py-2 ">{title}</h5>
      <p className="card-text text-gray-600 flex-grow">{description}</p>
      <button href="#" className="btn bg-blue-500 text-center text-white font-semibold w-32 py-2 px-4 rounded-sm inline-block mt-4 justify-end">{button}</button>
    </div>
  </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Card;
