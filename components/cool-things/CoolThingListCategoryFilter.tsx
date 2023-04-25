import { allCoolThings } from '@/.contentlayer/generated'
import { Badge } from '../Badge'
import { Checkbox } from '../input/checkbox'

export interface CoolThingListCategoryFilterProps {
  value: string[]
  onChange: (categories: string[]) => void
}

export function CoolThingListCategoryFilter({
  value,
  onChange,
}: CoolThingListCategoryFilterProps) {
  const isCategoryChecked = (category: string) => {
    return value.includes(category)
  }

  const handleCategoryChanged = (category: string, checked: boolean) => {
    if (checked) {
      onChange([...value, category])
    } else {
      onChange(value.filter((c) => c !== category))
    }
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-4 font-semibold">Category</legend>

      {categories.map(([category, count]) => (
        <div
          className="mt-2 inline-flex items-center justify-between gap-6"
          key={category}
        >
          <Checkbox
            label={category}
            value={category}
            checked={isCategoryChecked(category)}
            onChange={(checked) => handleCategoryChanged(category, checked)}
          />
          <Badge size="small" aria-label={`${count} things`}>
            {count}
          </Badge>
        </div>
      ))}
    </fieldset>
  )
}

const categoryMap = allCoolThings.reduce((acc, thing) => {
  thing.categories.forEach((category) => {
    const existingCount = acc.get(category) || 0
    acc.set(category, existingCount + 1)
  })
  return acc
}, new Map<string, number>())

const categories = Array.from(categoryMap.entries()).sort(
  ([_a, countA], [_b, countB]) => {
    return countB - countA
  }
)
