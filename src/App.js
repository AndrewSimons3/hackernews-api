import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    stories: []
  }


  // componentDidMount() {
  //   fetch("http://hn.algolia.com/api/v1/search?tags=story,author_pg").then( (resp) => {
  //     return resp.json();
  // }).then( (data) => {
  //   this.setState({stories: data.hits})
  // });
  // }

  searchByAuthor = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=story,author_pg").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({stories: data.hits})
  });
}

  searchByDate = () => {
    fetch("http://hn.algolia.com/api/v1/search_by_date?tags=story").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({stories: data.hits})
  });
}


  render() {
  
    return(

      <div>
      <form onSubmit={this.searchByAuthor}>
        <label>
          Author
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search"></input>
        {this.state.stories.map(
        
      </form>
      <form onSubmit={this.searchByDate}>
        <label>
          Date
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search"></input>
      </form>
      </div>
    )
  }
}

export default App;
