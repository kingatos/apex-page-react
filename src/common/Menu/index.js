import {
  StyledMenu,
  StyledNavLink,
  ItemMenu,
  WrapperBurgerImage,
  ImageBurgerButton,
  StyledMobileMenu, 
  ItemMobileMenu,
  StyledMobileNavLink,
} from "./styled";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HomeIcon from ".././Menu/HomeIcon/index";
import burgerImage from "./menu-burger.png";

const Menu = () => {
  const [menuHeight, setMenuHeight] = useState(100);
  const expandedHeight = 100;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMenuHeight(50);
      } else {
        setMenuHeight(100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, [isOpen]);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  if (isMobile) {
    return (
      <WrapperBurgerImage>
        <ImageBurgerButton onClick={handleClick}>
          <img src={burgerImage} alt="button" />
        </ImageBurgerButton>
        <ItemMenu>
          <StyledNavLink to="/">
            <HomeIcon />
          </StyledNavLink>
        </ItemMenu>
        {isOpen && (
          <StyledMobileMenu>
            <ItemMobileMenu>
              <StyledMobileNavLink to="/o-firmie">O firmie</StyledMobileNavLink>
            </ItemMobileMenu>
            <ItemMobileMenu>
              <StyledMobileNavLink to="/realizacje">Realizacje</StyledMobileNavLink>
            </ItemMobileMenu>
            <ItemMobileMenu>
              <StyledMobileNavLink to="/oferta">Oferta</StyledMobileNavLink>
            </ItemMobileMenu>
            <ItemMobileMenu>
              <StyledMobileNavLink to="/kontakt">Kontakt</StyledMobileNavLink>
            </ItemMobileMenu>
          </StyledMobileMenu>
        )}
      </WrapperBurgerImage>
    );
  }

  if (isTablet) {
    return (
      <WrapperBurgerImage>
        <StyledMenu menuHeight={menuHeight} expandedHeight={expandedHeight}>
          <ItemMenu>
            <StyledNavLink to="/">
              <HomeIcon />
            </StyledNavLink>
          </ItemMenu>
          <ItemMenu>
            <StyledNavLink to="/o-firmie">O firmie</StyledNavLink>
          </ItemMenu>
          <ItemMenu>
            <StyledNavLink to="/realizacje">Realizacje</StyledNavLink>
          </ItemMenu>
          <ItemMenu>
            <StyledNavLink to="/oferta">Oferta</StyledNavLink>
          </ItemMenu>
          <ItemMenu>
            <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
          </ItemMenu>
        </StyledMenu>
      </WrapperBurgerImage>
    );
  }
};
export default Menu;
