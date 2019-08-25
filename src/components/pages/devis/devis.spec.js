import React from 'react';
import Devis from './devis';
import {Layout, Switch} from 'antd';
import { shallow } from 'enzyme';
import CompanyInformation from './companyInformation/companyInformation';
import CustomerInformation from './customerInformation/customerInformation';
import Header from './header/header';
import Totals from './totals/totals';
import PaymentInformation from './paymentInformation/paymentInformation';
import ProductSectionListContainer from './productSectionList/productSectionList.container';

const { Content } = Layout;

describe('components | pages | Devis', () => {
  it('should render correctly', () => {
    const props = {};
    const wrapper = shallow(<Devis {...props} />);
    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.find(CompanyInformation)).toHaveLength(1);
    expect(wrapper.find(CustomerInformation)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(ProductSectionListContainer)).toHaveLength(1);
    expect(wrapper.find(Totals)).toHaveLength(1);
    expect(wrapper.find(PaymentInformation)).toHaveLength(1);
  });
});
