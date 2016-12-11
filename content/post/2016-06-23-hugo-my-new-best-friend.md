+++
title = "Hugo, my new best friend"
description = "A lighting fast complete tool."
tags = [ "patterns", "javascript"]
date = "2016-06-23"
categories = [
  "Hugo"
]
slug = "hugo-my-new-best-friend"
draft = true
+++

Object literals in javascript are awesome, we can use them to improve the way we are communicating our components interfaces, make them sort of self-explanatory. There is plenty of good docs about [working with objects around the web](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects). Here an *illustrative* example how to create a easy to understand interface to query an API:

{{< gist natos 5632861 >}}

Every project has different needs, and that's why we need to put some effort in design our solutions. This patterns can be really useful when you work with lot's of people. Agreeing upon an interface is the first contract you have to sign. Later, some can be focus on developing the tools, and others in making the product. At least in my experience, creating meaningful interfaces, empowers your team.

A meaningful interface is like Iron Man's suit. Who wouldn't like to be like Tony Stark?

I hope you find this useful :)
