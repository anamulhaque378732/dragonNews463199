import { Outlet, useNavigation } from "react-router";
import Header from "../Component/Header/Header";
import LatestNews from "../Component/LatestNews/LatestNews";
import Navbar from "../Component/Navbar/Navbar";
import LeftAside from "../Component/homeLayouts/LeftAside";
import RightAside from "../Component/homeLayouts/RightAside";
import Loading from "../Component/Loading/Loading";

const HomeLayouts = () => {
  const { state } = useNavigation();

  return (
    <div>
      <header>
        <Header />

        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-4">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
