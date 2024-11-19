import { TextInput } from "react-native";
import styles from "../../../Styles/mainStyles";


export default function Input({value, change, type, secureKey, keyType, holder}){
    return <TextInput
        onChangeText={change}
        style={styles.input}
        placeholder={holder}
        keyboardType={keyType || "default"}
        textContentType={type || "none"}
        defaultValue={value}
        secureTextEntry={secureKey}/>
}