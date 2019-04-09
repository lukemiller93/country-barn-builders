import styled from "@emotion/styled"
export const TagWrapper = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 1rem 0;

  h3,
  h2 {
    text-align: center;
  }

  .tags__container {
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    max-width: calc(${props => props.theme.breakpoints.maxWidth} - 5rem);
  }
`
