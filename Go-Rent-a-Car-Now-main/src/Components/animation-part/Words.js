// import AnimatedTextCharacter from "../component/AnimatedTextCharacter";
// import AnimatedTextWord from "../component/AnimatedTextWord";

// export default function Words() {
//   return (
//     <div className="container h-screen mx-auto flex flex-col items-center justify-center">
//       <AnimatedTextWord text="animated text with framer-motion" />
//       <AnimatedTextCharacter text="animated text with framer-motion" />
//     </div>
//   );
// }

import React from 'react'
import Animationword from './Animationword'

export default function Words() {
  return (
    <div>
        <Animationword text="animated text with framer-motion" ></Animationword>
    </div>
  )
}


