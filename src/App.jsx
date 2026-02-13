

import './App.css'
import ProdactManagement from './assets/ProdactManagement/ProdactManagement'
import FamilyTree from './FamilyTree/FamilyTree'
import HookFrom from './Hooks/HookFrom'
import ContorlFrom from './SimpleFrom/ContorlFrom'
import FromAcrose from './SimpleFrom/FromAcrose'
import SimpleFrome from './SimpleFrom/SimpleFrome'
import UncontrolFrom from './SimpleFrom/UncontrolFrom'

function App() {
 

  return (
    <>
      
      <h1>Frome </h1>
      <SimpleFrome></SimpleFrome>

     <FromAcrose></FromAcrose>
     
     <ContorlFrom></ContorlFrom>

     <UncontrolFrom></UncontrolFrom>
     <HookFrom></HookFrom>

     <ProdactManagement></ProdactManagement>
     <FamilyTree></FamilyTree>
    </>
  )
}

export default App
