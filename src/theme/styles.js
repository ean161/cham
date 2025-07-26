import { StyleSheet } from "react-native";
import { DARK_COLOR, LIGHT_COLOR } from "../utils/const";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: LIGHT_COLOR,
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
    }
});

export default styles;