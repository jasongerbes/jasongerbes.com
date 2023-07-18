import { cva } from 'class-variance-authority'
import { HorizontalScrollContainer } from '../HorizontalScrollContainer'
import { CoolThingCategory } from './filter-utils'

export interface CoolThingListCategoryFilterProps {
  categories: CoolThingCategory[]
  value: CoolThingCategory | undefined
  onChange: (value: CoolThingCategory | undefined) => void
}

export function CoolThingListCategoryFilter({
  categories,
  value,
  onChange,
}: CoolThingListCategoryFilterProps) {
  const handleChange = (
    category: CoolThingCategory | undefined,
    checked: boolean,
  ) => {
    if (checked) onChange(category)
  }

  return (
    <HorizontalScrollContainer
      className="flex gap-2 lg:flex-wrap"
      aria-label="Filter things by category"
      role="radiogroup"
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
  value: CoolThingCategory | undefined
  checked: boolean
  onChange: (value: CoolThingCategory | undefined, checked: boolean) => void
}

const option = cva(
  'cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm transition-colors select-none',
  {
    variants: {
      checked: {
        true: 'border-primary-600 bg-primary-600/10 text-primary-800 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-500',
        false: 'border-gray-500/20 dark:border-gray-400/20',
      },
    },
  },
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
