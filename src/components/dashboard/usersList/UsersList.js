import {FlatList, StyleSheet} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";

import {DUMMY_DATA} from "../../../../DUMMY_DATA/dummy-data";

const UsersList = () => {
    const navigation = useNavigation()
    const renderUser = (itemData) => {
        const item = itemData.item

        const userProps = {
            name: item.name,
            surname: item.surname,
            imageUrl: item.imageUrl
        }

        const pressHandler = () => {
            navigation.navigate("Profile", {
                uuid: itemData.item.uuid
            })
        }
        return <SingleUser {...userProps} onPress={pressHandler}/>
    }
    return (
        <FlatList style={styles.form} data={DUMMY_DATA} keyExtractor={(item) => item.uuid} renderItem={renderUser} horizontal={true}
                  showsHorizontalScrollIndicator={false}/>
    )
}

export default UsersList

const styles = StyleSheet.create({
    form:{
        alignSelf: "flex-start"
    }
})