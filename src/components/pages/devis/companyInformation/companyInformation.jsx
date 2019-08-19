import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const CompanyInformation = props => {
  const {
    name = '',
    email = '',
    logoUrl = '',
    formattedSiret = '',
    siren = '',
    statutEntreprise = '',
    address = '',
    postalCode = '',
    city = '',
    phoneNumber = '',
  } = props;
  return (
    <Card bordered={false} style={{width: 300}}>
      <Paragraph>{name} {statutEntreprise}</Paragraph>
      <Paragraph>{email}</Paragraph>
      <Paragraph>{phoneNumber}</Paragraph>
      <Paragraph>{address}</Paragraph>
      <Paragraph>{postalCode} {city}</Paragraph>
      <Paragraph>Siret : {formattedSiret}</Paragraph>
      <Paragraph>Siren : {siren}</Paragraph>
    </Card>
  );
};

export default CompanyInformation;
