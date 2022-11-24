import {FlatList} from 'react-native';
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";
import SingleGridItem from "./SingleGridItem";

const GridPostList = ({userId}) => {

    const {isLoading, data} = useQuery(['posts'], () => getPostsData())
    const post = data.data
    const ownPost = post.filter((post) => post.creator_uuid === userId)

    if (isLoading) {
        return null
    }

    const renderPost = (itemData) => {
        const item = itemData.item

        const countLikes = item.likes.length

        const postProps = {
            creatorId: item.creator_uuid,
            id: item.id,
            imageUrl: item.image_url,
            likes: countLikes

        }

        return <SingleGridItem {...postProps} />
    }

    return (
        <FlatList data={ownPost} keyExtractor={(item) => item.id} renderItem={renderPost} numColumns={3}/>
    )
}

export default GridPostList

