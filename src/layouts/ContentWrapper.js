import React from "react"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 94%;
  margin: 0 auto;
  max-width: 1680px;
`

const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default ContentWrapper
