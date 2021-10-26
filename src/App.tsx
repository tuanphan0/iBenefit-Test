import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { createDeviceAsyncAsync, deviceCode } from './features/device/deviceSlice';
import { getCookies } from './lib/utils';
import { BrowserRouter, Route } from 'react-router-dom';
import RouterSimple from './components/Route/index';
import 'antd/dist/antd.css';

function App() {
  const dispatch = useAppDispatch();
  const code = useAppSelector(deviceCode);
  useEffect(() => {
    dispatch(createDeviceAsyncAsync(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
           <RouterSimple/>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
