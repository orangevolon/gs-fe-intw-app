import { FC } from 'react'

interface StepProps {
  onNext?: () => void
  nextLabel?: string

  onPrev?: () => void
  prevLabel?: string

  onDone?: () => void
  doneLabel?: string
}

const Step: FC<StepProps> = ({
  onNext,
  nextLabel = 'Next >',
  onPrev,
  prevLabel = '< Prev',
  onDone,
  doneLabel = 'Done',
  children,
}) => {
  return (
    <section role="tabpanel">
      {children}
      <div role="group">
        {onPrev ? <button onClick={onPrev}>{prevLabel}</button> : null}
        {onNext ? <button onClick={onNext}>{nextLabel}</button> : null}
        {onDone ? <button onClick={onDone}>{doneLabel}</button> : null}
      </div>
    </section>
  )
}

export default Step
