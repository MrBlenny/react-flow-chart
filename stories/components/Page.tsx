import * as React from 'react'
// import styled, { createGlobalStyle } from 'styled-components'

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0px;
//     max-width: 100vw;
//     max-height: 100vh;
//     overflow: hidden;
//     box-sizing: border-box;
//     font-family: sans-serif;
//   }

//   *, :after, :before {
//     box-sizing: inherit;
//   }
// `

export const Page = ({ children }: { children: any }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flex: '1',
      maxWidth: '100vw',
      maxHeight: '100vh'
    }}
  >
    {children}
    {/* <GlobalStyle /> */}
  </div>
)
