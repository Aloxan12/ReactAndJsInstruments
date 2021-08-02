import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import Accordion, {AccordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";



export default {
    title: 'Accordion stories',
    component: Accordion,
    argType: {
        color: {
            control: 'color',
            table:{
                category: 'Colors',
            }
        },
        onChange:{
            table:{
                category: 'Colors',
            }
        },
        onClick:{
            table:{
                category: 'Colors',
            }
        }
    }
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('accordion mode change event fired')

const Template: Story<AccordionType> = (args) => <Accordion {...args} />;

export const collapsedMode = Template.bind({})
collapsedMode.args = {
    titleValue:"User",
    collapsed: true,
    onChange:callback,
    onClick:onClickCallback,
    items:[]
}
export const unCollapsedMode = Template.bind({})
unCollapsedMode.args = {
    titleValue:"User",
    /**
     * Element that are showed when is opened
     */
    collapsed: false,
    onChange:callback,
    onClick:onClickCallback,
    items:[{title:'Victor', value: 1},{title:'Alex', value: 2},{title:'Bob', value: 3},{title:'Mike', value: 4}]
}
export const ModeChanging: Story<AccordionType> = (args)=>{
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion {...args} collapsed={collapsed}
                      onChange={()=>{setCollapsed(!collapsed)}}
                      onClick={(id)=>{alert(`user with id ${id} should be happy`)}} />;
}
ModeChanging.args = {
    titleValue:'Menu',
    items: [{title:'Victor', value: 1},{title:'Alex', value: 2},{title:'Bob', value: 3},{title:'Mike', value: 4}]
}