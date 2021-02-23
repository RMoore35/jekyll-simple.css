---
title: Github Auth Changes
header: Github Auth Changes
description: How to change your CLI to accommodate 2FA requirements on Github
permalink: /github-auth/
layout: post
---

It has been in the works for some time, but I kept procrastinating adding 2FA to my Github. Here is the official announcement from Github:

<a href="https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/">https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/</a>

OK, great. I'm not going to walk through how to set-up 2FA. It is very easy to do through the settings on your Github profile.

What is not as self-explanatory (but still easy), is once enabled, how you use the CLI to perform common Git operations (pull, push, etc.)

See, once you enable 2FA and then try to use terminal, you will get an error:

<img src="/assets/images/github-auth-1.jpg" />

OK, so now we need to fix this. To do so, we will generate a personal access token.

** Note: this is a guide for mac. **

First, navigate over to the settings page of your Github profile.

Next, click on the developer settings on the left side navigation menu:

<img src="/assets/images/github-auth-2.jpg" />

Next, select personal access tokens:

<img src="/assets/images/github-auth-3.jpg" />

Next, select generate new token:

<img src="/assets/images/github-auth-4.jpg" />

Then, we will give our personal access token a name. I chose something simple:

<img src="/assets/images/github-auth-5.jpg" />

Finally, we need to select the scope of this token. For git push, pull, etc., we only need to select the top option:

<img src="/assets/images/github-auth-6.jpg" />

Once that is done, copy the access token. Now, we can navigate back to the terminal. Once there, try another git push/pull. You should get the same error. Without closing the terminal, run the same command again. This should bring up the validation in your terminal. Now, you can enter your username and for password, use the access token you just generated.

<img src="/assets/images/github-auth-7.jpg" />

And, voilà! You should be all set.

I hope this helps someone.

Day 30: #100DaysToOffload

<a href="https://blog.mooreanalysis.com/feed.xml"><img src="/assets/images/rss_feed.jpg" width="40"/></a>
