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
  { event: 'Canceled' }
]

export const TrackingCardVertical = ({ status = [], refresh }) => {

  const [loading, setLoading] = useState(false);

  let mergedStatusList = status[1] === 'Canceled' ? _.merge(CANCEL_STATES, status) : _.merge(STATES, status);

  console.log(mergedStatusList);

  useEffect(() => {

    const statusLength = status.length;
    console.log(status);
    const event = status && status[statusLength - 1] && status[statusLength - 1].event;

    const eventDate = status && status[statusLength - 1] && status[statusLength - 1].onDate;
    console.log('Event:', event, 'Date:', eventDate);
    if ((event === 'Canceled' || event === 'Delivered') && eventDate) {

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
            color: status.onDate ? '#570303' : 'grey', padding: '2px', borderRadius: '50%',
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

              {((status.event === 'Ordered' || status.event === 'Delivered' || status.event === 'Canceled') && status.onDate) ?
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



  const renderVertical = () => {

    return (
      <div className="tracking-card-vertical   ">
        <div className="tracking-header-vertical">
          Track Order
        </div>
        <div className="d-flex justify-content-center">

          <div className="tracking-history-vertical">
            {renderTrackingStates('vertical')}
          </div>

          <div className="tracking-text-group-vertical">
            {renderTrackingText('vertical')}
          </div>

        </div>
        <div className="button" onClick={refreshStatus} style={{ float: 'right' }}>
          {loading ? <i className="fa fa-refresh fa-spin fa-2x " /> : <i className="fa fa-refresh fa-2x " />}  Refresh
        </div>
      </div>
    )

  }

  return (
    <>
      {renderVertical()}
    </>
  )

}
