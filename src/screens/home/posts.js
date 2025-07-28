import { View, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles from "./styles";
import { GREEN_COLOR } from "../../utils/const";

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

export default Posts;