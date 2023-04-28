import { MagnifyingGlass } from '@/assets/phosphor-icons'
import clsx from 'clsx'

export interface SearchInputProps {
  className?: string
  label: string
  value: string
  onChange: (value: string) => void
}

export function SearchInput({
  className,
  label,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={clsx('relative flex flex-col gap-2', className)}>
      <div className="absolute inset-y-0 left-0 inline-flex items-center px-3">
        <MagnifyingGlass className="h-5 w-5 text-gray-400" aria-hidden={true} />
      </div>
      <input
        className="block w-full rounded-md border-0 bg-transparent py-2 pl-11 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500/20 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 dark:text-white dark:focus:ring-primary-500"
        aria-label={label}
        placeholder={label}
        title={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
      />
    </div>
  )
}
