import { ChangeEvent } from 'react'

type FieldValueType = string | number

interface TextFieldProps<T extends FieldValueType> {
  label: string
  value: T
  id: string
  onChange: (value: T) => void
  error?: string
}

const TextField = <T extends FieldValueType>({
  label,
  value,
  onChange,
  error,
  id,
}: TextFieldProps<T>) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as typeof value)
  }

  return (
    <div role="group" aria-label={label}>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} type="text" onChange={handleChange} />
      {error ? <div role="alert">{error}</div> : null}
    </div>
  )
}

export default TextField
