import SearchInput from "../components/search/SearchInput";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Button} from "react-native";


const SearchScreen = () => {
    const [search, setSearch] = useState("")
    const queryClient = useQueryClient()

    const users = queryClient.getQueryData(['users'])

    const usersData = users.data

    const searchHandler = (value) => {
        setSearch(value)
    }

  return (
    <SafeAreaView>
        <SearchInput search={searchHandler}/>
        <Button title="Search"/>
    </SafeAreaView>
  )
}

export default SearchScreen

