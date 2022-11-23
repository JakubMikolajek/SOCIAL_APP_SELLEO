import {client} from "../utils/supabase";

export const getPostsData = async () => await client
    .from("posts")
    .select("id, created_at, creator_uuid, description, image_url, comments ( body, creator_uuid, id )")
    .is("archived_at", null)


export const addComment = async(postId, body) => {
    return await client
        .from("comments")
        .insert({
            body: body,
            post_id: postId
        })
        .limit(1)
        .single();
}

export const deleteComment = async(id) => {
    return await client.from("comments").delete().eq("id", id);
}