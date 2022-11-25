import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {FlatList, Text, View} from "react-native";
import {getPostsData} from "../helpers/postDataHelpers";
import {getUsersData} from "../helpers/userDataHelpers";
import ListOfPost from "../components/search/ListOfPost";
import ListOfUser from "../components/search/ListOfUser";
import Input from "../components/UI/Input";

const SearchScreen = () => {
    const [search, setSearch] = useState("")

    const {data: postData} = useQuery(['posts'], () => getPostsData(), {enabled: false});
    const {data: userData} = useQuery(['users'], () => getUsersData(), {enabled: false})
    const usersData = userData.data
    const postsData = postData.data

    const filteredUsers = usersData.filter((user) => user.first_name !== null)
    const resultUsers = filteredUsers.filter((user) => user.first_name.toLowerCase().includes((search.toLowerCase())))
    const resultPosts = postsData.filter((post) => post.description.toLowerCase().includes(search.toLowerCase()))

    const searchHandler = (value) => {
        setSearch(value)
    }

    const renderUsers = (itemData) => {
        const item = itemData.item

        const userProps = {
            name: item.first_name,
            surname: item.last_name,
            imageUrl: item.image_url
        }
        return <ListOfUser {...userProps}/>
    }

    const renderPosts = (itemData) => {
        const item = itemData.item

        const postProps = {
            imageUrl: item.image_url
        }

        return <ListOfPost {...postProps}/>
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{flex:1, alignItems:"center"}}>
                    <Input placeholder="Search Input" onChange={searchHandler}/>
                </View>
                <View style={{flex:3}}>
                    <Text style={{marginLeft:10}}>Posts</Text>
                    {search === "" ? null :
                        <FlatList style={{alignSelf:"center"}} data={resultPosts} numColumns={3} keyExtractor={(post) => post.id} renderItem={renderPosts}/>}
                </View>
                <View style={{flex:3}}>
                    <Text style={{marginLeft:10}}>Users:</Text>
                    {search === "" ? null :
                        <FlatList data={resultUsers}  renderItem={renderUsers}/>}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen

