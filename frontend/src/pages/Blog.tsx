import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "./FullBlog";
import { Appbar } from "../components/Appbar";
import { FullBlogSkeleton } from "./FullBlogSkeleton";

export const Blog =()=>{
    const{id}=useParams()
    const {loading,blog}=useBlog({
        id:id || ""
    });
    if(loading||!blog){
        return<><div><Appbar/></div>
       <div>
            
            
            
            
            
            
            <FullBlogSkeleton/></div>
            </>}
    return(<div>
        <FullBlog blog={blog}/>
    </div>)

}