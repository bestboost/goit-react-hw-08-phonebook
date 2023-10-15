import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthBox = styled.div`
  display: flex;
  align-items: center;
  margin: ${p => p.theme.space[4]}px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes.l}px;
  margin: ${p => p.theme.space[4]}px;

  &.active {
    color: ${p => p.theme.colors.action};
  }
`;
