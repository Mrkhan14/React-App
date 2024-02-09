import './App.css';
import { Component, useState, useEffect}  from "react";

// class User extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//             age: ''
//         }
//     }
//
//     clickHander = () =>{
//         // bu bizga yangi qimat qaytaradi
//         this.setState(prevState =>({
//             counter: prevState.counter + 1,
//         }))
//     }
//     clickHander2 = () =>{
//         // bu bizga yangi qimat qaytaradi
//         this.setState(prevState =>({
//             counter: prevState.counter - 1,
//         }))
//     }
//
//     clickHander3 = () =>{
//         // bu bizga yangi qimat qaytaradi
//         this.setState({
//             counter: 0
//         })
//     }
//     changeHander =(e, name) =>{
//         console.log(name)
//         this.setState({
//             counter: e.target.value
//         })
//     }
// 	componentDidMount() {
// 		console.log("Mount")
// 	}
//
// 	componentDidUpdate() {
// 		console.log("Update")
// 	}
//
//     componentWillUnmount() {
//         console.log("Unmount")
//     }
//
//     render() {
//         const {firstName, lastNam, link,} = this.props
//         // console.log(this.props)
//
//         const {age, counter} = this.state
//
//         return (
//             <div className="border w-25 p-3 m-auto mb-4">
//                 <h4>
//                     Mening ismim - {firstName}, sharifim- {lastNam}
//                     <br/>
//                     Yoshim {age}
//                 </h4>
//                 <a href={link}>Link</a>
//                 <div>
//                     <button
//                         onClick={this.clickHander}
//                         type="button"
//                         className="btn btn-success mx-2"
//                     >
//                         Success
//                     </button>
//                     <button
//                         type="button"
//                         className="btn btn-danger mx-2"
// 						onClick={this.clickHander2}
//                     >
//                         Danger
//                     </button>
//                     <button
//                         type="button"
//                         className="btn btn-warning mx-2"
//                         onClick={this.clickHander3}
//                     >
//                         Warning
//                     </button>
//                     <p>{counter}</p>
//                     <div>
//                         <label htmlFor="basic-url" className="form-label">Yoshim</label>
//                         <input className="form-control" type="number" onChange={(e) => this.changeHander(e, 'Khan')}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const User = () =>{
	const [counter, setCounter] = useState(0)
	const onIncrement = () =>{
		setCounter(counter + 1)
	}
	return (
		<div className="border w-25 p-3 m-auto mb-4">

			<div className="text-center"><b>{counter}</b></div>

			<div className="mt-5">
				<button onClick={onIncrement} className="btn btn-success mx-2">
					+
				</button>
			</div>
		</div>
	)
}

const App = () => {
	return (
        <div className="App">
           <User firstName='Abdulaxadxon' lastName='Azimov' link='https://github.com/Mrkhan14'></User>
        </div>
    );
}
export default App;
