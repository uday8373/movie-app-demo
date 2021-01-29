import React, { FunctionComponent } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { HEIGHT, WIDTH, FONT, COLORS } from '../../Utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import SimpleButton from './simpleButton';


type props = {
  image: string,
  title?: string
  category?: string,
  duration?: string
}

const BannerComponent: FunctionComponent<props> = ({image, title, category, duration}: props) => {

  const showAlert = () => {
    console.log("Pressed");
  }

  const BottomGradient = () => (
    <LinearGradient colors={['#ffffff00', '#00000026', '#000000a8']} style={styles.linearGradient}>
       <View style={styles.detailContainer}>
          <Text style={styles.titleFont}>{title}</Text>
          <Text style={[styles.titleFont, {fontWeight: 'normal', fontSize: FONT.SMALL}]}>2020 . Action/Sci-fi . 2h 30m</Text>
       </View>
        <SimpleButton onBtnPress={() => showAlert()} title="open" />
    </LinearGradient>
  )

  return (
    <View style={styles.container}>  
      <ImageBackground source={{uri: image}} style={styles.banner}>
        <BottomGradient />
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.07,
    width: WIDTH
  },
  banner: {
    height: HEIGHT * 0.75,
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleFont: {
    fontSize: FONT.LARGE,
    color: COLORS.WHITE,
    fontWeight: '800',
    textShadowOffset: {
      height: 1,
      width: 1
    },
    textShadowRadius: 10,
    textShadowColor: COLORS.BLACK,
    textAlign: 'center',
    marginBottom: HEIGHT * 0.01
  },
  detailContainer: {
    marginTop: HEIGHT * 0.55 
  },
  linearGradient: {
    //flex: 1,
    alignItems: 'center',
    height: HEIGHT * 0.75  ,
    width: WIDTH,
    borderRadius: 5,
    // marginBottom: -HEIGHT * 0.55  
  },
})

export default BannerComponent