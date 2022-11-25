import {Image, StyleSheet, View} from 'react-native'

const ListOfPost = ({imageUrl}) => {
  return (
    <View style={styles.image}>
      <Image style={styles.image} source={{uri: imageUrl}}/>
    </View>
  )
}

export default ListOfPost

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        margin:5
    }
})