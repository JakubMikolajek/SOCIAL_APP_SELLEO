import {FlatList, Text} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import SinglePost from "./SinglePost";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPostsData} from "../../../helpers/postDataHelpers";
import {getUsersData} from "../../../helpers/userDataHelpers";

import {dashboardStyles} from "../../../stylesheets/components/dashboardStyles";

const PostsList = () => {
    const navigation = useNavigation()
    const queryClient = useQueryClient()

    const {isLoading: isPostLoading, data: postData} = useQuery(['posts'], () => getPostsData());
    const {isLoading: isUserLoading, data: userData} = useQuery(['users'], () => getUsersData());

    if (isPostLoading || isUserLoading) {
        return <Text>Loading</Text>
    }

    const post = postData.data
    const user = userData.data

    const renderPost = (itemData) => {
        const item = itemData.item

        const users = queryClient.getQueryData(['users'])
        const usersData = users.data
        const user = usersData.find((user) => user.uuid === item.creator_uuid)

        const postProps = {
            name: user.first_name,
            imageUrl: item.image_url,
            likes: item.likes
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
        return <SinglePost {...postProps} onPress={pressHandler}/>
    }
    return (
        <FlatList style={dashboardStyles.singlePost.form} data={post} keyExtractor={(item) => item.id} renderItem={renderPost}
                  showsVerticalScrollIndicator={false}/>
    )
}

export default PostsList