import { Link } from "gatsby"
import styled from "@emotion/styled"
export const TagLink = styled(Link)`
  border-radius: 2rem;
  padding: 0.5rem 0.5rem;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.black.base};
  transition: background 150ms ${props => props.theme.transition.easeInOutCubic};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondary.light};
  }
  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
`
