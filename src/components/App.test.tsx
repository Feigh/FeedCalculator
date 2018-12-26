import * as React from "react";
import App, { ComboBoxField, FeedCalculation } from "./App";
import {InputField, InputArea} from "./App";
import {create } from "react-test-renderer";
import * as ReactTestRenderer from "react-test-renderer";
import * as  ShallowRenderer from "react-test-renderer/shallow";

// Test som kontrollerar att felmeddelandet dyker upp om en användare skriver in nått annat än nummer
// Test som kontrollerar att beräkningen ger rätt resultat
// Test som kontrollerar att InputField onchange inte anropas om värdet från användaren inte är siffra
// Är snapshots främst för regressions test, inte tdd?
// Jag renderar en komponent, hur kör jag dess functioner sedan?
// Generell, ska man testa state eller är det att missa ideen.
// Lägg till error span precis under label spann Testa att när komponentet inputtest skapas så syns inte texten
// 
describe("Test the App", () =>{
    it("should be container", () =>{
        const tree = create(<App/>).toJSON();
        expect(tree.props).toEqual({className: 'container'});
    })
    it("should change state", () =>{
        const renderer = create(<App/>);
        const instance = renderer.root;
        const component = instance.findByProps({className: 'container'})
    })
})

describe("Test the InputField", () =>{
    it("should return a container with props set container", () =>{
        const tree = create(<InputField keyName="testkey" label="testlbl"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe("Test the ComboBoxField", () =>{
    it("should return a container with props set container", () =>{
        const tree = create(<ComboBoxField keyName="testkey" label="testlbl"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should fil the optionslist", () =>{
        var list = [1,2,3];
        const tree = create(<ComboBoxField keyName="testkey" label="testlbl" value={list}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe("Test the InputArea", () =>{
    it("should set Child component with right input state", () =>{
        let state = {weightinput:"vikt", rerinput: "rer", mealsinput: "meal", foodlistinput: "food"};
        const tree = create(<InputArea inputState={state} />).toJSON();
        expect(tree.children[0].children[1].props.value).toEqual("vikt");
        expect(tree.children[1].children[1].props.value).toEqual("rer");
        expect(tree.children[2].children[1].props.value).toEqual("meal");
        expect(tree.children[3].children[1].props.value).toEqual("food");
    })
})

describe("Test the Calculation", () =>{
    it("should return right result", () =>{
        const result =  FeedCalculation("20", "50", "4", "1.09");
        expect(result).toBe(76.8);
    })
})