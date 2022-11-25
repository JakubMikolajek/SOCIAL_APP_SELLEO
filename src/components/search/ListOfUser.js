import {Image, StyleSheet, Text, View} from 'react-native'

const ListOfUser = ({imageUrl,name, surname}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={imageUrl ? {uri: imageUrl} : require("../../constants/profile-logo.png")}/>
      <Text>{name} {surname}</Text>
    </View>
  )
}

export default ListOfUser

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius: 25
    },
    container: {
        flexDirection: "row",
        alignItems:"center",
        marginLeft:10,
        marginBottom: 10
    }
})