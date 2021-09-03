import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '.'

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('data')).toHaveLength(0)
  })
})
