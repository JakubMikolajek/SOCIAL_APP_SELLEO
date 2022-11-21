import {Button, StyleSheet, Text, View} from 'react-native'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {loginForm} from "../../stylesheets/components/forms/LoginForm";
import InputController from "./InputController";
import {GlobalStyles} from "../../constants/GlobalStyles";
import * as yup from "yup";

const validation = yup.object().shape({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required")
});

const DataForm = ({onSubmit}) => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            name: "",
            surname: "",
        }
    })
    return (
        <View style={loginForm.container}>
            <InputController
                control={control}
                name="name"
                placeholder="Name"
                errors={errors.name}
            />

            <InputController
                control={control}
                name="surname"
                placeholder="Surname"
                errors={errors.surname}
            />
            <View style={loginForm.buttonContainer}>
                <Button color={GlobalStyles.colors.primary200} title="Update" onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    )
}

export default DataForm

const styles = StyleSheet.create({})