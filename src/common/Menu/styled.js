import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.ul`
  display: flex;
  justify-content: stretch;
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
  height: ${({ menuHeight }) => menuHeight}px;
  transition: height 0.5s;
  align-items: center;
`;

export const ItemMenu = styled.li`
  margin: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;

  &:first-child {
    margin-right: auto !important;
  }
`;

export const StyledNavLink = styled(NavLink)`
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};
  position: relative;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.alto};
  }
`;
