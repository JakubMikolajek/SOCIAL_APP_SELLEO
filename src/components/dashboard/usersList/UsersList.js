import {FlatList, StyleSheet, Text} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {AuthContext} from "../../../store/auth-context";
import {useQuery} from "@tanstack/react-query";
import {client} from "../../../utils/supabase";

const UsersList = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext)

    const {isLoading, data, error, isFetching} = useQuery(['users'],() =>
        client.from("users").select("*")
     )

    if(isLoading) return <Text>Loading...</Text>

    const users = data.data

    const renderUser = (itemData) => {
        const item = itemData.item

        const userProps = {
            name: item.first_name,
            surname: item.last_name,
            imageUrl: item.image_url
        }

        const pressHandler = () => {
            navigation.navigate("Profile", {
                userId: itemData.item.uuid
            })
        }
        return <SingleUser {...userProps} onPress={pressHandler}/>
    }
    return (
        <FlatList style={styles.form} data={users} keyExtractor={(item) => item.uuid} renderItem={renderUser} horizontal={true}
                  showsHorizontalScrollIndicator={false}/>
    )
}

export default UsersList

const styles = StyleSheet.create({
    form:{
        alignSelf: "flex-start"
    }
})