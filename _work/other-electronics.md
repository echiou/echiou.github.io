---
layout: work
title: Other Electronics
dates:
position: 6
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-2.jpg
category: hardware
context: project
---

A collection of smaller electronic projects.

##Table of Contents

[UChord](#uchord)

##UChord

![][uchord-1]

<a href="https://github.com/echiou/idd-uchord">View on Github <span class="fa fa-long-arrow-right"></span></a>

Assignment for Interactive Device Design (CS294-84/ME290U), a graduate-level Computer Science course at UC Berkeley (cross-listed under Mechanical Engineering) that teaches concepts and skills related to designing, prototyping, and fabricating interactive devices.

**Challenge:** Make a keyboard that can type into a computer.

![][uchord-2]

The UChord is a ukulele which uses two frets (and its four strings) to encode the alphabet, using the relatively well-known Morse code. This is effectively a chording keyboard with three bits instead of two (as you can either not press a key, press on the first fret, or the second), but the learning curve is reduced for some people who already know Morse. To construct the UChord, I drilled 8 holes into the 2nd and 3rd frets, representing dots and dashes, respectively. Switches made from copper tape hide under the strings. A pick guard made of copper tape has been added. When the ukulele is strummed, the included pick closes the switch upon touching the pick guard. For convenience in wiring, the FRDM-KL25Z has been adhered to the back of the ukulele.

![][uchord-3]

For character recognition, the microcontroller reads the closed switches on the frets, and adds to a stored integer based on those (+ 1 or 2 for the bottom string, 2nd or 3rd fret, respectively), + 10 or 20 for the next, and so on). This results in an unique integer variable we can use to represent a ternary number, which we then use in a switch statement to determine which letter to print. The debouncing for the pick switch is done by the DebounceIn library, and we only allow one input per strum by changing a boolean depending on its current state.

[uchord-1]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-1.jpg
[uchord-2]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-2.jpg
[uchord-3]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-3.jpg
