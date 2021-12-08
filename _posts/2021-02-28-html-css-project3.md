---
title: HTML/CSS Project - Part 3
header: HTML/CSS Project - Part 3
description: Building my first website completely from scratch
permalink: /html-css-project3/
layout: post
---

Since my last post, I have made decent headway on my new site. In fact, I think I am at the point where I would consider releasing it.

The updates:

I now have dynamically updating content!

The details:

This new site has, among other things, a list of my three most recent reviews that I have posted on <a href="https://letterboxd.com/RMoore35/">Letterboxd</a>, as well as a list for each of my favorite actresses and actors, along with the top 10 films I have seen them in.

So, those lists and reviews will now be (mostly) automatically updated!

I say mostly because I have to manually run a python script. This is something I will be looking at improving in the future. I'm sure there is a way to automate this. I can either automate the python script to run at a certain time each day or I can learn more php so that I can parse the RSS feed from Letterboxd in PHP instead of python.

Currently, my python script writes html into a txt file that I then read in php and post to my site. The php code looks like this:

For the reviews:

<pre style="line-height:1;">
<code style="font-size:15px;">
  &lt;div class="main"&gt;
    &lt;h2><b>Most Recent Reviews</b></h2&gt;
    &lt;?php $lines = file('top3.txt');
    foreach($lines as $line){echo $line;}?><br&gt;
  &lt;/div&gt;
</code>
</pre>

And for the actors/actresses (same code just substitute actors.txt for actors):

<pre style="line-height:1;">
<code style="font-size:15px;">
  &lt;div class="col-container"&gt;
    &lt;div class="column-1"&gt;
      &lt;?php $lines = file('actresses.txt'); echo $lines[0];?&gt;
      &lt;/div&gt;
    &lt;div class="column-1"&gt;
      &lt;?php $lines = file('actresses.txt'); echo $lines[1];?&gt;
    &lt;/div&gt;
    &lt;div class="column-1"&gt;
      &lt;?php $lines = file('actresses.txt'); echo $lines[2];?&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code>
</pre>

I am really happy with how this is coming together. I will most likely start looking at hosting options as I'm sure I will continue to make content and style changes for many weeks to come. No sense waiting on that. I may be able to host another subdomain under my main site, just like I did for this blog, but if I can't, I'm sure I can figure something else out.

Day 34: #100DaysToOffload

<a href="https://rmooreblog.netlify.app/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>
