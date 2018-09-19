import React,{ Component } from 'react';


class Index extends Component{
    constructor(props){
        super(props)
        this.click=this.click.bind(this)
    }

    click(){
        alert('1234');
    }

    render(){
        return (
            <div onClick={ this.click }>sephora</div>
        )
    }
}

export default Index