import {ActivityIndicator, Text, View} from 'react-native'
import {GlobalStyles} from "../../constants/GlobalStyles";

const Loader = () => {
  return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <ActivityIndicator size="large" color={GlobalStyles.colors.primary100}/>
          <Text>Loading...</Text>
      </View>
  )
}

export default Loader
