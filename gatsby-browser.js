import React from "react"
import { BreakpointProvider } from "react-socks"

export const wrapRootElement = ({ element }) => {
  return <BreakpointProvider>{element}</BreakpointProvider>
}
