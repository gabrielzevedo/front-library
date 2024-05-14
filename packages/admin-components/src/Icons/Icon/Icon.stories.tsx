import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import * as icons from '../icons-path'
import { Icon, IconProps } from './Icon'

const meta = {
  title: 'Icons/Icon',
  component: Icon
} satisfies Meta<IconProps>

export default meta
type Story = StoryObj<typeof meta>

const sizes: Array<IconProps['size']> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const Playground: Story = {
  args: {
    icon: 'cog'
  }
}

const iconsSorted = Object.keys(icons['icons']).sort()

export const List: StoryFn = (_args) => (
  <div className="grid grid-cols-3 gap-2 lg:grid-cols-6">
    {iconsSorted.map((value) => {
      const iconName = value as IconProps['icon']
      return (
        <div key={iconName} className="flex flex-col items-center gap-3 rounded border border-card-stroke p-4">
          <div>
            <Icon icon={iconName} className="hover:border" />
          </div>
          <span className="text-xs">{iconName}</span>
        </div>
      )
    })}
  </div>
)

List.tags = ['docs-only']

export const Sizes: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    {sizes.map((size) => (
      <Icon key={size} size={size} icon="cog" />
    ))}
  </div>
)

Sizes.tags = ['docs-only']

export const Classes: StoryFn = (_args) => (
  <div className="flex flex-wrap gap-3">
    <Icon className="animate-pulse text-primary" icon="iconSolidLI" />
    <Icon className="hover:scale-110 hover:shadow-lg" icon="eye" />
  </div>
)

Classes.tags = ['docs-only']
