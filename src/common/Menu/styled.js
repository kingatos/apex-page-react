import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNavLogo = styled(NavLink)`
  text-decoration: none;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  &.active {
    -webkit-filter: brightness(125%);
    filter: brightness(125%);
  }
`;

export const Navigation = styled.nav`
  position: -webkit-sticky;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  background:${({ theme }) => theme.color.white};
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: height 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  padding: 0;
  height: 80px;
  };
`;

export const WrapperNavigationRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  padding: 12px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  max-width: calc(100% - 60px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: calc(100% - 30px);
  }
`;

export const ImageBurgerButton = styled.button`
  display: none;
  outline: none;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileHigh}px) {
    display: block;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const ImageBurgerButtonPhoto = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileHigh}px) {
    width: 25px;
    height: 25px;
    display: block;
  }
`;

export const StyledMenu = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileHigh}px) {
    pointer-events: none;
    position: fixed;
    background: white;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    -webkit-transition: 0.5s;
    transition: 0.5s;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 18px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  &.active {
    font-weight: bold;
  }
  &:hover {
    color: ${({ theme }) => theme.color.alto};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileHighMax}px) {
    font-size: 15px;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileHigh}px) {
    padding: 10px;
    font-size: 22px;
    text-transform: uppercase;
  }
`;
