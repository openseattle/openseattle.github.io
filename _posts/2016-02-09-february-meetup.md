---
title: "February Open Seattle event with Brandon Bouier, lead GIS analyst at the Seattle Police Department"
published: true
layout: page
description: "Brandon Bouier, lead GIS analyst at SPD, presented at Open Seattle tonight on SPD’s open data. This is the first of a monthly series of City of Seattle data leads attending Open Seattle and presenting on their publicly available data."
author: Katherine Boyd
---

![Brandon Bouier from the SPD](/images/posts/brandon-bouier.jpg)

_The February Orientation meeting was hosted by Seth Vincent and Candace Faber City of Seattle Civic Technology Advocate. It featured a presentation by Brandon Bouier, the lead GIS analyst at Seattle Police Department (SPD). This is the first of a monthly series of City of Seattle data leads attending Open Seattle and presenting on their publicly available data._

Brandon Bouier, lead GIS analyst at SPD, presented at Open Seattle tonight on SPD’s open data. He has a growing interest in civic technology, and attended last year’s Code for America summit. Although he was presenting today, he’s also excited about hearing what people at Open Seattle are doing.

Brandon walked the group through [several SPD data sets](http://www.seattle.gov/seattle-police-department/crime-data), including [rollups and mapped data](http://www.seattle.gov/seattle-police-department/crime-data), as well as [downloadable data sets](http://www.seattle.gov/seattle-police-department/crime-data/spd-data-sets) .

**[The Crime Dashboard](http://www.seattle.gov/seattle-police-department/crime-data/crime-dashboard).** An interactive dashboard that contains the same summary information that goes to police districts for operational decisions. Since this is aggregated data, there is no redaction in this set.

**[Precinct and neighborhood locator map](http://www.seattle.gov/seattle-police-department/crime-data/precinct-and-neighborhood-locator-map)** Updated in 2015, this map shows police precincts and neighborhoods, and lets you download the relevant micro community policing plan. The data is aligned with the 2010 census blocks, which means that users can directly relate demographic data to crime data.

**[Online Crime maps](http://web6.seattle.gov/mnm/policereports.aspx)** This map can be used to locate 911 calls and SPD records. SPD has redacted the incidents to protect privacy, and Brandon built automated scripts blur the XY coordinates. Some incidents don’t make it out for display, due to their sensitive nature, such as domestic violence events; also, those associated with “sensitive locations” such as domestic violence shelters, and homeland security sites, are also removed. The categories need updating to match current internal SPD categories.

**[911 Incident Response data](https://data.seattle.gov/Public-Safety/Seattle-Police-Department-911-Incident-Response/3k2p-39jp)** – This records data from 911 calls. Brandon highlighted a few details about the datasets:

- **Event Clearance Descriptions** have lots of categories; the **Event Clearance Subgroups** roll-up categories, like assaults, robberies, might be more helpful
- The addresses are blurred here
- **Census tract** is synonymous with census block.
- **Fields beginning with “Initial”** are the what the 911 operator assigns at the time of call. Fields beginning with “**Event Clearance”** represent what the event actually was, as determined by police.
- **At scene time** is the time stamp when the first unit got to the scene.

[**Reported Incidents data**](https://data.seattle.gov/Public-Safety/Seattle-Police-Department-Police-Report-Incident/7ais-f98f) –  – These are events for which a police report was actually filled out. There are lots of codes for reported incidents, and extensions are further subdivided. For instance, a burglary can residential or commercial, which would affect the police response. This dataset goes back to 2008, and the associated CAD data goes back to July of 2009.

Summary of incidents is a basic roll up.

[**COBAN**](https://data.seattle.gov/Public-Safety/COBAN-Logs/tpvk-5fr3) – This data set contains metadata about video.

**Historical crime data** **[2008-2014](https://data.seattle.gov/Public-Safety/Seattle-Crime-Stats-by-Police-Precinct-2008-Presen/3xqu-vnum) , [1997-2000](https://data.seattle.gov/Public-Safety/Seattle-Crime-Stats-by-1990-Census-Tract-1996-2007/e3zj-s4zh)** – This is Uniform Crime Reporting (UCR), a categorization or grouping of incidents as determined by the FBI. They aggregate things from all over the country so they need uniform data. These categories have been around since the 1920’s, so are a little bit dated, and might not accurately represent how incidents and responses occur now.

_A few comments from the Q&A:_

**Q: Is there other locally available LE data?**

This got crowdsourced to the group. There is publicly available police data from Renton and Auburn, but they only provide the office reports, not the raw data. Seattle is the first agency in the country to release 911 data. Other places to get data include CrimeReports.com and opendatanetwork.com.

**Q: Do you get a lot of external requests for your data?**

Brandon said that there is lots of collaboration with other police departments, especially sharing innovations. Seattle is considered the leader in body video, for instance. Many agencies are watching Seattle to see how things turn out here, and following our lead.

**Q: What are the consequences of making this data available?**

Brandon said that PDRs have gone up, and that he expects that the trend will likely continue. His worry is that people won’t understand the context of the data. Raw data gets analyzed and people jump to conclusions, make assumptions. If you take the data out of context, your analysis will probably be wrong. He is happy to answer questions and provide context.

**Upcoming releases:**

SPD will be releasing Use of Force data and Officer Involved Shooting data soon. Also, they are fulfilling a public data request (PDR) for police GPS data, which will likely be made public by the requestor. This data will show, for a response, where the officer came from, where they went to, and what route they took.

_Katherine Boyd is the owner of [Halcyon Northwest](http://halcyonnw.com/), a Seattle-area consulting company specializing in data and public policy._