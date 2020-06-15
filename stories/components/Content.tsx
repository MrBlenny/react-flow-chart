import * as React from 'react'

export const Content = (props: any) => {
  return (
    <div
      {...props}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        overflow: 'hidden'
      }}
    />
  )
}
