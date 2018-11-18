import * as React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps { }
interface IState { weightinput:string, calorisinput:string, mealsinput:string, result:number}

let ResultField = function(props :any){
    return <textarea id="result" key="result" className="md-textarea form-control vertspace" value={props.resultState} rows={3}></textarea>
}

let Button = function(props: any){
    return <button id="calculate" key="calculate" onClick={props.onClick}  className="btn vertspace" >Beräkna</button>
}

export let InputField = function(props: any){
    return <div> 
        <span>{props.label}</span>
        <input id={props.keyName} key={props.keyName} value={props.inputValue} onChange={props.onChange} className="form-control vertspace" ></input>
    </div>
}

export let InputArea = function(props:any){
    return <div>
        <InputField inputValue={props.inputState.weightinput} onChange={props.onWeightFieldChange} keyName="weightinput" label="Vikt(kg)" /> 
        <InputField inputValue={props.inputState.calorisinput} onChange={props.onCalorisFieldChange} keyName="calorisinput" label="Kalorier" />
        <InputField inputValue={props.inputState.mealsinput} onChange={props.onMealsFieldChange} keyName="mealsinput" label="Antal måltider per dag" />
        </div>
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: any){
        super(props);
        this.state = {weightinput:"", calorisinput: "", mealsinput: "", result: 0};
        this.onWeightFieldChange = this.onWeightFieldChange.bind(this);
        this.onCalorisFieldChange = this.onCalorisFieldChange.bind(this);
        this.onMealsFieldChange = this.onMealsFieldChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
    }
    onWeightFieldChange(event:React.FormEvent<HTMLInputElement>) {
        this.setState(({weightinput:event.currentTarget.value}));
    }
    onCalorisFieldChange(event:React.FormEvent<HTMLInputElement>) {
        this.setState(({calorisinput:event.currentTarget.value}));
    }
    onMealsFieldChange(event:React.FormEvent<HTMLInputElement>) {
        this.setState(({mealsinput:event.currentTarget.value}));
    }
    onCalculate (event:React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        const ress = (((Number(this.state.weightinput) * 30)+70)/Number(this.state.calorisinput)/Number(this.state.mealsinput));
        this.setState({result: ress});
    }

    render() {
        return <div className='container'>

                    <h1>Hej Mat Beräknare</h1>
                <div className='row'> 
                <form>                 
                    <InputArea inputState={this.state} 
                        onWeightFieldChange={this.onWeightFieldChange} onCalorisFieldChange={this.onCalorisFieldChange} onMealsFieldChange={this.onMealsFieldChange} />
                    <Button onClick={this.onCalculate} />                 
                    <ResultField resultState={this.state.result} />
                </form>      
                </div>    
            </div>
    }
};