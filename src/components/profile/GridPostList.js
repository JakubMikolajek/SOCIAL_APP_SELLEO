import {FlatList, StyleSheet} from 'react-native'
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";

import SingleGridItem from "./SingleGridItem";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

const GridPostList = () => {
    const authCtx = useContext(AuthContext)

    const {isLoading, data} = useQuery(['posts'], () => getPostsData())

    if (isLoading) {
        return null
    }

    const post = data.data
    const ownPost = post.filter((post) => post.creator_uuid === authCtx.ownId)

    const renderPost = (itemData) => {
        const item = itemData.item

        const postProps = {
            creatorId: item.creator_uuid,
            id: item.id,
            imageUrl: item.image_url,
        }

        return <SingleGridItem {...postProps} />
    }

    return (
        <FlatList data={ownPost} keyExtractor={(item) => item.id} renderItem={renderPost} numColumns={3}/>
    )
}

export default GridPostList

const styles = StyleSheet.create({})