import React, { Component } from 'react';
import './App.css';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

import { XYFrame } from 'semiotic'

  <XYFrame
  size={[ 700,500 ]}
  lines={displayData}
  lineDataAccessor={"data"}
  lineStyle={d => ({ fill: d.color, fillOpacity: 0.5, stroke: d.color, strokeWidth: '3px' })}
  defined={d => d.py !== 0}
  xAccessor={"px"}
  yAccessor={"py"}
  margin={{"top":60,"bottom":65,"left":60,"right":20}}
  axes={[
{ orient: 'left', tickFormat: d => d },
{ orient: 'bottom', tickFormat: d => d }
  ]}
  hoverAnnotation={true}
  />


// PROP TYPES
