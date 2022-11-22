import {Button, Text, View, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {centerScreen} from "../stylesheets/CenterScreen";
import {useState} from "react";

const CreatePostScreen = () => {
    const [image,setImage] = useState(null)

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log(result)

        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }
    return (
        <View style={centerScreen.container}>
            <Text>CreatePostScreen</Text>
            <View>
                <Button title="Get Image" onPress={pickImage}/>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </View>
    )
}

export default CreatePostScreen
