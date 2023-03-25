import React from 'react';
import {Button, Icon, Layout, Text, withStyles} from '@ui-kitten/components';
import {LineChart, XAxis} from 'react-native-svg-charts';
import {ScrollView} from 'react-native';
import Hightlighted from '../components/Hightlighted';

const AssetScreen = ({route, eva}: any) => {
  const {data, value, variation} = route.params;
  const arrayValues = ['1h', '1d', '1w', '1y', 'All'];

  return (
    <Layout style={{flex: 1}}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text category={'h4'}>{value}</Text>
          <Text category={'h4'}>{2023}</Text>
        </Layout>
        <Layout style={eva.style.balanceInformation}>
          <Layout style={{flexDirection: 'row'}}>
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
        <Layout style={{flex: 1}}>
          <LineChart
            style={eva.style.chart}
            height={400}
            gridMin={0}
            gridMax={240}
            data={data}
            svg={{stroke: eva.theme['color-success-default'], strokeWidth: 3}}
            contentInset={{top: 0, bottom: 0, left: 10, right: 10}}
          />
          <XAxis
            style={{marginHorizontal: 0}}
            data={arrayValues}
            formatLabel={(label, index) => arrayValues[index]}
            contentInset={{left: 10, right: 10}}
            svg={{fontSize: 12, fill: '#5c5c5c'}}
          />
        </Layout>
        {/* INFO & STATS SECTION */}
        <Layout style={{flex: 1, marginTop: 20}}>
          <Text category={'h5'}>{'Info & Stats'}</Text>
          <Layout style={{flex: 1}}>
            <Layout
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  AUM
                </Text>
                <Text>$430.88m</Text>
              </Layout>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  Issue Date
                </Text>
                <Text>18/04/2022</Text>
              </Layout>
            </Layout>
            <Layout
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  Vintage Rage
                </Text>
                <Text>2019 - 2022</Text>
              </Layout>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  TER
                </Text>
                <Text>0.15%</Text>
              </Layout>
            </Layout>
            <Layout
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  Price at Close
                </Text>
                <Text>$17.68</Text>
              </Layout>
              <Layout style={{flex: 1}}>
                <Text category={'s1'} appearance="hint">
                  Price at Open
                </Text>
                <Text>17.74</Text>
              </Layout>
            </Layout>
          </Layout>
        </Layout>
        {/* FUND BREAKDOWN SECTION */}
        <Layout style={{flex: 1, marginVertical: 20}}>
          <Text category={'h5'}>{'Fund Breakdown'}</Text>
          <Layout
            style={{
              flex: 1,
              marginTop: 20,
            }}>
            <Layout
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Layout
                style={{
                  borderBottomColor: eva.theme['color-primary-default'],
                  borderBottomWidth: 2,
                  paddingBottom: 10,
                }}>
                <Text category={'h6'}>Highlighted</Text>
              </Layout>

              <Text category={'h6'} appearance="hint">
                Value
              </Text>

              <Text category={'h6'} appearance="hint">
                Vintage
              </Text>

              <Text category={'h6'} appearance="hint">
                Registry
              </Text>
            </Layout>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{flexDirection: 'row'}}>
              <Hightlighted
                imageURL="https://images.unsplash.com/photo-1664035584895-173a7c392dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                description="Introducing EcoCorp, a company that is dedicated to preserving and protecting the environment."
              />
              <Hightlighted
                imageURL="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                description="Introducing TechNow, a fictional tech company that specializes in innovative solutions for businesses and consumers."
              />
            </ScrollView>
          </Layout>
        </Layout>
        <Layout style={{flex: 1, marginVertical: 20}}>
          <Layout
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <Icon
              name="pie-chart-outline"
              style={{height: 30, width: 30, marginRight: 10}}
            />
            <Text category={'h5'}>Your Portfolio</Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text category={'h4'}>{'18 Credits'}</Text>
            <Text category={'h4'}>{value}</Text>
          </Layout>
          <Layout style={eva.style.balanceInformation}>
            <Layout style={{flexDirection: 'row'}}>
              <Icon
                fill={eva.theme['color-success-default']}
                style={eva.style.icon}
                name="diagonal-arrow-right-up-outline"
              />
              <Text category={'s2'} status="success">
                {variation}
              </Text>
            </Layout>
            <Text category={'s1'} appearance={'hint'}>
              Last purchased 28 days ago
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Button appearance={'outline'} style={{flex: 1}}>
              Sell
            </Button>
            <Layout style={{width: 10}} />
            <Button status={'success'} style={{flex: 1}}>
              Retire credits
            </Button>
          </Layout>
          <Text category={'s2'} appearance={'hint'}>
            You've previosly retired 28 credits of this asset
          </Text>
          <Layout
            style={{
              backgroundColor: '#f4f4f4',
              padding: 20,
              borderRadius: 5,
              marginVertical: 30,
            }}>
            <Text category={'p1'} appearance={'hint'}>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
            </Text>
            <Text category={'p1'} appearance={'hint'} style={{marginTop: 10}}>
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </Text>
          </Layout>
          <Button style={{width: '100%'}}>Buy</Button>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

export default withStyles(AssetScreen, () => ({
  chart: {height: 200, backgroundColor: 'white', flex: 1, padding: 10},
  icon: {width: 20, height: 20},
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
