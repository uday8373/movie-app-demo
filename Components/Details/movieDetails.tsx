import React, {FunctionComponent} from 'react'
import { View } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import { HEIGHT } from '../../Utils/constants';
import DetailsComponent from './detailsComponent';

type props = {
  movie?: any,
  RBref: any
}

const MovieDetails: FunctionComponent<props> = ({movie, RBref}: props) => {
  
  const movieData = movie && movie.movies ? movie.movies.movie : null
 
  return (
    <View>
       <RBSheet
          ref={RBref}
          height={HEIGHT * 0.65}
          openDuration={250}
          customStyles={{
            container: {
              borderRadius: 10
            }
          }}
        >
          <DetailsComponent movie={movieData}/>
        </RBSheet>
    </View>
  )
}


export default MovieDetails