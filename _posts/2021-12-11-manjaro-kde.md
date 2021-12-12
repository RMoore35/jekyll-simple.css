---
title: Manjaro KDE
header: Manjaro KDE
description: Getting started with Manjaro KDE on an old Asus laptop
permalink: /manjaro-kde/
layout: post
---

I recently was gifted an Asus laptop that’s more than ten years old. The thing was incredibly bogged down by Windows 10. Like seriously. Startup time was around 5 minutes and even then each individual program took over a minute to load.

I thought it would be fun to mess around with it so fortunately it was given to me as a loaner. I’m not sure the individual wants it back but I’m not too worried about it. If they do, oh well, they have linux now :)

I wanted to try something very different from what I was used to (Mint). I had heard about Manjaro for some time and figured I’d give it a spin. My first option was actually Solus but unfortunately the installer was glitchy and I couldn’t get past the partition selection step. I may have been able to figure it out but why waste my time?

Originally, I tried Manjaro GNOME. I noticed some performance issues - it was very slow both starting and launching any apps. While a slight improvement over the Windows 10 speed, I knew I could do better.

Someone over on Fosstodon recommended I try KDE since it is even more stripped down and is known for its speed. So, I backed up a few steps and before long I was booted into Manjaro KDE Plasma.

Immediately there was a big performance improvement - exactly what I was looking for. But it was a big learning curve, even for someone with a small amount of tech savvy. I know that if I ever want to give it back, I’ll need to go with something much simpler.

But, for now, it has been very fun.

It has been a fun challenge to learn a new package manager and install a bunch of basic programs. This isn’t a bad thing - there is almost zero bloat. It just has involved a little more work to get it customized exactly how I want it.

Speaking of customizations, I found the interface much easier to work with, even over Mint. I quickly was able to change the cursor set, adjust the theme, and enable some cool window effects.

I even have had to solve a somewhat serious issue, always good for learning. I did a few updates and was prompted to restart. I was having problems with a few of the updates so I hadn’t finished all the updates before I restarted.

When I tried to reboot, I got an error message:

“Failed to start Simple Desktop Display Manager”.

I had no idea what to do with this. I thought maybe because I had skipped some updates it was maybe a partial update issue so I fixed that in tty.

After another reboot I still got the same error message. I did some research and it turns out this error message can also be thrown if you have driver issues. Then I remembered: I had just installed a few drivers as well, none of which had affected the performance so far. So I dug around a little more in some forums and figured out how to a) identify the driver and then b) remove that driver. With this done, I rebooted yet again and success! I was up and running again.

This last little hiccup was actually good for me because you learn a lot when you have to troubleshoot.

That’s it. Not sure if I’m going to keep Manjaro on that machine or if I’ll dual-boot it on my hp. I may have other plans for that older laptop - maybe a server? Who knows. Only time will tell.

Cheers!

Day 77: #100DaysToOffload

<a href="https://rmooreblog.netlify.app/feed.xml"><img src="/assets/images/rss_feed.jpg" style="opacity:1;" width="40"/></a>
