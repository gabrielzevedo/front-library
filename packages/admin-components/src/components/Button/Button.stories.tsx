import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

const variants: Array<ButtonProps['variant']> = [
  'primary',
  'secondary',
  'tertiary',
  'outline',
  'outlineSecondary',
  'warning',
  'danger',
  'onlyText'
]

const sizes: Array<ButtonProps['size']> = ['small', 'default', 'large']

export const Playground: Story = {
  args: {
    children: 'Example',
    variant: 'primary',
    size: 'default'
  }
}

export const Variants: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    {variants.map((variant) => (
      <Button key={variant} variant={variant}>
        {variant}
      </Button>
    ))}
  </div>
)

Variants.tags = ['docs-only']

export const Sizes: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    {sizes.map((size) => (
      <Button key={size} size={size}>
        {size}
      </Button>
    ))}
  </div>
)

Sizes.tags = ['docs-only']

export const States: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
    <Button variant="onlyText" disabled>
      Disabled
    </Button>
    <Button variant="onlyText" loading>
      Loading
    </Button>
  </div>
)

States.tags = ['docs-only']

export const Icon: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <Button icon="app" iconPosition="left">
      Icon Left
    </Button>
    <Button icon="app" iconPosition="right">
      Icon Right
    </Button>
  </div>
)

Icon.tags = ['docs-only']

export const Classes: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <Button className="w-1/2">With class w-1/2</Button>
    <Button className="hover:scale-110 hover:shadow-lg">With hover classes</Button>
  </div>
)

Classes.tags = ['docs-only']

export const AnchorOrButton: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <Button as="a" href="https://google.com" target="_blank">
      Anchor with external link
    </Button>
    <Button as="button" onClick={() => alert('Clicked!')}>
      Button
    </Button>
  </div>
)

AnchorOrButton.tags = ['docs-only']
