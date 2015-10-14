---
layout: work
title: Metamorphe Zoetrope
dates: Summer 2015
position: 2
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-1.jpg
category: hardware
context: research
---
<div class="embed-video">
  <iframe src="https://www.youtube.com/embed/nmKtfB-Ih18?rel=0&amp;controls=0&amp;autoplay=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</div>
<br>

Ethan Chiou & Tim Campbell

<a href="https://github.com/echiou/metamorphe-zoetrope">View on Github <span class="fa fa-long-arrow-right"></span></a>

A record player modified to demonstrate an application of [Cesar Torres](http://cearto.com)' [MetaMorphe](http://metamorphe.cearto.com/), namely the ability to interpolate keyframes from programatically defined changes in 3D models. The record player, which has been modified to rotate at around three times its built-in speeds (~99 and 135, instead of 33 and 45 rpm, respectively), has either 15 or 10   models placed on the turntable, and a flash is fired at a corresponding rate to produce the illusion of animation.

---

Student Presenter at [Jacobs Hall](http://jacobsinstitute.berkeley.edu/) Opening Ceremony

---

![][metamorphe-zoetrope-1]

##Table of Contents

[What We Started With](#what-we-started-with)
/
[Cog](#cog)
/
[Flash](#flash)
/
[Speed Control](#speed-control)
/
[Circuitry and Programming](#circuitry-and-programming)
/
[Jacobs Hall Opening Ceremony Pictures](#jacobs-hall-opening-ceremony-pictures)

##What We Started With

![][metamorphe-zoetrope-11]

When approached by Cesar to make a demonstration for MetaMorphe, Tim had the idea of making a zoetrobe or stroboscope to present the potential of MetaMorphe to produce keyframes in animation. We decided on a record player because of the already-implemented rotational motion and the size of the turntable. We found an inexpensive, used record player on Craigslist that I picked up in Oakland, and took it apart to see how it worked, and how we could modify it to do what we wanted.

###Built-In Buttons

<div class="double-photo">
  <img class="double-left" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/metamorphe-zoetrope-3.jpg"><img class="double-right" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/metamorphe-zoetrope-4.jpg">
</div>

On the left side, there is a power button, as well as options for speed, which were intially at 33 and 45 rpm. We initially wanted to display the animation at around 24 frames per second (fps). With 10 frames of animation, a 45 rpm turntable would display at 7.5 fps. Therefore, we calculated a necessary speed of 144 to 150 rpm for 10 frames at 24 fps. Upon seeing the different speeds, we then calculated the proportioned number of frames for the 33 rpm setting and also implemented a 15 frame plate. On the right side, there is a start/stop button for the turntable, as well as pitch control, which alters the rotational speed of the turntable slightly. There is also the yellow button I added in to turn the strobe light on and off.

![][metamorphe-zoetrope-6]

Looking at the internals of the record player, we found an analog circuit board with a 12v regulator, which was coincidental because Tim had a 12v xenon flash on hand, and so we could power the flash without an additional power source. The 12V regulator was speced to handle steady current output of 1A, which we estimated to be enough current to power both the motor and the strobe.

##Cog

![][metamorphe-zoetrope-5]

Because we wanted to spin the turntable at three times its default speeds, we decided that instead of replacing the motor, we could simply fit a larger pully over the existing one, which would increase the speed of the larger turntable. Tim measured the diameter of the existing pulley and then tripled its size on the 3D printed retrofit. The [Solidworks file](https://github.com/echiou/metamorphe-zoetrope/blob/master/stroboscope-cog-rev1.SLDPRT) is in the repository. An good explanation of crowned pulleys can be found on [woodgears.ca](http://woodgears.ca).

##Flash

Because of the limitations of the record player's power supply, we needed a way to turn the strobe off as the turntable was accelerating. To do this, we simply added a button on the side of the casing connected to the Arduino controlling the flash.

![][metamorphe-zoetrope-2]

The strobe light is an on-demand power strobe. It charges an 800V capacitor from a 12V power supply then discharges from a trigger signal between 5V and 12V. We triggered the stobe with a transistor connected to an Arduino digital output pin. The current draw of the strobe is determined by the triggering frequency, which was approximately 0.4 A for our 24 fps application. Tim had the strobe module lying around from a previous project, it can be purchased as an assembled module from [xenonflashtubes.com](http://xenonflashtubes.com).

In addition to powering the strobe light with the record player's power supply and controlling it with the Arduino, we had to position it illuminate the animation. We did this by replacing the record player's needle with a laser cut mount for the flash.

##Speed Control

In order to find the speed at which the turntable was spinning (and thus at what rate to fire the strobe light), we initially had the idea of putting a Reed switch and a magnet under the turntable find the rotations per minute (and actually cut a hole in the casing and hot glued the switch in). Then we settled on a elegant solution: instead of adding lots of logic and components, we could use the built-in pitch control to adjust the speed of the turntable ever so slightly while we fired the flash at a constant rate. This required no additional electronics or modification.

###Different Built-In Speeds

<div class="double-photo">
  <img class="double-left" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-12.jpg"><img class="double-right" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-13.jpg">
</div>

The record player also came with two default speeds, the faster of which we used for 10 frame animations (and would thus fire the flash at around 30 fps). We also decided to take advantage of the slower speed and use it for 15 frame animations. To do this, we had to be able to detect at what rate the turntable was spinning.

![][metamorphe-zoetrope-8]

Our intuition was to try to read the voltage from the LEDs indicating at which speed the turntable was turning, but the voltages which we were getting were confusing (and in the process we managed to burn out several LEDs as well as an Arduino). Instead of dealing with the same switch as the record player's circuit board, we chose an unused one, and simply read the signal from there. The unused switch was connected mechanically but not electrically to the other switch, thus saving the confusing voltage.

##Circuitry and Programming

![][metamorphe-zoetrope-9]

My Arduino code can be found [here](https://github.com/echiou/metamorphe-zoetrope/blob/master/MetaMorpheZoetrope/MetaMorpheZoetrope.ino). It essentially fires the flash at a constant delay if the on/off button is pressed, changing the delay depending on the current speed of the turntable. We initially thought there would be much more programming involved but the record player had so much existing functionality that only timing the strobe was necessary.

![][metamorphe-zoetrope-10]

The perma-proto board contains wires to the arduino, as well as wires to the switch detecting the current turntable speed, the button to turn the strobe on and off, and the strobe itself. There is also a switch connected to it that we used to turn the strobe on and off before putting the button in. We hot-glued stand-offs to the underside of the top case and then screwed the Arduino and protoboard into them.

##Jacobs Hall Opening Ceremony Pictures

![][metamorphe-zoetrope-14]

![][metamorphe-zoetrope-15]

![][metamorphe-zoetrope-16]

[metamorphe-zoetrope-1]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-1.jpg
[metamorphe-zoetrope-2]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/metamorphe-zoetrope-2.jpg
[metamorphe-zoetrope-3]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/metamorphe-zoetrope-3.jpg
[metamorphe-zoetrope-4]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/metamorphe-zoetrope-4.jpg
[metamorphe-zoetrope-5]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-5.jpg
[metamorphe-zoetrope-6]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-6.jpg
[metamorphe-zoetrope-7]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-7.jpg
[metamorphe-zoetrope-8]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-8.jpg
[metamorphe-zoetrope-9]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-9.jpg
[metamorphe-zoetrope-10]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-10.jpg
[metamorphe-zoetrope-11]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-11.jpg
[metamorphe-zoetrope-12]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-12.jpg
[metamorphe-zoetrope-13]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-13.jpg
[metamorphe-zoetrope-14]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/August-20/August-20-11.jpg
[metamorphe-zoetrope-15]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-Opening-Ceremony.jpg
[metamorphe-zoetrope-16]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/metamorphe-zoetrope/Metamorphe-Zoetrope-Poster.jpg
