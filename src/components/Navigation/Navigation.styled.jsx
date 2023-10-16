import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContactsLink = styled(NavLink)`
  display: flex;
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes.l}px;
  margin: ${p => p.theme.space[4]}px;

  &.active {
    color: ${p => p.theme.colors.action};
  }
`;
