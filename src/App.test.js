import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

describe('<App />', () => {
  const wrapper = shallow(<App />)
  it('renders App component without crashing', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
