import {useEffect} from "react"
import {useSearchParam} from 'next/navigation'
import {useRouter} from 'next/router'

export default function Counter(){



    return (
        <>
            <div>COUNTER PAGE</div>
            <div>Welcome</div>

            <button>Increment</button>
            <button>Decrement</button>
        </>
    )
}