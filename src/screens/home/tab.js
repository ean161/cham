import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { GRAY_COLOR } from "../../utils/const";

const Tab = ({tab, setTab}) => {
    return (
        <View style={styles.tab}>
            <Pressable
                style={[
                    styles.tab.item,
                    tab == "post" ? { backgroundColor: GRAY_COLOR } : {}
                ]}
                onPress={() => {
                    setTab("post");
                }}>
                <Text style={styles.tab.item.text}>Bài đăng</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.tab.item,
                    tab == "scan" ? { backgroundColor: GRAY_COLOR } : {}
                ]}
                onPress={() => {
                    setTab("scan");
                }}>
                <Text style={styles.tab.item.text}>Gần đây</Text>
            </Pressable>
            <Pressable
                style={[
                    styles.tab.item,
                    tab == "room" ? { backgroundColor: GRAY_COLOR } : {}
                ]}
                onPress={() => {
                    setTab("room");
                }}>
                <Text style={styles.tab.item.text}>Phòng</Text>
            </Pressable>
        </View>
    );
}

export default Tab;