import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Loading from "../core/Loading/Loading";
import { getSession } from "next-auth/react";

export default function Home() {

  return (
    <div className=" bg-black h-screen overflow-hidden">
      {/* <Loading /> */}
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}




// wait for the session to load before doing fetches
export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props:{
      session
    }
  }
}