import {Image,Text, View} from 'react-native'
import {singlePost} from "../../../stylesheets/components/dashboard/SinglePost";



const SinglePost = ({name, imageUrl, likes}) => {
    return (
        <View style={singlePost.outercontainer}>
            <View style={singlePost.container}>
                <Text style={singlePost.text}>{name}</Text>
                <View style={singlePost.image}>
                    <Image style={singlePost.image} source={{uri: imageUrl}}/>
                </View>
                <Text>{likes} likes</Text>
                <Text>Somebody: jjjjjjjjjjjjjjjjjjjjj</Text>
            </View>
        </View>
    )
}

export default SinglePost