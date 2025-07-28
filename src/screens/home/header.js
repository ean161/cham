import { View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from "./styles";
import { RED_COLOR } from "../../utils/const";

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header.icon}>
                <Image resizeMode="cover" source={require("../../assets/img/loading.gif")} style={styles.header.icon.src} />
            </View>
            <Text style={styles.header.text}>Chạm</Text>
            <View style={styles.header.icons}>
                <View style={styles.header.icons.icon}>
                    <Icon style={styles.header.icons.icon.src} name="pen" />
                </View>
                <View style={styles.header.icons.icon}>
                    <Icon style={styles.header.icons.icon.src} name="plus" />
                </View>
                <View style={styles.header.icons.icon}>
                    <Icon style={[styles.header.icons.icon.src, {color: RED_COLOR}]} name="arrow-right-from-bracket" />
                </View>
            </View>
        </View>
    );
}

export default Header;