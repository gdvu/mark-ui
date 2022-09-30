import { ComponentPropsWithoutRef, useState } from 'react';
import useSwitch, { SwitchRootHookProps } from '@mark-ui/switch';
import './switch.css';

interface SwitchProps
  extends ComponentPropsWithoutRef<'button'>,
    SwitchRootHookProps {}

export default {
  title: 'Components/Switch'
};

export const Switch = (props: SwitchProps) => {
  const { elementProps, state } = useSwitch.Root(props);
  const { elementProps: switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button className='switch' {...elementProps}>
      <span className='switch-thumb' {...switchThumbProps}></span>
    </button>
  );
};

export const Usage = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <>
      <h2>Default Value</h2>
      <p>
        Switches are not selected by default. To be checked by default using{' '}
        <code>defaultChecked</code> prop
      </p>
      <Switch defaultChecked />

      <h2>Controlled value</h2>
      <p>
        To control the state, use <code>checked</code> property for initial
        value. The <code>onChecked</code> event is fired when the{' '}
        <code>checked</code> prop receives the new value.
      </p>
      <Switch checked={checked} onChecked={setChecked} />

      <h2>Disabled</h2>
      <p>
        The <code>disabled</code> prop makes switch un-clickable
      </p>
      <Switch disabled />

      <h2>Read only</h2>
      <p>
        The <code>readOnly</code> prop makes the selection immutable.
      </p>
      <Switch defaultChecked readOnly />

      <h2>Label forms</h2>
      <p>Switch supports the integration with HTML tag Label</p>
      <div className='flex'>
        <label htmlFor='dev' className='label-switch'>
          Label
        </label>
        <Switch id='dev' />
      </div>
    </>
  );
};
