import Feed from "../../Components/Feed";
import { Sidebar } from "../../Components/Sidebar";
import Widgets from "../../Components/Widgets";

export default function Home() {
  return (
    <div className="lg:max-w-6xl mx-auto">
      <main className="grid grid-cols-9	">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
