import React, { Component } from "react"
import Film from './Film'

class Films extends Component {
    // State * Props
    constructor(props) {//props keyword needs to be included in the constructor and super as a parameter to use props and pass data
        super(props)
        console.log(this.props)
        this.state = { 
            greeting: 'hello',
            loaded: false,
            results: []
        }
        console.log(this.state)
    }


    //t his is the same as using useEffect(() => {}, []) i.e. will only run once after the initial render.
    // useEffect(() => {}) i.e. will run on first render and after every re-render or state updates(componentDidMount/componentDidUpdate)
    async componentDidMount(){    
        let res = await fetch('https://ghibliapi.herokuapp.com/films')
        let json = await res.json()

        this.setState({
            loaded: true,
            results: json
        })
    }

    async componentDidUpdate(){
         
    }


    render() {
        return (
            <div>
                {!this.state.loaded 
                ? 'Loading' 
                : this.state.results.map((film, index) => {
                    return (
                        <Film filmTitle={film.title}/>
                    )
                })
                
                }
                
            </div>
        )
    }
}

// const films = () => {
//     return(
//         <>
//             This is the films comp
//         </>
//     )
// }

export default Films
