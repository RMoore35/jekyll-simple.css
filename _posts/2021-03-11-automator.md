---
title: Automator
header: Automator
description: The built-in Apple tool for automating all sorts of things
permalink: /automator/
layout: post
---

I feel like such a hack writing this. Mainly because I feel that one day Automator will be deprecated and I'll have to figure out how to run these scripts another way. Which, by the way, is what I should be doing in the first place.

But, moving past that.

As you may know, I recently spun up a pretty simple film reviews site because I love films.

I originally wrote it in just plain old html/css but because I wanted to add some functionality, re-wrote it in php. I also wrote a pretty simple python script to scrape some data from my <a href="https://letterboxd.com/RMoore35/">Letterboxd</a> rss feed. I probably could have done it in php, but I know way more python, and it was much easier.

Why php you ask? I don't know. I guess I wanted to try something new.

However, this posed a problem. Since I decided to launch my site with easy and free Netlify hosting, I needed to get my site back into html. Turns out that is also relatively easy. All I had to do was write a shell script like this:

<pre style="line-height:.9;">
<code style="font-size:15px;">
php index.php > index.html
php reviews.php > reviews.html
php lists.php > lists.html
php about.php > about.html
php blog.php > blog.html
php contact.php > contact.html
</code>
</pre>

Now I had a problem. Yes, both the shell script above and the python script are very simple, but it quickly became a pain to run both of them whenever I posted a new review or when I made changes to my site. So what to do?

Again, I feel like an absolute hack for turning to Automator. But after some trial and error with a few different tools, I just ran out of time in my busy schedule.

So, enter Automator.

Automator has been around for God knows how long. I remember using it when I got my first mac, just to be cool. It's basically a drag and drop app maker, among other things.

I'm not going to do an exhaustive walk-through, but basically in this case, I can create a simple shell script to imitate what I would do to run the above code (which is saved as build.sh). That is one app. The other gets my python script and opens it with the default application (which in this case is the terminal, since I created an executable, "pythonexec") to run the .py script.

![automator-1](/assets/images/automator-1.png)

![automator-2](/assets/images/automator-2.png)

All I had to do after that was create a daily event in my calender that opens both of the Automator applications.

Boom. So, it was relatively simple. But again, I'm not that happy. Yes, it's automated, so I should leave it alone. I just can't help shake the feeling that I can do better...


Day 42: #100DaysToOffload

<a href="https://blog.mooreanalysis.com/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>
