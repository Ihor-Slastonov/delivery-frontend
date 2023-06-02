import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const showUnderLIne = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }

  100%{
    width: 100%;
    opacity: 1;
  }

`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 22px;
  line-height: 1.2;
  color: #1f2937;

  cursor: default;

  transition: color 300ms ease-in-out;

  :hover:not(.active) {
    color: #16a34a;
    cursor: pointer;
  }

  &.active::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: 2px;
    width: 100%;
    height: 1px;
    background-color: #1f2937;
    border-radius: 50%;

    animation: ${showUnderLIne} 500ms forwards;
  }

  :first-child {
    margin-right: 20px;
  }

  :first-child::after {
    content: '';
    position: absolute;
    top: 0;
    right: -10px;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #94a3b8;
  }
`;
