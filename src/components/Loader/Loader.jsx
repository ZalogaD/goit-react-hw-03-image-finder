import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => {
  return (
    <>
      {visible && (
        <div className="wrap">
          <BallTriangle type="Oval" color="#00BFFF" height={50} width={50} />
        </div>
      )}
    </>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
