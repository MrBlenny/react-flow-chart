import * as React from 'react'

export const Sidebar = (props: any) => {
  return (
    <div
      {...props}
      style={{
        width: '300px',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}
    />
  )
}
