import React, {FunctionComponent} from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { WIDTH, HEIGHT } from '../../Utils/constants'

type props = {
  poster: string,
  id: number,
  onPress: (id: number) => void
}

 const MovieCard: FunctionComponent<props> = ({poster, id, onPress}: props) => {   
  return (
    <TouchableOpacity key={id} onPress={() => onPress(id)} style={styles.container}>
      <Image source={{uri: poster}} style={styles.image}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.25,
    marginHorizontal: WIDTH * 0.02,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 5
  },
  image: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.22,
    borderRadius: 15,
  }
})

export default MovieCard