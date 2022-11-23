import {ActivityIndicator, FlatList} from 'react-native'
import SinglePost from "./SinglePost";
import {useQuery} from "@tanstack/react-query";
import {getPostsData} from "../../helpers/postDataHelpers";
import {getUsersData} from "../../helpers/userDataHelpers";
import {GlobalStyles} from "../../constants/GlobalStyles";

const OwnPostsList = ({userId}) => {
    const {isLoading: isPostLoading, data: postData} = useQuery(['posts'], () => getPostsData());
    const {isLoading: isUserLoading,} = useQuery(['users'], () => getUsersData());

    if (isPostLoading || isUserLoading) {
        return <ActivityIndicator  size="large" color={GlobalStyles.colors.primary100}/>
    }

    const post = postData.data

    const ownPost = post.filter((post) => post.creator_uuid === userId)

    const renderPost = (itemData) => {
        const item = itemData.item

        const postProps = {
            creatorId: item.creator_uuid,
            id: item.id,
            imageUrl: item.image_url,
            likes: item.likes
        }

        return <SinglePost {...postProps}/>
    }
    return (
        <FlatList data={ownPost} keyExtractor={(item) => item.id} renderItem={renderPost}
                  showsVerticalScrollIndicator={false}/>
    )
}

export default OwnPostsList