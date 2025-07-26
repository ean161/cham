import { SafeAreaView, View, Text, ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";

const Home = ({}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.header.icon}>
                    <Image resizeMode="cover" source={require("../../assets/img/icon.gif")} style={styles.header.icon.src}/>
                </View>
                <Text style={styles.header.text}>Chạm</Text>
            </View>
        </View>
    )
}

export default Home;