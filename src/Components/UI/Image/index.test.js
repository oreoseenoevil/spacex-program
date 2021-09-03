import { shallow } from 'enzyme'
import React from 'react'
import { Image } from '.'

describe('<Image />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Image alt="test" />)
    expect(wrapper.find('test')).toBeDefined()
  })
})
