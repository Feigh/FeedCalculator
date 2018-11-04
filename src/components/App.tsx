import * as React from "react";
import "./App.css";

let ResultField = function(){
    return <textarea id="result" key="result" className="md-textarea form-control vertspace" rows={3}></textarea>
}

let Button = function(){
    return <button id="calculate" key="calculate" className="btn vertspace" >Beräkna</button>
}

export let InputField = function(props: any){
    return <div> 
        <span>{props.label}</span>
        <input id={props.keyName} key={props.keyName} className="form-control vertspace" ></input>
    </div>
}

export let InputArea = function(props:any){
    return <div>
        <InputField inputValue={props.weightinput} keyName="inweight" label="Vikt(kg)" /> 
        <InputField inputValue={props.calorisinput} keyName="incalorice" label="Kalorier" />
        <InputField inputValue={props.mealsinput} keyName="inmeals" label="Antal måltider per dag" />
        </div>
}

export default class App extends React.Component {
    constructor(props: any){
        super(props);
        this.state = {weightinput:"", calorisinput: "", mealsinput: ""};
    }
    render() {
        return <div className='container'>

                    <h1>FeedCalculator</h1>
                <div className='row'> 
                <form>                 
                    <InputArea inputState={this.state} />
                    <Button />                 
                    <ResultField />
                </form>      
                </div>    
            </div>
    }
};