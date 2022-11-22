import {FlatList, StyleSheet, Text, View} from 'react-native'
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";
import {useNavigation} from "@react-navigation/native";
import SingleGridItem from "./SingleGridItem";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

const GridPostList = () => {
    const queryClient = useQueryClient()
    const authCtx = useContext(AuthContext)
    const navigation = useNavigation()
    const {isLoading, data} = useQuery(['posts'], () => getPostsData())

    if (isLoading) {
        return null
    }

    const post = data.data

    const ownPost = post.filter((post) => post.creator_uuid === authCtx.ownId)



    const renderPost = (itemData) => {
        const item = itemData.item

        const users = queryClient.getQueryData(['users'])
        const usersData = users.data
        const user = usersData.find((user) => user.uuid === authCtx.ownId)

        const postProps = {
            imageUrl: item.image_url,
        }

        const userData = {
            userName: user.first_name,
            userSurname: user.last_name,
            userImg: user.image_url,
            userUuid: user.uuid
        }

        const pressHandler = () => {
            navigation.navigate("PostDetail", {
                userData,
                postId: itemData.item.id,
            })
        }

        return <SingleGridItem {...postProps} onPress={pressHandler}/>
    }

    return (
        <FlatList data={ownPost} keyExtractor={(item) => item.id} renderItem={renderPost} numColumns={3}/>
    )
}

export default GridPostList

const styles = StyleSheet.create({})