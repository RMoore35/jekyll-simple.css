---
title: Feedparser
header: Feedparser
description: A handly little python library
permalink: /Feedparser/
layout: post
---

Did you know python has a pretty handy library for RSS feed parsing?

I didn't. I only recently discovered it while creating my third website.

My new website is plugging along just fine. I recently made the decision to use PHP in addition to HTML and CSS because I wanted some additional functionality. Specifically, I plan to update my new website with movie reviews and lists of movies with my favorite actors/actresses.

So, how do I do that?

Well, I knew that I wanted to use python for part of it. I probably could have used PHP, but I don't know enough yet and I try my best to keep my python proficiency up.

As I started working in python, I was using both beautiful soup and regular expressions, but it just seemed cumbersome.

A quick web-search later and I discovered feedparser. Here is what it looks like:

<pre style="line-height:1;">
<code style="font-size:15px;">
  from bs4 import BeautifulSoup as bs
  import feedparser

  feed = feedparser.parse('https://letterboxd.com/rmoore35/rss/')

  # Top Three Films
  for key in feed.entries[0:3]:
      tags = bs(key.description, "lxml").find_all('p',limit=10)
      lst = []
      for tag in tags[1:]:
          lst.append(tag.string)

      s = ' '.join(map(str, lst)).rstrip().replace("\'", "")
      new_title = key.title.split(",")
      top3_dict = {"title":new_title[0],"link": key.link,"description":s}
      for key,value in top3_dict.items():
           file1.write(value + "\n")
</code>
</pre>

Note: This is kinda messy right now. I write things very rough at first, then I condense them down. I hope I'm not alone in this :)

Another note: I ended up using BeautifulSoup for a little bit of the code, as feedparser didn't seem to handle the description tag very well, I think due to the way the Letterboxd rss feed is formatted. Since I won't be using this code for anything else I wasn't that worried about making it one-size-fits-all.

But what that little snippet does is finds the title of my three favorite films in the feed, as well as the url and the description of my review. I then write each on a new line in a txt file.

I also use very similar code to pull lists of every film I have watched for my favorite actresses/actors.

The next step will be to read that txt file with PHP and add that to the html for my site. Exciting stuff.

Day 33: #100DaysToOffload

<a href="https://rmooreblog.netlify.app/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>
