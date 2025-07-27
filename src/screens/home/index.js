import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { GRAY_DARK_COLOR, GRAY_COLOR } from "../../utils/const";

const Home = ({}) => {
    const [tab, setTab] = useState("post");
    const [searchText, setSearchText] = useState("");

    const [listUserRoom, setListUserRoom] = useState([
        {
            name: "ean161",
            avatar: "https://i.pinimg.com/474x/64/d8/43/64d8437e21236d3750e5b7e877b8b54a.jpg"
        },
        {
            name: "zunhauuuuuu",
            avatar: "https://i.pinimg.com/736x/9e/2e/1f/9e2e1f92983f38ddb656f02000d4b05c.jpg"
        },
        {
            name: "hdu733",
            avatar: "https://i.pinimg.com/736x/5e/84/ba/5e84ba785caa0309ca2c2fe1ad9bac51.jpg"
        },
        {
            name: "linhlozzzzzz",
            avatar: "https://i.pinimg.com/736x/e9/e4/f2/e9e4f2d45ae07b2bfa58deb720846c5d.jpg"
        },
        {
            name: "ufyd8732222",
            avatar: "https://i.pinimg.com/736x/91/62/99/91629966f86c4cec7178876a950f99c3.jpg"
        },
        {
            name: "tired835543",
            avatar: "https://i.pinimg.com/1200x/ea/17/67/ea1767aa084dfba89c78ea74d2e7f2cb.jpg"
        }
    ]);

    return (
        <View style={styles.card}>
            <Header searchText={searchText} setSearchText={setSearchText}/>
            <Search />
            <ScrollView style={styles.card}>
                <CurrentRoom list={listUserRoom} />
                <Tab tab={tab} setTab={setTab} />
            </ScrollView>
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
                    placeholderTextColor={GRAY_DARK_COLOR}
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
                                    <Image style={styles.currentRoom.list.user.avatar.src} source={{uri: item.avatar}} />
                                    <View style={styles.currentRoom.list.user.avatar.dotWrapper}>
                                        <View style={styles.currentRoom.list.user.avatar.dotWrapper.dot}></View>
                                    </View>
                                </View>
                                <Text
                                    style={styles.currentRoom.list.user.name}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;