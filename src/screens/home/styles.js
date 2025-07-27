import { StyleSheet } from "react-native";
import { DARK_COLOR, GRAY_COLOR, GRAY_2_COLOR } from "../../utils/const";

const styles = StyleSheet.create({
    card: {
        
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
                width: 250,
                top: 10,
                resizeMode: "contain",
            }
        },
        text: {
            marginLeft: 10,
            fontFamily: "SF Pro Rounded Bold",
            fontSize: 35,
        }
    },
    nav: {
        marginTop: 20,
        search: {
            flexDirection: "row",
            paddingVertical: 6,
            height: 45,
            paddingHorizontal: 10,
            borderRadius: 15,
            backgroundColor: GRAY_COLOR,
            alignItems: "center",
            icon: {
                fontSize: 25,
                color: GRAY_2_COLOR,
                marginRight: 10,
            },
            input: {
                fontSize: 16,
                placeholderTextColor: "red",
            }
        }
    },
    tab: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        item: {
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 25,
            text: {
                color: DARK_COLOR,
                fontFamily: "SF Pro Text Bold",
                fontSize: 20,
            }
        }
    }
});

export default styles;