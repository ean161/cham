import { View, TextInput } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { GRAY_DARK_COLOR } from "../../utils/const";

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

export default Search;