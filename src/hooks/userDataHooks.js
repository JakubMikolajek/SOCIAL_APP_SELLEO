import {useQuery} from "@tanstack/react-query";
import {client} from "../utils/supabase";

export const getUsersData = () => useQuery(['users'], () => client.from("users").select("*"))

export const getSingleUserData = (userId) => useQuery(['users'], () => client.from("users").select().eq("uuid", userId))

export const getLoginUserData = (ownId) => useQuery(['loginUser'], () => client
    .from("users")
    .select()
    .eq("uuid", ownId)
    .single()
)