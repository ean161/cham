import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import styles from "./src/theme/styles";
import Home from "./src/screens/home/index";

const App = () => {
    return (
        <ImageBackground
            // source={{ uri: "https://i.pinimg.com/736x/ba/7d/ff/ba7dffec14e80552f6d1ae78659b0bfd.jpg" }}
            style={styles.wrapper}
            resizeMode="cover"
            blurRadius={50}
        >
            <SafeAreaView style={styles.container}>
                <Home />
            </SafeAreaView>
        </ImageBackground>
    );
}

export default App;
