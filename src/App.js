import './App.css';
import { Provider} from 'react-redux';
import { store } from './store/store';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ContactList />
      </Provider>
    
    </div>
  );
}

export default App;
