import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import addNotification from 'react-push-notification';
import { requestForToken, onMessageListener } from './firebase';
import './App.css'

function App() {
  requestForToken();

  onMessageListener()
    .then((payload: any) => {
      addNotification({
        title: payload?.notification?.title,
        subtitle: payload?.notification?.title,
        message: payload?.notification?.body,
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });    
    })
    .catch((err: any) => console.log('failed: ', err));

  const buttonClick = () => {
    addNotification({
        title: 'Test Notip ah',
        subtitle: 'Test Notification',
        message: 'Udin Empire Berjaya',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={buttonClick}>
          Test Notification
        </button>
      </div>
    </>
  )
}

export default App
