import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './Loading.css'

const Loading = () => (
  <div className="Loading">
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Loading;
