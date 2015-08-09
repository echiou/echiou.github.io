---
layout: page
title: Contact Me
permalink: /contact/
---
![][contact-header]

Have a project you would like to work on with me? Want to have a conversation about life? Or just grab some coffee?

## Let's talk.
<form id="contact-form" action="//formspree.io/ethanchiou@berkeley.edu" method="POST">
  <div class="row">
    <div class="six columns">
      <label for="nameInput" class="input-label">Name</label>
      <input class="u-full-width" placeholder="What do you go by?" name="name" id="nameInput" type="text" required>
    </div>
    <div class="six columns">
      <label for="emailInput" class="input-label">E-mail</label>
      <input class="u-full-width" placeholder="How can I get back to you?" name="email" id="emailInput" type="email" required>
    </div>
  </div>
  <label for="exampleMessage" class="input-label">Message</label>
  <textarea class="u-full-width contact-textarea" placeholder="Hi Ethan..." name="message" id="message" required></textarea>
  <input type="hidden" name="_subject" value="A message for Ethan." />
  <input type="text" name="_gotcha" style="display:none" />
  <button class="u-full-width" type="submit" id="contact-submit">Ping me.</button>
</form>

[contact-header]: /images/contact.jpg
