import {
  Avatar,
  Button,
  Icon,
  Layout,
  Text,
  withStyles,
} from '@ui-kitten/components';
import React from 'react';

const Header = ({eva}: any) => {
  return (
    <Layout style={eva.style.wrapper}>
      <Layout style={eva.style.container}>
        <Avatar
          style={eva.style.avatar}
          source={{uri: 'https://pic.onlinewebfonts.com/svg/img_173956.png'}}
        />
        <Text category={'label'} style={eva.style.textStyle}>
          Account: $1,457.23
        </Text>
        <Icon name="bell-outline" style={eva.style.iconStyle} />
      </Layout>
      <Layout style={eva.style.balanceWrapper}>
        <Text>Portfolio</Text>
        <Layout style={eva.style.balanceContainer}>
          <Layout style={eva.style.balanceInformation}>
            <Text category={'h5'}>$1,245.23</Text>
            <Icon
              fill={eva.theme['color-success-default']}
              style={{width: 20, height: 20}}
              name="diagonal-arrow-right-up-outline"
            />
            <Text category={'s2'} status="success">
              31.82%
            </Text>
          </Layout>
          <Button status={'primary'} size="small" appearance={'outline'}>
            <Text>$ Earn Rewards</Text>
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withStyles(Header, () => ({
  wrapper: {
    display: 'flex',
    flex: 1,
    maxHeight: 140,
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 90,
  },
  balanceWrapper: {
    flex: 1,
    marginVertical: 20,
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
  iconStyle: {
    height: 40,
    width: 40,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  textStyle: {
    fontSize: 16,
  },
}));
