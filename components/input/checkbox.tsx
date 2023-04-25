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
    <div className="inline-flex items-center gap-2">
      <input
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
