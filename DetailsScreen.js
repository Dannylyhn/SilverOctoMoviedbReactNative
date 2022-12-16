import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
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
      <ScrollView>
        <View style={{alignItems: "center", justifyContent: "center",}}>
        <Text style={styles.title}>{data.title}</Text>
        <Image style={styles.image}
        source={{
          uri:`https://image.tmdb.org/t/p/original${data.poster_path}`,
        }}
        />
        
        <Text style={styles.releaseDate}>Release date:</Text>
        <Text style={styles.releaseDateText}>{data.release_date}</Text>
        <Text style={styles.rating}>Rating:</Text>
        <Text style={styles.ratingText}>{data.vote_average}</Text>
        <Text style={styles.underTitle}>Description</Text>
        <Text style={styles.descriptionText}>{data.overview}</Text>
        </View>
        </ScrollView>

    )
}

var deviceWidth = Dimensions.get("window").width;

var deviceHeight = Dimensions.get("window").height;

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
      width: deviceWidth/1.3,
      height: deviceHeight/1.6,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
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
    },
    descriptionText:{
      fontSize: 20,
      paddingLeft: 15,
      paddingRight: 15,
    },
    rating:{
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    ratingText:{
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 2,
    }


});
