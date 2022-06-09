---
title: "Committee"
layout: default
categories: "navigation"
order: 99
---

# Committee

<!-- NOTE: This page is automatically generated from _data/members.yml -->

<h3>Committee Members</h3>
<div class="member-profiles-grid">
{% for mem in site.data.members %}
{% if mem.category == 'committee-member' and mem.active %}
<a href="{{mem.website}}">
<div class="member-profile">
<div class="member-photo-container">
{% if mem.photo %}
<img class="member-photo" src="{{ mem.photo | relative_url }}"/>
{% else %}
<img class="member-photo" src="{{ '/assets/img/profile-placeholder.png' | relative_url }}"/>
{% endif %}
</div>
<div class="member-name">{{ mem.name }}</div>
</div>
</a>
{% endif %}
{% endfor %}
</div>

{% assign chairs = site.data.members
    | where_exp: "item", "item.category contains 'chair'"
    | where_exp: "item", "item.active"
%}

{% if chairs.size > 0 %}
<h3>Chairs</h3>
<div class="member-profiles-grid">
{% for mem in site.data.members %}
{% if mem.category == 'co-chairs' and mem.active %}
<a href="{{mem.website}}">
<div class="member-profile">
<img class="member-photo" src="{{ mem.photo | relative_url }}"/>
<div class="member-name">{{ mem.name }}</div>
</div>
</a>
{% endif %}
{% endfor %}
</div>
{% endif %}

<h3>Join us!</h3>

We are looking for committee members to organize our monthly events. 
<br>Join us by signing up at [https://forms.gle/dnwT7Riras471GfFA](https://forms.gle/dnwT7Riras471GfFA)
