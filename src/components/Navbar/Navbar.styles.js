import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.text};
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
  `}
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  font-weight: bold;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`;
