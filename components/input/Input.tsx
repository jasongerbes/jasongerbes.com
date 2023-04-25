import { useId } from 'react'

export interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export function Input({ label, value, onChange }: InputProps) {
  const id = useId()

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        className="mt-1 block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500/20 placeholder:text-gray-400 focus:bg-gray-50 focus:bg-white focus:ring-primary-600 focus:ring-offset-2 dark:text-white dark:ring-gray-500/20 dark:focus:bg-gray-800 dark:focus:ring-primary-500 dark:focus:ring-offset-gray-900"
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
