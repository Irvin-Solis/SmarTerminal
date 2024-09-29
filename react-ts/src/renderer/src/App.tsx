import Versions from './components/Versions';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { useState, } from 'react';

function App(): JSX.Element {

  const [terminalLineData, setTerminalLineData] = useState();
  const [terminalPromp, setTerminalPromp] = useState('bash$');

  const HandleInput = (terminalInput) => {
    if ('/'=== terminalInput){

    }
  }

  const TerminalController = (props = {}) => {
    return (
        <Terminal prompt={terminalPromp} height='20vw' colorMode={ ColorMode.Dark }  onInput={ terminalInput => {HandleInput(terminalInput)} }>
         <TerminalOutput>{terminalLineData}</TerminalOutput>
        </Terminal>
    )
  };
  return (
    <>
      <Versions></Versions>
      <div className="container" style={{ width: '80vw', display: 'flex' }}>
        <div><TerminalController /></div>
        <div style={{
          width: '20%',
          height: 'auto',
          backgroundColor: 'grey',
          border: '1px solid black'
        }}></div>
      </div>
    </>
  );
}

export default App;
