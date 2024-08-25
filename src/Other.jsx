// import React from 'react'
// import style from "./Other.module.css"
// import Otherdes from '../src/store/Otherdes'

// function Other() {
//   return (
//     <div>
//       {Otherdes.map((e) => {
//         console.log(e);
//         <div className={`card ${style.name}`}>
//           <img src={e.imgg} className="card-img-top" alt="pic not found" />
//           <div className="card-body">
//             <p className="card-text">{e.text}</p>
//           </div>
//         </div>
        
//       })}
//     </div>

//   )
// }

// export default Other
import React from 'react'
import style from "./Other.module.css"
import Otherdes from '../src/store/Otherdes'

function Other() {
  return (
    <div className={style.maindiv}>
      {Otherdes.map((e) => {
        
        return (
          <div className={`card ${style.name}`} key={e.id}> {/* Make sure each element has a unique key */}
            <div className={style.imgdiv}><img src={e.img} className="card-img-top" alt="pic not found" /></div>
            <h5 className={style.nameh4}>{e.headimg}</h5>
            <div className="card-body">
              <p className={`card-text ${style.pp}`}>{e.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Other

