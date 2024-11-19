import { Text, TouchableOpacity } from "react-native";
import styles from "../../../Styles/mainStyles";


export default function Button({title, action, style, styleText}){
    return (
        <TouchableOpacity onPress={action} style={[styles.buttonDefault, style]}>
            <Text style={[styles.textDefault, styleText]}>{title}</Text>
        </TouchableOpacity>
    )
}