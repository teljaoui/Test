import React, { Component } from 'react'

class HelloReact extends Component {
    constructor(props) {
        console.log(`constructor(${JSON.stringify(props)})`);
        super(props);
    }
    render() {
        console.log("render()");
        return <div>Hello React</div>
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount()")
    }
    componentWillReceiveProps(nextProps) {
        nextProps = JSON.stringify(nextProps);
        console.log(`componentWillReaceiveProps(${nextProps})`);
        return true;//pour pouvoir continuer  la mise a jour du composant
    }
    componentWillUpdate(nextProps, nextState) {
        nextProps = JSON.stringify(nextProps);
        nextProps = JSON.stringify(nextState);
        console.log(`componentWillUpdate(${nextProps},${nextState})`);
    }
    componentDidUpdate(prevProps, prevState){
        prevProps = JSON.stringify(prevProps);
        prevState = JSON.stringify(prevState);
        console.log(`componentDidUddate(${prevProps},${prevState})`)
    }
    componentWillUmount(){
        console.log("compentWillUmount()");
    }
}
export default HelloReact;