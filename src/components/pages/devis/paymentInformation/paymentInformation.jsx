import React, {Fragment} from 'react';
import {Divider, Steps} from 'antd';

const { Step } = Steps;

const PaymentInformation = props => {
  const {
    modalitesPaiement = [],
  } = props;

  return (
    <Fragment>
      <Divider orientation="left">Modalités de paiement</Divider>
      <br />
      <Steps progressDot>
        { modalitesPaiement.map((item) =>
          <Step title={item.label} description={`${item.pourcentage}% du montant du devis`} />
        )}
      </Steps>
    </Fragment>
  )
};

export default PaymentInformation;
