import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
// import { classicNameResolver } from 'typescript'
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

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
    maxWidth: '100vw',
    maxHeight: '100vh'
  }
})

export const Page = ({ children }: { children: any }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
      {/* <GlobalStyle /> */}
    </div>
  )
}
