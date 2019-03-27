import React from 'react'
import Breakpoint, {BreakpointProvider} from 'react-socks'

export const wrapRootElement = ({element}) => {
  return (
    <BreakpointProvider>{element}</BreakpointProvider>
  )
}