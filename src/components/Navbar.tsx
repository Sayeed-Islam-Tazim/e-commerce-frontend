import { NavLink } from "react-router";
import mockData from "../mock-data/mock-data.json";

const Navbar = () => {
  return (
    <div className="flex w-11/12 mx-auto justify-between">
      <div></div>
      <div>
        {mockData.categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.id}`}
              className="me-3 hover:text-blue-400 "
              key={category.id}
            >
              {category.name}
            </NavLink>
          );
        })}
      </div>
      <NavLink to="/">
        <button className="btn btn-outline btn-info">Back</button>
      </NavLink>
    </div>
  );
};

export default Navbar;
