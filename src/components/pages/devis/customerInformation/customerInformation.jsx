import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const CustomerInformation = props => {
  const {
    customerName = '',
    customerEmail = '',
    billingAddress: {
      address = '',
      postalCode = '',
      city = '',
    } = {},
  } = props;
  return (
    <Card bordered={false} style={{width: 300}}>
      <Paragraph>{customerName}</Paragraph>
      <Paragraph>{customerEmail}</Paragraph>
      <Paragraph>{address}</Paragraph>
      <Paragraph>{postalCode} {city}</Paragraph>
    </Card>
  );
};

export default CustomerInformation;
