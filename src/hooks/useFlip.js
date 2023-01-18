import React, { useState } from "react";

function useFlip(INITIAL_VALUE=true) {
    const [isFacingUp, setIsFacingUp] = useState(INITIAL_VALUE);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
}

export default useFlip;