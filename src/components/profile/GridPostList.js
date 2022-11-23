import {FlatList} from 'react-native';
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";
import SingleGridItem from "./SingleGridItem";

const GridPostList = ({userId}) => {

    const {isLoading, data} = useQuery(['posts'], () => getPostsData())

    if (isLoading) {
        return null
    }

    const post = data.data
    const ownPost = post.filter((post) => post.creator_uuid === userId)

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

