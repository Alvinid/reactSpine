import React,{ Component } from 'react';


class Index extends Component{
    constructor(props){
        super(props)
        this.click=this.click.bind(this)
    }
    click(){
        alert('1234');
    }
    componentDidMount(){
        console.log('wee')
    }
    render(){
        console.log('sdd')
        return (
            <div onClick={ this.click } style={{color:"red"}}>sephora12wwe</div>
        )
    }
}

export default Index

