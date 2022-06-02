// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Input } from '@rio-nx/input';

export function App() {
  return (
    <>
      <Input value="foo" onChange={onInputChange} />
      <NxWelcome title="app1" />
      <div />
    </>
  );
}

export default App;

function onInputChange(e: any) {
  console.log(e);
}
