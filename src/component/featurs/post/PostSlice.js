import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
let date = sub(new Date(),{minutes:10}).toISOString()
const initialState = [
    {id:1,title:"Lesson-7",selectedName:"Nuriddin",date:date, content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore libero voluptates illo recusandae deleniti."},
]
const PostSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
           reducer(state,action){
            state.push(action.payload)
           },
           prepare({selectedName,title,content}){
            return {
                payload:{
                    selectedName,
                    title,
                    content,
                    date:new Date().toISOString()
                }
            }
           }
        }
    }
})
export const getAllPosts = (state) =>state.posts
export const {postAdded} = PostSlice.actions
export default PostSlice.reducer