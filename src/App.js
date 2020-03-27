import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    stories: []
  }


  componentDidMount() {
    fetch("http://hn.algolia.com/api/v1/search?tags=story,author_pg").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({stories: data.hits})
  });
  }

  getArticle(stories) {
    return `${stories.title} ${stories.author} ${stories.created_at}`
  }


  render() {
  
    return(

      <div>
      <form>
        <label>
          Author
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search" />
      </form>
      <form>
        <label>
          Date
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search" />
      </form>
      <ul>
      {this.state.stories.map((story, index) => {
        return (<li key={index}>
          <span>{this.getArticle(story)}</span>
      }
        </li>)
      })}
      </ul>
      </div>
     
    )
  }
}

export default App;
