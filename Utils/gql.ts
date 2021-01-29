import { gql } from '@apollo/client';

export const TRENDING =  gql`
query {
  movies {
    trending(first: 10){
      edges{
        node {
          title
          overview
          releaseDate
          poster(size: W500)
          id
        }
      }
    }
  }
}
`

export const MOVIE_BY_ID = gql`
    query($id: Int!) {
        movies{
          movie(id: $id){
            title
          credits{
            cast {
              value {
                profilePicture(size: W45)
              }
            }
          }
          overview
          poster(size: W500)
          }
      }
    }`