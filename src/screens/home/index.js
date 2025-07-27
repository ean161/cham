import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { GRAY_2_COLOR, GRAY_COLOR } from "../../utils/const";

const Home = ({}) => {
    const [tab, setTab] = useState("post");
    const [searchText, setSearchText] = useState("");

    return (
        <View style={styles.card}>
            <Header searchText={searchText} setSearchText={setSearchText}/>
            <Search />
            <Tab tab={tab} setTab={setTab} />
        </View>
    )
}

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header.icon}>
                <Image resizeMode="cover" source={require("../../assets/img/loading.gif")} style={styles.header.icon.src} />
            </View>
            <Text style={styles.header.text}>Chạm</Text>
        </View>
    );
}

const Search = ({searchText, setSearchText}) => {
    return (
        <View style={styles.nav}>
            <View style={styles.nav.search}>
                <IonIcon name="search-outline" style={styles.nav.search.icon} />
                <TextInput
                    style={styles.nav.search.input}
                    placeholderTextColor={GRAY_2_COLOR}
                    placeholder="Tìm kiếm"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
        </View>
    );
}

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

export default Home;