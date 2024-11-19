import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import FooterApp from './assets/Components/Layout/Footer';
import NotFound from './assets/Components/Pages/404';
import Credits from './assets/Components/Pages/Credits';
import HomePage from './assets/Components/Pages/Main';
import styles from './assets/Styles/mainStyles';
import {useFonts, FiraSansExtraCondensed_500Medium} from "@expo-google-fonts/dev"
import AppLoading from 'expo-app-loading';
import DocumentMeta from 'react-document-meta';

export default function App() {
  const [fontsLoaded] = useFonts({
    FiraSansExtraCondensed_500Medium,
  });
  const meta = {
    meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags,fox,dolar,money,economy',
        },
    }
  }
  
  return !fontsLoaded? <AppLoading/>: (
    <NativeRouter>
        <DocumentMeta {...meta}/>
        <View style={styles.viewContainer}>
          <StatusBar style="auto" hidden={true} />
          
          <ScrollView showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>

            <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/cred' element={<Credits/>}/>
              <Route path='*' element={<NotFound/>}/>

            </Routes>

          </ScrollView>
          
          <FooterApp/>

        </View>
    </NativeRouter>
  );
}
