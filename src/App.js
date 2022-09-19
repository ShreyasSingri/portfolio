import { useState } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './PersonalData.json'
import PageContent from "./components/PageContent";

function App() {
  const [page, setPage] = useState(data.HeaderMenu[0].value);
  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
      <div className="App-header">
        <PageContent page={page} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
