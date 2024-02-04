import Feed from "../../Components/Feed";
import { Sidebar } from "../../Components/Sidebar";
import Widgets from "../../Components/Widgets";

export default function Home() {
  return (
    <div>
      <main className="main">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
