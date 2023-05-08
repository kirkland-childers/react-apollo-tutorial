import '../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <LinkList/> } />
        <Route path='/new' element={ <CreateLink/> } />
      </Routes>
    </div>
  );
}

export default App;
