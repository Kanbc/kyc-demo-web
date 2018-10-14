import React from 'react';
import { Button } from '../..';

const GotoDate = ({
  onClick,
  width,
  color,
}) => (
  <Button onClick={onClick} color={color} width={width}>
    <i className="fa fa-calendar" aria-hidden="true" />
  </Button>
);

export default GotoDate;
