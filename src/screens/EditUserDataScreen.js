import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrentUser} from "../helpers/userDataHelpers";
import EditDataForm from "../components/forms/EditDataForm";
import {profileScreen} from "../stylesheets/screens/ProfileScreen";

const EditUserDataScreen = () => {
    const authCtx = useContext(AuthContext)
    const client = useQueryClient()
    const navigation = useNavigation()
    const mutation = useMutation({
        mutationFn: data => {
            return updateCurrentUser(authCtx.ownId, data.name, data.surname, data.imageUrl)
        },
        onError: () => {
            console.log('onError')
        },
        onSuccess: async () => {
            await client.invalidateQueries(
                ['loginUser']
            )
            navigation.goBack()
        },
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
    }


    return (
        <KeyboardAvoidingView style={profileScreen.container}
                              behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View style={[profileScreen.container, profileScreen.center]}>
                    <EditDataForm onSubmit={onSubmit}/>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}

export default EditUserDataScreen