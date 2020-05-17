---
layout: siteLayout.njk
---

{% assign allblogposts = collections.story | reverse %}
{% for post in allblogposts %}
- <span class="date">{{ post.data.date | dateformat}}</span>
[{{ post.data.title }}]({{ post.url }}) by {{post.data.author}} 
<span class="grey">({{post.data.words}} words)</span>
{% endfor %}