let container=document.getElementById("react-container")
// container.innerText="Hello! Welcome to js"

// ReactDOM.render("Welcome to react",document.getElementById("react-container"))


// function Rectcontainer(){
//     return React.createElement(
//         'h1',
//         {id: "h1-tag"},
//         'hey kalvians welcome to React learning',
//         React.createElement("div",null,"lets rock and roll!")
//         )
// }

class kalvianContainer extends React.Component{
    render(){
        return React.createElement(
            'h1',
            {id: "h1-tag"},
            'hey kalvians',
            React.createElement("div",null,"lets rock and roll with classes")
            )
        }
    }
ReactDOM.render(React.createElement(kalvianContainer),container)
