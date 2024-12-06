import { Link } from "react-router-dom";

interface BlogCardProps {
    id:number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
  }
  
  export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
  }: BlogCardProps) => {
    return (<Link to={`/blogs/${id}`}>
      <div className="border-b border-slate-200 pb-4 pt-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} size="small" />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="pl-2 text-slate-400 flex justify-center flex-col">
            &#183;
          </div>
          <div className="font-thin pl-2 text-slate-400 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="font-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-sm text-slate-500 font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
      </Link>
    );
  };
  
  export function Avatar({
    name,
    size = "small",
  }: {
    name: string;
    size?: "small" | "big";
  }) {
    return (
      <div
        className={`relative inline-flex items-center justify-center overflow-hidden
         bg-gray-600  rounded-full ${
           size === "small" ? "w-6 h-6" : "w-10 h-10"
         }`}
      >
        <span
          className={`${
            size === "small" ? "text-xs" : "text-md"
          } font-extralight text-gray-300 `}
        >
          {name[0]}
        </span>
      </div>
    );
  }
