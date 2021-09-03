import { shallow } from 'enzyme'
import React from 'react'
import { Programs } from '.'

describe('<Programs />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Programs />)
    expect(wrapper.find('h3').text()).toBe('No Missions found.')
  })
})
