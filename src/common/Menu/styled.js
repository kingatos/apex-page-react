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

  &:hover {
    height: ${({ expandedHeight }) => expandedHeight}px;
  }
`;

export const ItemMenu = styled.li`
  margin: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0px;
    display: flex;
    gap: 20px;
  }

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

export const WrapperBurgerImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    background: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 100px;
  }
`;

export const ImageBurgerButton = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
`;

export const StyledMobileMenu = styled.ul`
height: 300px;
background:  color: ${({ theme }) => theme.color.white};


@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-content: space-around;
    background: white;
    width: 100%;
    margin-top: 90px;
    float: right;
    margin-right: -86px;
    margin-left: -173px;
    align-items: flex-end;
    padding: 10px;
  }
`;

export const ItemMobileMenu = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  justify-content: flex-end;
`;

export const StyledMobileNavLink = styled(NavLink)`
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
