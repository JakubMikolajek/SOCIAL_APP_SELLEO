import {FlatList} from 'react-native'
import SinglePost from "./SinglePost";
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";


const PostsList = () => {
    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});

    const post = postData.data

    const renderPost = (itemData) => {
        const item = itemData.item

        const lastComment = item.comments[item.comments.length-1]

        const postProps = {
            creatorId: item.creator_uuid,
            id: item.id,
            imageUrl: item.image_url,
            comments: lastComment,
            likes: item.likes
        }

        return <SinglePost {...postProps}/>
    }
    return (
        <FlatList data={post} keyExtractor={(item) => item.id}
                  renderItem={renderPost}
                  showsVerticalScrollIndicator={false}/>
    )
}

export default PostsList