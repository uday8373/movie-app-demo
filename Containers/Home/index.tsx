import React, { FunctionComponent, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import BannerComponent from '../../Components/Home/BannerComponent';
import TrendingMovieList from '../../Components/Home/trendingMovieList';
import { useQuery, useLazyQuery } from '@apollo/client';
import { TRENDING, MOVIE_BY_ID } from '../../Utils/gql';
import MovieDetails from '../../Components/Details/movieDetails';

interface Props {
  showDetails: (id: number) => void
}

const Home: FunctionComponent<Props> = ({showDetails}) => {
  let RBref = useRef<any>(null)
  const {data} = useQuery(TRENDING)
  const[getDetails, {data: detailsData}] = useLazyQuery(MOVIE_BY_ID)
 
  showDetails = (id) => {
    getDetails({variables:{id}})
    if(RBref.current){
      RBref.current.open()
    }
  }
  const trending = data && data.movies ? data.movies.trending.edges : []
  const randomNumber = Math.floor(Math.random() * 10); 
  const chooseRandomAsBanner = trending && trending[randomNumber] ? trending[randomNumber].node : ''

  return (
    <View style={styles.container}>
      <BannerComponent image={chooseRandomAsBanner.poster} title={chooseRandomAsBanner.title}/>
      <TrendingMovieList onPress={(id: number) => showDetails(id)} movies={trending}/>
      <MovieDetails RBref={RBref} movie={detailsData}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home