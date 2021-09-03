import { shallow } from 'enzyme'
import React from 'react'
import { Footer } from '.'

describe('<Footer />', () => {
  it('renders props without crashing', () => {
    const wrapper = shallow(<Footer name="test" />)
    expect(wrapper.find('span').at(1).text()).toBe('test')
  })
})
