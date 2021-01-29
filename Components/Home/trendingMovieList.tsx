import React, {FunctionComponent} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MovieCard from './movieCard'
import { HEIGHT, WIDTH, COLORS } from '../../Utils/constants';

type props = {
  movies: Array,
  onPress: (id: number) => void
}

const TrendingMovieList: FunctionComponent<props> = ({movies, onPress}: props) => {

  const EmptyList = () => {
    return (
      <View style={styles.empty}>
        <Text>No trending movies !</Text>
      </View>
    )
  }
  return (
    <FlatList 
      style={styles.list}
      horizontal
      data={movies}
      renderItem={({item}) => <MovieCard onPress={onPress} id={item.node.id} poster={item.node.poster}/>}
      ListEmptyComponent={<EmptyList />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    marginTop: HEIGHT * 0.63,
    marginHorizontal: WIDTH * 0.01 
  },
  empty: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.05,
    alignSelf: 'center',
    backgroundColor: COLORS.GRAY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TrendingMovieList