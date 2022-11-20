import {FlatList} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import SinglePost from "./SinglePost";

import {DUMMY_POST} from "../../../../DUMMY_DATA/dummy-data";

const PostsList = () => {
    const navigation = useNavigation()

    const renderPost = (itemData) => {
        const item = itemData.item

        const postProps = {
            name: item.name,
            imageUrl: item.imageUrl,
            likes: item.likes
        }

        const pressHandler = () => {
            console.log("Działa")
        }
        return <SinglePost {...postProps} onPress={pressHandler}/>
    }
    return (
        <FlatList data={DUMMY_POST} keyExtractor={(item) => item.id} renderItem={renderPost}
                  showsVerticalScrollIndicator={false}/>
    )
}

export default PostsList