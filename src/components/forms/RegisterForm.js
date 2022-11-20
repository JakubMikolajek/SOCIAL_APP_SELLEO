import {Button, View} from 'react-native'
import {useForm} from "react-hook-form";
import * as yup from "yup"
import InputController from "./InputController";
import {yupResolver} from "@hookform/resolvers/yup";

import {GlobalStyles} from "../../constants/GlobalStyles";
import {registerForm} from "../../stylesheets/components/forms/RegisterForm";

const validation = yup.object().shape({
    email: yup.string().required("Email is required").email("Email must contain @"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Passwords must match")
})

const RegisterForm = ({onSubmit}) => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validation),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
    return (
        <View style={registerForm.container}>
            <InputController
                control={control}
                name="email"
                keyboardType="email-address"
                placeholder="Email"
                errors={errors.email}
            />

            <InputController
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                errors={errors.password}
            />

            <InputController
                control={control}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry={true}
                errors={errors.confirmPassword}
            />
            <View style={registerForm.buttonContainer}>
                <Button color={GlobalStyles.colors.primary200} title="Register" onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    )
}

export default RegisterForm