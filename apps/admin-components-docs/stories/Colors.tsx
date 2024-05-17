import { Icon } from '@gabrielzevedo/admin-components/Icon'
import defaultPreset from '@gabrielzevedo/tailwindcss-config'

const handleCopy = (value: string) => {
  navigator.clipboard.writeText(value)
}

const colors = Object.entries(defaultPreset?.theme?.colors as Record<string, string>) || []

export const Colors = () => {
  return (
    <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-4 sm:gap-y-10">
      {colors.map(([key, value]) => (
        <div className="flex w-full flex-col items-center" key={key}>
          <div
            className="h-20 w-full rounded-lg"
            style={{
              backgroundColor: value.toString().replace('<alpha-value>', '100')
            }}
          />
          <div
            className="group mt-2 cursor-pointer text-sm font-semibold transition-all hover:text-primary-dark"
            onClick={() => handleCopy(key)}
          >
            {key}{' '}
            <Icon
              size={3}
              icon="copy"
              className="absolute ml-1 mt-1 inline opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
