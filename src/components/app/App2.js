import './App.css';
import { Component, useState}  from "react";
function Avatar(props) {
    console.log('b', props)
    return (
        <div className="UserInfo">
            <div className="UserInfo-name">
                {props.avatarName.name} br
                {props.avatarName.age}
            </div>
        </div>
    );
}

function UserInfo(props) {

    console.log('a', props)
    return (
        <div className="UserInfo">
            <Avatar avatarName={props.user}/>
            <div className="UserInfo-name">
                {props.tel}
            </div>
        </div>
    );
}

function User(props) {
    // console.log(props)
    return (
        <div className="Comment">
            <UserInfo  user={props.author}   tel={props.tel}/>
            <div className="Comment-text">
                {props.expertise}
            </div>
            <div className="Comment-date">
                {props.text}
            </div>
        </div>
    );
}

//
const App = () => {
    return (
        <div className="App">
            <User expertise='Dasturchi F' text='text2'  tel='90001122' author={{name: 'Abdulaxadxon', age: 30 }}></User>
        </div>
    );
}
export default App2;
