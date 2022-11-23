import {ActivityIndicator, FlatList, View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import SinglePost from "./SinglePost";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPostsData} from "../../../helpers/postDataHelpers";
import {getUsersData} from "../../../helpers/userDataHelpers";

import {dashboardStyles} from "../../../stylesheets/components/dashboardStyles";
import {GlobalStyles} from "../../../constants/GlobalStyles";

const PostsList = () => {
    const navigation = useNavigation()
    const queryClient = useQueryClient()

    const {isLoading: isPostLoading, data: postData} = useQuery(['posts'], () => getPostsData());
    const {isLoading: isUserLoading} = useQuery(['users'], () => getUsersData());

    if (isPostLoading || isUserLoading) {
        return <ActivityIndicator  size="large" color={GlobalStyles.colors.primary100}/>
    }

    const post = postData.data

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
        <FlatList style={dashboardStyles.singlePost.form} data={post} keyExtractor={(item) => item.id}
                  renderItem={renderPost}
                  showsVerticalScrollIndicator={false}/>
    )
}

export default PostsList