import './App.css'
import { adjustLights } from './exercices/09-adjustLights'
import { createChristmasTree } from './exercices/10-createXmassTree'
import { getIndexForPalindrome } from './exercices/11-getIndexsForPalindrome'
// import { drawGift } from './exercices/07-drawGift'
// import { organizeGifts } from './exercices/08-organizeGifts'

function App() {


  // drawGift(4, '+');
  // const orgGifts = organizeGifts(`76a11b`);
  // console.log(orgGifts);

  // const lights = ['🟢', '🔴', '🟢', ];
  // console.log(adjustLights(lights));

  // console.log(createChristmasTree('123', 4));

  console.log(getIndexForPalindrome('anna'));
  console.log(getIndexForPalindrome('abab'));
  console.log(getIndexForPalindrome('abac'));
  console.log(getIndexForPalindrome('aaaaaaaa'))
  console.log(getIndexForPalindrome('aaababa'))


  return (
    <>

    </>
  )
}

export default App
