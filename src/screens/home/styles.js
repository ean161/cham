import { StyleSheet } from "react-native";
import { DARK_COLOR, GRAY_COLOR } from "../../utils/const";

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        // marginTop: 70,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // backgroundColor: DARK_COLOR,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        icon: {
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: GRAY_COLOR,
            overflow: "hidden",
            src: {
                width: 100,
                top: 3,
                resizeMode: "contain",
            }
        },
        text: {
            marginLeft: 16,
            fontFamily: "SF Pro Rounded Bold",
            fontSize: 35,
        }
    }
});

export default styles;