---
title: Terminal Commands
header: Terminal Commands
description: The terminal commands you need to know
permalink: /terminal-commands/
layout: post
---

Over the last few years, I have started to become a bit of a tech nerd. I never used to be.

I remember growing up I sort of made fun of nerds, specifically anyone involved with anything computer related. I don't really know why. I guess part of it was I grew up in the middle of nowhere and we just did more outdoor things, not that they are mutually exclusive.

Now that I am in this tech world, I love it and wished I would have gotten in sooner. Seriously. I can't imagine the things I would have known if my interest would have started earlier.

But I can't get back time and honestly I don't have any regrets.

Anyway, now I am here, writing on my blog, and trying to share a little bit of knowledge and of course learn as much as I can.

Playing around in the terminal can be a fun experience. I don't know what it was like in the early days of computers. I wasn't around. But I do know that it now seems like no one uses the terminal.

Obviously some people do - and I'm one of them. And so, I wanted to give anyone not familiar my opinion of five of the most common commands and how to use them.

Note: I primarily use my mac and have only just begun using linux. I also do have a windows machine but can't really comment if these things translate over. I primarily use my windows machine for SQL and R and do almost nothing using the command line. So this guide will focus on the Mac Terminal.

Bonus: You can hit command + spacebar (which brings up spotlight) and start typing Terminal, then press enter for a quick way into the Terminal.


<h4>First and arguably the most important command is:    cd </h4>

Why? because you can't execute commands in a directory if you can't get into that directory.

So what does "cd" do? Once Terminal opens, type cd, followed by the directory or folder you want to move to. You can hit tab at any point and the Terminal will auto-fill the rest of the name, if what you have typed is unique enough.

But how do you know what directories exist in your current directory?


<h4>The second command is:   ls </h4>

"ls" will give you a list of all files and directories in your current directory. There are other commands you can chain after ls, but just knowing ls is enough for now.


<h4>The third "command" is added onto cd to move up to the parent directory. Adding: ..</h4>

after cd allows you to move up to the parent directory. So, the full command is

cd ..

Coincidentally. you can move up as many levels as there are directories. So for two levels, it would be:

cd ../..

And you can keep going by adding another "/.."


<h4>The fourth command is: mkdir </h4>

This command makes a subdirectory in the current directory and thus is followed by a name:

mkdir test-directory

You can then cd into this directory and do whatever you want. But what if you made a mistake? You can simply do:

rm -R test-directory


<h4>Finally, the fifth command is:  cp</h4>

"cp" is your basic copy command. For example, I can make a copy in my current directory like so (original name followed by new name):

cp build.sh test-build.sh

But I've actually hardly even run into that situation. More often than not, I have needed to copy to a new folder. That can be done like so (file name followed by directory where you want to copy):

cp build.sh test-directory

And to practice, what if I made a mistake and I want to delete that directory?

rm -R test-directory.

Note: in the Terminal, this gives no warning, so if you are moving/copying a bunch of files, proceed with caution. Also, the move command is similar (mv &lt;file&gt; &lt;dir&gt;) and I use as often if not more.

Finally, I will leave you with this: when I was working as a back-end developer, the most frequent thing I did in the terminal, besides cd, was to use the up arrow to bring up the last command. I would make a mistake, an error would pop up, and after fixing, all I had to do was arrow up until I brought up the command I needed to run again.

I feel like I am only getting started with the terminal. As a new linux user, I will admit that I am absolutely overwhelmed by the possibilities. But the commands above will give you a solid start. And... make all of your friends think you are a nerd.

Day 36: #100DaysToOffload

<a href="https://blog.mooreanalysis.com/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>

<img src="/assets/images/profilepic.jpg" />

<ul>
  <li>I've sailed across the Atlantic</li>
  <li>I've been to Iceland</li>
  <li>I've been skydiving</li>
</ul>

<a href="https://www.newyorker.com/magazine/2017/11/27/the-serial-killer-detector">New Yorker.</a>

<pre style="line-height:.9;">
<code style="font-size:15px;">
  require 'Faker'

  $i = 0
  $num = 15370

  while $i < $num  do
    puts Faker::Restaurant.name
    $i +=1
  end
</code>
</pre>

<pre style="line-height:1;">
<code style="font-size:15px;">
  &lt;div class="main"&gt;
    &lt;h2><b>Most Recent Reviews</b></h2&gt;
    &lt;?php $lines = file('top3.txt');
    foreach($lines as $line){echo $line;}?><br&gt;
  &lt;/div&gt;
</code>
</pre>
