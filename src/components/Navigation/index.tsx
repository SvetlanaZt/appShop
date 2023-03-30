import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
    </nav>
  );
};
export default Navigation;
