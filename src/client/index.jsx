import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from 'tweet.jsx';
import tweets from 'tweets.js';

class App extends React.Component {
  render() {
    console.log(tweets);
    let tweetItems = tweets.map(item => {
      return <Tweet name={item["user"]["name"]} screenName={item["user"]["screen_name"]} createdAt={item["created_at"]} retweetCount={item["retweet_count"]} favoriteCount={item["favorite_count"]} text={item["text"]}></Tweet>;
    });
    return (
      <div>
        tweets
        {tweetItems}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");