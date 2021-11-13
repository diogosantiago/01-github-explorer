import { useState } from "react"

export function Counter(){
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h2>{contador}</h2>
            <button type="button" onClick={() => setContador(oldValue => oldValue+1)}>Increment</button>
        </div>
    )
}