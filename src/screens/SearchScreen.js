import SearchInput from "../components/search/SearchInput";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {Button} from "react-native";
import {getPostsData} from "../helpers/postDataHelpers";
import {getUsersData} from "../helpers/userDataHelpers";

const SearchScreen = () => {
    const [search, setSearch] = useState("")

    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});
    const {data: userData}  = useQuery(['users'], () => getUsersData(), {enabled:false})
    const usersData = userData.data
    const postsData = postData.data

    const filteredUsers = usersData.filter((user) => user.first_name !== null)

    const searchHandler = (value) => {
        setSearch(value)
    }

    const showResult = () => {
        const resultUsers = filteredUsers.filter((user) => user.first_name.toLowerCase().includes((search.toLowerCase())))
        const resultPosts = postsData.filter((post) => post.description.toLowerCase().includes(search.toLowerCase()))

        console.log([resultUsers,resultPosts])
    }

    return (
        <SafeAreaView>
            <SearchInput search={searchHandler}/>
            <Button title="Search" onPress={showResult}/>
        </SafeAreaView>
    )
}

export default SearchScreen

