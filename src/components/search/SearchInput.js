import {StyleSheet, TextInput, View} from 'react-native'

const SearchInput = ({search}) => {
  return (
    <View>
        <TextInput placeholder="Search..." onChangeText={e => search(e)}/>
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({})