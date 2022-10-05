import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ClockLoader from 'react-spinners/ClockLoader';

import './AppSpinner.css';

const AppSpinner = ({ type = "scale" }) => {


  const renderSpinner = () => {


    return (
      <div className={type === 'scale' ? "spinner" : "spinner-with-backdrop"}>

        {
          type === 'scale' ? (
            <ScaleLoader loading={true} size={200}
              color={'var(--primary-scale-spinner)'} />) : (
            <ClockLoader
              loading={true} size={200} color={'var(--primary-scale-spinner)'}

            />
          )
        }
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
