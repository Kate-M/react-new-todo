import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import styles from '@sambego/storybook-styles';
import ButtonReadme from './SubmitREADME.md';
import Submit from './Submit';

const stories = storiesOf('Submit buttons', module);
stories.addDecorator(withKnobs).addDecorator(withReadme(ButtonReadme));

stories.addDecorator(styles({
    background: '#e1ecfa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
})).add('Submit', () => {
    const label = 'Button Type';
    const options = {
        add: 'Add',
        search: 'Search',
        reset: 'Reset',
    };
    const defaultValue = 'add';
    const content = (<Submit action={select(label, options, defaultValue)} btnSize="md" />);
    return (<div>{content}</div>);
});
