---
uuid: 60dbdf21-a90d-4c4f-a2a8-4fa830a53d22
title: Generative Art with Figma & Automator
description: Exploring the new Automator plugin for Figma. I thought exploring a
  minimal generative series using pixels and mapping equations would be a fun
  way to try it out.
date_created: 2021/11/06
---

## Generative Art with Figma & Automator

Exploring the new Automator plugin for Figma. I thought exploring a minimal generative series using pixels and mapping equations would be a fun way to try it out.

![Some select screens from my automation explorations](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/tiles.png)

### Process

I started by pushing on nesting shapes – How does it look when you nest and rotate shapes continuously? I got some cool outcomes like below, but I realized that most of the gens would end up looking pretty similar, relying so heavily on rotation.

![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/first-gen-process.png)

Exploring a different direction, I remembered playing with graphing calculators back in high school – Using trig functions like sin, cos, and tan, I got some exciting results right off the bat.

Once I found a few directions I liked, I realized that these gens would probably show best in some sort of frame, especially if I wanted to show a few together. I went with the simplest outline possible to keep everything monochrome and on theme.

![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-3.png)

In the end, I didn't use any nesting to create each gen. Frames 1px tall and 1~6px wide (randomized) are charted in 2D along the x-axis using the repeat's {{index}}.

The generative functions are mostly created using sin, cos, tan, a randomizer variable, and {{index}} combined in different ways.

![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/process-2.png)

My favorite thing so far about Automator is how quickly I was able to explore a ton of variations. I was able to create over 60 gens with some really wide variation in under 2 hours.

![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/tiles-2.png)

### Outcome

Here are some of my favorite gens:

![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-1.png)
![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-2.png)
![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-3.png)
![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-4.png)
![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-5.png)
![](https://raw.githubusercontent.com/iamnbutler/data/main/asset/automator/gen-6.png)

I'm looking forward to exploring another generative series soon, following everything I learned with this one!

## You can find some of the JSON import files I saved as I was exploring in the [fig-gen](https://github.com/iamnbutler/fig-gen) repo.

[Jordan Singer](https://twitter.com/jsngr)'s [Automator](https://automator.design/) plugin is currently in closed beta. I can't wait to see what everyone is able to create once they get their hands on this!
