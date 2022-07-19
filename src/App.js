import {useCallback, useState} from 'react';
import './App.css';
import data from './data.json';
import {Header} from './components/Header';
import {Content} from './components/Content';
import {Home} from './components/Home';
import Div100vh from 'react-div-100vh';

function App() {

  const [worksIndex, setWorksIndex] = useState(null);

  const handleBackHome = useCallback(() => {
    setWorksIndex(null);
  }, [setWorksIndex]);

  const switchIndex = useCallback(index => {
    setWorksIndex(index);
  }, [setWorksIndex]);

  return (
    <Div100vh className="App">
      <Header handleClick={handleBackHome}/>
      {worksIndex===null
        ? <Home
          copy={data.description}
          contact={data.contact_email}
          image={data.front_page_image}
          switchIndex={switchIndex}
          worksLinkText={data.link_to_works_text}
        />
        : <Content
          works={data.works}
          switchIndex={switchIndex}
        />
      }
    </Div100vh>
  );
}

export default App;
