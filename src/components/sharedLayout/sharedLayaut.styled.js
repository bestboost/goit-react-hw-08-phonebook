import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  color: black;
  margin: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l}px;

  &.active {
    color: red;
  }
`;

export const Header = styled('header')`
  display: flex;
  height: 100%;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const Nav = styled('nav')`
  display: flex;
`;

export const Tiltle = styled.h1`
  margin: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes.xl}px;
`;
