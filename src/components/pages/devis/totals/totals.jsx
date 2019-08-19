import React  from 'react';
import { Row, Col, Table } from 'antd';

const Totals = props => {
  const {
    prixTotalHT = 0,
    prixTotalTTC = 0,
  } = props;

  const columns = [{
    title: 'Label',
    dataIndex: 'label',
  }, {
    title: 'Total',
    dataIndex: 'total',
  }];
  const data = [{
    key: '1',
    label: 'prixTotalHT',
    total: prixTotalHT,
  }, {
    key: '2',
    label: 'prixTotalTTC',
    total: prixTotalTTC,
  }];

  return (
    <Row>
      <Col span={5} offset={16}>
        <Table
          columns={columns}
          dataSource={data}
          size="small"
          pagination={false}
          showHeader={false}
        />
      </Col>
    </Row>
  );
};

export default Totals;
