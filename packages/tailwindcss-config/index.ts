import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import paddingSafe from './plugins/paddingSafe'

const defaultPreset: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@gabrielzevedo/admin-components/**/*.*'
    // "../admin-components/**/*.{ts,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      'black-alpha': 'rgba(0, 0, 0,.25)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      'base-1': 'rgb(var(--color-base-1) / <alpha-value>)',
      'base-2': 'rgb(var(--color-base-2) / <alpha-value>)',
      'base-3': 'rgb(var(--color-base-3) / <alpha-value>)',
      'base-4': 'rgb(var(--color-base-4) / <alpha-value>)',
      'inverted-1': 'rgb(var(--color-inverted-1) / <alpha-value>)',
      'inverted-2': 'rgb(var(--color-inverted-2) / <alpha-value>)',
      'inverted-3': 'rgb(var(--color-inverted-3) / <alpha-value>)',
      'inverted-4': 'rgb(var(--color-inverted-4) / <alpha-value>)',
      'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
      'on-success': 'rgb(var(--color-on-success) / <alpha-value>)',
      'on-danger': 'rgb(var(--color-on-danger) / <alpha-value>)',
      'on-warning': 'rgb(var(--color-on-warning) / <alpha-value>)',
      'on-inverted': 'rgb(var(--color-on-inverted) / <alpha-value>)',
      'on-base': 'rgb(var(--color-on-base) / <alpha-value>)',
      'on-base-2': 'rgb(var(--color-on-base-2) / <alpha-value>)',
      'on-base-3': 'rgb(var(--color-on-base-3) / <alpha-value>)',
      'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
      'primary-bold': 'rgb(var(--color-primary-bold) / <alpha-value>)',
      'tertiary-light': 'rgb(var(--color-tertiary-light) / <alpha-value>)',
      tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
      'tertiary-dark': 'rgb(var(--color-tertiary-dark) / <alpha-value>)',
      'tertiary-bold': 'rgb(var(--color-tertiary-bold) / <alpha-value>)',
      'success-light': 'rgb(var(--color-success-light) / <alpha-value>)',
      success: 'rgb(var(--color-success) / <alpha-value>)',
      'success-dark': 'rgb(var(--color-success-dark) / <alpha-value>)',
      'success-bold': 'rgb(var(--color-success-bold) / <alpha-value>)',
      'danger-light': 'rgb(var(--color-danger-light) / <alpha-value>)',
      danger: 'rgb(var(--color-danger) / <alpha-value>)',
      'danger-dark': 'rgb(var(--color-danger-dark) / <alpha-value>)',
      'danger-bold': 'rgb(var(--color-danger-bold) / <alpha-value>)',
      'warning-light': 'rgb(var(--color-warning-light) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
      'warning-dark': 'rgb(var(--color-warning-dark) / <alpha-value>)',
      'warning-bold': 'rgb(var(--color-warning-bold) / <alpha-value>)',
      'secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
      'secondary-bold': 'rgb(var(--color-secondary-bold) / <alpha-value>)',
      'orange-promax': 'rgb(var(--color-orange-promax) / <alpha-value>)',
      google: 'rgb(var(--color-google) / <alpha-value>)',
      'google-dark': 'rgb(var(--color-google-dark) / <alpha-value>)',
      'google-bold': 'rgb(var(--color-google-bold) / <alpha-value>)',
      'google-red': 'rgb(var(--color-google-red) / <alpha-value>)',
      'google-blue': 'rgb(var(--color-google-blue) / <alpha-value>)',
      'google-purple': 'rgb(var(--color-google-purple) / <alpha-value>)',
      'google-green': 'rgb(var(--color-google-green) / <alpha-value>)',
      'google-yellow': 'rgb(var(--color-google-yellow) / <alpha-value>)',
      'card-stroke': 'rgb(var(--color-card-stroke) / <alpha-value>)',
      'card-stroke-2': 'rgb(var(--color-card-stroke-2) / <alpha-value>)',
      'card-shadow': 'rgb(var(--color-card-shadow) / <alpha-value>)',
      focus: 'rgb(var(--color-focus) / <alpha-value>)',
      'focus-light': 'rgb(var(--color-focus-light) / <alpha-value>)',
      'focus-dark': 'rgb(var(--color-focus-dark) / <alpha-value>)'
    },
    extend: {
      boxShadow: {
        DEFAULT: '0px 0px 30px rgba(20, 32, 50, 0.05)',
        outline: '0 0 0 2px rgba(156, 203, 59,.5)',
        card: '0px 15px 30px rgba(0, 0, 0, 0.1)'
      },
      letterSpacing: {
        3: '-0.01875rem',
        4: '-0.025rem',
        5: '-0.03125rem'
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      zIndex: {
        1: '1',
        2: '2'
      },
      listStyleType: {
        alpha: 'lower-alpha'
      },
      transitionProperty: {
        'max-height': 'max-height',
        width: 'width'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      }
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700'
    }
  },
  plugins: [
    // Usage: Same as core padding, but with `-safe`, like `px-[value]-safe`.
    // Why: https://webkit.org/blog/7929/designing-websites-for-iphone-x/
    paddingSafe,
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.text-f1': {
          fontSize: theme('fontSize.5xl'), // 48px
          letterSpacing: '-0.0625em', // -1px
          lineHeight: '4.375rem' // 70px
        },
        '.text-f2': {
          fontSize: theme('fontSize.4xl'), // 36px
          letterSpacing: '-0.046875em', // -0.75px
          lineHeight: '3.25rem' // 52px
        },
        '.text-f3': {
          fontSize: theme('fontSize.2xl'), // 24px
          letterSpacing: '-0.03125em', // -0.5px
          lineHeight: '2.188rem' // 35px
        },
        '.text-f4': {
          fontSize: theme('fontSize.xl'), // 20px
          letterSpacing: '-0.02625em', // -0.42px
          lineHeight: '1.813rem' // 29px
        },
        '.text-f5': {
          fontSize: theme('fontSize.base'), // 16px
          letterSpacing: '-0.025em', // -0.4px
          lineHeight: '1.438rem' // 23px
        },
        '.text-f6': {
          fontSize: theme('fontSize.sm'), // 14px
          letterSpacing: '-0.025em', // -0.4px
          lineHeight: '1.5rem' // 24px
        },
        '.text-f7': {
          fontSize: theme('fontSize.xs'), // 12px
          letterSpacing: '-0.025em', // -0.4px
          lineHeight: '1.063rem' // 17px
        },
        '.text-f8': {
          fontSize: '0.625rem', // 10px
          letterSpacing: '-0.025em', // -0.4px
          lineHeight: '0.875rem' // 14px
        }
      })
    })
  ]
}

export default defaultPreset
