import {useEffect, useState} from "react";

const CounterItme = ({counterDeneretY}) => {
    const [itme, setItme] = useState([])

    useEffect(() => {
        const newItme = counterDeneretY()
        setItme(newItme)
    }, [counterDeneretY])

    return (
        <div>
            <ul>
                {itme.map(itme =>(
                    <li key={itme}>{itme}</li>
                ))}
            </ul>
        </div>
    );
}
export default CounterItme;