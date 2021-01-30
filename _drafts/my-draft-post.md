---
title: Guestbook
header: Guestbook
description: Making a guestbook for your Jekyll site in Simple.css
permalink: /10-day-recap/
layout: post
---

I wanted to do a guide on how to set up a guestbook page on a Jekyll/Simple.css, like mine.

For the purposes of this guide, I am going to assume you having a working Jekyll/Simple.css
site and that you know your way around the terminal on a mac.

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





Day 12: #100DaysToOffload

<img src="/assets/images/profilepic.jpg" />

<ul>
  <li>I've sailed across the Atlantic</li>
  <li>I've been to Iceland</li>
  <li>I've been skydiving</li>
</ul>

<a href="https://www.newyorker.com/magazine/2017/11/27/the-serial-killer-detector">New Yorker.</a>

<pre>
<code>
  require 'Faker'

  $i = 0
  $num = 15370

  while $i < $num  do
    puts Faker::Restaurant.name
    $i +=1
  end
</code>
</pre>
