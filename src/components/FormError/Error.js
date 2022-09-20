import React from 'react'


const Error = ({ touched, message }) => {

  if (!touched) {
    return (<div style={{ color: 'red', fontSize: '11px' }}>&nbsp;</div>)
  }

  if (message) {
    return (<div style={{ color: 'red', fontSize: '11px' }}>* {message}</div>)
  }

  return (<div style={{ color: 'green', fontSize: '11px' }}>* Ok</div>)

}

export default Error
