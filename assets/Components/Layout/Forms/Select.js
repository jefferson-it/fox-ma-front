import Picker from "react-native-picker-select";
import styles from "../../../Styles/mainStyles";


export default function Input({holder, value, options, changeValue}){
    return <Picker placeholder={{label: holder}} style={{inputWeb: styles.select, inputAndroid: styles.select, viewContainer: styles.select,}} items={options} onValueChange={changeValue} value={value}/>
}