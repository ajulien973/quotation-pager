import React from 'react';
import Devis from './devis';
import { Layout } from 'antd';
import { shallow } from 'enzyme';
import CompanyInformation from './companyInformation/companyInformation';
import CustomerInformation from './customerInformation/customerInformation';
import Header from './header/header';
import Totals from './totals/totals';
import PaymentInformation from './paymentInformation/paymentInformation';

const { Content } = Layout;

describe('components | pages | Devis', () => {
  it('should render correctly', () => {
    const props = {};
    const wrapper = shallow(<Devis {...props} />);
    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.find(CompanyInformation)).toHaveLength(1);
    expect(wrapper.find(CustomerInformation)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Totals)).toHaveLength(1);
    expect(wrapper.find(PaymentInformation)).toHaveLength(1);
  });
});
