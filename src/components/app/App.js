import './App.css';
import {Component, useState, useEffect, useCallback, useMemo, useRef} from "react";
const User = () =>{
	const [cardNumber, setCardNumber] = useState('')

	const cvcRef = useRef(null)

	const handleInput = (e) =>{
		const val = e.target.value
		setCardNumber(val)
		if (val.length === 16){
			cvcRef.current.focus()
		}
		console.log(val.length)
	}
	return (
		<div className="border w-25 p-3 m-auto mb-4">

			<input type='text' className='form-control mt-3' placeholder='Card name' onChange={handleInput} value={cardNumber} />
			<input ref={cvcRef} type='text' className='form-control mt-3' placeholder='Secri name'/>

		</div>
	)
}

const App = () => {
	return (
		<div className="App">
			<User></User>
        </div>
    );
}
export default App;
