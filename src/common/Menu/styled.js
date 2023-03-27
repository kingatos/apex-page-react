import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.ul`
  display: flex;
  justify-content: end;
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const ItemMenu = styled.li`
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.alto};
  }
`;