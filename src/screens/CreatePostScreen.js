import {Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../helpers/postDataHelpers";
import CreatePostForm from "../components/forms/CreatePostForm";
import {createPostScreen} from "../stylesheets/screens/CreatePostScreen";

const CreatePostScreen = ({navigation}) => {
    const client = useQueryClient()
    const mutation = useMutation({
        mutationFn: data => {
            return createPost(data.description, data.imageUrl)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async () => {
            await client.invalidateQueries((['posts']))
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
        navigation.navigate("OwnProfile")
    }

    return (

        <KeyboardAvoidingView style={createPostScreen.container}
                              behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SafeAreaView style={createPostScreen.innerContainer}>
                    <View style={createPostScreen.innerContainer}>
                        <CreatePostForm onSubmit={onSubmit}/>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default CreatePostScreen