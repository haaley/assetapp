import {LineChart} from 'react-native-svg-charts';

import {Icon, Layout, Text, withStyles} from '@ui-kitten/components';
import React from 'react';

interface FundData {
  data: number[];
  title: string;
  value: string;
  variation: string;
}
interface Props {
  fundData: FundData;
  eva?: any;
}
const FundCard = ({eva, fundData}: Props) => {
  const {data, title, value, variation} = fundData;
  return (
    <Layout style={eva.style.container}>
      <Text category={'label'}>{title}</Text>
      <LineChart
        style={eva.style.chart}
        gridMin={-1}
        gridMax={240}
        data={data}
        svg={{stroke: 'rgb(83, 238, 88)'}}
        contentInset={{top: 0, bottom: 0, left: 10, right: 10}}
      />
      <Layout style={eva.style.balanceInformation}>
        <Text category={'s1'}>{value}</Text>
        <Icon
          fill={eva.theme['color-success-default']}
          style={eva.style.icon}
          name="diagonal-arrow-right-up-outline"
        />
        <Text category={'s2'} status="success">
          {variation}
        </Text>
      </Layout>
    </Layout>
  );
};

export default withStyles(FundCard, () => ({
  container: {
    flex: 1,
    width: 160,
    minHeight: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(161, 161, 161, 0.6)',
    padding: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceInformation: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  chart: {height: 90, backgroundColor: 'white', flex: 1, padding: 10},
  icon: {width: 20, height: 20},
}));
