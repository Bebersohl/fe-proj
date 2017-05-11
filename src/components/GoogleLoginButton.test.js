import React from 'react'
import { shallow } from 'enzyme'
import GoogleLoginButton from './GoogleLoginButton'

it('renders without crashing', () => {
  shallow(<GoogleLoginButton />)
})
