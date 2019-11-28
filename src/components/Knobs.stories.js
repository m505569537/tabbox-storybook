import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, object, color } from '@storybook/addon-knobs';

// knobs的应用，就看开发者想要绑定哪些内容就好了
storiesOf('Knobs', module)
    .addDecorator(withKnobs)
    .add('default', () => <button onClick={action('showClg')}>{ text('Label', 'submit') }</button>)
    .add('style', () => <button style={object('Style', { color: 'red' }, 'GROUP')}>{ text('Label', 'change color') }</button>)
    .add('disabled', () => <button disabled={boolean('disabled', true, 'GROUP')}>{ text('Label', 'change disabled', 'GROUP1') }</button>)
    .add('color', () => <button style={{ color: color('Color', 'red') }}>color</button>)