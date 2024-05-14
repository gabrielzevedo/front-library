import React, { FunctionComponent } from 'react'

import { cn } from '@/lib/utils'

import { icons } from '@/icons-path'

const iconSizes = {
  1: 'size-1',
  2: 'size-2',
  3: 'size-3',
  4: 'size-4',
  5: 'size-5',
  6: 'size-6',
  7: 'size-7',
  8: 'size-8',
  9: 'size-9',
  10: 'size-10'
}

const Icon: FunctionComponent<IconProps> = React.memo(({ icon = 'minus', size = 5, className }: IconProps) => {
  const defaultClasses = `${'icon-' + icon} fill-current transform-gpu ${iconSizes[size]}`
  const Path = icons[icon] || icons['minus']
  const viewBox = icon === 'exclamation' ? '0 0 6 30' : '0 0 18 18'

  return (
    <svg className={cn(defaultClasses, className)} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <Path />
    </svg>
  )
})

interface IconProps {
  /**
   * Icon variation
   */
  icon: keyof typeof icons
  /** Icon size, number between 1 and 10
   * @default 5
   */
  size?: keyof typeof iconSizes
  /**
   * Additional classes for icon
   */
  className?: string
}

export { Icon, type IconProps }
