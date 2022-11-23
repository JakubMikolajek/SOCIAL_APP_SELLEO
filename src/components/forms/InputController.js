import {Text, View} from 'react-native'
import {Controller} from "react-hook-form";
import Input from "../UI/Input";

import {formsStyles} from "../../stylesheets/components/formsStyles";

const InputController = ({control, errors, placeholder, name, keyboardType, secureTextEntry}) => {
    return (
        <View style={formsStyles.controlContainer}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={secureTextEntry}
                        errors={errors}
                    />
                )}
                name={name}
            />
            <View style={formsStyles.errorContainer}>
                {errors && <Text style={formsStyles.errorMessage}>{errors?.message}</Text>}
            </View>
        </View>
    )
}

export default InputController