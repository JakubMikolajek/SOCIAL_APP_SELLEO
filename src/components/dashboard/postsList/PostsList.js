import {FlatList} from 'react-native'
import SinglePost from "./SinglePost";
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../../helpers/postDataHelpers";


const PostsList = () => {
    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});

    const post = postData.data

    post.reverse()

    const renderPost = (itemData) => {
        const item = itemData.item

        const postProps = {
            creatorId: item.creator_uuid,
            id: item.id,
            imageUrl: item.image_url,
            likes: item.likes,
            comments: item.comments
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