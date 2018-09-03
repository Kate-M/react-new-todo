import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import ButtonReadme from './ControlsTasksREADME.md';
// import { statusOfTask as STATUS } from '../status';
import ControlsTasks from './ControlsTasks';

const stories = storiesOf('Containers', module);
stories.addDecorator(withKnobs).addDecorator(withReadme(ButtonReadme));

stories.add('ControlsTasks', () => {
    // const label = 'Status';
    // const options = {
    //     [STATUS.COMPLETE]: 'Complete',
    //     [STATUS.DEFAULT]: 'Default',
    // };
    // const defaultValue = STATUS.COMPLETE;
    const addField = text('Add field', '');
    const searchField = text('Search field', '');
    const content = (
        <main>
            <div className="container">
                <ControlsTasks
                    onSubmitTask={this.switchControlsAction}
                    onFilter={this.switchFiltersAction}
                    onTextChange={this.switchTaskValueChange}
                    addValue={addField}
                    searchValue={searchField}
                    // isSearched={isSearched}
                />
            </div>
        </main>
    );
    return (<div>{content}</div>);
});
