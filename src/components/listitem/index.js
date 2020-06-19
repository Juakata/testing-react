import React from 'react';
import PropTypes from 'prop-types';

const Listitem = ({ title, body }) => {
  if(!title) {
    return null;
  }
  return (
    <div data-test="list-item">
      <h2 data-test="title">{title}</h2>
      <p data-test="body">{body}</p>
    </div>
  );
}

Listitem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}

export default Listitem;
