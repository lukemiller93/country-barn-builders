import styled from "@emotion/styled"
export const TagWrapper = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 1rem 0;

  h3,
  h2 {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    max-width: 768px;
  }

  li {
    position: relative;
    background: ${props => props.theme.colors.primary.light};
    border-radius: 2rem;
    padding: 0.25rem 0;
    transition: background 150ms
      ${props => props.theme.transition.easeInOutCubic};
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.secondary.light};
    }
  }
`
