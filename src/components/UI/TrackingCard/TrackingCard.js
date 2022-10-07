import React, { useState, useEffect } from 'react';
import './TrackingCard.css';
import _ from 'lodash';
import moment from 'moment';

const STATES = [
  { event: 'Ordered' },
  { event: 'Processing' },
  { event: 'Dispatched' },
  { event: 'Delivered' }

]

const CANCEL_STATES = [
  { event: 'Ordered' },
  { event: 'Cancelled' }
]

export const TrackingCard = ({ status = [], refresh }) => {

  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  let mergedStatusList = status[1] === 'Cancelled' ? _.merge(CANCEL_STATES, status) : _.merge(STATES, status);

  console.log(mergedStatusList);

  useEffect(() => {

    const statusLength = status.length;
    console.log(status);
    const event = status && status[statusLength - 1] && status[statusLength - 1].event;

    const eventDate = status && status[statusLength - 1] && status[statusLength - 1].onDate;
    console.log('Event:', event, 'Date:', eventDate);
    if ((event === 'Cancelled' || event === 'Delivered') && eventDate) {

      setDisableButton(true);
      console.log('Disabling button')

    }

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderTrackingStates = (alignment) => (<>
    {
      mergedStatusList.map((status, i) => (
        <div className={alignment === 'horizontal' ? "tracking-status" : "tracking-status-vertical"} key={i}>
          <i className={status.onDate ? 'fa fa-check-circle fa-2x' : 'fa fa-clock-o fa-2x'} style={{
            marginRight: '0.2rem',
            marginLeft: '0.2rem',
            color: status.onDate ? '#570303' : 'grey', padding: '2px', borderRadius: '50%'
          }}></i>
          <div className={mergedStatusList.length === i + 1 ? '' : alignment === 'horizontal' ? "dropdown-divider" : "dropdown-divider-vertical"}></div>
        </div>

      ))

    }

  </>)


  const renderTrackingText = (alignment) => {

    return (
      <>
        {mergedStatusList.map((status, i) => {

          return (
            <div className={alignment === 'horizontal' ? "tracking-text" : "tracking-text-vertical"} key={i}>
              <span>{status.event}</span>

              {((status.event === 'Ordered' || status.event === 'Delivered' || status.event === 'Cancelled') && status.onDate) ?
                (<>
                  <span className="text-muted" style={{
                    fontSize: '12px', marginLeft: '5px',
                    width: '80px'
                  }}>{moment(status.onDate).format('llll')}</span>
                </>) : null
              }
            </div>
          )
        })
        }
      </>
    )

  }

  const refreshStatus = () => {
    console.log('Refreshing statsus...');
    setLoading(true);
    refresh();
    setTimeout(() => {
      setLoading(false);

    }, 500);
  }

  const renderHorizontal = () => {
    return (
      <div className="tracking-card d-none d-lg-block">
        <div className="tracking-header">
          Track Order
        </div>
        <div className="tracking-history">
          {renderTrackingStates('horizontal')}
        </div>

        <div className="tracking-text-group">
          {renderTrackingText('horizontal')}
        </div>
        <hr />
        <div className="button" onClick={refreshStatus} style={{
          float: "right", marginRight: '10px', cursor: "pointer", pointerEvents: disableButton ? 'none' : ''
        }} disabled={loading || disableButton}>
          {loading ? <i className="fa fa-refresh fa-spin fa-2x" /> : <i className="fa fa-refresh fa-2x" />}  Refresh
        </div>
      </div>
    )
  }



  return (
    <>
      {renderHorizontal()}
    </>
  )

}
