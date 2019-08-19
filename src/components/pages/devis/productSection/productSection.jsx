import React, { Fragment } from 'react';
import { Divider, Table } from 'antd';
import { buildDataSource } from './dataSourceBuilder';

const ProductSection = props => {
  const {
    label = '',
    lignes = [],
  } = props;

  const columns = [{
    title: 'Designation',
    dataIndex: 'designation',
    width: '20%',
  }, {
    title: 'Description',
    dataIndex: 'description',
    width: '40%',
  }, {
    title: 'Prix Unitaire HT',
    dataIndex: 'prixUnitaireHT',
    width: '10%',
  }, {
    title: 'Quantite',
    dataIndex: 'quantite',
    width: '10%',
  }, {
    title: 'Total HT',
    dataIndex: 'prixHT',
    width: '10%',
  }, {
    title: 'Taux TVA %',
    dataIndex: 'tauxTVA',
    width: '10%',
  }];

  return (
    <Fragment>
      <Divider orientation="left">{label}</Divider>
      <Table
        columns={columns}
        dataSource={buildDataSource(lignes)}
        size="small"
        pagination={false}
      />
    </Fragment>
  );
};

export default ProductSection;
