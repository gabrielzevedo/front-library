import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTextStyle2 = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8']

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: customTextStyle2 }]
    },
    conflictingClassGroups: {
      'font-size': ['leading', 'tracking']
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
