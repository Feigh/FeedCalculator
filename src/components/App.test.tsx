import * as React from "react";
import App from "./App";
import {InputField, InputArea} from "./App";
import { render } from "react-dom";
import {create} from "react-test-renderer";

describe("Test the App", () =>{
    it("should be container", () =>{
        const tree = create(<App/>).toJSON();
        expect(tree.props).toEqual({className: 'container'});
    })

    // test: kontroller att states skapas som är noll satta
    // kontrollera att när jag skickar in test på state objectet så uppdateras inputfield värdet
    // när jag skickar  int en text till input area så uppdaterar den alla
})

describe("Test the InputField", () =>{
    it("should return a container with props set container", () =>{
        const tree = create(<InputField keyName="testkey" label="testlbl"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe("Test the InputArea", () =>{
    it("should return send down in text to the inputfields", () =>{
        const tree = create(<InputArea inputState="" />);
        expect(tree).toMatchSnapshot();
    })
})