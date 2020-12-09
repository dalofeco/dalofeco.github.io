import React from 'react';
import ReactLoading from 'react-loading';

interface LoadingProps {
    className?: string;
    style?: any;
}

const Loading = ({className, style}: LoadingProps) => (
  <div style={style} className={`LoadingContainer ${className}`}>
    <ReactLoading type="bars" color="#fff" />
  </div>
    );

export default Loading;