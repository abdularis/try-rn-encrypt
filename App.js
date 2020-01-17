/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {RSA} from 'react-native-rsa-native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Crypto from './Crypto';



async function testMe4() {
  const pub = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1UzeDC5X7i/Iy5mSTtXi
w504SoaK9mMR/+Bu75ZIwJey+ZugUaqgToz9+e1PswJG2c6vA2P/NG7ne1STl9PY
ov99JGx0/3zTy4KxEhrJUUNLXwaKaAGQ0tLqiowpgl48W/VBXn0UGwxt5MSNY7Yt
6D40AfgK9kjBYDq8WjuJAlpdkTjOYUylNOLafrX4TDI4PBwLBr7U0q4zyE9lRnCq
g/qHvHSk/x5UjgnjqLRcpl8XqEqJJg1OJ/XG2mve9PXoyt605HKAdOi66TgK8i4A
FFdr4kWi+BMF7DPbAOTNQO5jsANBsNik8JvVy07rca5fqI6Z548o8E9Qili+EKaN
mQIDAQAB
-----END PUBLIC KEY-----
`;

  const priv = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1UzeDC5X7i/Iy5mSTtXiw504SoaK9mMR/+Bu75ZIwJey+Zug
UaqgToz9+e1PswJG2c6vA2P/NG7ne1STl9PYov99JGx0/3zTy4KxEhrJUUNLXwaK
aAGQ0tLqiowpgl48W/VBXn0UGwxt5MSNY7Yt6D40AfgK9kjBYDq8WjuJAlpdkTjO
YUylNOLafrX4TDI4PBwLBr7U0q4zyE9lRnCqg/qHvHSk/x5UjgnjqLRcpl8XqEqJ
Jg1OJ/XG2mve9PXoyt605HKAdOi66TgK8i4AFFdr4kWi+BMF7DPbAOTNQO5jsANB
sNik8JvVy07rca5fqI6Z548o8E9Qili+EKaNmQIDAQABAoIBAQCU1dgzI7tThqBU
AUroG7Lp0DDRP+SDXEnZBCAkqfcF/FR0e7V4htjpNtSZqo/sVvBdVy0j7ojLa3+2
vSNn0/jcc+48ljlldRLMdNtdyLclLxHOst+tBzqpAWeLWZY1U9BGUnJUnm6DGT8t
XEFUjHCoF49uuEfd5pKYtSNsyxIlQuYmXO1LqDFCnfxKQc53GMNh6MPl5RxCTFs8
Pv/M/GZroewuD1DYx3fxpSfqJyiKH2Bn2ds+du+HlgF6zYRTj7hZDliUOJzIVhed
Xo5TOzhDDmNRt6RZYark3RiSmdsw9JvtTYPDh5Beeg3+Ax3kNqOJmcMmBEQlMJbm
A3OBWzuhAoGBAPm5iApTQWr7XYG/E2q/Hkx7NBmB4FV1n4YKDh7amtKVFq4Vd5DP
IQXrL4FipdkFLuebtLxyhudbEiUwODtDwEpkyZ6uD6aJJPVoUvXYsob9SCh7pYa2
oncv2dWq3EMi1mup3ZQ8up3266sdy3xxtOyW2Nldisite60B9gHh9BD9AoGBANqp
BNbzYKNDL/iPovOzIGyg8LBPFp96NWuDuzwIAmKWC/HWCaLH9tqpATnNrk1BA4X2
KGVZCWWFZKZlc6cW/k9tjrlK23NZAwqNnNuWCsOh6/5JVLcR/YP8BjLLTKh3PQ6H
XXZF6h9ZYRjMEpxKxd7GWkOf+dynQIg19Sk6eK/NAoGAFtjupWMwnQUabQB6Wk3a
C81J2vuS9r6oNa8903zUpWeWh57XLZyFvPDji8bmvZBH1lDcnFEuHoSqiFR9EI8G
TMgj2iy6qdXqV7mPvYZx7v/FVk7ZuhWDj7wFBhN3y3yoeXk1GJblzAYHUcSMFXqh
vvOeK2TviaS1qAKB63IszlECgYEAxGO2ExF4pGo99bOcmeEyqB5Mzy3Zldb/j9c7
HYncCovVopmpAekzz+SnUzFm8cAI2BLk6VH03JfYdJL+Mv613sT5wXZ4b7tsvde/
III8nMUb3sIiMmMYHakIMCrkaRLfZeMykH3u78UpLkpsFLAb1CC3BbHzirk1fqFn
1mXL66kCgYALwLwB2DvoPnn8b0BECgSMy3Z7fZLjsOb3acX+4s52HWEBoBWI/JRh
HqOWAlt/UJtV4t+g+ZMIkaulM15gSCKqpuomXPZGWHq5VbnkFslSfdJWbFfr5maj
HelgCpxbpqjqHMnU/u2mLyol9XdqJQQiGgZ5NwM8bFUQeRv4b5u2rQ==
-----END RSA PRIVATE KEY-----
`;

  const data = 'hello world!!!';

  const encoded = await RSA.encrypt(data, pub);
  console.log(encoded);


  const encryptedData = `AzXYl2DQBQtyBCUeH2bt/mg2gR1WCODXLEYYayURpR0DDGApiUqeHfANsVjh5tLuS/iTij/2nfZSRyJQTj9HakAdz7+Xmwl6rasRN4i8sqwLtQu7Zue/wXVwRLRm5tFyDOnOOyozFov4zkvJRRMPpdVE00RdbXCnESb5+ZhvmHAOdkWTlT9XduJY6XLVEjacOOIOgTDi6xmDhabwy2at88l9hesEnCfFm0bCKYtKxqKMRbVCzPRJMuwgA+GOlhnCMp/X7mZU/+g6ZjvIv2InalKtzDLzGkbFHvqyu9SQEADnhFkDObQ98nB7/QJGKXKFbqvyAzZvxYT0iUSlR7Vhag==`;

  const decoded = await RSA.decrypt(encryptedData, priv);
  console.log(decoded);
}



async function testMe3() {
  const result = await Crypto.encryptDataFor('aris', 'this is secret hahaha');

  console.log('------------------------------- encrypt ------------------------------');
  console.log(result);


  const result2 = await Crypto.decryptDataFor('aris', result.encrypted);
  console.log('++++++++++++++++++++++++++++++ decrypt +++++++++++++++++++++++++++++++++');
  console.log(result2);
}

async function testMe2() {
  const message = '9000000';

  const keys = await RSA.generateKeys(4096);
  console.log('4096 private:', keys.private);
  console.log('4096 public:', keys.public);

  const encoded = await RSA.encrypt(message, keys.public);
  const signature = await RSA.sign(encoded, keys.private);

  console.log(`the encoded message is ${encoded}`);
  console.log(`message signature ${signature}`);

  const decoded = await RSA.decrypt(encoded, keys.private);
  console.log(`The original message was ${decoded}`);
}

async function testMe() {
  const message = 'my secret message';

  const keys = await RSA.generateKeys(4096);
  console.log('4096 private:', keys.private);
  console.log('4096 public:', keys.public);

  const encoded = await RSA.encrypt(message, keys.public);
  const signature = await RSA.sign(encoded, keys.private);

  console.log(`the encoded message is ${encoded}`);
  console.log(`message signature ${signature}`);

  const decoded = await RSA.decrypt(encoded, keys.private);
  console.log(`The original message was ${decoded}`);

  console.log(
    '======================================================================',
  );

  const verifResult = await RSA.verify(signature, encoded, keys.public);
  console.log(`message verif: ${verifResult}`);
}

class App extends React.Component {
  componentDidMount() {
    // testMe().then();
    testMe3().then();
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
