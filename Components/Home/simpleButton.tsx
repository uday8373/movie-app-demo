import React, {FunctionComponent} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { WIDTH, COLORS, FONT } from '../../Utils/constants'

type props = {
  onBtnPress: () => void,
  title: string
}

const SimpleButton: FunctionComponent<props> = ({onBtnPress, title}: props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onBtnPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: WIDTH * 0.2,
    padding: 5,
    borderWidth: 3,
    borderColor: COLORS.WHITE,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: WIDTH * 0.02
  },
  title: {
    fontSize: FONT.SMALL,
    color: COLORS.WHITE,
    textTransform: 'uppercase'
  }
})

export default SimpleButton