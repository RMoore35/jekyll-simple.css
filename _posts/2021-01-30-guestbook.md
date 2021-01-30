---
title: Guestbook
header: Guestbook
description: Making a guestbook for your Jekyll site in Simple.css
permalink: /guestbook-post/
layout: post
---

I wanted to do a guide on how to set up a guestbook page on a Jekyll/Simple.css, like
<a href="https://blog.mooreanalysis.com/guestbook/">mine.</a>

Note that as you will see below this is a (hopefully) temporary solution. If you are looking for a fully functional, fully automated guestbook you'll have to look elsewhere.

For the purposes of this guide, I am going to assume you having a working Jekyll/Simple.css
site and that you know your way around the terminal on a mac. I'm also going to assume
you are using <a href="https://www.netlify.com/">Netlify.</a> They have very simple
form handling and that's why I am using it.

First, you need to edit your navigation.yml file to include a link to the guestbook
page. Remember that the navigation.yml file is in the _data folder. The code will look
like this:

<pre>
<code>
- name: Guestbook
  link: /guestbook
</code>
</pre>

Once that is done, create a file called guestbook.md in your sites main folder.

Next, I am just going to copy and paste the header from any one of my other page's .md
files, in this case, from my contact.md file and modify it. Your guestbook.md file should look like this:

<pre>
<code>
---
title: Guestbook | Ryan Moore
header: Guestbook
description: Leave a note for myself and others to see
permalink: /guestbook/
layout: default
---
</code>
</pre>

Next, I'm going to add just a little bit of customization to the file, like so:

<pre>
<code>
---
title: Guestbook | Ryan Moore
header: 💬 Guestbook
description: Leave a note for myself and others to see.
permalink: /guestbook/
layout: default
---

The online version of that book you sign at weddings and bourgie friends' houses when
they have you over for dinner.

Leave an entry of your own and/or read the entries left by others.
</code>
</pre>

Next, I am going to build the form. For this, I am going to use the code from <a href="https://simplecss.org/demo">Simple.css</a>. I'm not going to copy the full code because it is long,
but if you go to the demo guide, just scroll down to the form code.

If you are using Netlify, the most important change is in the first line of the form:

<pre>
<code>
  <form method="POST" name = "guestbook" data-netlify="true">  
</code>
</pre>

As of the time of writing this post, I am planning on reviewing the forms within my
Netlify dashboard and posting them below the guestbook form. This means I need to update
the guestbook.md file to include the following below the form:

<pre>
<code>
<p>
<ul>
  <li>Date: January 30th, 2021</li>
  <li>Name: Ryan</li>
  <li>Email: ryan.j.moore35@gmail.com</li>
  <li>Website: <a href="https://blog.mooreanalysis.com/">blog.mooreanalysis.com</a></li>
  <li>Entry: This is what your entry will look like!</li>
</ul>
</p>
</code>
</pre>

Obviously this is going to be tedious at first. But I also don't expect to get that many
entries - at least not initially. I am not overjoyed with this but it will have to do
given my current time demands and skill level.

If you have any feedback on this I look forward to hearing it!


Day 12: #100DaysToOffload
