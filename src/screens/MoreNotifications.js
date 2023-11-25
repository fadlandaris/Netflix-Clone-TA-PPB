import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import * as Device from 'expo-device';
import { colors, fonts, gStyle } from '../constants';

// components
import Header from '../components/Header';
import TouchLineItemApp from '../components/TouchLineItemApp';
import TouchLineItemElement from '../components/TouchLineItemElement';

// icons
import SvgTrash from '../icons/Svg.Trash';

const alertDeleteDownloads = () => {
  Alert.alert(
    'Delete All Downloads',
    'Are you sure you want to delete this one download?',
    [
      {
        text: 'Cancel'
      },
      {
        style: 'destructive',
        text: 'Delete'
      }
    ],
    {
      cancelable: false
    }
  );
};

function AppSettings() {
  let deviceType = 'Unknown Device';

  // is iOS?
  if (typeof Device.modelName !== 'undefined') {
    deviceType = Device.modelName;
  }

  return (
    <ScrollView bounces={false} style={gStyle.container}>
      <Header bg={colors.headerBarBg} showBack title="Developer Profile" />
      
      <View style={{ justifyContent:'center', alignItems:'center' }}>
      <Image
        style={styles.image}
        source={require('../assets/images/fadlan-pas-foto.png')}
      />
    </View>

      <TouchLineItemApp
        onPress={() => null}
        tagline="21120121140146"
        text="Muhammad Fadlan Daris"
      />

      <View style={styles.containerHeading}>
        <Text style={styles.heading}>sebuah aplikasi clone netflix yang dibuat menggunakan :</Text>
      </View>
      

      <View>
        <Text style={styles.heading}>
          Node.js : 14.18.1 v
        </Text>
        <Text style={styles.heading}>
          Expo : 6.3.10 v
        </Text>
        <Text style={styles.heading}>
          npm & npx : 6.14.15 V
        </Text>
      </View>


      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerHeading: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  heading: {
    color: colors.moreSectionText,
    fontFamily: fonts.light,
    fontSize: 16,
    textTransform: 'uppercase'
  },
  containerDevice: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
    paddingVertical: 8
  },
  deviceText: {
    color: colors.moreDeviceText
  },
  containerStorage: {
    backgroundColor: colors.moreFree,
    flexDirection: 'row',
    height: 10,
    marginVertical: 8,
    width: '100%'
  },
  storageUsed: {
    backgroundColor: colors.moreUsed,
    height: '100%',
    width: '24%'
  },
  storageNetflix: {
    backgroundColor: colors.moreBlue,
    height: '100%',
    width: '4%'
  },
  containerIndex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerIndexBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indexBlock: {
    height: 10,
    marginRight: 10,
    width: 10
  },
  storage: {
    backgroundColor: colors.moreFree
  },
  used: {
    backgroundColor: colors.moreUsed
  },
  netflix: {
    backgroundColor: colors.moreBlue
  },
  image:{
    height:100,
    width:100,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default AppSettings;
