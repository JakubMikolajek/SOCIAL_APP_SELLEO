import {FlatList, RefreshControl} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";
import {getUsersData} from "../../helpers/userDataHelpers";
import {useQuery} from "@tanstack/react-query";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";
import {getPostsData} from "../../helpers/postDataHelpers";

const UsersList = () => {
    const navigation = useNavigation()
    const {isLoading, data, isRefetching: userRefetching, refetch: userRefetch} = useQuery(['users'], () => getUsersData(), {enabled: false});
    const {isRefetching: postRefetching, refetch: postRefetch} = useQuery(['posts'], () => getPostsData(), {enabled: false})
    const users = data.data

    const isRefetch = userRefetching || postRefetching
    const refetch = () => {
        userRefetch()
        postRefetch()
    }

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
                  showsHorizontalScrollIndicator={false}
                  refreshControl={
                      <RefreshControl refreshing={isRefetch} onRefresh={refetch}/>
                  }/>
    )
}

export default UsersList
