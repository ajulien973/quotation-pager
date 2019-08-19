import React from 'react';
import { Layout, Row, Divider } from 'antd';

import CompanyInformation from './companyInformation/companyInformation';
import CustomerInformation from './customerInformation/customerInformation';
import Header from './header/header';
import Totals from './totals/totals';
import PaymentInformation from './paymentInformation/paymentInformation';
import ProductSectionList from './productSectionList/productSectionList';

const { Content } = Layout;

const Devis = ({data = {}}) => {
  const headerProps = {
    title: data.title,
    introductionLetter: data.introductionLetter,
    date: data.date,
    validityDate: data.dureeValidite,
  };
  const companyInformationProps = {
    ...data.company,
  };
  const customerInformationProps = {
    ...data.deal,
  };
  const totalsProps = {
    prixTotalHTAvantRemise: data.prixTotalHTAvantRemise,
    remise: data.remise,
    prixTotalHT: data.prixTotalHT,
    prixTotalTTC: data.prixTotalTTC,
    prixTotalOptionHT: data.prixTotalOptionHT,
    prixTotalFreeHT: data.prixTotalFreeHT,
    montantsTVA: data.montantsTVA,
  };
  const paymentInformationsProps = {
    modalitesPaiement: data.modalitesPaiement,
  };
  const productSectionListProps = {
    lots: data.lots,
  };

  return (
    <Content style={{ padding: '20px 50px' }}>
      <Row type="flex" justify="space-between" align="top">
        <CompanyInformation {...companyInformationProps} />
        <CustomerInformation {...customerInformationProps} />
      </Row>
      <Divider />
      <Header {...headerProps} />
      <br/>
      <br/>
      <ProductSectionList {...productSectionListProps} />
      <br/>
      <Totals {...totalsProps} />
      <br/>
      <PaymentInformation {...paymentInformationsProps} />
    </Content>
  );
}

export default Devis;
