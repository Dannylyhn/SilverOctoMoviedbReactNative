import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@react-navigation/stack';
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import popularMoviedata from './popular.json';
import newsData from './Sample_Report.json'



export default function NewsScreen({navigation}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      setData(newsData.results);
    }, []);

    const renderItem = ({ item }) => (
        <Item navigation={navigation} title={item.title} />
      );

    return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    )
}

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    item: {
      backgroundColor: "#EEE",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 20,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    title: {
      fontSize: 32,
      textAlign: 'center',
      fontWeight: 'bold'
    },
});