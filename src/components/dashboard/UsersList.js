import {FlatList} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";
import {getUsersData} from "../../helpers/userDataHelpers";
import {useQuery} from "@tanstack/react-query";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";

const UsersList = () => {
    const navigation = useNavigation()
    const {isLoading, data} = useQuery(['users'], () => getUsersData());
    const users = data.data
    if (isLoading) {
        return null
    }


    const renderUser = (itemData) => {
        const item = itemData.item
        const userProps = {
            name: item.first_name,
            surname: item.last_name,
            imageUrl: item.image_url
        }

        const pressHandler = () => {
            navigation.navigate("Profile", {
                userId: itemData.item.uuid
            })
        }
        return <SingleUser {...userProps} onPress={pressHandler}/>
    }
    return (
        <FlatList style={dashboardStyles.singleUser.form} data={users} keyExtractor={(item) => item.uuid}
                  renderItem={renderUser} horizontal={true}
                  showsHorizontalScrollIndicator={false}/>
    )
}

export default UsersList
