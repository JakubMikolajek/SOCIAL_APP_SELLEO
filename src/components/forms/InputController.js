import {Text} from 'react-native'
import {Controller} from "react-hook-form";
import Input from "../UI/Input";

import {inputController} from "../../stylesheets/components/forms/InputController";

const InputController = ({control, errors, placeholder, name, keyboardType, secureTextEntry}) => {
    return (
        <>
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
            {errors && <Text style={inputController.errorMessage}>{errors?.message}</Text>}
        </>
    )
}

export default InputController