import { StyledMenu, StyledNavLink, ItemMenu } from "./styled";
import { useEffect, useState } from "react";
import HomeIcon from ".././Menu/HomeIcon/index";

const Menu = () => {
    const [menuHeight, setMenuHeight] = useState(100);
    const expandedHeight = 100;

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

return (
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
)
};

export default Menu;