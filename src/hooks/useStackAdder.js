import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4";



function useStackAdder() {
    const [stack, setStack] = useState([]);
    

    function addToStack(element) {
        // setStack(stack => [...stack, {element}])
        if (stack.length < 1) {
            setStack([{
                key: element.code,
                image: element.image
            }])
            // console.log(JSON.stringify(element))
            // console.log(stack)
        } else {
            setStack(stack => [...stack, {
                key: element.code,
                image: element.image
            }])
            console.log(`###########   ${JSON.stringify(stack)}`)
        }
    }

    return [stack, addToStack]
}

export default useStackAdder;





// function addToStack(element) {
//     if (stack.length == 0) {
//         setStack([{
//             key: uuid(),
//             element: element.data.cards[0].image
//         }])
//     } else {

//         setStack(stack => [...stack, {
//             key: uuid(),
//             element: element.data.cards[0].image
//         }])

//         for (let element in stack) {
//             console.log(element.image)
//         }
//     }
// }