---
title: HTML/CSS Project - Part 2
header: HTML/CSS Project - Part 2
description: Building my first website completely from scratch
permalink: /html-css-project2/
layout: post
---

I have learned quite a bit just since my <a href="https://blog.mooreanalysis.com/html-css-project/">last post</a> two days ago.

First, I started adding enough styling to the first page that I started a style sheet. This is what mine currently looks like:

<pre style="line-height:.9;">
<code style="font-size:12px;">
body {
    margin: 0;
}

.header {
  padding: 20px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

.header h1 {
  font-size: 40px;
}

.navbar {
  padding: 20px;
  text-align: center;
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  color: black;
  text-decoration: none;
}

.navbar p {
  text-align: center;
  color: white;
}

.navbar button {
    margin-left: 30px;
    padding: 5px;
    font-size: 20px;
    background: white;
    border-radius: 8px;
    border: 2px solid #1abc9c;
    outline: none;
  }

.navbar button:hover {background-color: #1abc9c}

* {
  box-sizing: border-box;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.side {
  flex: 10%;
  background-color: #f1f1f1;
  padding: 20px;
}

.main {
  flex: 70%;
  background-color: #5D6165;
  color: white;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
}

.main-2 {
  clear: both;
  flex: 70%;
  background-color: #1abc9c;
  color: white;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
}

.col-container {
    display: flex;
    width: 100%;
}

.column-1 {
  float: left;
  background-color: #5D6165;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

.column-2 {
  float: left;
  background-color: #5D6165;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

.column-3 {
  float: left;
  background-color: #5D6165;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

.column-4 {
  float: left;
  background-color: #1abc9c;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

.column-5 {
  float: left;
  background-color: #1abc9c;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

.column-6 {
  float: left;
  background-color: #1abc9c;
  color: white;
  width: 33.33%;
  width: calc(100% / 3);
}

ul#recent-list li{
  margin-bottom: 20px;
  margin-left: 30px;
  list-style: none;
  text-align: left
}

.col-container ol{
  margin-left: 50px;
  line-height: 25px;
}

.footer {
  clear: both;
  padding: 20px;
  text-align: center;
  background: #ddd;
}
</code>
</pre>

Next, I created a second page (now multiple pages lol).

<img src="/assets/images/new-site2.jpg" style="opacity:1;"/>

I am trying to keep the code as clean as possible as I go. But I'm sure there will have to be corrections I have to make along the way and down the road. As someone who is fairly new to HTML and CSS, it's almost inevitable.

I think my next steps will take me beyond html/css. I would really like to have my site update as I make changes to my <a href="https://letterboxd.com/RMoore35/" target="_blank">Letterboxd profile.</a>

I don't know how I'm going to do it yet. JavaScript? PHP? Ruby/Rails? A combination?

I'm certainly open to suggestions!

Day 32: #100DaysToOffload

<a href="https://blog.mooreanalysis.com/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>
