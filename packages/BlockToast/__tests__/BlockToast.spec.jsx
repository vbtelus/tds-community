import React from 'react'
import { shallow } from 'enzyme'

import BlockToast from '../BlockToast'

const STYLE_VARIANTS = {
  DEFAULT: 'default',
  TOAST: 'toast',
  LIGHT: 'light',
}
const headline = 'Limited time offer.'
const copy = 'Save $100 when you shop online'
const link = {
  href: 'https://www.telus.com',
  text: 'Learn now',
}

const { TOAST, LIGHT } = STYLE_VARIANTS

describe('BlockToast', () => {
  const doShallow = (props = {}) => shallow(<BlockToast copy={copy} {...props} />)

  it('renders', () => {
    const blockToast = doShallow()

    expect(blockToast).toMatchSnapshot()
  })

  it('does not allow custom CSS', () => {
    const blockToast = doShallow({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(blockToast).not.toHaveProp('className', 'my-custom-class')
    expect(blockToast).not.toHaveProp('style')
  })

  it('should render properly with both copy and link provided', () => {
    const blockToast = doShallow(link)
    expect(blockToast).toMatchSnapshot()
  })

  it('should render properly with headline, copy and link provided', () => {
    const updatedProp = {
      headline,
      link,
    }
    const blockToast = doShallow(updatedProp)
    expect(blockToast).toMatchSnapshot()
  })

  it('should render properly with toast variant', () => {
    const updatedProp = {
      headline,
      link,
      variant: TOAST,
    }
    const blockToast = doShallow(updatedProp)
    expect(blockToast).toMatchSnapshot()
  })

  it('should render properly with light variant', () => {
    const updatedProp = {
      headline,
      link,
      variant: LIGHT,
    }
    const blockToast = doShallow(updatedProp)
    expect(blockToast).toMatchSnapshot()
  })
})
