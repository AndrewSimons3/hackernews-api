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

  searchByAuthor = (event) => {
    event.preventDefault();
    console.log(document.getElementById("authorName").value)
    fetch("http://hn.algolia.com/api/v1/search?tags=story,author_pg&query="+document.getElementById("authorName").value).then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({stories: data.hits})
    console.log(data.hits)
  });
}

  searchByDate = (event) => {
    event.preventDefault();
    fetch("http://hn.algolia.com/api/v1/search?query=").then( (resp) => {
      return resp.json();
  }).then( (data) => {
    this.setState({stories: data.hits})
  });
}


  render() {
  
    return(
      <div>
      <div>
      <form onSubmit={this.searchByAuthor}>
        <label>
          Author
          <input id="authorName" type="text" name="name" />
        </label>
        <input type="submit" value="Search"></input>
      </form>

      <form onSubmit={this.searchByDate}>
        <label>
          Date
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search"></input>
      </form>
      </div>
      
      <div className="results">
        {this.state.stories.map((story, index) => {
          return (<div key={index}>{story.title} <br></br> {story.author} <br></br> {story.created_at} <p></p></div>)
        })}
      </div>
      </div>


    )
  }
}

export default App;
