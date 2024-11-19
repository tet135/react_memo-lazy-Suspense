import { lazy, Suspense, useEffect, useState } from 'react'

import Page from './component/page'
import Grid from './component/grid'
import Box from './component/box'
// import PostList from './container/post-list'

//lazy
// lazy  створює src_Child_js.chank.js, який завантажується через 20сек після осн.файлу bundle.js
const Child = lazy(() => import('./Child'))
//+++++++++++
//memo
// const Child = memo(
//   ({ value }) => {
//     console.log('child render', value)
//     return <div>Value: {value}</div>
//   },
//   (prevProps, newProps) => {
//     console.log(
//       'prevProps',
//       prevProps,
//       'newProps',
//       newProps,
//     )
//     //if returns false => it caused re-render of the component
//     //if true => no re-render
//     return newProps.value % 5 !== 0
//   },
// )

function App() {
  //
  const [value, setValue] = useState(0)
  useEffect(() => {
    const id = setInterval(
      () => setValue((prev) => prev + 1),
      1000,
    )
    return () => clearInterval(id)
  }, [])

  console.log('App render')

  return (
    <Page>
      {/* //+++++++++++
      //кешування компонента - memo: не хук, а функція,
      де перший аргумент - компонент, що кешується,
      а другий - функція(в якій перший аргумент -  попер.пропси компонента, а другий - нові пропси) */}
      {/* перший приклад */}
      memo testing
      <div>state: {value}</div>
      {value > 5 && (
        <Suspense fallback={<div>Loading...</div>}>
          <Child value={value} />
        </Suspense>
      )}
      {/* lazy */}
    </Page>
  )
}

export default App
