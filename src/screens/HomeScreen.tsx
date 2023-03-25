import {Layout, Text, withStyles} from '@ui-kitten/components';
import React from 'react';
import {FlatList, View} from 'react-native';
import FundCard from '../components/FundCard';
import Header from '../components/Header';
import Investing from '../assets/images/investing.svg';
import {ScrollView} from 'react-native';

const data1 = [90, 140, 95, 300, 24, 67, 512, 432, 33, 120, 324, 230, 730];
const data2 = [90, 90, 95, 100, 170, 90, 280, 329, 378, 367, 394, 430, 518];
const data3 = [100, 140, 200, 300, 24, 67, 512, 432, 33, 120, 324, 230, 210];

interface FundData {
  data: number[];
  title: string;
  shortName: string;
  value: string;
  variation: string;
}
const data: FundData[] = [
  {
    data: data1,
    title: 'Wind Fund',
    shortName: 'WFND',
    value: '$1322,67',
    variation: '13.88%',
  },
  {
    data: data2,
    title: 'Sun Fund',
    shortName: 'SFND',
    value: '$476,20',
    variation: '33.42%',
  },
  {
    data: data3,
    title: 'Rain Fund',
    shortName: 'RFND',
    value: '$319,41',
    variation: '6.13%',
  },
];

const HomeScreen = ({eva}: any) => {
  const itemSeparator = () => <View style={eva.style.itemSeparator} />;
  return (
    <Layout style={eva.style.wrapper}>
      <Header />
      <Layout style={eva.style.container}>
        <ScrollView>
          <Text category={'h6'} style={eva.style.fundsLabel}>
            Funds
          </Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({item}) => <FundCard fundData={item} />}
          />
          <Layout style={eva.style.banner}>
            <View style={eva.style.wrapper}>
              <Text category={'h6'} status="control">
                Learn more about carbon credits!
              </Text>
              <Text category={'s2'} status="control">
                Check out our top tips!
              </Text>
            </View>
            <View style={eva.style.wrapper}>
              <Investing width={200} height={100} />
            </View>
          </Layout>
          <Layout style={eva.style.bottomCardContainer}>
            <View style={eva.style.bottomCard}>
              <Text category={'label'}> Why should you invest here?</Text>
            </View>
            <View style={eva.style.bottomCard} />
          </Layout>
        </ScrollView>
      </Layout>
    </Layout>
  );
};

export default withStyles(HomeScreen, theme => ({
  wrapper: {flex: 1},
  container: {flex: 1, paddingLeft: 20},
  banner: {
    flexDirection: 'row',
    backgroundColor: theme['color-primary-default'],
    borderRadius: 10,
    padding: 20,
    marginRight: 20,
    marginTop: 20,
  },
  bottomCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  fundsLabel: {marginVertical: 8},
  bottomCard: {
    height: 300,
    width: 160,
    backgroundColor: '#f4f4f4',
    borderRadius: 15,
    marginTop: 20,
    marginRight: 20,
    padding: 20,
  },
  itemSeparator: {width: 10},
}));
