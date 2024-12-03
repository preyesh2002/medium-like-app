import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import {createBlogInput,updateBlogInput} from '@preyeshcp/medium-common'


export const BlogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:any
    }
}>()


BlogRouter.use('/*', async (c, next) => {
    
	const jwt = c.req.header('Authorization') || "";
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	
	const payload = await verify(jwt, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId',payload.id);
	await next()
})

  BlogRouter.post('/', async (c) => {
	const authorid = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const{success}=createBlogInput.safeParse(body)
		if(!success){
			c.status(411);
			return c.json({
				message:"invalid inputs"
			})
		}
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorid: authorid
		}
	});
	return c.json({
		id: post.id
	});
})


  
BlogRouter.put('/',async(c)=>{
    
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const body=await c.req.json()
    const{success}=updateBlogInput.safeParse(body)
		if(!success){
			c.status(411);
			return c.json({
				message:"invalid inputs"
			})
		}
    const post=await prisma.post.update({
        where:{
            id:body.id
            

        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({id:post.id})
  })
  
BlogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const posts=await prisma.post.findMany({
		select:{
			content:true,
			title:true,
			id:true,
			author:{
				select:{
					name:true
				}
			}
		}
	})


  return c.json({posts})
  })
  
BlogRouter.get('/:id',async (c)=>{
    const id = c.req.param("id")
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
try{
    
    const post=await prisma.post.findFirst({
        where:{
            
            id:Number(id)

        },
		select:{
			id:true,
			title:true,
			content:true,
			author:{
				select:{
					name:true
				}
			}
		}
        
    })
    return c.json({post})
}
catch(e){
    console.log(e)
    return c.json({
        message:"error while fetching blog"
    })
}
 })
  


