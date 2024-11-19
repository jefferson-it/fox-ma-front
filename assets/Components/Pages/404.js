import { Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router";
import styles from "../../Styles/mainStyles";


export default function NotFound(){
    const history = useNavigate();
    return (
        <View style={styles.card}>
            <Text style={styles.textTitle}>Erro 404</Text>
            <Text style={styles.textDefault}>
                Erro 404, este erro ocorre quando o usuário solicita uma página inexistente, ou que foi deletada ou movida.
                {"\n"}
                <TouchableOpacity style={[styles.buttonDefault, styles.successButton]} onPress={()=> history(-1)}>
                    <Text style={styles.textDefault}>
                        Voltar atrás
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}