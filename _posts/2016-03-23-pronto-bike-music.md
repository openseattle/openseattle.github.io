---
title: "Representing bike sharing data with music"
published: true
layout: page
description:  "You’ve heard about visualizing data, but what about 'audible-izing' it? Last year Dan Muldrew won the 'Most Creative' award from Pronto’s data challenge for his project to set bike station data to music, changing the notes of the song according to the number of bikes docked in the Pronto station. He picked days of the year to highlight, such as Bike to Work Day, MLK Day, and April Fools Day. Recently Katherine Boyd talked with him about how he developed the idea for turning data into sound."
author: Katherine Boyd
---

You’ve heard about visualizing data, but what about “audible-izing” it? Last year Dan Muldrew won the “Most Creative” award from [Pronto’s data challenge](https://www.prontocycleshare.com/datachallenge) for his project to [set bike station data to music](https://www.youtube.com/playlist?list=PLnYZZJQzKeFDjsYDZztOTM-_jTL7hJkGs), changing the notes of the song according to the number of bikes docked in the Pronto station. He picked days of the year to highlight, such as Bike to Work Day, MLK Day, and April Fools Day. Recently I talked with him about how he developed the idea for turning data into sound.

<img src="/images/posts/pronto.jpg" alt="Pronto bike station" style="float:right; width:45%; padding:0px 0px 20px 20px;">

## I loved your Open Seattle presentation of this project. You set data from Seattle’s [Pronto Bike Sharing](https://www.prontocycleshare.com/) program to music. What inspired you?

I went for the “Most Creative” category at the onset. I figured that as long as I had an idea which was out of the box enough, it would be the easiest path to take. I studied what people had done for the Pronto challenges in other cities, and realized that everyone would likely use the trip data (22 MB) and ignore the station status data (871MB). So the question became: what to do with a regularly timed bike counts from the stations? Turning this into music seemed like a natural fit.

It's possible there might be some untapped potential for representing certain types of data as music, though I think a potential hurdle with the idea might be a lack of widespread musical training. For instance, most people can reach a certain level of writing proficiency. They know how to write a sentence, or a paragraph. Most people can also create something new visually. It seems like it shouldn't be that hard to make your own music - quite a few people in the music industry make music without any knowledge of music theory. Personally, I’ve wanted to compose music for films for awhile. However instead of film music, my first music soundtrack was for a game during a recent game jam (hackathon). During that project, I became adept at Garage Band, and leveraged those skills later for the Pronto station music project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/rx2gS88Phb8?list=PLnYZZJQzKeFDjsYDZztOTM-_jTL7hJkGs" frameborder="0" allowfullscreen></iframe>
 

## What kind of musical background do you have?
I played the organ for 12 and a half years. I eventually reached a level beyond my home organ, so I needed to use a more complete organ at a church to practice. I also played the violin for a few years in college.

## How did you develop the musical design?

I spent about a week thinking about what might have a chance of sounding good. I’m a fan of minimalist music, such as Terry Riley’s classic [“In C”](https://www.youtube.com/watch?v=yNi0bukYRnA) piece. His piece starts out with a single player repeating middle C which functions as a heartbeat or pulse for the piece, then other players layer other musical elements on top. I did something similar by starting the piece with all of the instruments simultaneously playing middle C. The interesting part happens when the tones shift up and down on the scale as bikes are moved around the system.

I picked seven stations to focus on in the downtown area that seemed to have a lot of activity. I then normalized the number of bikes at each station by just assigning the number of bikes docked to the station at midnight to middle C. As bikes are moved on and off the racks over the course of the day, the note played for the station goes up and down on the musical scale accordingly.  Each song represents a day’s worth of data starting at midnight, and each station is assigned an instrument sound which remains the same between the different days.

## What’s been the reaction when you’ve showed people?

When I first made it, I heard some patterns, but didn't know if people would find the music interesting. After all, it’s not a completely consciously composed piece. I’ve received mostly positive reactions. Some people appreciated it, while perhaps other people listened to it and only heard noise. I expect it would vary according to musical tastes.

## You did this for a [data challenge that Pronto organized](https://www.prontocycleshare.com/datachallenge). Would people have access to their data outside a hackathon, or was this a one-time deal?

Anyone can get access to Pronto’s data, on their [challenge website](https://www.prontocycleshare.com/datachallenge). (See the green button on the right hand side of the page)

## Are there other data-to-music projects out there, or are you the first person you know of to do this type of thing?

Thomas Levine is one of the few examples I know of: a [music video about the financial crisis](https://thomaslevine.com/!/fms-symphony/), and another about [the ridership of Chicago buses and New York subways](https://thomaslevine.com/!/ridership-rachenitsa/).

My music is different. It emphasizes the harmonic change in relationship between the different stations. I can hear the harmonic center of the piece warping similar to the experience of listening to “In C.” Levine’s work appears to combine very different types of data together in a piece or plays the notes separately instead of together.

## What advice would you give someone who is trying to make an audible display of data?
We already use sound to represent information, for example through the use of alerts on phones. Somehow, we listen and understand music almost magically. This innate musical understanding would seem like an advantage over having to learn a language. However, most music played today, with a few exceptions like jazz, is scripted by a relatively small number of people who create new music.

Just recently, I talked with a UW emeritus composer at a practice session of the [Kronos Quartet](http://www.kronosquartet.org/) who were preparing to play one of his new pieces. I asked him what he thought of their interpretation of his music: did they play it the way that he imagined? He said something like “When I compose music it’s like writing a play. The best you can do is set up your players for success. The performer will make it their own within your framework.”

I think that’s the same setup when you turn data into music. You have to think carefully about the framework to musically highlight the characteristics of the data you’re interested in. The data can be messy, and often, you don’t know what to expect, so it needs to be set up so that regardless of what the data is doing, there is potential for something musically interesting.

## For more information:
- [Music of Pronto Station Status, by Dan Muldrew](https://drive.google.com/file/d/0Bz7DCEp8WYW0bURhaThBT3ZMVHM/view)
- [Hacking Seattle’s Bike Share, Part 2: A day of Pronto in song](http://www.seattlebikeblog.com/2015/12/02/hacking-seattles-bike-share-part-2-a-day-of-pronto-in-song/)


_Katherine Boyd is the owner of [Halcyon Northwest](http://halcyonnw.com/), a Seattle-area consulting company specializing in data and public policy._
