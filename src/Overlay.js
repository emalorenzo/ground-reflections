import React from 'react'
import { Footer } from '@pmndrs/branding'

export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
        <div onClick={() => ready && setClicked(true)}>{!ready ? 'loading' : 'click to continue'}</div>
      </div>
      <Footer
        date="28. January"
        year="2021"
        link1={<a href="https://github.com/pmndrs/drei">pmndrs/drei</a>}
        link2={<a href="https://codesandbox.io/s/drei-reflector-bfplr">s/drei-reflector-bfplr</a>}
      />
    </>
  )
}
