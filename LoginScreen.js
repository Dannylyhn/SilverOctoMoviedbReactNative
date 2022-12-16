import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native';


export default function LoginForm({navigation}) {

    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:20, paddingBottom:10}}>Login</Text>
        <TextInput
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.input}
          secureTextEntry={true}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
      
  
    },
  });