'use client'

import { increment, decrement } from "@/lib/slices/CounterSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useGetPostsQuery } from "@/lib/api/testApi/testApi";


export default function Home() {

  const dispatch = useAppDispatch()
  const countState = useAppSelector((state) => state.counter.value);

  const { data:posts, error, isLoading } = useGetPostsQuery()

  console.log(posts && posts[0].body);
  
  
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>Running</p>
     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Decrement</button>
     <h2 className="text-7xl">{countState}</h2>

     {
      posts?.map((post)=>{
        return(
          <div key={post.id}>
          <p>{post.title}</p>
          </div>
        )
      })
     }
    </main>
    </>
  );
}
