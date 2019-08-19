import React, { Fragment } from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Header = props => {
  const {
    title = '',
    introductionLetter = '',
    date = '',
    validityDate = '',
  } = props;
  return (
    <Typography>
      <Title>{title}</Title>
      <Paragraph>{introductionLetter}</Paragraph>
      <Paragraph>
        Les prix sont valables pendant <Text strong>{validityDate}</Text>
      </Paragraph>
      <Paragraph>Devis établi le {date}</Paragraph>
    </Typography>
  );
}

export default Header;
