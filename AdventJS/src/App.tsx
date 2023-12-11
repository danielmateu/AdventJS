import './App.css'
import { adjustLights } from './exercices/09-adjustLights'
import { createChristmasTree } from './exercices/10-createXmassTree'
// import { drawGift } from './exercices/07-drawGift'
// import { organizeGifts } from './exercices/08-organizeGifts'

function App() {


  // drawGift(4, '+');
  // const orgGifts = organizeGifts(`76a11b`);
  // console.log(orgGifts);

  // const lights = ['🟢', '🔴', '🟢', ];
  // console.log(adjustLights(lights));

  console.log(createChristmasTree('123', 4));

  return (
    <>

    </>
  )
}

export default App
