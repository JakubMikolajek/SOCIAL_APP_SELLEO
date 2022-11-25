import {client} from "../supabase/supabase";

export const getUsersData = async() => await client.from("users").select()

export const getCurrentUser =  async(ownId) => await client
    .from("users")
    .select("*")
    .eq("uuid", ownId)
    .single()


export const updateCurrentUser = async(ownId, name, surname, imageUrl) => {
    return client.from("users").update({
        uuid: ownId,
        first_name: name,
        last_name: surname,
        image_url: imageUrl
    })
}