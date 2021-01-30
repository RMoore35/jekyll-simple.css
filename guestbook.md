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

* This form uses <a href="https://www.netlify.com/">Netlify</a> for form handling.
As of now, I will be manually reviewing and posting whatever you submit below the contact form.
I hope to update this in the future to an easier system.

<form method="POST" name = "guestbook" data-netlify="true">  
 <p>  
   <label>Name*</label><br>  
   <input type="text" name="name">  
 </p>  
 <p>  
   <label>Email</label><br>  
   <input type="email" name="email">  
 </p>  
 <p>  
   <label>Website</label><br>  
   <input type="text" name="website">  
 </p>  
 <p>  
   <label>Guestbook Entry*</label><br>  
   <textarea name = "guestbook-entry"></textarea>  
 </p>  
 <ul>
   <li>Fields marked with * are required.</li>
   <li>Your E-mail address won't be published.</li>
   <li>Your entry will only be visible in the guestbook after I have reviewed it.</li>
   <li>I reserve the right to edit, delete, or not publish entries.</li>
 </ul>
 <button type="submit">Submit</button>
</form>

Entries:

{% for entry in site.guestbook %}
  <p><br>
  {{ entry }}<br>
  </p>
{% endfor %}
