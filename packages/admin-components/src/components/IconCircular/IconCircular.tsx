import React, { FunctionComponent } from 'react'

import { Icon, IconProps } from '@/xcomponents/Icon'

type variantType = 'success' | 'warning' | 'danger'
const variantsStyles: {
  [key in variantType]: {
    bgClass: string
    icon: IconProps['icon']
  }
} = {
  success: {
    bgClass: 'bg-primary',
    icon: 'check'
  },
  warning: {
    bgClass: 'bg-warning',
    icon: 'exclamation'
  },
  danger: {
    bgClass: 'bg-danger',
    icon: 'times'
  }
}

export const IconCircular: FunctionComponent<IconCircularProps> = React.memo(
  ({ variant = 'success', icon: customIcon, bgClass: customBgClass }: IconCircularProps) => {
    const icon = customIcon ? customIcon : variantsStyles[variant].icon || 'check'
    const bgClass = customBgClass ? customBgClass : variantsStyles[variant].bgClass || 'bg-primary'

    return (
      <>
        <div
          className={`icon-circular mx-auto flex size-20 items-center justify-center rounded-full bg-opacity-20 ${bgClass}`}
        >
          <div className={`flex size-14 items-center justify-center rounded-full ${bgClass}`}>
            <Icon icon={icon} className="block text-base-1" size={7} />
          </div>
        </div>
      </>
    )
  }
)

export interface IconCircularProps {
  /** Icon circular variant
   * @default success
   * */
  variant?: variantType
  /**
   * Icon variation
   */
  icon?: IconProps['icon']
  /**
   * Custom class for background
   */
  bgClass?: string
}
