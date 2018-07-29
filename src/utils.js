import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed'
const twttr = window.twttr

export const generateTweet = (name, username, text) => {
    twttr.widgets.createTweet(
        '20',
        document.getElementById('coolstuff')
    ).then((e)=>{
        const name = document.querySelector('.twitter-tweet.twitter-tweet-rendered')
                .shadowRoot
                .querySelector('.TweetAuthor-screenName.Identity-screenName')
        name.innerText = "@geekodour"
    });
}