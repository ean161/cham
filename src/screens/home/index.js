import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { GRAY_DARK_COLOR, GRAY_COLOR, RED_COLOR, BLUE_COLOR, GREEN_COLOR } from "../../utils/const";

const Home = ({}) => {
    const [tab, setTab] = useState("post");
    const [searchText, setSearchText] = useState("");

    const [listUserRoom, setListUserRoom] = useState([
        {
            role: "creator",
            name: "ean161",
            avatar: "https://i.pinimg.com/474x/64/d8/43/64d8437e21236d3750e5b7e877b8b54a.jpg",
            attach_image: "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/522936777_122139362000769325_4960587490218083361_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sOjO0-0NnzEQ7kNvwFSkxg6&_nc_oc=Adnrj9d8G_iBRwD_--N1kvLeJ6ZvGugsTsThCsPEUV3LF_Gour1-pdhNJ2ahzCMKegzchDMpq7Bl1OV3Uk3VXCPL&_nc_zt=23&_nc_ht=scontent.fvca1-1.fna&_nc_gid=xOPOje-b5JQvUAajpwxXGg&oh=00_AfQUWWqUmdE2RttNW6vuJiq5R0z9rJ9_skA60fU4QZg0RA&oe=688B6539",
            caption: "Bữa trưa vui vẻ",
            likes: 3,
        },
        {
            name: "zunhauuuuuu",
            avatar: "https://i.pinimg.com/736x/9e/2e/1f/9e2e1f92983f38ddb656f02000d4b05c.jpg",
            attach_image: "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/520878121_122137706264828237_584406589326151262_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=QcC9L9CmGRwQ7kNvwEFJPJ4&_nc_oc=Admrfnp-IXYOHpiZofm0UK5gkSV81LlIt0nERbhVPTEhXw2KheJGM4r8cw5nmUzp1zpCLJZwCxs-FHZ3NPtI8Sa9&_nc_zt=23&_nc_ht=scontent.fvca1-4.fna&_nc_gid=bfXcUOyQd4-oiWAXu5rwng&oh=00_AfQvFOMOOY4spET9I0UyC3LR_ZgGjvSxVHCHce5spQvQUQ&oe=688B8D03",
            caption: "Tui bị khùm ;)))",
            likes: 5,
        },
        {
            name: "hdu733",
            avatar: "https://i.pinimg.com/736x/5e/84/ba/5e84ba785caa0309ca2c2fe1ad9bac51.jpg",
            caption: "Xin chào, tui là hdu733",
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
                {tab == "post" || tab == "" ? <Posts posts={listUserRoom} setPosts={setListUserRoom} /> : null}
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

const Posts = ({posts, setPosts}) => {
    const handleLike = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].isLiked = !updatedPosts[index].isLiked;
        updatedPosts[index].likes = updatedPosts[index].likes + 1;
        setPosts(updatedPosts);
    };
    return (
        <View style={styles.posts}>
            {posts.map((item, index) => {
                if (item?.caption == null)
                    return null;

                return (
                    <View style={styles.posts.post} key={index}>
                        <View style={styles.posts.post.authorActions}>
                            <View style={styles.posts.post.author}>
                                <Image source={{uri: item?.avatar}} style={styles.posts.post.author.avatar} />
                                <View style={styles.posts.post.author.title}>
                                    <Text style={styles.posts.post.author.title.name}>{item?.name}</Text>
                                    <Text style={styles.posts.post.author.title.createdDate}>3 ngày trước</Text>
                                </View>
                            </View>
                            <View style={styles.posts.post.like}>
                                <Text style={styles.posts.post.like.count}>{item?.likes} cỏ</Text>
                                <Pressable
                                    style={styles.posts.post.like.btn}
                                    onPress={() => handleLike(index)}
                                >
                                    <Icon style={[styles.posts.post.like.btn.src, posts[index]?.isLiked == true ? {color: GREEN_COLOR} : {}]} name="clover" />
                                </Pressable>
                            </View>
                        </View>
                        <Text>{item?.caption}</Text>
                        <View style={styles.posts.post.attach_image}>
                            {item?.attach_image ? <Image style={styles.posts.post.attach_image.src} source={{uri: item?.attach_image}} /> : null}
                        </View>
                    </View>
                );
            })}
        </View>
    );
}

export default Home;