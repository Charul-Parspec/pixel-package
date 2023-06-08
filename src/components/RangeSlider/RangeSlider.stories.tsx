import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RangeSlider } from './';

export default {
    title: 'Range Slider',
    component: RangeSlider,
    argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof RangeSlider>;

export const Basic: ComponentStory<typeof RangeSlider> = (args) => {
    const [rangeValue, setRangeValue] = useState<[number, number]>([41, 22]);

    const changeHandler = (data: [number, number]) => {
        console.log(data);
        setRangeValue(() => data);
    };
    return <RangeSlider {...args} onChange={changeHandler} value={rangeValue} />;
};

Basic.args = {
    size: 'medium',
    min: 10,
    max: 50,
    headerTitle: 'Range Slider Example',
    textfieldWidth: 100
};
