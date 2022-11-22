import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import {centerScreen} from "../stylesheets/CenterScreen";
import {useNavigation} from "@react-navigation/native";
import DataForm from "../components/forms/DataForm";
import {useContext} from "react";
import {AuthContext} from "../store/auth-context";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateCurrentUser} from "../helpers/userDataHelpers";

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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={centerScreen.container}
                                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={centerScreen.container}>
                    <DataForm onSubmit={onSubmit}/>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )

}

export default EditUserDataScreen

const styles = StyleSheet.create({})