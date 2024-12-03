import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { BlogCard } from "./BlogCard"
import { BlogsSkeleton } from "./BlogsSkeleton";

export const Blogs =()=>{
    const {loading,blogs}=useBlogs();

    if(loading){
        return<div>
            <Appbar/>
            
            
            
            
            
            
        
            <div className="flex  flex-col  justify-center mx-56 ">
                <BlogsSkeleton/>
                <BlogsSkeleton/>
                <BlogsSkeleton/>
                <BlogsSkeleton/>
                <BlogsSkeleton/>
            </div>
            
            
            
            
            
            </div>
    }
    return(<div> <Appbar/>
    <div className="flex justify-center">
        <div>
            {blogs.map(blog=><BlogCard 
            id={blog.id}
            authorName={blog.author.name||"Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate={"2nd Feb"}
        />)}
           
        

    </div>

    </div>
    </div>
)}