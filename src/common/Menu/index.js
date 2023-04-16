import { useState } from "react";
import {
  Container,
  StyledNavLogo,
  WrapperNavigationRow,
  ImageBurgerButtonPhoto,
  ImageBurgerButton,
  StyledMenu,
  StyledNavLink,
  Navigation,
} from "./styled";
import HomeIcon from ".././Menu/HomeIcon/index";
import burgerImage from "./menu-burger.png";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navigation>
      <Container>
        <WrapperNavigationRow>
          <StyledNavLogo to="/">
            <HomeIcon />
          </StyledNavLogo>
          <StyledMenu isOpen={isMenuOpen}>
            <StyledNavLink to="/o-firmie" onClick={() => setIsMenuOpen(false)}>
              O firmie
            </StyledNavLink>
            <StyledNavLink
              to="/realizacje"
              onClick={() => setIsMenuOpen(false)}
            >
              Realizacje
            </StyledNavLink>
            <StyledNavLink to="/oferta" onClick={() => setIsMenuOpen(false)}>
              Oferta
            </StyledNavLink>
            <StyledNavLink to="/kontakt" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </StyledNavLink>
          </StyledMenu>
          <ImageBurgerButton onClick={handleMenuToggle}>
            <ImageBurgerButtonPhoto src={burgerImage} alt="button" />
          </ImageBurgerButton>
        </WrapperNavigationRow>
      </Container>
    </Navigation>
  );
};

export default Menu;
