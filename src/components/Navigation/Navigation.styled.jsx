import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;

  height: 20px;
  line-height: 20px;

  padding: 5px;

  text-decoration: none;

  font-weight: 700;
  color: #f5fc69;
  font-size: 20px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ffffff;
  }

  &.active {
    color: #111111;

    background-color: #f5fc69;

    border-radius: 5px;
  }
`;
