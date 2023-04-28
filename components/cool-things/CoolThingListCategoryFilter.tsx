import { cva } from 'class-variance-authority'
import { HorizontalScrollContainer } from '../HorizontalScrollContainer'

export interface CoolThingListCategoryFilterProps {
  categories: string[]
  value: string | undefined
  onChange: (value: string | undefined) => void
}

export function CoolThingListCategoryFilter({
  categories,
  value,
  onChange,
}: CoolThingListCategoryFilterProps) {
  const handleChange = (category: string | undefined, checked: boolean) => {
    if (checked) onChange(category)
  }

  return (
    <HorizontalScrollContainer
      className="flex gap-2 lg:flex-wrap"
      aria-label="Filter things by category"
      role="radiogroup"
      aria-orientation="horizontal"
    >
      <CategoryFilterOption
        label="All"
        value={undefined}
        checked={value === undefined}
        onChange={handleChange}
      />

      {categories.map((category) => (
        <CategoryFilterOption
          key={category}
          label={category}
          value={category}
          checked={value === category}
          onChange={handleChange}
        />
      ))}
    </HorizontalScrollContainer>
  )
}

interface CategoryFilterOptionProps {
  label: string
  value: string | undefined
  checked: boolean
  onChange: (value: string | undefined, checked: boolean) => void
}

const option = cva(
  'cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm transition-colors',
  {
    variants: {
      checked: {
        true: 'border-primary-600 bg-primary-600/10 text-primary-800 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-500',
        false: 'border-gray-500/20 dark:border-gray-400/20',
      },
    },
  }
)

function CategoryFilterOption({
  label,
  value,
  checked,
  onChange,
}: CategoryFilterOptionProps) {
  return (
    <label className={option({ checked })}>
      <div className="sr-only">
        <input
          aria-label={label}
          tabIndex={0}
          type="radio"
          checked={checked}
          value={value}
          onChange={(event) => onChange(value, event.target.checked)}
        />
      </div>
      <span>{label}</span>
    </label>
  )
}
