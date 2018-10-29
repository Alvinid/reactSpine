import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../component/home';

class Index extends Component{

    static childContextTypes = {
        contextRes :PropTypes.string,
        results :PropTypes.string
      }

    constructor(props){
        super(props)
        this.click=this.click.bind(this)
        this.state={
            result:'123',
            contextRes:"子集",
            results:"测试123"
        }
    }
    click(){
        alert('1234');
    }
    componentDidMount(){
        console.log('wee')
        this.setState({
            result:345,
            contextRes:"测试"
        })
    }

    getChildContext(){
        return{
            contextRes:this.state.contextRes,
            results:this.state.results
        }
    }
    render(){
        console.log('sdd')
        console.log(this.state.result)
        return (
            <div onClick={ this.click }  style={{color:"red"}}>
            <Home state={ this.state.result } />
            </div>
        )
    }
}

export default Index

