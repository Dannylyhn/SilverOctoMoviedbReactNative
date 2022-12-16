import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '@react-navigation/stack';
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import popularMoviedata from './popular.json';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailsScreen({route}) {
    const [data, setData] = useState({});

    const { movieId } = route.params;


    useEffect(()=>{
      console.log(data);
    });

    useEffect(() => {
      getMovieDetails();
    }, []);

      const getMovieDetails = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=0a62ad33bf1055feb628ea894759e93b&language=en-US`
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image}
        source={{
          uri:`https://image.tmdb.org/t/p/original${data.poster_path}`,
        }}
        />
        <ScrollView>
        <Text style={styles.releaseDate}>Release date:</Text>
        <Text style={styles.releaseDateText}>{data.release_date}</Text>
        <Text style={styles.underTitle}>Description</Text>
        <Text>{data.overview}</Text>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#EEE",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 32,
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: 10
    },
    underTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
      },
    image: {
      width: 300,
      height: 500,
      resizeMode: "center"
    },
    releaseDate:{
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    releaseDateText:{
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 2,
    }
});
