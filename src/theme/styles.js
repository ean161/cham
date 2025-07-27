import { StyleSheet } from "react-native";
import { DARK_COLOR, LIGHT_COLOR } from "../utils/const";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: LIGHT_COLOR,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    }
});

export default styles;