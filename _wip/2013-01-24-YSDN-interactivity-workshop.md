---
uuid: 02df22b5-54ed-4f8c-9ed1-778f7cbbba38
title: YSDN Interactivity Workshop
slug: ysdn-interactivity-workshop.md
status: published
date_created: 2013/01/24
date_modified:
---

## Week 1

Welcome to the YSDN Interactivity Workshop. Here we will learn how to build a simple website using Bootstrap, and learn some important basics about web development. Helpfully you are excited to get learning, so let's get to it!

Below you will find links to the wiki pages. Choose the appropriate page to get started.

Wiki
[Schedule](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Schedule)
[Welcome](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Welcome)
[Week 1](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) January 24th, 2013
[Week 2](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-2) February 28th, 2013
[Week 3](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3) TBD
[Sample Work Sources](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Sample-Work-Sources)

[View on Github](https://github.com/iamnbutler/YSDN-Interactivity-Workshop)

---

Hopefully you are attending in class with us, but I will attempt to write these guides with no assumptions, so hopefully anyone can follow along. Also we plan to screencast the workshop, so once it is recorded there will be a link here!

## Introduction

Welcome to the YSDN Interactivity Workshop!

In this workshop we will be building a very simple portfolio site using HTML, CSS and jQuery. We will discuss coding standards, walk through how to build the site and how to get it out on the internet. We aim to assume nothing so the workshop is accessible to all skill levels, but feel free to ask a question if you miss something! Asking questions is the best way to learn.

This workshop will be taught from a "learning by doing" perspective, so the pace will be quick.

### What we will be teaching in this workshop:

- How to build a simple portfolio site
- How to indent and comment your code using industry standards
- Coding with Sublime Text 2
- Uploading your code to Github
- How to use Bootstrap
- Add interactivity using jQuery
- Optimizing images for the web
- Creating mobile friendly templates using Bootstrap
- How to host your website

### What we won't be teaching in this workshop:

- Advanced web languages outside of HTML, CSS and jQuery.
- Advanced topics such as code optimization
- Spending time looking for images or plugins

## Goals for Week 1

- How to use the [Sublime Text] (http://www.sublimetext.com/) Editor
- Understand how to write and format basic HTML and CSS
- Getting started with Git and [Github] (https://github.com/)
- Using [Bootstrap] (http://twitter.github.com/bootstrap/) to build templates quickly

## Goals for Week 2

- How to add additional pages
- Understand the basics of using [jQuery] (http://jquery.com/) to add interaction to a site
- (Optional: Using CSS animations)

## Goals for Week 3

- Wrap up
- Web Hosting

---

## Week 1 – Introduction

Hello Designers and Developers!

This week we are going to get started on our project--A simple portfolio style site. This may be a bit basic for a few of you, but stick with it, I'm sure you will learn something.

### Outline for this week:

- How to use the [Sublime Text](http://www.sublimetext.com/) Editor
- Understand how to write and format basic HTML and CSS
- Getting started with Git and [Github](https://github.com/)
- Using [Bootstrap](http://twitter.github.com/bootstrap/) to build templates quickly

### Download the Resources

- [Resources Zip](http://www.mediafire.com/download.php?7hc77w0w1n831cc)
- [Complete Site Zip](http://www.mediafire.com/download.php?53ap25kllri4vu8)
- [Sublime Text 2](http://www.sublimetext.com/2)
- Github Client [Mac Version](http://mac.github.com/) | [Windows Version](http://windows.github.com/)
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

### Final product for this week

http://iamnbutler.com/demo/ysdn/workshop-1/week-1/

## Before Starting

Let's go through what we are going to need for this week.

### Installing Sublime Text 2

We are going to be using Sublime Text as our editor for this project. You are free to use another editor that you prefer, but Sublime Text is a strong and light text editor, with great plugins you can install. One of the biggest benefits of Sublime Text is the Package Control, which we will be covering in this workshop. Give this editor a try and I'm sure you won't look back!

Head over to the [Downloads](http://www.sublimetext.com/2) page to get started.

**Mac Installation**

- Grab the Mac download version ([Version 2.0.1](http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.dmg) direct download)
- Open the DMG and drag the application to your Applications folder
- (If you are on a machine such as a lab computer that does not have write access to the Applications folder, make a folder on the desktop (such as "Portable Applications) and drag the application there.)
- Run the application

**Windows Installation**

- Grab the Windows Portable installation ([Version 2.0.1](http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.zip) direct download)
  - A portable installation can be installed anywhere, such as a usb stick or flash drive
- Extract the zip file to wherever you want the application installed
- Run sublime_text.exe

### Registering a Github account

- Navigate to the [Github](https://github.com/) site
- On the main page enter your registration information
- Click on the "Sign up for free" button
- Verify your email if necessary
- Download and install the client. [Mac](http://mac.github.com/) | [PC](http://windows.github.com/)

### Download the Bootstrap zip

- Head on over to [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
- Hit the nice big blue download button
- Store that zip wherever you are going to be working on this workshop (We'll need it later!)

## Workshop

### Getting Started

All right, here we go! Let's start by grabbing the resources we need for this week. [Grab them here](http://www.mediafire.com/download.php?7hc77w0w1n831cc)

Also, if you need some help, or are working on this outside of the workshop, for your benefit I've included a complete version of what we will finish this week for you to dissect, or check your own code against. [Grab it here](http://www.mediafire.com/download.php?53ap25kllri4vu8)

---

### Sublime Text 101

Let's go ahead and open up Sublime Text (Sublime from here out).

The first thing we are going to do is set Sublime to 2-column mode. We can do this by going to `View -&gt; Layout -&gt; Columns: 2`. This helps us look at two pieces of code at the same time.

Next we are going to add our folder as a 'project' in Sublime. Go up to `Project` and hit `Add Folder to Project` (Complete path `Folder -&gt; Add Folder to Project`.)

Find the folder you are working from and hit enter. This will add your project's folder structure to the column on the left.

You can remove the folder from the project using `Project -&gt; Remove All Folders from Project`.

#### _Installing Sublime Package Control_

Now we are going to install the Sublime Package Control. To find out more, you can visit its [site](http://wbond.net/sublime_packages/package_control).

1. In Sublime press Control + `
2. Paste the following code in to the box that shows up:

```
import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'
```

3. Close Sublime and re-open it.

### _Install Emmet_

Now that we have the package control installed, we can grab some awesome packages to make your coding life a little easier. I'm not going to get into too many of these, but the following one is one that you won't be able to live without.

First we are going to install [Emmet](http://docs.emmet.io/):

1. Press `Cmd + Shift + P` (on a PC `Control + Shift + P`)
2. In the box that pops up type the word "Install"
3. Click `Package Control: Install Package`
4. Type in `Emmet` and click the first option

### _Using Emmet_

Nice job so far! Now that we have Emmet, lets see a few cool things we can do.

Examples:

- `.box` + `Tab` becomes `<div></div>`
- `body.box` + `Tab` becomes `&lt;body class="box"&gt;&lt;/body&gt;`

There are tons of things you can use Emmet for. Check out the link above to see them all. I'll be teaching a few throughout the workshop.

---

### Getting Started with Github

Lets get our "Repo" (Or Repository) up so we can get started on our site!

####_So what is a repository?_ (From here on just "repo")

A repository is a place where you store your code. It will keep the most recent version of your code online, as well as keep a "version history" of all of your changes based on something called "Commits".

#### _Why do I need to use a repo?_

You may not need it today, but a year from now, when you are working on a thirty hour project, and the power goes out, and somehow your project has disappeared, you will be wishing your code was in a repo. A repo holds incremental version info for each "commit" you make, allowing you to store and retrieve versions of your code. Best of all, it is free!

#### _So what is this "Commit" you are talking about?_

A commit is basically a flag post that tells the system the version of the code, and a short message to accompany the flag to help you understand in English (or any other language) what exactly changed in that version. But this probably sounds totally confusing, so lets learn by doing!

Open your Github client and sign in to the account that we made at the beginning of the workshop.

#### Creating the Repo

Once you are at the main application page, create a new repo. On the mac client this is found at the bottom (the + button) and on the PC client it is the "+add" button at the top of the program.

Give your repo a name, and place it somewhere easy (Wherever you want to be building your site.)

Make sure "Push to Github" is checked, and "Keep this code private" is unchecked.

If you browse the Github website while logged in now you should see your repository.

#### Making Our First Commit

Now lets make our first commit!

It's pretty easy.

Lets unzip the files from the [resources zip](http://www.mediafire.com/download.php?7hc77w0w1n831cc) and put them in the folder we made out repo in! Navigate to the folder and paste the extracted files in.

Now in your Github client, double click the name of your repo and you should see a bunch of files with a "new" tag. This is because we have added some new files. Let's commit them now.

Type a message in the "Commit summary" box and hit "commit".

#### Syncing with Github

Now let's sync our changes with Github. On a mac, click the "Publish branch" or "Sync Branch" button up in the top right corner. On a PC, click the "sync" button.

Congrats! You've made your first commit! If you look on GitHub now, you will see your files that you added in the repo. We'll be making more commits throughout the workshop, so for now let's get started!

---

### Coding Standards

#### _Indentation_

Different web languages use different types of indentation. For now though we'll be fine just covering HTML and CSS.

Properly indenting and formatting your code is one of the, if not the single most important thing to learn when coding. If your code is not readable, you can not get help when you need it, and later it is likely that you won't even be able to read it yourself.

Let's start with HTML.

Improper:

```html
&lt;!DOCTYPE HTML&gt; &lt;html lang="en"&gt; &lt;head&gt; &lt;title&gt;YSDN
Interactivity Workshop&lt;/title&gt; &lt;meta name="viewport"
content="width=device-width, initial-scale=1"&gt; &lt;link href="" rel="icon"
type="image/x-icon" /&gt; &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt; &lt;body&gt; &lt;script
src="http://code.jquery.com/jquery-latest.min.js"&gt;&lt;/script&gt; &lt;script
src="js/scripts.js"&gt;&lt;/script&gt; &lt;/body&gt; &lt;/html&gt;
```

Proper:

```html
&lt;!DOCTYPE HTML&gt; &lt;html lang="en"&gt; &lt;head&gt; &lt;title&gt;YSDN
Interactivity Workshop&lt;/title&gt; &lt;meta name="viewport"
content="width=device-width, initial-scale=1"&gt; &lt;link href="" rel="icon"
type="image/x-icon" /&gt; &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt; &lt;body&gt; &lt;script
src="http://code.jquery.com/jquery-latest.min.js"&gt;&lt;/script&gt; &lt;script
src="js/scripts.js"&gt;&lt;/script&gt; &lt;/body&gt; &lt;/html&gt;
```

See how much easier that is to read?

Basically, every time you "go in" one level, or put a tag inside another, add 4 spaces (or 1 tab.) Spaces are generally better to use than tabs (for compatibility reasons) but at this level it isn't that big of a deal.

All right, let's do CSS next.

#### _CSS_

Improper:

```css
.masthead {
  height: 280px;
  background: url(../img/masthead-bg.png);
}
.masthead .logo {
  position: relative;
  left: -135px;
  margin: 0 auto;
  margin-left: 50%;
  padding-top: 60px;
}
.masthead nav {
  margin-top: 20px;
  text-align: center;
}
```

_Note: Advanced Users: Obviously this syntax is fine for a minified file, but for CSS that is meant to be human read you should not code like this._

Proper:

```css
.masthead {
  height: 280px;
  background: url(../img/masthead-bg.png);
}

.masthead .logo {
  position: relative;
  left: -135px;
  margin: 0 auto;
  margin-left: 50%;
  padding-top: 60px;
}

.masthead nav {
  margin-top: 20px;
  text-align: center;
}
```

With CSS, always drop to the next line and add 4 spaces (or a tab) after the opening `{`.

Each CSS property should be indented , and the closing `}` should be on its own line.

#### _HTML Elements_

Here is a _very, very_ brief overview of HTML elements and what they are used for. You can return here later if you need to take a look at them.

- `&lt;head&gt;` tag contains all of the technical information for the document such as CSS links, meta information and information for search engines.
  - No 'visible' information, or anything that physically shows up on the page, should be in your head tag.
- `&lt;body&gt;` tag hold all of our "visible" website data (tags) as well as our scripts.
  - But my teacher told me to put the `&lt;script&gt;`tag in the header!
    - [Why your script tags should be in the body](http://developer.yahoo.com/blogs/ydn/posts/2007/07/high_performanc_5/)
    - Your `&lt;script&gt;` tags should always be located directly before the ending `&lt;/body&gt;` tag.
- `<div>` is sort of the "general" tag. It can hold basically anything.
- `<img>` is the Image tag, and used for showing images. It is what is called a "self-closing" tag, meaning you don't need an `</img>`.
- `<a>` is the link tag, and it is used for linking pages together and downloading files.
- `<p>` is the Paragraph tag, it holds, well, a paragraph. Pretty self-explanatory.

There are a few other tags that we will use this week, but we'll cover them as we get to them. I'll likely skip over this section in the workshop for the sake of time, so if you need any introduction to these tags, you can read this.

####_Classes vs. IDs_

One small hint, both for code newbies and those that have been doing this for a while:

In your HTML and CSS you should not be using classes (for anything other than targeting in JS/jQuery.)

It takes 255 classes to override the use of a single ID. A rather comical example of this can be seen [here](http://codepen.io/chriscoyier/pen/lzjqh).

What this means in plain English:
If an ID was red paint, and classes were blue paint, if we had a square that we painted red (styled with an ID) and wanted to paint it blue (style it with a class), we would have to paint that square 255 times! That isn't very efficient, is it?

It's ok if this seems a little (or a lot) foreign right now.

Basically it boils down to this:

Bad:

(HTML)

```html
<div>&lt;/box&gt;</div>
```

(CSS)

```css
#box {
  width: 200px;
  height: 200px;
  background: red;
}
```

Good:

(HTML)

```html
<div>&lt;/box&gt;</div>
```

(CSS)

```css
.box {
  width: 200px;
  height: 200px;
  background: red;
}
```

#### _Chaining Classes_

Classes can be "chained", basically more than one class can be added to one element.

Say we are creating 4 boxes, side by side.

We could do this:

```html
<div></div>
<div></div>
<div></div>
<div></div>
```

```css
.box1 {
  width: 200px;
  height: 200px;
  float: left;
  background: red;
}

.box2 {
  width: 200px;
  height: 200px;
  float: left;
  background: blue;
}

.box3 {
  width: 200px;
  height: 200px;
  float: left;
  background: red;
}

.box4 {
  width: 200px;
  height: 200px;
  float: left;
  background: blue;
}
```

[See live on Codepen](http://codepen.io/iamnbutler/pen/tvews)

Or we could do this (Better):

```html
<div></div>
<div></div>
<div></div>
<div></div>
```

```css
.box {
  width: 200px;
  height: 200px;
  float: left;
}

.red {
  background: red;
}

.blue {
  background: blue;
}
```

[See live on Codepen](http://codepen.io/iamnbutler/pen/BfAva)

Not only does this use less code, but now our classes reflect what they contain. Which leads us to our next brief topic.

#### _Naming Classes/IDs_

All right, this is the last of the dry stuff, I promise! So lets get going.

Naming your classes and IDs well is important. Why? Because when you are working on a huge project you don't want to be dealing with 600 classes named things like p1-box-left-2-3-f and would much rather classes like header-background or article-wrapper, right?

Lets go over a few basic rules for naming:

- Make your class names relevant. An image frame should be named `.image-frame` or `image-border`, not `explosive-raptor` or `img1-fr-1`.
- Class names need to conform to a format that the web can read. This means:
  - DONT use spaces
  - DONT use special characters (Do you really need a ⋈ in your class name?)
  - DONT start your classes with `.Uppercase` letters or `.1-numbers`. These will give you grief (and errors)
  - Do use `-` or `camelCasedNames` to take the place of spaces in your names.
  - If you have a CSS style that is not showing up, it is probably one of these issues.
- Make "Global" names for styles that will be used over and over. Need to make some text bold often? Make a class called `.bold`!

All right, one more step and we'll get to building this site!

But first, let's take a short break to let people catch up, and to stretch your legs. Be back in 5 minutes!

## Building the Site

### Building the Header

Finally, time to start coding!

Navigate to the repo folder (where you unzipped the resources zip) and open index.html with Sublime. In the other half of the window, open up style.css. We will be working on both of these files side-by-side.

Unzip the Bootstrap folder and copy the following files:

- `bootstrap.min.css` to `(repo folder)/css`
- `bootstrap-responsive.min.css` to `(repo folder)/css`
- `bootstrap.min.js` to `(repo folder)/js`

These files are already linked in your `index.html`:

```html
(in &lt;head&gt;) &lt;link href="css/bootstrap.min.css" rel="stylesheet"
media="screen"&gt;
```

But I derped and forgot to add the JS link, so right before your `&lt;/body&gt;` tag add the following:

```html
&lt;script src="js/bootstrap.min.js"&gt;&lt;/script&gt;
```

Now that our file is Bootstrapped, lets build this header!

Take a look at the completed file before we get started to get an idea of what we will be building.

[Week 1 completed site](http://iamnbutler.com/demo/ysdn/workshop-1/week-1/)

Lets start by creating a primary div for our header (or "masthead"):

```html
&lt;body&gt;

<div> </div>
...
```

_Note: I will use the `...` in code to show that there is more code below, rather than pasting the whole file every time to save space. Don't paste the `...` in to your code!_

Now lets switch to our `style.css` and style the `.masthead` class.
(Note: from now on, when you see CSS code, switch to `style.css` and visa versa)

Personally, I like to make nice comment blocks to clearly show what I'm working on in my css file, and to split it up into sections. Here is one for our masthead section:

```css
/* ============================================
   Masthead
   ============================================ */
```

Now lets set the height of our masthead. We are going to go with `280px`. We are also going to add a nice subtle background.

```css
.masthead {
  height: 280px;
  background: url(../img/masthead-bg.png);
}
```

_(For more of these awesome subtle backgrounds check out [this site](http://subtlepatterns.com/), but not during the workshop!)_

Now we are going to add a `.container` div inside out `.masthead` div. The `.container` class is a special class in Bootstrap that will center your content in a fixed-width column on the page.

Inside that div we are going to add our logo text. We'll do that using an `<img>` tag with the class `.logo`.

```html
&lt;body&gt;

<div>
  <div>
    <img src alt="Template" />
  </div>
  ...</div
>
```

Try taking a look at your `index.html` in the browser now. Looks like we have a nice looking masthead, but the logo is right up against the top, and isn't even centered! Let's fix that.

```css
.masthead .logo {
  position: relative;
  left: -135px;
  margin-left: 50%;
  padding-top: 60px;
}
```

So what exactly did we just do there?

Well we are using `padding-top` to give the logo some space and we are using a "CSS Hack" to center the logo. I would love to take the time to explain how this works, but we are short on time, so if you are interested, read [this](http://css-tricks.com/snippets/css/absolute-center-vertical-horizontal-an-image/) later. ([Another link](http://designshack.net/articles/css/how-to-center-anything-with-css/))

I'll take this time to say I know this is moving at a whirlwind pace, but to get through anything significant we have to do it this way. Try to remember your specific questions and ask them after the workshop!

All right, back to work.

Time to add the navigation.

```html
<div>
  <div>
    <img src alt="Template" />

    <nav>
      <a href="#blog"><i></i> Blog</a> | <a href="#print"><i></i> Print</a> |
      <a href="#web"><i></i> Web</a> |
      <a href="#contact"><i></i> Contact</a>
    </nav>
  </div>
</div>
```

Woah, what is going on here?! We've added a lot of code at once. Lets break it down a bit.

The `<nav>` tag is a new tag in HTML5. It acts exactly the same as a div, except for when being viewed by search engines. It lets them know what the navigation of your site is.

Inside of the `<nav>` tag we have four links (`<a>`), each has an ID, not for styles, but for later once we get in to jQuery.

Finally, what are those strange `<i>` tags? Well, the `<i>` tag is not actually a tag we use in HTML anymore, so Bootstrap has borrowed it to make it into an "icon" tag. See the class on each `<i>` tag? It defines which icon shows up. After you are finished typing out the new code, try refreshing in your browser. See those icons? They are from the `<i>` tag. You can find a list of all of them [here](http://twitter.github.com/bootstrap/base-css.html#icons).

All right, lets style this nav!

```css
.masthead nav {
  margin-top: 20px;
  text-align: center;
}
```

This will give it some space on top, as well as center the text.

```css
.masthead nav a {
  padding: 8px;
  color: #000;
  text-decoration: none;
}
```

Lets get rid of that default color and underlines, and space the text out a bit.

```css
.masthead nav a:hover {
  opacity: 0.7;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
  filter: alpha(opacity=70);
}
```

Finally lets add a hover effect. I suggest you copy + paste this part. The nasty lines you see after `opacity: 0.7` are Vendor Prefixes. Don't worry too much about them now, just paste them in and we can learn about them another day! Basically, they make sure our effect works in other browsers like Internet Explorer.

With that, our header/masthead is done! Congrats!

Lets take a break and get everyone caught up to this point. We'll start back up in about 10 minutes, and blaze through to the end!

### Building the Body

All right, we are back! Lets get going again. The second half shouldn't take us that long.

We are going to start off making a container div for our site "body".

```html
<div> </div> ...
```

We will use the `.body` class to style this block and the `.container` div centers the body for us.

And next comes the wrapper:

```html
<div>
  <div> </div>
</div>
```

Time to introduce one of the main features of Bootstrap: The 12 column grid. Based on a series of `.spanX` classes (`.span1` - `.span12`). The span class tells the element how many "columns" to span. In the container above, we are telling the body wrapper to span all 12 columns.

Now lets style the `.body` class. First start with a comment block to indicate a new section:

```css
/* ============================================
   Body
   ============================================ */
```

Then lets add some padding to the top of the 'body':

```css
.body {
  padding-top: 40px;
}
```

And finally, lets increase the `line-height`, or leading of the type.

```css
.body p {
  line-height: 1.7;
}
```

_Note: The number `1.7` means 1.7x the 'parent' element's `line-height`. It is equivalent to `line-height: 140%;`_

####Adding the Blog Entries

Here is the code:

```html
<div>
  <article>
    <h3>Some Blog Entry Title</h3>
    <p>...</p>
    <a href="#">Read More &rarr;</a>
  </article>
  <article>
    <h3>Some Blog Entry Title</h3>
    <p>...</p>
    <a href="#">Read More &rarr;</a>
  </article>
</div>
...
```

We create a new "row" of content with the `.row` class. We add the class `.blog` so we can style it.

Each of the blog "articles" (stored in an `<article>` tag, another HTML5 tag) is given a span of 6, meaning half of the 12 column grid.

The `#` (hash) is used in the link href to mock up a link. In a functional site, they would link to the post.

Finally, the strange `&rarr;` you see is called an "escape code". They are used to place special characters in your html (like `&lt;` or `@`). In our case, this code is a right arrow. ([A list](http://www.theukwebdesigncompany.com/articles/entity-escape-characters.php) of escape codes.)

_(An awesome Emmet tip: If you type `lipsumX` + `Tab`, where X is a number, Emmet will generate Lorem Ipsum (dummy text) for you directly in Sublime. Just make sure your `Lipsum20` is followed by a space, then put your cursor directly after the word and press Tab. Magic!)_

In terms of style for the blog snippets, Bootstrap's native styles have taken care of most of the styling for us, however it would be good to add a margin to the bottom of the row.

```css
.body {
  padding-top: 40px;
}
```

And I'm not really happy with the line length in the `<p>` tags, so lets shorten it a bit to air things out:

```css
.blog article p {
  width: 85%;
}
```

Basically what this does is limits the `<p>` tag's width to 85% of that of it's parent. You can mess around with the value to find what you like. Now lets head on to...

### Creating the Gallery Section

**_Due to my need for sleep, I'm just going to be posting the last two section's code. We'll go through them in the workshop and I'll finish the details up after. Cya all tomorrow!_**

Here is the code:

```html
<div>
  <ul>
    <li>
      <div>
        <img src alt="Spider Man" />
        <div>
          <h3>Spider Man</h3>
          <p>...</p>
        </div>
      </div>
    </li>
    ... (above x2)
  </ul>
</div>
...
```

### Creating the Gallery Section

Here is the code:

```hmtl
<div>
    <div>
        <img src alt="My Name">
    </div>
    <div>
        <div>
	    <h3>Hey Look I'm a Designer</h3>
            <p>...</p>
        </div>
    </div>
</div>
...
```

Congrats on finishing the workshop! It would mean a ton if you would fill out this [4 question questionarre](https://docs.google.com/spreadsheet/viewform?formkey=dGFaYmNJc2lYN2U4ekpmaldQVUkwX1E6MQ) to help us improve the coming workshops.

##For Next Week

If you want to get ahead, take a look at jQuery and read over some of the Bootstrap documentation.

Next week we will be adding more pages to our site, and adding some interactivity!

## Additional Resources

- [Bootstrap Documentation](http://twitter.github.com/bootstrap/getting-started.html)
- [ISObar Code Standards](http://isobar-idev.github.com/code-standards/)
- [A full almost 2 hour Sublime Text tutorial - More than highly recommended!](http://net.tutsplus.com/articles/news/perfect-workflow-in-sublime-text-free-course/)

## Navigation

[&lt;-- Welcome](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Welcome) | [Week 2 --&gt;](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-2)

[Schedule](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Schedule) | [Welcome](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Welcome) | Week 1 | [Week 2](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-2) | [Week 3](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3) | [Credits](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Sample-Work-Sources)

---

## Week 2

Welcome back everyone!

This week we are going be covering interaction, and learning how to work with jQuery and CSS animations. We'll also be adding a page or two to the site we made in the last workshop.

Having attended the previous workshop is recommended, but not required. I will try to write this week's content with zero assumptions, but it might be a good to read through the [week one](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) wiki page.

## Before Starting

Download this week's Resources

- [Resources Zip](http://www.mediafire.com/download.php?wd24iiutgsc5b72)
- [Complete Site Zip](http://www.mediafire.com/download.php?btvbmrjd447k0zz)

Final Product for this Week

http://iamnbutler.com/demo/ysdn/workshop-1/week-2/

## Workshop

### Getting Started

All right, here we go! Let's start by grabbing the resources we need for this week. [Grab them here](http://www.mediafire.com/download.php?wd24iiutgsc5b72)

Also, if you need some help, or are working on this outside of the workshop, for your benefit I've included a complete version of what we will finish this week for you to dissect, or check your own code against. [Grab it here](http://www.mediafire.com/download.php?btvbmrjd447k0zz)

Make a new folder and extract `ysdn_workshop_week_2_resources.zip` directly inside of it. You should see the following files/folders in that folder:

- `css`
  - `bootstrap.min.css` - _This holds the main Bootstrap CSS_
  - `bootstrap-responsive.min.css` - _This holds the CSS that makes Bootstrap responsive_
  - `style.css` - _This is our custom CSS_
- `img`
  - (Images)
- `js`
  - `bootstrap.min.js` - _This holds all of Bootstrap's custom scripts_
- `index.html`

---

### What is Responsive Web Design?

Before we start, let's make sure everyone is one the same page here. What does it mean when we say "make some (site) responsive"?

Well here is a fun example by [Masayuki Kido](http://roxik.com/), a web developer/interaction designer to help illustrate:

[Responsive Cat](http://roxik.com/cat/)

Another example from the A List Apart responsive web design (RWD) article:

[Smashing RWD Example](http://alistapart.com/d/responsive-web-design/ex/ex-site-flexible.html)

Essentially, Responsive Web Design is an effort to make web pages _respond_ better to the current size of the browser. This can range from changing the size of images to entirely new layouts based on width and height of the current window.

Since we are using Bootstrap we have access to its responsive style sheet, which will deal with most of this automagically.

If you are interested in learning more about RWD, I've included some links in the Additional Resources section at the bottom of this page.

### Making Our Site Responsive

Now enough about RWD itself, let's get our site running responsive.

Open up your `index.html` file in your text editor of choice and find line 17:

```html
<!-- <link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen"> -->
```

We are going to remove the html comment block (`<!--` and `-->`)

```html
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen" />
```

Now open up `index.html` in the browser if you do not have it open already. (Make sure to refresh the page if you already had it open!) Now try re-sizing the width of your browser. Try making it wider, and try making in narrower.

How exactly does this work?

Well in the time we have it would be difficult to go through it all, but to put it simply, bootstrap's `.span` classes and its structure take care of the layout when we re size it. Elements of a certain `.span` width eventually become one column at what is known as a "break point."

---

### Getting Started with jQuery

Let's learn some jQuery! jQuery (or jQ for here on out) is not a language of its own, but a 'framework' built on top of Javascript (JS.) We won't be touching any pure Javascript in this workshop, but just be aware that they are not the same thing!

Navigate to the `scripts` folder and find `scripts.js`. We are going to open that up in our text editor.

You should see a section like this:

```javascript
$(document).ready(function () {
  // jQuery goes inside here!
  // This makes it so that our scripts don't load before the page is ready
})
```

This is called the "document ready" block. What it does is it makes sure that our scripts don't load before the elements on the page load. Say I want to run a script on one of the images we have on our page. If I try to `show()` that element, or `hide()` it but it has not yet loaded, the command will simply do nothing.

To prevent this behavior we put 99% of our jQ code inside the "document ready" block. You can copy + paste this block from project to project, but eventually typing it out will become natural.

### Making Elements Fade In

Let's make the sections of our simple site fade in using the handy jQ function `fadeIn()`.

Before we get started, the jQuery documentation is one of the best places you can go when you get stuck on a jQuery problem. You can check it out [here](http://api.jquery.com/).

Before we get into the jQ magic to make this work we need to make some changes to our `html` and `css` files.

`index.html` (first line is the original, second is the new line)

Line 44

```html
<div class="row blog"> <div class="row blog" id="blog"></div></div>
```

Line 59

```html
<div class="row"> <div class="row gallery" id="gallery"></div></div>
```

Line 99

```html
<div class="row well"> <div class="row about well" id="about"></div></div>
```

Here we are adding `id`s to our major sections so we can use them as "targets" in our jQuery (Also fixing up a few of my slip-ups from last lesson.)

`style.css`

Add the following in the bottom of the Body section:

```css
.blog,
.gallery,
.about {
  display: none;
}
```

This hides the main sections so we can fade them in. Try refreshing now and make sure nothing but the header is visible.

Now that everything is ready, time to write our first jQuery.

Add this line inside your "document ready" block:

`$('#blog').fadeIn(800);`

So it should look something like:

`scripts.js`

```js
$(document).ready(function () {
  $("#blog").fadeIn(800)
})
```

The function that we are running is called `fadeIn` and the length is `800` or 800ms (0.8 seconds.)

Good!

Now we are still missing one thing before this will work. Our scripts file currently isn't linked.

Let's un-comment the following line:

`index.html` Line 124

```html
<!-- <script src="js/scripts.js"></script> -->

<script src="js/scripts.js"></script>
```

All right! Refresh your page and you should finally see your effect run.

Let's get the other two sections fading in. To get them to `fadeIn` after the first one is finished we are going to use a `delay`. If we set the `delay` to `800`, the same length as the previous animation, then our animation will wait that long before running.

`scripts.js`

```js
$(document).ready(function () {
  $("#blog").fadeIn(800)
  $("#gallery").delay(800).fadeIn(800)
})
```

Then we will do the same for the final section, adding the additional 800ms.

```js
$(document).ready(function () {
  $("#blog").fadeIn(800)
  $("#gallery").delay(800).fadeIn(800)
  $("#about").delay(1600).fadeIn(800)
})
```

Awesome, we got all three sections fading in. So what else can we do with jQuery?

---

### Creating Gallery Interaction

Let's add a bit of interaction to our gallery.

To show of the `hover()` capabilities of jQuery, let's create an on-hover effect for the thumbnails to make the one you are hovering stand out more.

We need to add a little css to make this work.

`style.css`

```css
.gallery li {
  opacity: 0.55;
}
```

Once that is done, we are ready to add some jQuery. This might look a little complicated, but I'll explain each part!

`script.js`

```js
$("#gallery li").hover(
  //This is our 'selector'
  function () {
    //The first function is on mouse enter
    $(this).animate(
      {
        //.animate() means we want to animate something
        opacity: 1, //This is any CSS property (margin-left becomes marginLeft)
      },
      800
    ) //This is the animation length
  },

  function () {
    //The second function is on mouse exit
    $(this).animate(
      {
        opacity: 0.55,
      },
      800
    )
  }
)
```

So that is a huge chunk of code, so lets break it down.

```js
$("#gallery li").hover()
```

The first part is the selector. We want the `.hover()` affect to apply to all `li` elements under the `#gallery` id.

```js
$('#gallery li').hover(
  function() {
    $(this).animate({
      opacity: 1
    }, 800);
  }
});
```

The first `function` we add in is the instructions we want to give when the mouse overs in over the element. A `function` is essentially a set of directions, and can be given names so that they can be used over and over.

```js
$('#gallery li').hover(
  function() {
    $(this).animate({
      opacity: 1
    }, 800);
  },

  function() {
    $(this).animate({
      opacity: 0.55
    }, 800);
  }
});
```

The second function is what we want to do when the mouse leaves the object. In this case, we want the element to animate back to the opacity we set in the css.

Finally the number `800` in both functions is the length of the animation in milliseconds. Changing the number will change the length of the animation. (Generally the browser won't process animations faster than 300-400ms.) The standard number (if none is specified) is 400ms.

---

## Additional Resources

### Responsive Web Design

- http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/
- http://www.abookapart.com/products/responsive-web-design
- http://mattkersley.com/responsive/

## Navigation

[<-- Week 1](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) | [Week 3 -->](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3)

[Schedule](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Schedule) | [Welcome](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Welcome) | [Week 1](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) | Week 2 | [Week 3](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3) | [Credits](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Sample-Work-Sources)
