import { StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import popularMoviedata from './popular.json';



export default function HomeScreen({navigation}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      setData(popularMoviedata.results);
    }, []);

    const renderItem = ({ item }) => (
        <Item navigation={navigation} movieId={item.id} title={item.title} posterPath={item.poster_path} />
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

const Item = ({ navigation, title, movieId, posterPath}) => (
    <View style={styles.item}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Details", {movieId,})}>
      <Image style={styles.image}
        source={{
          uri:`https://image.tmdb.org/t/p/original${posterPath}`,
        }}
        />
      </TouchableWithoutFeedback>
        <Text onPress={() => navigation.navigate("Details", {movieId, posterPath})} style={styles.title}>
        {title}
      </Text>
    </View>
  );


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
      fontWeight: 'bold'
    },
    image: {
      width: 330,
      height: "90%"
    }
});