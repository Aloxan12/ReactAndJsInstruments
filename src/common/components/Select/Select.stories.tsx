import React, {ChangeEvent,useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/react/types-6-0";
import {Simulate} from "react-dom/test-utils";
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Select',
    component: Select,
} as Meta;


const callback = action('select mode change event fired')
const onClickCallback = action('select mode change event fired')
const Template: Story<SelectPropsType> = (args) =>{
    const [value, setValue] = useState('2')
    return <Select {...args} value={value} onChange={setValue} />};

export const selectedMode = Template.bind({})
selectedMode.args = {
    onChange:callback,
    items:[
        {title:'Victor', value: 1},
        {title:'Alex', value: 2},
        {title:'Bob', value: 3},
        {title:'Mike', value: 4}]
}
export const selectedModeValue = Template.bind({})
selectedModeValue.args = {
    onChange:callback,
    value: "2",
    items:[
        {title:'Victor', value: "1"},
        {title:'Alex', value: "2"},
        {title:'Bob', value: "3"},
        {title:'Mike', value: "4"}]
}



export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string>('2')
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)}
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}