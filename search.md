---
title: Search | Ryan Moore
header: Search
description: Find what you want on my site quickly
permalink: /search/
layout: default
---

Guess what? I implemented some cool search functionality on my site. Well, sort of. You can search using DuckDuckGo. This way, I didn't have to use JavaScript because I know some people hate it...

<form class="search-form" method="get" action="https://www.duckduckgo.com/?q=" target="_blank">
    <br>
    <input type="hidden" name="sites" value="rmooreblog.netlify.app">
    <label class="visuallyhidden" for="search">Search this site on DuckDuckGo</label>
    <input id="search" class="search" type="text" name="q" placeholder="Search rmooreblog on DuckDuckGo">
    <br>
    <div style="text-align:center"><input type="submit" name="submit" value="Search" id="submit"></div>
</form>
