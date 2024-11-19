import { memo } from 'react'

const Child = memo(
  ({ value }) => {
    console.log('child render', value)
    return <div>Value: {value}</div>
  },
  (prevProps, newProps) => {
    console.log(
      'prevProps',
      prevProps,
      'newProps',
      newProps,
    )
    //if returns false => it caused re-render of the component
    //if true => no re-render
    return newProps.value % 5 !== 0
  },
)

export default Child
