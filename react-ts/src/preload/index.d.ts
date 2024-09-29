import type { ElectronAPI } from '@electron-toolkit/preload';
import type * as pty from 'node-pty';
import type * as os from 'node:os';
import type * as path from 'node:path';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      os: os;
      pty: pty;
      path: path;
    };
  }
}
