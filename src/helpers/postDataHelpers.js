import {client} from "../utils/supabase";

export const getPostsData = async() => await client
    .from("posts")
    .select("*")
    .is("archived_at", null)

