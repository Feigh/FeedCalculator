import * as React from "react";
import "./App.css";
import Select from 'react-select'; // Fixades med "files": ["./src/index.tsx"] tsconfig.json??
import { StateManager } from "react-select/lib/stateManager";

interface IProps { }
interface IState { weightinput:string, rerinput:string, mealsinput:string, foodinput:string, mealsinputoption:string, foodinputoption:string, result:number}
const mealsList = [
{ value: 3, label: "3" },
{ value: 4, label: "4" },
{ value: 5, label: "5" },
{ value: 6, label: "6" }
];
const foodList = [
    { value: 1.09, label: "1.09 kcal/gram" }
    ];
// Ändra så att komponenten under value tar in oncalcfunctionen som retunerar en siffra
let ResultField = function(props :any){
    return <textarea id="result" key="result" className="md-textarea form-control vertspace" value={props.resultState} rows={3}></textarea>
}

let Button = function(props: any){
    return <button id="calculate" key="calculate" onClick={props.onClick}  className="btn vertspace" >Beräkna</button>
}

// onChange ska inte anropas om det användarna skriver in inte är ett nummer
export let InputField = function(props: any){
    return <div> 
        <span>{props.label}</span>
        <input id={props.keyName} key={props.keyName} value={props.inputValue} onChange={props.onChange} className="form-control vertspace" ></input>
    </div>
}

export let ComboBoxField = function(props: any){
    return <div> 
        <span>{props.label}</span>
        <Select options={props.ListOptions} id={props.keyName} key={props.keyName} value={props.selectedValue} onChange={props.onChange} className="vertspace" />
    </div>
}

export let InputArea = function(props:any){
    return <div className="row">
        <div  className="col">
            <InputField inputValue={props.inputState.weightinput} onChange={props.onWeightFieldChange} keyName="weightinput" label="Vikt(kg)" /> 
            <ComboBoxField selectedValue={props.inputState.mealsinputoption} ListOptions={mealsList} onChange={props.onMealsFieldChange} keyName="mealsinput" label="Måltider per dag" />            
        </div>
        <div  className="col">
            <InputField inputValue={props.inputState.rerinput} onChange={props.onCalorisFieldChange} keyName="rerinput" label="%RER" />
            <ComboBoxField selectedValue={props.inputState.foodinputoption} ListOptions={foodList} onChange={props.onFoodFieldChange} keyName="foodlistinput" label="Foder" />
        </div>
        </div>
}

export function FeedCalculation(weight: string, rer: string, meals: string, food: string){
    const reweight = (Number(weight) * 30)+70;
    const refeed = reweight/Number(food);
    const remeal = refeed/Number(meals);
    const procent = Number(rer)/100;
    return Math.round(remeal*(procent)* 10 ) / 10;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: any){
        super(props);
        this.state = {weightinput:"", rerinput: "", mealsinput: "", foodinput: "", foodinputoption: null, mealsinputoption: null, result: 0};
        this.onWeightFieldChange = this.onWeightFieldChange.bind(this);
        this.onRERFieldChange = this.onRERFieldChange.bind(this);
        this.onMealsFieldChange = this.onMealsFieldChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
        this.onFoodFieldChange = this.onFoodFieldChange.bind(this);
    }
    onWeightFieldChange(event:React.FormEvent<HTMLInputElement>) {
        this.setState(({weightinput:event.currentTarget.value}));
    }
    onRERFieldChange(event:React.FormEvent<HTMLInputElement>) {
        this.setState(({rerinput:event.currentTarget.value}));
    }
    onMealsFieldChange(selectoption: any) {
        this.setState(({mealsinput: selectoption.value}));
        this.setState(({mealsinputoption: selectoption}));
    }
    onFoodFieldChange(selectoption: any) {
        this.setState(({foodinput:selectoption.value}));
        this.setState(({foodinputoption:selectoption}));
    }
    // gör om så att oncalculate retunerar ett nummer som sedan sätts i value
    onCalculate (event:React.FormEvent<HTMLInputElement>) {
        event.preventDefault();
        this.setState({result: FeedCalculation(this.state.weightinput, this.state.rerinput, this.state.mealsinput, this.state.foodinput)});
    }

    render() {
        return <div className='container'>

                    <h1>Mat Beräknare</h1>
                <form>                 
                    <InputArea inputState={this.state} 
                        onWeightFieldChange={this.onWeightFieldChange} onCalorisFieldChange={this.onRERFieldChange} onMealsFieldChange={this.onMealsFieldChange}
                        onFoodFieldChange={this.onFoodFieldChange} />
                    <Button onClick={this.onCalculate} />                 
                    <ResultField resultState={this.state.result} />
                </form>        
            </div>
    }
};