import {
  Container,
  StyledNavLogo,
  WrapperNavigationRow,
  ImageBurgerButtonPhoto,
  ImageBurgerButton,
  StyledMenu,
  StyledNavLink,
  Navigation
} from "./styled";
import { useEffect, useState } from "react";
import HomeIcon from ".././Menu/HomeIcon/index";
import burgerImage from "./menu-burger.png";

const Menu = () => {
  const [menuHeight, setMenuHeight] = useState(100);
  const expandedHeight = 100;
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <Navigation menuHeight={menuHeight} expandedHeight={expandedHeight}>
      <Container>
        <WrapperNavigationRow>
          <StyledNavLogo to="/">
            <HomeIcon />
          </StyledNavLogo>
          <StyledMenu>
            <StyledNavLink to="/o-firmie">O firmie</StyledNavLink>
            <StyledNavLink to="/realizacje">Realizacje</StyledNavLink>
            <StyledNavLink to="/oferta">Oferta</StyledNavLink>
            <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
          </StyledMenu>
          <ImageBurgerButton onClick={handleClick}>
            <ImageBurgerButtonPhoto src={burgerImage} alt="button" />
          </ImageBurgerButton>
        </WrapperNavigationRow>
      </Container>
    </Navigation>
  );
};

export default Menu;
