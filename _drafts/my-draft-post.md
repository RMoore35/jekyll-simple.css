---
title: CMOS Reset
header: CMOS Reset
description: How to make the system clock match when dual-booting linux/windows
permalink: /cmos-reset/
layout: post
---

Didn't do any research before I did this - fortunately for me I didn't run into any issues.

As I had my laptop apart and couldn't find the button cell battery, it occurred to me, "Why don't I just unplug the battery"? I did and set it aside for 5 minutes and went to do something else.

I plugged it back in, restarted my computer, and lo and behold, it told me that a successful CMOS reset had been performed. But, I couldn't get into Manjaro because it could not be authenticated. So I logged into Mint to see if I could figure out what was going on and bam, no internet. I had a momentary panic but figured I would just restart and see if that fixed it. When I restarted, I dug into BIOS a little bit and discovered that secure boot had been re-enabled. I fixed that and boom, I could log into Manjaro. Once on Manjaro both bluetooth and wifi were working so I was hopeful. Then, I restarted once more and now Mint was working perfectly.

Does bluetooth work after periods of inactivity??




Day 61: #100DaysToOffload

<a href="https://blog.mooreanalysis.com/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>

<!--

#image:
![automator-2](/assets/images/automator-2.png)

#link:
[contact page](https://blog.mooreanalysis.com/contact/)

#unordered list:
<ul>
  <li>I've sailed across the Atlantic</li>
  <li>I've been to Iceland</li>
  <li>I've been skydiving</li>
</ul>

#code block:
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

#html code block - note the &lt and &gt:
<pre style="line-height:1;">
<code style="font-size:15px;">
  &lt;div class="main"&gt;
    &lt;h2><b>Most Recent Reviews</b></h2&gt;
    &lt;?php $lines = file('top3.txt');
    foreach($lines as $line){echo $line;}?><br&gt;
  &lt;/div&gt;
</code>
</pre>

-->
