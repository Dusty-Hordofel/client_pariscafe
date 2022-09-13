import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import './AppSpinner.css';

const AppSpinner = () => {


  const renderSpinner = () => {

    console.log('About to spin ...');

    return (
      <div className="spinner">
        <ScaleLoader loading={true} size={200} color={'var(--primary-scale-spinner)'} />
      </div>
    )
  }

  return (
    <>
      {renderSpinner()}
    </>
  )
}

export default AppSpinner
