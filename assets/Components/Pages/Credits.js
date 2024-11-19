import { View, Text, TouchableOpacity, Linking, Image } from "react-native";
import styles from "../../Styles/mainStyles";


export default function Credits(){
    return (
        <View style={styles.card}>
            <Text style={styles.textTitle}>FOX MONEY ANALYTICS</Text>
            <Text style={styles.textDefault}>
                Aplicativo criado por  
                    <TouchableOpacity onPress={()=> Linking.openURL("https://www.instagram.com/jeff.silva_souza")} style={styles.link}>
                        <Text style={styles.link}> Jefferson Silva</Text>
                    </TouchableOpacity>; Com o simples objetivo de treinar a comunicação entre o front end e uma API pública.
                {"\n"}
                Este simples app converte uma determinada moeda estrangeira para real brasileiro(visse versa).
                {"\n"}
                <TouchableOpacity style={styles.link} onPress={()=> Linking.openURL("https://jefferson-developer.herokuapp.com")}>
                    <Text style={styles.link}>
                        Conheça mais projetos feito por mim!! 😉
                    </Text>
                </TouchableOpacity>
            </Text>
            <TouchableOpacity onPress={()=> Linking.openURL("https://www.instagram.com/jeff.silva_souza")}>
                <Image style={styles.iconMe} source={require("../../Img/1650734596771.jpg")}/>
            </TouchableOpacity>
        </View>
    )
}