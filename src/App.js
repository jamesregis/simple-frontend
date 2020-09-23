import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://backend-service/articles`;
    axios.get(apiUrl).then((articles) => {
      console.log(articles);
      const allArticles = articles.data;
      setAppState({ loading: false, articles: allArticles });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Mes articles ((en francais)</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} articles={appState.articles} />
      </div>
      <footer>
        <div className='footer'>
          Built with {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by IBM Cloud Advisory Team
        </div>
      </footer>
    </div>
  );
}

export default App;
