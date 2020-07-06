// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = props => {
  const { data } = props;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {data.name ? data.name : 'No Name Available'}
          </h5>
          <p className="card-text">
            {data.details ? data.details : 'No Details Available'}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.object,
};
