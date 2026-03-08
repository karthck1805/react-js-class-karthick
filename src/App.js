import React from 'react'
import Usestate from './compnets/hooks/useState'
import ThreeTypesCSS from './compnets/typesofcss/threetypes'
import UseEffect from './compnets/hooks/useeffect'
import UseStatehw from './compnets/hooks/useStatehw'
import UseEffecthw from './compnets/hooks/useEffecthw'
import ParentComponent from './compnets/ParentComponent'
import ChildComponent from './compnets/ChildComponent'

function App() {
  return (
    <div>
      {/* <Usestate/> */}
      <ParentComponent/>
      <ChildComponent/>
      <UseStatehw/>
      <UseEffecthw />
      <ThreeTypesCSS/>
      {/*<UseEffect/> */}

    </div>
  )
}

export default App
