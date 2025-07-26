import { SafeAreaView, View, Text, StyleSheet, ImageBackground } from "react-native";

import styles from "./src/theme/styles";

function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={ require("./src/assets/img/blur.png") }
                style={ styles.container }
            >
                
            </ImageBackground>
        </SafeAreaView>
    );
}

export default App;
