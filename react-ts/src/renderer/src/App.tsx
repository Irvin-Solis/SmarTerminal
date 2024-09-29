import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';
import { useXTerm } from 'react-xtermjs';
import { useMemo, useRef } from 'react';

const { os } = window.api;

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
  const { ref, instance } = useXTerm();

  useMemo(() => {
    instance?.onData((data) => {
      instance.write(data);
    });
  }, []);

  // useMemo(() => {
  //   instance.onResize((size) => {});
  // }, []);

  // const handleData = useCallback((e) => {
  //   console.log(e);
  // }, []);

  // const handleResize = useCallback((e) => {
  //   console.log(e);
  // }, []);

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>

      <div ref={ref} />

      {/* <XTerm
        options={{ cursorBlink: true }}
        style={{ width: '100%', height: '100%' }}
        listeners={{
          onData: handleData,
          onResize: handleResize
        }}
      /> */}
    </>
  );
}

export default App;
