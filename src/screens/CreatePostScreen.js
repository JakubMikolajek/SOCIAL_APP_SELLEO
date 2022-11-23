import {Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {centerScreen} from "../stylesheets/CenterScreen";
import CreatePostForm from "../components/forms/CreatePostForm";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../helpers/postDataHelpers";

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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container}
                                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SafeAreaView>
                    <View style={centerScreen.container}>
                        <CreatePostForm onSubmit={onSubmit}/>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default CreatePostScreen
