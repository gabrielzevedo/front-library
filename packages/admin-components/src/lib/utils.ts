import defaultPreset from '@gabrielzevedo/tailwindcss-config'
import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const fontSizes = Object.keys(defaultPreset?.theme?.extend?.fontSize as Record<string, string>) || []

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Adding the custom font-size class here
      'font-size': fontSizes.map((size) => `text-${size}`)
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
