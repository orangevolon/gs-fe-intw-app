import { FC } from 'react'

interface ReadOnlyFieldProps {
  label: string
  value: string | number
}

const ReadOnlyField: FC<ReadOnlyFieldProps> = ({ label, value }) => {
  return (
    <div role="group" aria-label={label}>
      <strong style={styles.label}>{label}:</strong>
      <span>{value}</span>
    </div>
  )
}

export default ReadOnlyField

const styles = {
  label: {
    marginRight: '0.2em',
  },
}
