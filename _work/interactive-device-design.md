---
layout: work
title: Interactive Device Design
dates: Fall 2015
position: 1
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-1.jpg
category: design
context: coursework
---
Interactive Device Design (CS294-84/ME290U) is a graduate-level Computer Science course at UC Berkeley (also cross-listed under Mechanical Engineering) that teaches concepts and skills related to designing, prototyping, and fabricating interactive devices. The first half of the class includes a variety of assignments demonstrating these concepts, including electronics & circuit board design, sensing & actuation, 3D modeling & fabrication, and embedded software & wireless communication. Below are my responses, in chronological order. Most assignments were done with the [FRDM-KL25Z](http://www.freescale.com/tools/embedded-software-and-tools/hardware-development-tools/freedom-development-boards/freescale-freedom-development-platform-for-kinetis-kl14-kl15-kl24-kl25-mcus:FRDM-KL25Z).

##TiltBox

![][idd-1]

Tasked with creating a switch from miscellaneous objects from the "free bin" (a collection of now-unneeded items that other people may find useful), the team consisting of myself, [Diane Wang](http://diane.io), Simon Scott, and Lauren Farrell created a box capable of detecting in which direction it is being tilted.

![][idd-2]

We made the box from CD cases, and hung a weight wrapped in aluminum foil from a telephone cord. We were able to use the existing wiring in the phone cord to implement the switch, closing a circuit when it touches any of the foil-linked walls, which can then be read in by a microcontroller.

##UChord

![][idd-3]

This homework assignment was to create a text entry device using at most 10 "switches". Inspired by chording keyboards and the encoding scheme of Morse code,  I created the UChord, a ukulele which uses two frets (and its four strings) to encode the alphabet, using the relatively well-known Morse code. This is effectively a chording keyboard with three bits instead of two (as you can either not press a key, press on the first fret, or the second), but the learning curve is reduced for some people who already know Morse.

![][idd-4]

To construct the UChord, I drilled holes into the 2nd and 3rd frets, representing dots and dashes, respectively. Switches made from copper tape lie under the strings, attached to pins on the board. A pick guard made of copper tape has been added, and a wire runs from there to ground. A copper wire pick is connected to a read pin, and, when the ukulele is strummed, completes the circuit upon touching the pick guard. Several wires run from ground, allowing the user to attach these to his fingers and thus "close" switches on the neck, and the microcontroller can detect the keys being pressed.

![][idd-5]

For character recognition, the microcontroller reads the closed switches on the frets, and adds to a stored integer based on those (+ 1 or 2 for the bottom string, 2nd or 3rd fret, respectively), + 10 or 20 for the next, and so on). This results in an unique integer variable we can use to represent a ternary number, which we then use in a switch statement to determine which letter to print. The debouncing for the pick switch is done by the DebounceIn library, and we only allow one input per strum by changing a boolean depending on its current state.

While making the UChord, several problems arose, mostly related to detecting which buttons were being pushed: Before the copper tape, I used physical buttons before realizing that pressing them simultaneously with the strings of the ukulele would be difficult. In the end, I put in the copper tape instead, which also meant I had to complete the circuit another way - with wires running from ground. The problem remained that it was hard to press just one key, due to the ergonomics of the ukulele (in addition to the fact that the “chords” I was playing were not conventional, and that I have never played the ukulele).

##More to come!

[idd-1]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/TiltBox-1.jpg
[idd-2]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/TiltBox-2.jpg
[idd-3]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-1.jpg
[idd-4]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-2.jpg
[idd-5]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/work/IDD/UChord-3.jpg
