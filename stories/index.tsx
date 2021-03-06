import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from "@storybook/addon-info";
import { Button } from '../src/Button';


storiesOf('Button', module)
  .add('with text', withInfo({inline: true})(() => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
