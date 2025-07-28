import { View, Text, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from "./styles";
import { BLUE_COLOR } from "../../utils/const";

const CurrentRoom = ({list}) => {
    return (
        <View style={styles.currentRoom}>
            <View style={styles.currentRoom.title}>
                <Text style={styles.currentRoom.title.content}>Phòng</Text>
                <View style={styles.currentRoom.title.userCount}>
                    <Icon style={styles.currentRoom.title.userCount.icon} name="user-group" />
                    <Text style={styles.currentRoom.title.userCount.num}>{list.length} người</Text>
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.currentRoom.list}>
                    {list.map((item, index) => {
                        return (
                            <View style={styles.currentRoom.list.user}>
                                <View style={styles.currentRoom.list.user.avatar}>
                                    <Image style={styles.currentRoom.list.user.avatar.src} source={{uri: item?.avatar}} />
                                    <View style={styles.currentRoom.list.user.avatar.dotWrapper}>
                                        <View style={[styles.currentRoom.list.user.avatar.dotWrapper.dot, item?.role == "creator" ? {backgroundColor: BLUE_COLOR} : {}]}></View>
                                    </View>
                                </View>
                                <Text
                                    style={styles.currentRoom.list.user.name}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item?.name}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default CurrentRoom;