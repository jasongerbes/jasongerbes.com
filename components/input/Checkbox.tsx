import { useId } from 'react'

export interface CheckboxProps {
  label: string
  value: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function Checkbox({ label, value, checked, onChange }: CheckboxProps) {
  const id = useId()

  return (
    <div className="inline-flex items-center gap-2.5">
      <input
        className="rounded border-0 bg-transparent text-primary-600 shadow-sm ring-1 ring-inset ring-gray-500/20 focus:bg-gray-200 focus:ring-1 focus:ring-gray-500/40 focus:ring-offset-2 dark:focus:bg-gray-800 dark:focus:ring-offset-gray-900"
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

// first-line:border-0 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-primary-600 dark:text-white dark:ring-gray-500/20 dark:focus:bg-gray-800
