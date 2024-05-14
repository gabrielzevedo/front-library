import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { Icon, IconProps } from '@/xcomponents/Icon'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg bg-transparent px-5 text-center font-semibold leading-none tracking-tight no-underline transition after:align-middle focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-1',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-base-1 hover:bg-primary-dark active:bg-primary-dark',
        secondary: 'bg-primary-light text-primary-bold hover:bg-secondary-dark active:shadow-inner',
        tertiary: 'bg-inverted-2 text-on-primary hover:bg-tertiary-dark active:bg-tertiary-bold',
        warning: 'bg-warning text-on-base hover:bg-warning-dark active:bg-warning-bold',
        danger: 'bg-danger text-base-1 hover:bg-danger-dark active:bg-danger-bold',
        outline:
          'border border-inverted-2 text-inverted-2 hover:bg-inverted-2/10 active:bg-inverted-2/30 active:shadow-inner',
        outlineSecondary:
          'border border-primary text-primary hover:bg-primary-light active:bg-primary/30 active:shadow-inner',
        onlyText:
          'h-auto border-transparent p-0 text-inverted-2 hover:bg-transparent hover:underline active:bg-transparent'
      },
      size: {
        small: 'h-10 text-f6',
        default: 'h-12 text-f6',
        large: 'h-14 text-f5'
      },
      disabled: {
        true: 'pointer-events-none border-base-3 bg-base-3 text-on-base-2',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'onlyText',
        class: 'h-auto'
      },
      {
        variant: 'onlyText',
        disabled: true,
        class: 'bg-transparent opacity-75'
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

const ButtonType = React.forwardRef(
  ({ as, children, type = 'button', ...props }: ButtonProps, ref: React.ForwardedRef<HTMLButtonAnchorElement>) => {
    if (as === 'a' || props.href)
      return (
        <a {...props} ref={ref}>
          {children}
        </a>
      )
    return (
      <button {...props} ref={ref} type={type}>
        {children}
      </button>
    )
  }
)

const ButtonComponent = (
  {
    children,
    className,
    as = 'button',
    variant = 'primary',
    size = 'default',
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'right',
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonAnchorElement>
) => {
  const currentIcon = (loading && 'loading') || icon
  if (loading) disabled = true

  return (
    <ButtonType
      as={as}
      ref={ref}
      {...props}
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      disabled={disabled}
    >
      {currentIcon && iconPosition === 'left' ? (
        <Icon icon={currentIcon} size={size === 'small' ? 3 : 4} className="mr-2 inline-block" />
      ) : null}
      {children}
      {currentIcon && iconPosition === 'right' ? (
        <Icon icon={currentIcon} size={size === 'small' ? 3 : 4} className="ml-3 inline-block" />
      ) : null}
    </ButtonType>
  )
}

const ButtonWithForwardRef = React.forwardRef(ButtonComponent)
const Button = React.memo(ButtonWithForwardRef)

type ButtonAnchorProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>
type HTMLButtonAnchorElement = HTMLButtonElement & HTMLAnchorElement
type ButtonVariantsType = VariantProps<typeof buttonVariants>

interface ButtonProps extends ButtonAnchorProps, ButtonVariantsType {
  /** Type of component to use
   * @default button
   * */
  as?: 'a' | 'button'
  /**
   * Custom class
   */
  className?: string
  /** Button variant
   * @default primary
   * */
  variant?: 'primary' | 'secondary' | 'outlineSecondary' | 'tertiary' | 'warning' | 'danger' | 'outline' | 'onlyText'
  /** Size of the button
   * @default default
   * */
  size?: 'small' | 'default' | 'large'
  /**
   * Button is loading
   * */
  loading?: boolean
  /**
   * Button is disabled
   * */
  disabled?: boolean
  /**
   * Icon of the button
   */
  icon?: IconProps['icon']
  /**
   * Icon of the button
   * @default 'right'
   */
  iconPosition?: 'left' | 'right'
}

export { Button, type ButtonProps }
