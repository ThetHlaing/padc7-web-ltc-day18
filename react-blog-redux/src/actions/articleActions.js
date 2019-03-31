import {retrieveData,storeData} from "../utilies/localStorage";

export const fetchArticles = () => dispatch => {  
  const articles = retrieveData('articles');
  dispatch({
    type: 'FETCH_ARTICLES',
    data : articles
  });
};

export const insertArticle = (article) => dispatch => {  
  const articles = retrieveData('articles');
  if(articles !== null && articles.length != 0){
    const mapped_array= articles.map(i => parseInt(i.id));
    const max_id = Math.max(...mapped_array);
    article.id = max_id + 1;
  }
  else{
    article.id = 1;
  }  
  articles.push(article);
  console.log('stored article',articles,article)
  storeData('articles',articles);
  dispatch({
    type: 'ADD_NEW_ARTICLE',
    article : article
  });
};


