import React from 'react'
import Wrapper from './Wrapper'
import SubTitle from './SubTitle'
import Links from './Links'
import Footer from './Footer'

export default () => (
  <Wrapper>
    <h1>JSON Viewer</h1>
    <SubTitle>Jolly good JSON viewer</SubTitle>
    <Footer>
      <Links>
        <li>
          <a href=' r'>Source code</a>
        </li>
        <li>
          <a href=' '>Report issues</a>
        </li>
      </Links>
      Made by <a href=' '>@secretmapper</a>
    </Footer>
  </Wrapper>
)
