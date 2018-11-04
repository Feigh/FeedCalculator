import * as React from "react";
import "./App.css";

let ResultField = function(){
    return <textarea id="result" key="result" className="md-textarea form-control vertspace" rows={3}></textarea>
}

let Button = function(){
    return <button id="calculate" key="calculate" className="btn vertspace" >Beräkna</button>
}

let InputField = function(props: any){
    return <div> 
        <span>{props.label}</span>
        <input id={props.keyName} key={props.keyName} className="form-control vertspace" ></input>
    </div>
}

let InputArea = function(){
    return <div>
        <InputField keyName="inweight" label="Vikt(kg)" /> 
        <InputField keyName="incalorice" label="Kalorier" />
        <InputField keyName="inmeals" label="Antal måltider per dag" />
        </div>
}

export class App extends React.Component<{}> {
    render() {
        return <div className='container'>

                    <h1>FeedCalculator</h1>
                <div className='row'> 
                <form>                 
                    <InputArea />
                    <Button />                 
                    <ResultField />
                </form>      
                </div>    
            </div>
    }
};