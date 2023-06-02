import React from 'react';

import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center">
      <ThreeDots type="ThreeDots" color="#16a34a" height={80} width={80} />
    </div>
  );
};

export default Loader;
