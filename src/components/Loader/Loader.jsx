import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <Loader>
      <LoaderSpinner type="Oval" color="#00BFFF" height={50} width={50} />
    </Loader>
  );
};

export default Loader;
