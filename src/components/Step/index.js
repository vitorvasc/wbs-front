import React from 'react';

import './styles.scss';

const Step = ({title, description, color, fontColor}) => {
  return <div className="step" style={{backgroundColor: color, color: fontColor }}>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
};

export default Step;