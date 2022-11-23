import {Button, View} from 'react-native'
import {useForm} from "react-hook-form";
import InputController from "./InputController";
import {formsStyles} from "../../stylesheets/components/formsStyles";
import {GlobalStyles} from "../../constants/GlobalStyles";

const EditDataForm = ({onSubmit}) => {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            surname: "",
            imageUrl: ""
        }
    })
    return (
        <View style={formsStyles.container}>
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
            <InputController
                control={control}
                name="imageUrl"
                placeholder="ImageUrl"
                errors={errors.imageUrl}
            />
            <View style={formsStyles.buttonContainer}>
                <Button color={GlobalStyles.colors.primary200} title="Update" onPress={handleSubmit(onSubmit)}/>
            </View>
        </View>
    )
}

export default EditDataForm