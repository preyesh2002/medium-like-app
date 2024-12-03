import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";




export const Publish = () => {
    const navigate=useNavigate()
const [title,setTitle]=useState("")
const[description,setDescription]=useState("")

    return (<div>
    <Appbar/>

      <div className="flex flex-col items-center  min-h-fit ">
        {/* Title Input */}
        <div className="relative w-3/4 max-w-2xl mt-10 mb-6">
          <input onChange={(e)=>{setTitle(e.target.value)}}
            type="text"
            id="title"
            placeholder="Title"
            className="
              block w-full p-2.5 text-4xl font-bold bg-transparent border-b-2 
              border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 
            "
          />
        </div>
  
        {/* Story Input */}
        <div className="relative w-3/4 max-w-2xl">
          <textarea
          onChange={(e)=>{setDescription(e.target.value)}}
            id="story"
            placeholder="Tell your story..."
            rows={4}
            className="
              block w-full p-2.5 text-xl bg-transparent border-b-2 
              border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 
            "
          ></textarea>

        </div>
        <button onClick={async()=>{
            const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content:description
            },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            navigate(`/blog/${response.data.id}`)
        }} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br 
        focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-sm px-16 
        py-3 text-center me-2  my-20">Publish</button>
      </div>
      </div>
    );
  };