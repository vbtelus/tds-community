import React from 'react'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { mount } from 'enzyme'

import Modal from '../Modal'

describe('Modal', () => {
  const doMount = (props = {}) =>
    mount(
      <Modal
        isOpen={true}
        heading="A heading"
        bodyText="Are you sure?"
        confirmCTAText="I am sure"
        focusElementAfterClose={{}}
        onConfirm={() => {}}
        onClose={() => {}}
        {...props}
      />
    )

  it('renders', () => {
    const modal = doMount()

    expect(modal).toMatchSnapshot()
  })

  it('does other things', () => {
    const modal = doMount()

    expect(modal).toExist()
  })

  it('passes additional attributes to the element', () => {
    const modal = doMount({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(modal).toHaveProp('id', 'the-id')
    expect(modal).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const modal = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    }).find('[data-testid="tds-modal-overlay"]')

    expect(modal).not.toHaveProp('className', 'my-custom-class')
    expect(modal).not.toHaveProp('style')
  })

  it('mount with custom Component', () => {
    const heading = <Heading level="h4">test heading</Heading>
    const bodyText = <Box>hello World</Box>
    const doMountWithCustomContent = (props = {}) =>
      mount(
        <Modal
          isOpen={true}
          heading={heading}
          bodyText={bodyText}
          confirmCTAText="I am sure"
          focusElementAfterClose={{}}
          onConfirm={() => {}}
          onClose={() => {}}
          {...props}
        />
      )

    const modalWithCustomContent = doMountWithCustomContent()

    expect(modalWithCustomContent.contains(heading)).toEqual(true)
    expect(modalWithCustomContent.contains(bodyText)).toEqual(true)
  })

  //   Check if confirm and cancel buttons appear when using Dialogue Modal
  // Check if confirm and close buttons appear when using Content Modal
  // Ensure heading appears using level-3 styles (using level={h3} tag="div" props)
})
