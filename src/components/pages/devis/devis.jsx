import React, { Fragment } from 'react';

const Devis = ({data = {}}) => (
  <Fragment>
    <h1>{data.title}</h1>
    <p>{data.introductionLetter}</p>
  </Fragment>
);

export default Devis;
