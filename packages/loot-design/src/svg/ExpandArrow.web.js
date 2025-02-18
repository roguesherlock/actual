/* eslint no-unused-vars: 0 */
/* This file is auto-generated, do not touch! Please edit the SVG file instead. */
import React from 'react';

import { css } from 'glamor';

function ExpandArrow({
  width,
  height,
  style,
  color = 'currentColor',
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      {...css(style)}
      viewBox="0 0 25 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        className="path"
        d="M24.4825085,0.57623494 C24.1741468,0.24939759 23.8086177,0.0861144578 23.3862628,0.0861144578 L1.55921502,0.0861144578 C1.13668942,0.0861144578 0.771416382,0.24939759 0.462798635,0.57623494 C0.154180887,0.903433735 0,1.29027108 0,1.73746988 C0,2.18457831 0.154180887,2.57141566 0.462798635,2.89834337 L11.3763652,14.4562048 C11.6853242,14.7830422 12.0505973,14.9466867 12.4727816,14.9466867 C12.8949659,14.9466867 13.2605802,14.7830422 13.568942,14.4562048 L24.4825085,2.89825301 C24.790785,2.57141566 24.9455631,2.18457831 24.9455631,1.73737952 C24.9455631,1.29027108 24.790785,0.903433735 24.4825085,0.57623494 Z"
      />
    </svg>
  );
}

export default ExpandArrow;
