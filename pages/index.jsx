import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Loading from "../core/Loading/Loading";

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
