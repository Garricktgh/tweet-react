import React from 'react';
import ReactDOM from 'react-dom';

class Tweet extends React.Component {
  render() {
      return (
        <div>
          <p>Screen Name: {this.props.screenName}</p>
          <p>Name: {this.props.name}</p>
          <p>Created at: {this.props.createdAt}</p>
          <p>Retweet Count: {this.props.retweetCount}</p>
          <p>Favorite Count: {this.props.favoriteCount}</p>
          <p>Text: {this.props.text}</p><br/><br/>
        </div>
      );
  }
}

export default Tweet