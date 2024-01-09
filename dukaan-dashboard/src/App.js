import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import SideNav from './components/sideNav/sideNav';
import PageContent from './components/pageContent/pageContent'
import PageTable from './components/pageTable/pageTable';
function App() {
  return (
    <Fragment>
      <div className='main-div'>
        <SideNav />
        <PageContent />
      </div>
    </Fragment>
  );
}

export default App;
