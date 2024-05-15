import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { IconCircular, IconCircularProps } from './IconCircular'

const meta = {
  title: 'Icons/IconCircular',
  component: IconCircular
} satisfies Meta<IconCircularProps>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: {
    variant: 'success'
  }
}

const variants: Array<IconCircularProps['variant']> = ['success', 'warning', 'danger']

export const Variants: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    {variants.map((variant) => (
      <IconCircular key={variant} variant={variant} />
    ))}
  </div>
)

Variants.tags = ['docs-only']

export const CustomIconAndBackground: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <IconCircular icon="camera" bgClass="bg-[#d380ec]" />
    <IconCircular icon="cog" bgClass="bg-inverted-2" />
  </div>
)

CustomIconAndBackground.tags = ['docs-only']
