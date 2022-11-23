import {FlatList, View} from 'react-native'
import SingleComment from "./SingleComment";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";


const CommentsList = ({comments}) => {

    const renderComments = (itemData) => {
        const item = itemData.item

        const commentProps = {
            body: item.body,
            creatorId: item.creator_uuid,
            id: item.id
        }
        return <SingleComment {...commentProps}/>
    }

    return (
        <>
            <View style={dashboardStyles.comments.container}>
                <FlatList data={comments} keyExtractor={(comment) => comment.id} renderItem={renderComments}/>
            </View>
        </>
    )
}

export default CommentsList