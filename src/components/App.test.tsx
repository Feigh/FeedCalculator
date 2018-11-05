import * as React from "react";
import App from "./App";
import {InputField, InputArea} from "./App";
import {create } from "react-test-renderer";
import * as ReactTestRenderer from "react-test-renderer";
import * as  ShallowRenderer from "react-test-renderer/shallow";

describe("Test the App", () =>{
    it("should be container", () =>{
        const tree = create(<App/>).toJSON();
        expect(tree.props).toEqual({className: 'container'});
    })
    it("should change state", () =>{
        const renderer = create(<App/>);
        const instance = renderer.root;
        const component = instance.findByProps({className: 'container'})
        console.log(component);

    })
})

describe("Test the InputField", () =>{
    it("should return a container with props set container", () =>{
        const tree = create(<InputField keyName="testkey" label="testlbl"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe("Test the InputArea", () =>{
    it("should set Child component with right input state", () =>{
        let state = {weightinput:"vikt", calorisinput: "calo", mealsinput: "meal"};
        const tree = create(<InputArea inputState={state} />).toJSON();
        expect(tree.children[0].children[1].props.value).toEqual("vikt");
        expect(tree.children[1].children[1].props.value).toEqual("calo");
        expect(tree.children[2].children[1].props.value).toEqual("meal");
    })
})

describe("Test the Calculation", () =>{
    it("should return right result", () =>{
        let state = {weightinput:"5", calorisinput: "7", mealsinput: "8", result:0};
        const tree = create(<InputField keyName="testkey" label="testlbl"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})