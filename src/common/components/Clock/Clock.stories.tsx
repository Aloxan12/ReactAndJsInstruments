import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Clock} from "./Clock";

export default {
    title: 'Example.Clock',
    component: Clock
}

export const DigitalClock= () =><Clock mode={"digital"} />;


export const AnalogClock= () =><Clock mode={"analog"} />;


