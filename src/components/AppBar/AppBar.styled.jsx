import styled from 'styled-components';

export const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const Tiltle = styled.h1`
  margin: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.title};
  font-size: ${p => p.theme.fontSizes.xl}px;
`;
