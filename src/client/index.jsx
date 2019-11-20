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
      <html>
          <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="/style.css"></link>
            <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.3/css/boxicons.min.css' rel='stylesheet'></link>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
            <title>Tweeter</title>
          </head>
          <body>
            <div>
              tweets
              {tweetItems}
            </div>
          </body>
      </html>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");