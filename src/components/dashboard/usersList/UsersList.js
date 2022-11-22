import {FlatList, StyleSheet, Text} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {AuthContext} from "../../../store/auth-context";
import {getUsersData} from "../../../hooks/userDataHooks";
import {useQueryClient} from "@tanstack/react-query";

const UsersList = () => {
    const navigation = useNavigation()
    const authCtx = useContext(AuthContext)
    const queryClient = useQueryClient()

    const data = queryClient.getQueryData(['users'])

    const users = data.data

    // const filter = users.find((user) => user.uuid === authCtx.ownId)

    // console.log(filter)

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