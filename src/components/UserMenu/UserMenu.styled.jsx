import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  aline-items: flex-start;
  margin: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
`;

export const User = styled.p`
  margin: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m}px;
`;

export const LogButton = styled.button`
  cursor: pointer;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.border.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.profile};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }

  &:action {
    border-color: ${p => p.theme.colors.action};
  }
`;
