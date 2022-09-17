import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme, seguindo }) => css`
    color: ${theme.colors.text};
    background-color: ${seguindo
      ? theme.colors.secondary
      : theme.colors.primary};
  `}

  padding: .5rem 1rem;
  border: none;
  border-radius: 4px;
`;
