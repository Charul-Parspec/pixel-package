import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TrendingUpIcon } from '../Icons';
import { Box } from '../Box';
import { Button } from '../Button';
import { Tabs } from './';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        onChange: { action: 'onChange' }
    }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
    const [selectedTab, setSelectedTab] = useState(args.selectedTab);
    const handleTabChange = (newValue: string) => {
        setSelectedTab(newValue);
    };
    return <Tabs {...args} selectedTab={selectedTab} handleTabChange={handleTabChange} />;
};

export const Basic = Template.bind({});
Basic.args = {
    selectedTab: 'buttonsTab',
    options: [
        {
            label: (
                <Box display={'flex'}>
                    One
                    <TrendingUpIcon />
                </Box>
            ),
            value: 'buttonsTab'
        },
        {
            label: 'Two',
            value: 'two'
        },
        {
            label: 'Three',
            value: 'three'
        }
    ],
    handleTabChange: (newValue: string) => {}
};
