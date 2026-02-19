import { Suspense } from "react";
import Categories from "../Categoris/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-md"></span>}
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
