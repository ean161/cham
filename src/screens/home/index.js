import { useState, useEffect } from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, TextInput, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Header from "./header";
import Search from "./search";
import CurrentRoom from "./current_room";
import Tab from "./tab";
import Posts from "./posts";

import styles from "./styles";

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

export default Home;