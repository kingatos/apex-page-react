import { StyledMenu, StyledNavLink, ItemMenu,  } from "./styled";

const Menu = () => {
return (
    <StyledMenu>
        <ItemMenu>
            <StyledNavLink to="/">Home</StyledNavLink>
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