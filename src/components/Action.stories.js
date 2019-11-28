import React from 'react';
import { storiesOf } from '@storybook/react';
import { action,actions } from '@storybook/addon-actions';
import { Button } from 'antd';


storiesOf('Actions', module)
    .add('single', () => <Button onClick={action('button-click')}>single action</Button>)
    .add('multiple', () => <Button {...actions('onClick', 'onMouseOver')}>multiple1</Button>)
    .add('multiple2', () => <Button {...actions({ onClick: 'clicked', onMouseOver: 'hovered' })}>multiple2</Button>)