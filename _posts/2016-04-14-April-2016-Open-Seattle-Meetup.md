---
title: "Open Seattle April 2016 Meeting: Visualizing Data"
published: true
layout: page
description:  "Per Nilsson walked us through visualizing data using Formidable's Victory. Plus many announcments about great projects looking for help, and an update from Candace Faber on Seattle's Open Data Policy. "
author: Katherine Boyd
---

Seth Vincent hosted the meeting. 

## Announcements

**Will Saunders**, the Open Data lead for the State of Washington, is working on a grant funded project to teach librarians how to share data: [Data Equity for Main Street](https://www.newschallenge.org/challenge/data/entries/data-equity-for-main-street-bringing-open-data-home-through-local-libraries). He needs help to design the curriculum – 1-2 civic technologists who have ideas or experience on how to teach people to use open data. 
Contact: [Will.saunders@watech.wa.gov](Will.saunders@watech.wa.gov). Slack channel: will-saunders. Also, Washington’s open data is on Data.wa.gov. 

**Tim Clemans** is interested in making open data more usable, and is looking to make open data widgets to put on websites. He would like to talk with interested people about what framework would be easiest for developers to use to make tiny components for making data-driven apps. 
Contact: Tim on Slack Channel  

**Jamie Smeland** is working on a project with Public Health Seattle and King County, through the county’s the [APDE](http://www.kingcounty.gov/healthservices/health/data/APDE.aspx) team (Assessment, Policy Development, and Evaluation). Her team has a grant to work with low income people in Auburn. They want to discover the community’s tech needs, civic interests, and what information they have access to or want to have access to. For instance, do they want workshops? Apps? This project is connected with the Auburn library and with several non-profit social service agencies. She is looking for people who want to be in conversation with community members, helping them think about what their options might be. She also wants to know: Are there any similar groups in Auburn?  
Contact: [Jamie.smeland@kingcounty.gov](Jamie.smeland@kingcounty.gov). 

**Dan Milton** represents LATIS mentoring, which is project-based learning. They use aid and disaster response to teach business leadership and tech skills to underserved communities, in alignment with the city’s digital equity policy. He is seeking people who want to work with organizing community curriculum. He would like to know by April 20th. They are planning to create a wi-fi internet inside a low-income community that will be usable when all infrastructure has been eradicated, as in a natural disaster. 

**Nevan Wichers** is looking for insight on artificial intelligence safety, and is interested in working on a project to consider the potential conflict of AI with human values. Nevan wrote a follow up to his announcement for inclusion in the blog post:

> As artificial intelligence gets more intelligent, it will eventually exceed human capability. When this happens, it is possible that the AI will have more control over the future than humans do. Therefore, if the smarter than human AI has goals that are conflict with human values, it will cause drastic consequences for the future, possibly human extinction. No one knows how to make it so the AI will have a goal that aligns with human values yet, but certain AI researchers are working on the problem.

> There are [arguments from an AI researcher](http://intelligence.org/files/AIPosNegFactor.pdf) explaining why this is a problem. Bill Gates, Stephen Hawking, and Elon Musk are [also worried about this problem](http://observer.com/2015/08/stephen-hawking-elon-musk-and-bill-gates-warn-about-artificial-intelligence/). Some organizations working on this problem are Machine Intelligence Research Institute and the Future of Life Institute. 

> Others don’t think AI risk is a threat, like [Andrew NG](http://fusion.net/story/54583/the-case-against-killer-robots-from-a-guy-actually-building-ai/) and [other AI researchers](http://www.popsci.com/bill-gates-fears-ai-ai-researchers-know-better). The argue that smarter than human AI is very far away so we shouldn’t worry about it now, or that when AI does become smarter than humans it will still be under human control.

Contact: [nevan.wichers@gmail.com](nevan.wichers@gmail.com)

**Pat Tressel** announced the annual [State of the Map Conference](http://stateofthemap.us/) will be July 23-25th, and will be in Seattle this year. The last day will be a hack-a-thon. They are focusing on several projects:

* Infrastructure resilience for the Open Street map itself. 
* A way to collect road speed information in places that might need relief assistance, such as West Africa during the recent Ebola outbreak. They want to collect time stamps on commercial drivers to infer the speed of travel. They would then import that into Open Street Map, and compute real drive time polygons, so they can place new relief sites (like Ebola clinics).
* Red Cross missing maps project – there will be a mapathon.
* Get out and map – mapping plants in the Arboretum.
* And several more!

Contact: [ptressel@myuw.net](ptressel@myuw.net)

**Mike Roshak** announced this year’s [Seattle Give Camp](http://www.seattlegivecamp.org/), October 14-16 at the Microsoft Redmond campus, an entire weekend devoted to coding for charities. In the past they’ve made websites, mobile projects for food donations, and [many other projects](C:\Users\Katherine\Dropbox\Halcyon Northwest\Seattlegivecamp.org\projects\2015). They are looking for developers, designers, and project managers.
Contact: [seattlegivecamp.org/volunteer.aspx](seattlegivecamp.org/volunteer.aspx)

**Shelly Farnham** of [Third Place Technologies](http://thirdplacetechnologies.com/) is soon to launch [Spokin](C:\Users\Katherine\Dropbox\Halcyon Northwest\spokin.org), a Community curated civic networking platform. They are making it public in the next couple of weeks, and would love some test users to provide feedback!
Contact: [shelly@thirdplacetechnologies.com](shelly@thirdplacetechnologies.com)

**Seth Vincent** just put together OpenSeattle.org/join. He would like help in making a nodebot to onboard people automatically – add you to slack, email list, and twitter, etc. 
Contact: sethvincent on Slack

**Luke Swart** is seeking volunteers to help with the [Hey Duwamish](http://www.heyduwamish.org/) project. Also, there will be a [Duwamish Live](http://www.duwamishalive.org/) event to restore and clean up parts of the Duwamish on Earth Day. There is a [storytelling](http://www.duwamishtribe.org/images/DLHSTG20160424-Brochure.pdf) event the following week. 
Contact: luke@heyduwamish.org, lukeswart on Slack, or heyduwamish.org - click “Get involved”

## Presentation: Visualizing Data 

**Per Nilsson**, of Formidable in Fremont, gave a presentation on data visualization using Victory.  He used Fremont Bridge bike data as an example walk the listeners through the tools. He uses React, which is a declarative UI that gives you a view on your data. It has optimized rendering and hot reloading.

1.	Open Data
* Seattle Open Data: https://data.seattle.gov/
* Search: https://data.seattle.gov/browse?q=bicycle
* Fremont bicycle count: https://data.seattle.gov/Transportation/Fremont-SB-bicycle-count/aggm-esc4
* There's the data. Now what? Download?
2.	Socrata APIs!
* https://dev.socrata.com/data/
* Search: http://www.opendatanetwork.com/search?q=seattle+bicycle
* Found it: http://www.opendatanetwork.com/dataset/data.seattle.gov/65db-xm6k
* Getting started: https://dev.socrata.com/foundry/data.seattle.gov/4xy5-26gy
3.	Test the API
* Postman (Chrome extension)
* Example request: "https://data.seattle.gov/resource/4xy5-26gy.json?$order=date ASC&$where=date between '2015-01-27T21:18:15' and '2015-01-28T21:18:15'"
* Postman will escape those spaces for you
4.	Get an App token
* Not necessary for testing, but good for app development
* https://data.seattle.gov/login
* https://data.seattle.gov/profile/Per/ynvf-9q8v/app_tokens
5.	OK, I've got access to data. Now what?
* Victory: http://victory.formidable.com
* http://jsbin.com/webike/edit?html,css,js

For more information:
@persproutlab
[per@sproutlab.com](per@sproutlab.com)
GitHub Coopy
https://github.com/coopy/react-office-hours


## Seattle's Open Data Policy Update 
**Candace Faber** gave a brief presentation on how the city is starting the flesh out the new Open Data policy. She is hoping to have other department presenters for the rest of the year, like the recent Parks & Recreation presentation. 

For more information:
Open.data@seattle.gov
City of Seattle's [Open Data Resources](http://www.seattle.gov/legislation-policies-and-standards/open-data)

_Katherine Boyd is the owner of [Halcyon Northwest](http://halcyonnw.com/), a Seattle-area consulting company specializing in data and public policy._
