import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

// import { useSession } from "next-auth/react";
// import Router from "next/router";

// import { useEffect } from "react";

export default function Home() {
  // const {data:session, status} = useSession()

  // useEffect(() => {
  //   if(!session){
  //     Router.push("/login")
  //   }
    
  // }, [session])
  
  return (
    <div className=" bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />

        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
