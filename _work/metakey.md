---
layout: work
title: Metakey
dates: Fall 2015
position: 1
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metakey/metakey-1.jpg
category: hardware
context: project
---
![][metakey-1]

Ethan Chiou & [Yiming Jen](github.com/yjen)

<a href="https://github.com/yjen/metakey">View on Github <span class="fa fa-long-arrow-right"></span></a>

Proudly made at [CalHacks 2015](calhacks.io), metakey is a smart lockbox designed for keys. Most of it, sans some of the Raspberry Pi's code, was done in 36 hours. Using a web application, users can open the box and release the key inside, and when they are done, they can simply and securely drop it back into the box.

##Table of Contents

[Context](#context)
/
[Design Approach](#design-approach)
/
[Software](#software)
/
[Video](#video)
/
[Final Thoughts](#final-thoughts)

##Context
We imagined metakey to be an inexpensive way to share house or apartment keys with friends, guests, or housekeepers. Rather than purchasing an expensive smart lock, a user could comfortably store their physical keys in a secure lockbox, and provide or restrict access to it to whomever they wish.

For example, a host on [Airbnb](http://airbnb.com) could use this device to safely deliver a key to their guests, giving them access at the beginning of their stay, and instruct them to just drop the key back in when they check out. This way, hosts don't need to worry about insecure or complex key delivery methods (hiding a key under a doormat, lockboxes with long combinations or codes, or going out of their way to physically hand them the key if they are busy or out of town).

With the correct implementation and integration, one could imagine guests and hosts not even needing to visit an external site or downloading additional software, simply managing this lock through the Airbnb app.

##Design Approach

![][metakey-3]

My first thought was to make a box with a latch that a user could lock and unlock, to keep things simple. However, after thinking about it and talking with my partner, we decided that it would make for a more immsersive experience if a key would simply slide out when a user pressed the button. From there, I designed an enclosure with two compartments - one for the motor and the Raspberry Pi, which would be connected to the internet and controlling the motor, and one for the key to rest in (while minimizing the risk that it would slide out backwards) before the user allowed it to fall out.

![][metakey-2]

We initially laser cut the entire enclosure in acrylic, but acrylic cement proved unforgiving and tough to touch up, so we used a combination of wood (that we could glue together) and acryllic plates in between, bending the middle one with a heat gun to catch the key as it fell through. We used clear acryllic here so people could see how the mechanism worked and to show off our design.

##Software

The corresponding web app can be found at [http://metakey.meteorapp.com](http://metakey.meteor.com). The software is relatively simple, with a [Meteor](http://meteor.com) app displaying a singular button, which when pressed, simply changes a variable on the server. This information is exposed on an API, which the Raspberry Pi pings periodically to see when it should open, upon which it holds itself open for a few seconds and then returns to its original position.

##Video

<div class="embed-video">
  <iframe src="https://www.youtube-nocookie.com/embed/k1ipAcEXqXk?rel=0&amp;autoplay=0&amp;showinfo=0&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>
</div>
<br>

## Final Thoughts

As you can probably see from the video above, the design of the box was not perfect, as the key got stuck in in the chamber (it was too wide to simply rest on the servo motor). Our impromptu "valve" was also not perfect, and would allow the key to slide out sometimes when we put it in. However, I believe these problems could be fixed fairly easily, given a bit more time to work on and perfect this project.

### Insights for the future

- Fix the design to prevent key getting stuck (either make chamber deeper or restrict the key to be in one orientation)
- Adjust the latch so key cannot slide out when putting it in - make it flush with the front and back of chamber
- Change how the Raspberry Pi talks to the server - rather than constant pinging, use sockets or something similar to keep connection open
- Figure out how to stop the servo motor when it is not being used

[metakey-1]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metakey/metakey-1.jpg
[metakey-2]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metakey/metakey-2.jpg
[metakey-3]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metakey/metakey-3.jpg
