import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import styles from "./src/theme/styles";
import Home from "./src/screens/home/index";

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground
                source={{uri: "https://via.assets.so/img.jpg?w=400&h=1000&tc=white&bg=white"}}
                style={styles.container}
                resizeMode="cover"
                // blurRadius={10}
            >
                <Home />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default App;
