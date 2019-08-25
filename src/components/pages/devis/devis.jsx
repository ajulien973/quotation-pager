import React from 'react';
import { Layout, Row, Divider, Switch } from 'antd';

import CompanyInformation from './companyInformation/companyInformation';
import CustomerInformation from './customerInformation/customerInformation';
import Header from './header/header';
import Totals from './totals/totals';
import PaymentInformation from './paymentInformation/paymentInformation';
import ProductSectionListContainer from './productSectionList/productSectionList.container';

const { Content } = Layout;

const Devis = ({data = {}, shouldBuildByLocations = false, toggleShouldBuildByLocations = () => {}}) => {
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
    locations: data.locations,
    shouldBuildByLocations: shouldBuildByLocations
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
      <Switch checkedChildren='Vue par lot' unCheckedChildren='Vue par pièce' defaultChecked onClick={toggleShouldBuildByLocations}/>
      <ProductSectionListContainer {...productSectionListProps} />
      <br/>
      <Totals {...totalsProps} />
      <br/>
      <PaymentInformation {...paymentInformationsProps} />
    </Content>
  );
}

export default Devis;
