import clsx from 'clsx'

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
    <div
      className="flex flex-wrap gap-2"
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
    </div>
  )
}

interface CategoryFilterOptionProps {
  label: string
  value: string | undefined
  checked: boolean
  onChange: (value: string | undefined, checked: boolean) => void
}

function CategoryFilterOption({
  label,
  value,
  checked,
  onChange,
}: CategoryFilterOptionProps) {
  return (
    <label
      className={clsx(
        'cursor-pointer rounded-full border border-gray-500/20 px-4 py-1.5 text-sm font-medium shadow-sm transition-colors',
        checked &&
          'border-primary-600 bg-primary-600/10 text-primary-800 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-500'
      )}
    >
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
