import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed'
const twttr = window.twttr

export const clearContainers = () => {
    document.getElementById("potus_tweet_container").innerHTML = ""
    document.getElementById("indiapm_tweet_container").innerHTML = ""
}

export const generateTweet = (name, username, text, image_url, container_id) => {
    twttr.widgets.createTweet(
        '20',
        document.getElementById(container_id)
    ).then((e)=>{
        const screenName = document.querySelector(`#${container_id} .twitter-tweet.twitter-tweet-rendered`)
                .shadowRoot
                .querySelector('.TweetAuthor-screenName.Identity-screenName')

        const fullname = document.querySelector(`#${container_id} .twitter-tweet.twitter-tweet-rendered`)
                .shadowRoot
                .querySelector('.TweetAuthor-name.Identity-name')

        const tweet = document.querySelector(`#${container_id} .twitter-tweet.twitter-tweet-rendered`)
                .shadowRoot
                .querySelector('p.Tweet-text.e-entry-title')

        const avatar = document.querySelector(`#${container_id} .twitter-tweet.twitter-tweet-rendered`)
                .shadowRoot
                .querySelector('img.Avatar.Avatar--edge')

        // change stuff
        screenName.innerText = username
        fullname.innerText = name
        tweet.innerText = text
        avatar.src = image_url
    });
}