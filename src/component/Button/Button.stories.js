import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { statusOfTask as STATUS } from '../status';
import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .add('Process', () => {
      const label = 'Status';
      const options = {
          [STATUS.IN_PROCESS]: 'In process',
          [STATUS.DEFAULT]: 'Default',
      };
      const defaultValue = STATUS.DEFAULT;
      button('label1', 'button1', 'group1');
      button('label2', 'button2', 'group2');
      const status = select(label, options, defaultValue, 'State');
      const content = (<Button
          action="status-process"
          onActionSubmit={action('onActionSubmit')}
          status={status}
      />);
      return (<div>{content}</div>);
  })
  .add('Edit', () =>
    (<Button action="edit" onActionSubmit={action('onActionSubmit')} />))
  .add('Delete', () =>
    (<Button action="delete" onActionSubmit={action('onActionSubmit')} />))
  .add('Save', () =>
    (<Button action="save" onActionSubmit={action('onActionSubmit')} />))
  .add('Cancel', () =>
    (<Button action="cancel" onActionSubmit={action('onActionSubmit')} />));

