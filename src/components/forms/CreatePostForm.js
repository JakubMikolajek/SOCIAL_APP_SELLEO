import {Button, StyleSheet, View} from 'react-native'
import {useForm} from "react-hook-form";
import {formsStyles} from "../../stylesheets/components/formsStyles";
import InputController from "./InputController";
import {GlobalStyles} from "../../constants/GlobalStyles";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const validation = yup.object().shape({
    description: yup.string().required("Description is required"),
});

const CreatePostForm = ({onSubmit}) => {
    const {control, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            description: "",
            imageUrl: ""
        }
    })


    return (
        <View style={formsStyles.container}>
            <InputController
                control={control}
                name="description"
                placeholder="Description"
                errors={errors.description}
            />
            <InputController
                control={control}
                name="imageUrl"
                placeholder="ImageUrl"
                errors={errors.imageUrl}
            />
            <View style={formsStyles.buttonContainer}>
                <Button color={GlobalStyles.colors.primary200} title="Create Post" onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    )
}

export default CreatePostForm

const styles = StyleSheet.create({})