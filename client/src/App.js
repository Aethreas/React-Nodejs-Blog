import React, { Component } from 'react';
import './App.css';
var draft = {
    title: "dd",
    body: "dd",
    author: "dd"
};
class App extends Component { 
  state =  { posts : [] }

  async componentDidMount() {

    const options = {
      method: 'GET',
      url: 'http://localhost:4000',
      header: {
        'Content-Type': 'application/json'
      }
    }
    console.log("fetching");
    const response  = await fetch('http://localhost:4000/api', options);
    const data = await response.json()
    return this.onPostIn(data);
  }

  async onPostIn(data){
    console.log(data);
    this.state.posts = data;
    this.forceUpdate();
  }


  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        {
          this.state.posts.map(post =>
            <div className="postContainer" key={post.id}>
              <div className="postTitle">
                <b className="postTitleFirstLetter">{post.title[0]}</b> {post.title.slice(1)}
              </div>

              <div className="postBody">
                {post.body}
              </div>

              <div className="footer">
                {post.author}
              </div>
            </div>)
        }

        <form className="postContainer" autoComplete="off">
          <div className="postTitle">
            Post to blog
              </div>

          <div className="postBody" onChange={OnChangeForm}>

            <input id='draftTitle' className='textInput' placeholder='Title'
              onChange={
                () => draft.title = document.getElementById('draftTitle').value
              }
            /><br />

            <input id='draftText' className='textInput' placeholder='Text'
              onChange={
                () => draft.body = document.getElementById('draftText').value
              }
            /><br />

            <input id='draftName' className='textInput' placeholder='Name'
              onChange={
                () => draft.author = document.getElementById('draftName').value
              }
            /><br />


            <button type='submit' onClick={OnFormSubmit}>Submit</button>
          </div>
        </form>

      </div>
    );
  }
}

// Called on form change
function OnChangeForm() {

}

function OnFormSubmit() {
  MakePost(draft);
}

// Generate post from object
function MakePost(post) {
  
  
  console.log("Making post..." + JSON.stringify(post));


  const options = {   
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
  },
    body: JSON.stringify(post),
    url: 'http://localhost:4000',
  }
  console.log("fetching");
  fetch('http://localhost:4000/api', options);
}
export default App;