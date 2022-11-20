import {Text, TextInput, View} from 'react-native'

import {input} from "../../stylesheets/components/ui/Input";

const Input = ({onBlur, onChange, value, keyboardType, placeholder, secureTextEntry, errors}) => {
    return (
        <View style={input.inputContainer}>
            <Text style={[input.text, errors && input.textInvalid]}>{placeholder}</Text>
            <TextInput
                style={[input.input, errors && input.inputInvalid]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default Input