import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Posts from './components/Posts';
import PostsItem from './components/PostsItem';

function App() {
  return (
    <Switch>
      <Route path='/posts' component={Posts} exact />
      <Route path='/post' component={PostsItem} exact />
      <Redirect from="/" to="/posts" />
    </Switch>
  );
}

export default App;
