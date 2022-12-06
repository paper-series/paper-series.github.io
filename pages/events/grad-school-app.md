---
title: Graduate School Applications
layout: default
categories: past-event
when-happened: Oct 28, 2022
when-happened-epoch: 1666944496 <!-- UNIX epoch, used for sorting -->
preview-img: assets/img/grad-school-app/banner.png
summary: A tweet storm to answer common graduate school application questions.
---


<img src="{{ 'assets/img/grad-school-app/banner.png' | relative_url }}">

## This event has concluded!
We have collected all the questions and answers here:


{% for elem in site.data.grad-app-tweet-storm %}
  <div class='ts-thread'>
    <div class='ts-question'>
    {{elem.question}}<br/>
    <a target=_blank href="{{ resp.response.link }}" class='ts-tweet-link external-link twitter-link'>View on twitter</a>
    </div>

    {% for resp in elem.responses %}
    <div class='ts-response'>
      <div class='ts-user'>
        <a target=_blank href="https://twitter.com/{{ resp.response.handle }}" class='ts-user-profile-picture twitter-link'><img src="{{ resp.response.user-image }}"></a>
      </div>
      <div class='ts-response-contents'>
        <a target=_blank href="https://twitter.com/{{ resp.response.handle }}" class='ts-user-profile twitter-link'>@{{resp.response.handle}}</a>
        <p>
        {{ resp.response.contents }}
        <br>
        <a target=_blank href="{{ resp.response.link }}" class='twitter-link ts-tweet-link external-link'>View on twitter</a>
        </p>
      </div>
    </div>

    {% endfor %}
    <br>
  </div>
  {% endfor %}

<hr>

<a class='external-link' style="font-size:0.75em" href="https://twitter.com/StudentsSystems/status/1586025167234355201">(Original thread)</a>

<hr>


## Graduate School Applications

Hello grad school aspirants,
<p>
We are organizing a tweetstorm to answer all your queries about the grad school application process! Ask your questions in the Slido below.
</p>

<p>
On October 28, we will post a curated list of your questions from Slido on our Twitter account. Professors and students, some of which are listed below, will answer your questions on Twitter.
</p>

<hr>


<div class="section-header slido">Submit your Questions here:</div>
<div class="section-content">
    <iframe class="loading-white-bg" src="https://app.sli.do/event/gEPmvF5s2FU2Fen4x8yjfj" height="100%" width="100%" style="min-height: 560px;"></iframe>
</div>

<!-- > Ask questions for the panel anonymously -->
<!-- [on the QnA page](https://app.sli.do/event/muvx8icUQr3w3kz6kNaEXA) -->
<!-- <p>
<b style="color: maroon; font-size: 1.4em;">Update</b>
<hr style="width: 4em; background-color: maroon;">
This event has concluded. We'll update this page with recordings soon.<br>
Meanwhile, checkout the livestream on YouTube: <a href="https://youtu.be/fDTzyUGGuh8">https://youtu.be/fDTzyUGGuh8</a>
</p>
<hr> -->



<hr>

* When:  
  <!-- * <div style="font-weight: bold;" class="time-fmt-local" data-start="1652374800" data-duration="3600" data-show-timezone-link="true"></div> -->
  <!-- <a target=_blank class="text-small" href="{{ 'https://calendar.google.com/calendar/ical/c_sodit929fdca7hekmhfhck6efs%40group.calendar.google.com/private-8245e4bf06cf36b1e2e8fda09ce803c0/basic.ics' | relative_url }}">ical <i class="fa fa-calendar" aria-hidden="true"></i></a> -->
  * October 28, 2022

* Where:
  * Our Twitter: <a target=_blank class="external-link" href="https://twitter.com/StudentsSystems">@StudentsSystems</a>
  * Join our mailing list for updates: <a target=_blank class="external-link" href="https://groups.google.com/g/students-systems">Mailing List <img class="line-height" src="https://upload.wikimedia.org/wikipedia/commons/9/97/Android_Email_4.0_Icon.png"/></a>
<hr>


<!-- <div class="section-header">Submit your questions!</div>
<div class="section-content">
    <iframe class="loading-white-bg" src="https://app.sli.do/event/muvx8icUQr3w3kz6kNaEXA" height="100%" width="100%" style="min-height: 560px;"></iframe>
</div>
<br> -->

## Panelists 
<ul>
  <li><a target=_blank href="https://www.cs.utexas.edu/~vijay/"> Vijay Chidambaram - Professor, University of Texas at Austin</a> (<a  target=_blank href="https://twitter.com/vj_chidambaram">@vj_chidambaram</a>)</li>
<li><a target=_blank href="https://dependenttyp.es/"> Talia Ringer - Professor, University of Illinois at Urbana-Champaign</a> (<a  target=_blank href="https://twitter.com/TaliaRinger">@TaliaRinger</a>)</li>
  <li><a target=_blank href="https://mshahrad.github.io/"> Mohammad Shahrad - Professor, University of British Columbia</a> (<a  target=_blank href="https://twitter.com/MShahrad">@MShahrad</a>)</li>
  <li><a target=_blank href="https://cseweb.ucsd.edu//~nibhaska/"> Nishant Bhaskar - PhD Student, University of California San Diego </a> (<a  target=_blank href="https://twitter.com/nishant412">@nishant412</a>)</li>
    <li><a target=_blank href="https://www.cs.cornell.edu/~yucheng/"> Yucheng Lu - PhD Student, Cornell University </a> (<a  target=_blank href="https://twitter.com/yuchengthekid">@yuchengthekid</a>)</li>
</ul>

<!-- <div class="bio">
<img class="headshot" src="{{ 'assets/img/panel-may-22/yzhou.jpg' | relative_url }}" alt="Yang Zhou's Potrait"/>

<a target=_blank href="https://yangzhou1997.github.io/">Yang Zhou | PhD Student, Harvard University</a><br>

Yuan is a fourth-year Ph.D. student @ Harvard University, advised by Prof. Minlan
Yu and Prof. James Mickens. He is broadly interested in networked systems. In
particular, his work focuses on remote memory, smart NIC security, and network
telemetry. He received the M.S. in computer Science @ Harvard University
in 2021. He received the B.S. in Computer Science @ Peking University in 2018,
advised by Prof. Tong Yang, where he researched data stream (or one-pass
randomized) algorithms.

</div> -->

<!-- <hr> -->
<br>
<div style="font-size: 0.8em;">
    <i>
    Get in touch with us at <a class="external-link" target='_blank' href="mailto:{{ site.email }}">{{ site.email }}</a> if you have any questions.
    </i>
</div>
<br>

