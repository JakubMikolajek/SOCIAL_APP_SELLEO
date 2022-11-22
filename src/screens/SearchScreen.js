import SearchInput from "../components/search/SearchInput";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Button} from "react-native";
import {client} from "../utils/supabase";


const SearchScreen = () => {
    const [search, setSearch] = useState("")
    const queryClient = useQueryClient()

    const users = queryClient.getQueryData(['users'])

    const usersData = users.data

    const post ={
        description:"Test",
        imgName: "https://reactjs.org/logo-og.png"
    }


    const submitPost = async() => {
        const response = await client
            .from("posts")
            .insert({
                description: post.description,
                image_url: post.imgName,
            })
            .limit(1)
            .single();
        console.log(response)
    }

    const searchHandler = (value) => {
        setSearch(value)
    }

  return (
    <SafeAreaView>
        <SearchInput search={searchHandler}/>
        <Button title="Search" onPress={submitPost}/>
    </SafeAreaView>
  )
}

export default SearchScreen

