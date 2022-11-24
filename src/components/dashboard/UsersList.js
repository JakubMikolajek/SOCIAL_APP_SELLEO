import {FlatList, RefreshControl} from 'react-native'
import SingleUser from "./SingleUser";
import {useNavigation} from "@react-navigation/native";
import {getUsersData} from "../../helpers/userDataHelpers";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {dashboardStyles} from "../../stylesheets/components/dashboardStyles";
import {useState} from "react";

const UsersList = () => {
    const navigation = useNavigation()
    const client = useQueryClient()
    const [refresh, setRefresh] = useState(false)
    const {isLoading, data} = useQuery(['users'], () => getUsersData());
    const users = data.data

    const refreshMutation = useMutation({
        mutationFn: () => {},
        onError: () => {
            console.log("onErrors")
        },
        onSuccess: async () => {
            await client.invalidateQueries(
                ['users']
            )
            await client.invalidateQueries(
                ['posts']
            )
            setRefresh(false)
        }
    })

    const refreshHandler = () => {
        setRefresh(true)
        refreshMutation.mutate()
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
                      <RefreshControl refreshing={refresh} onRefresh={refreshHandler}/>
                  }/>
    )
}

export default UsersList
