import { Input } from '../input/Input'
import { Checkbox } from '../input/checkbox'
import { CoolThingListCategoryFilter } from './CoolThingListCategoryFilter'

export interface CoolThingFilter {
  searchQuery: string
  onThisSite: boolean
  categories: string[]
}

export interface CoolThingListFilterProps {
  value: CoolThingFilter
  onChange: (search: CoolThingFilter) => void
}

export function CoolThingListFilter({
  value,
  onChange,
}: CoolThingListFilterProps) {
  const updateSearch = (newValue: Partial<CoolThingFilter>) => {
    onChange({ ...value, ...newValue })
  }

  return (
    <div className="flex max-w-xs flex-col gap-6">
      <Input
        label="Search"
        value={value.searchQuery}
        onChange={(searchQuery) => updateSearch({ searchQuery })}
      />

      <Checkbox
        label="On This Site"
        value="onThisSite"
        checked={value.onThisSite}
        onChange={(checked) => updateSearch({ onThisSite: checked })}
      />

      <CoolThingListCategoryFilter
        value={value.categories}
        onChange={(categories) => updateSearch({ categories })}
      />
    </div>
  )
}
