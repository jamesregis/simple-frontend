import React from 'react';
const List = (props) => {
  const { articles } = props;
  if (!articles || articles.length === 0) return <p>No articles, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>My articles (fetched from API)</h2>
      {articles.map((article) => {
        return (
          <li key={article.Id} className='list'>
            <span className='repo-text'>{article.Title} </span>
            <span className='repo-description'>{article.content}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
