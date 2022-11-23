import {Dimensions, FlatList, StyleSheet, View} from 'react-native'
import SingleComment from "./SingleComment";

const windowHeight = Dimensions.get("window").height

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
            <View style={styles.container}>
                <FlatList data={comments} keyExtractor={(comment) => comment.id} renderItem={renderComments}/>
            </View>
        </>
    )
}

export default CommentsList

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 0.3
    }
})