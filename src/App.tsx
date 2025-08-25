import { App as AntdApp, ConfigProvider } from 'antd';
import ButtonGroup from './components/ButtonGroup';
import ModalUtils from './utils/modal';

function App() {
  return (
    <div className='App'>
      <ConfigProvider>
        <AntdApp>
          <ModalUtils />
          <ButtonGroup />
        </AntdApp>
      </ConfigProvider>
    </div>
  );
}

export default App;
