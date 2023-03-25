import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {Image} from 'react-native';

interface Props {
  imageURL: string;
  description: string;
}
const Hightlighted = ({imageURL, description}: Props) => {
  return (
    <Layout
      style={{
        width: 200,
        height: 250,
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 5,
        marginTop: 20,
        marginRight: 20,
      }}>
      <Image
        resizeMode="cover"
        style={{
          width: 200,
          height: 90,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        }}
        source={{uri: imageURL}}
      />
      <Layout style={{flex: 1, justifyContent: 'space-between', margin: 10}}>
        <Text category={'p1'}>{description}</Text>
        <Layout>
          <Text
            style={{
              textDecorationLine: 'underline',
            }}
            category={'p1'}>
            Read more
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Hightlighted;
