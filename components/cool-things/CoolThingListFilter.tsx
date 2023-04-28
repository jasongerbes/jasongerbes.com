import { CoolThingListCategoryFilter } from './CoolThingListCategoryFilter'
import { SearchInput } from '../SearchInput'
import { CoolThingFilterValue } from './filter-utils'

export interface CoolThingListFilterProps {
  categories: string[]
  value: CoolThingFilterValue
  onChange: (search: CoolThingFilterValue) => void
}

export function CoolThingListFilter({
  categories,
  value,
  onChange,
}: CoolThingListFilterProps) {
  const updateFilter = (newValue: Partial<CoolThingFilterValue>) => {
    onChange({ ...value, ...newValue })
  }

  return (
    <div className="flex w-full flex-col gap-4 lg:gap-6">
      <SearchInput
        className="w-full"
        label="Search cool things"
        value={value.searchQuery}
        onChange={(searchQuery) => updateFilter({ searchQuery })}
      />

      <CoolThingListCategoryFilter
        categories={categories}
        value={value.category}
        onChange={(category) => updateFilter({ category })}
      />
    </div>
  )
}
