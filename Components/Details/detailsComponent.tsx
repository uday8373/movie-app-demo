import React, {FunctionComponent} from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { HEIGHT, WIDTH } from '../../Utils/constants';

type props = {
  movie: any
}

const DetailsComponent: FunctionComponent<props> = ({movie}: props) => {
  return (
    <View style={styles.view}>
    <View style={styles.container}>
      <View>
        <Image source={{uri: movie && movie.poster}} style={styles.image} />
      </View>
      <View>
        <Text>{movie && movie.title}</Text>
      </View>
    </View>
    <Text>{movie && movie.overview}</Text>

    <ScrollView horizontal >
      {movie && movie.credits.cast.map(item => {
        return (
          <View style={{marginTop: 20}}>
            <Image source={{uri: item.value.profilePicture}} style={styles.dp}/>
          </View>
        )
      })}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: WIDTH * 0.08
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  image: {
    height: HEIGHT * 0.2,
    width: WIDTH * 0.3,
    marginBottom: HEIGHT * 0.03
  },
  dp: {
    height: HEIGHT * 0.09,
    width: HEIGHT * 0.09,
    borderRadius: HEIGHT * 0.09 /2,
    borderWidth: 1,
    marginHorizontal: 5
  }
})


export default DetailsComponent