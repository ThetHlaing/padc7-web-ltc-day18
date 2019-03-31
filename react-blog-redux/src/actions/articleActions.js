import {retrieveData,storeData} from "../utilies/localStorage";
import firestore from '../utilies/firebase';

export const fetchArticles = () => dispatch => {  
  //const articles = retrieveData('articles');
  const articles = []
  const articlesData = firestore.collection('articles').get();
  articlesData.then( (snapshot) => {
    snapshot.docs.forEach( item => articles.push(item.data()));
    console.log("articles",articles);
    dispatch({
      type: 'FETCH_ARTICLES',
      data : articles
    });
  })
  
};

export const insertArticle = (article) => dispatch => {  
  article.id = 12;
  firestore.collection('articles').add(article);
  
  dispatch({
    type: 'ADD_NEW_ARTICLE',
    article : article
  });
};


export const deleteArticle = (id,cb) => dispatch => {
  const articles = retrieveData('articles');
  const newArticles =  articles.filter( item => item.id != id);
  storeData('articles',newArticles);

  dispatch({
    type : 'DELETE_ARTICLE',
    id : id
  })

  cb();
}
