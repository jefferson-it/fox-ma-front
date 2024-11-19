import { Dimensions, Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import { useLocation, useNavigate } from "react-router";
import styles from "../../Styles/mainStyles";



export default function FooterApp(){
    const location = useLocation();
    const history = useNavigate();

    return (
        <View style={[styles.viewContainer, styles.footerContainer, styles.flexRow]}>
            {location.pathname != "/cred" && <TouchableOpacity onPress={()=>history("/cred")} style={[styles.buttonDefault, styles.successButton, {width: (Dimensions.get("window").width * 25 / 100)}]}>
                <Text style={styles.textDefault}>Créditos</Text>
            </TouchableOpacity>}
            {location.pathname != "/" && <TouchableOpacity onPress={()=>history("/")} style={[styles.buttonDefault, styles.successButton, {width: (Dimensions.get("window").width * 25 / 100)}]}>
                <Text style={styles.textDefault}>Inicio</Text>
            </TouchableOpacity>}
            {
                Platform.select({
                    web: <TouchableOpacity onPress={()=> Linking.openURL("https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40jefferson.developer/FoxUSD-d55a927920cb4e0ab13951f464f05ac7-signed.apk ")} style={[styles.buttonDefault, styles.successButton, {width: (Dimensions.get("window").width * 25 / 100)}]}>
                            <Text style={styles.textDefault}>Android</Text>
                        </TouchableOpacity>,
                    default: <></>
                })
            }
        </View>
    )
}