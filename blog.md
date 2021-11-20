---
layout: default
title: Blog | Ryan Moore
header: Blog
description: Where the magic happens - this is my blog!
permalink: /blog/
---

Here is the link to my RSS Feed: <a href="https://rmooreblog.netlify.app/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>

{% for post in site.posts %}
  <p><a href="{{ post.url }}">{{ post.title }}</a><br>
  {{ post.description }}<br>
  📅 {{ post.date | date_to_string }}</p>
{% endfor %}
