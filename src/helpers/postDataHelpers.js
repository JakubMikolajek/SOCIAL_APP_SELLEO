import {client} from "../supabase/supabase";

//POSTS
export const getPostsData = async () => await client
    .from("posts")
    .select("id, created_at, creator_uuid, description, image_url, comments ( body, creator_uuid, id ), likes ( created_at, post_id, creator_uuid, id )")
    .is("archived_at", null)
    .order("id", {ascending: false})

export const createPost = async (description, imageUrl) => await client
    .from("posts")
    .insert({
        description: description,
        image_url: imageUrl,
    })
    .limit(1)
    .single();

export const deleteOwnPost = async (postId) => await client
    .from("posts")
    .update({
        archived_at: new Date().toISOString(),
    })
    .eq("id", postId);

//COMMENTS
export const addComment = async (postId, body) => {
    return await client
        .from("comments")
        .insert({
            body: body,
            post_id: postId
        })
        .limit(1)
        .single();
}

export const deleteComment = async (id) => {
    return await client.from("comments").delete().eq("id", id);
}

//LIKES

export const addLikes = async (postId) => {
    return await client
        .from("likes")
        .insert({
            post_id: postId,
        })
        .limit(1)
        .single();
}

export const deleteLikes = async (likeId) => {
    return await client.from("likes").delete().eq("id", likeId);
}