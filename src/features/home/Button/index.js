import { NavLink } from "react-router-dom";
import { StyledButton } from "./styled";

const Button = () => (
  <NavLink to="/o-firmie">
    <StyledButton>O firmie</StyledButton>
  </NavLink>
);

export default Button;
