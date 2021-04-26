import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {OnOff} from "./OnOff";



export default {
    title: 'OnOff stories',
    component: OnOff
}

export  const OnMode= () => <OnOff on={true} onChange={x=>x} />;
export  const OffMode= () => <OnOff on={false} onChange={x=>x} />;
export  const RatingChanging  = () =>{
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={()=>setOn(!on)} />;
}
