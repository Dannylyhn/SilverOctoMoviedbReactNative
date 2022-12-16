import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import popularMoviedata from './popular.json';



export default function HomeScreen({navigation}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      setData(popularMoviedata.results);
    }, []);

    const renderItem = ({ item }) => (
        <Item navigation={navigation} movieId={item.id} title={item.title} posterPath={item.poster_path} rating={item.vote_average} releaseDate={item.release_date} />
      );

    return (
      <View>
      <FlatList horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    )
}

const Item = ({ navigation, title, movieId, posterPath, rating, releaseDate}) => (
    <View style={styles.item}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Details", {movieId, posterPath})}>
      <Image style={styles.image}
        source={{
          uri:`https://image.tmdb.org/t/p/original${posterPath}`,
        }}
        />
      </TouchableWithoutFeedback>
        <Text onPress={() => navigation.navigate("Details", {movieId, posterPath})} style={styles.title}>
        {title}
      </Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.rating}>Release date: {releaseDate}</Text>
    </View>
  );

var deviceWidth = Dimensions.get("window").width;

var deviceHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ffffff',
      marginVertical: 0,
      marginHorizontal: 0,
      flex: 1,
      
    },
    title: {
      fontSize: 32,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    image: {
      width: deviceWidth,
      height: "85%",
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    rating: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    }
});