# Git your life together: a git troubleshooting flowchart

Git is a tool that makes it easier to collaborate with others on a software project in a decentralized way. When you first start using it, though, it can feel like the process is anything but easy.

This post is meant to clarify the git process for developers who are in the early stages of learning to work with git and want to Just Make Things Work. 

To that end, this post offers a choose-your-own-adventure that walks the reader through some git troubleshooting steps. The post also includes some explanations of key terms.

I'm still in the process of learning these things, so this explainer is also a way of helping me remember and share what I've learned recently. If you have a correction or a better way of explaining something, please let me know!

# Some things to remember before we begin

### Do not be afraid
Working with git in the terminal can sometimes feel like fumbling around in the dark, and it can be intimidating to make changes to a project for fear of deleting something important. But don't be afraid to try things out! Remember that the point of git is to maintain a record of all the significant changes made to a project and all the versions created along the way. If you break something, it's very unlikely to be catastrophic. You and/or your team can always revert to a prior, not-broken version. 

### ```git status``` is your friend
I've sometimes found myself wrestling with git commands only to realize I was completely lost—maybe I didn't know what exactly I should be modifying, or didn't know whether I was intending to push or pull (or, in some particularly tragic cases, both). So the first thing to do is figure out which way is up.

When you're unsure of what to do next, you can always enter  ```git status``` to orient yourself. 

```
$ git status 

```

This will tell you:
-  what branch you're currently on
-  which documents, if any, have changed since last commit

### Error messages are also your friends
It can be intimidating to type a git command into the terminal only to be be met with a block of red and/or yellow text. But git is actually pretty good about giving error messages that describe what to do next. The trouble is understanding what the messages mean. Hopefully, you'll be able to find something helpful in the explanations and resources below. When in doubt, ask someone to help you understand, or do an internet search as specifically as you can (for example, "what does git fast-forward do when trying to git pull").

### Your teammates are your friends
Communicate with your teammates; find out what the most recent updates should be and what your project looks like on their end. Use GitHub's website (or wherever your repository is hosted) to help you understand and confirm changes that have been made and saved at the origin.
# Halp! Streamlined git troubleshooting

Choose your own git adventure! Each top-level question has multiple answers—choose what fits your situation and follow the outline down to the next level.

- Is your local copy of the project reflecting the most recent updates to the origin?
	- Yes
    	- Did you make new changes that you want to push to the main branch?
        	- Yes
        	- No
        		- You're probably good to go! Make sure you're editing on the appropriate branch and not on main, and you can edit and push when you're ready.
        			- Thanks, that really helped!
        				- You got it, dude.
        			- How do I do that?
            			- ```$ git status```, then
            			- ```$ git checkout YOUR-BRANCH```
        			-   I made some changes but now they're irrelevant and I don't want to keep them
            			-   ```$ git restore .```
        			- What's the main branch? What's the appropriate branch?
        				- See "```main``` and other branches" below
	- No
    	- ```$ git pull origin main```, then
    	- ```$ git pull origin YOUR-BRANCH```
	- Not sure. How do I know if I'm up to date?
    	- Communicate with your teammates, check the latest commits on GitHub website
	- What's local? What's origin?
    	- See "Local and origin" below

# Some git concepts explained

If you have the time, this section is meant to be a relatively brief explainer for some of the steps given above. Here, I aim to provide some context that will help you build a mental model of what each of the commands is doing. There isn't really one perfect way to explain every aspect of git without using abstract diagrams that may be confusing in themselves (but if abstract diagrams are your thing, [this explainer from IBM](https://web.archive.org/save/https://developer.ibm.com/tutorials/d-learn-workings-git/) is succinct and clear).

Since everybody learns differently, I'm offering a sampler of metaphors (trees, rivers, parallel universes, and software you may already be familiar with) in the hope that one or more of them help illuminate some aspect of git for you.

## Local and origin

A key thing to understand in git is the difference between local and origin. Essentially, there are many copies of a project when you're collaborating on it: one located at ```origin``` (which is GitHub or wherever you're remotely hosting the project) and one for each of the collaborators. The version of the project that exists on your computer is the local one.

## Fork vs. branch vs. clone

Something that might be a little confusing at first is the difference between forking and creating a branch. After all, a tine on a fork resembles a tree branch in that they're both smaller appendages coming off of a larger body. But perhaps a better way to think about it is a fork in the road, or two roads diverging in a wood: once you choose one, whatever happens on your road is unrelated to whatever happens on the other.

In terms of a tree, forking isn't really about splitting the tree or making a new branch—it's actually making an exact copy of the tree and storing it (planting it?) somewhere else.

Forking is taking an existing repository from somewhere on GitHub (or another remote source) and making an exact copy of it for yourself. From now on, it's a completely different project, even if it keeps the same name. Whatever changes you make to your copy from that point on have no effect on, and no relation to, the original repository.

But git clone is something a little different—that means taking a copy of a project from ```origin``` and making it exist on your computer. That is, creating a local version.

## ```main``` and other branches

There are lots of ways to organize a git project, but here's one that's generally safe and easy to understand: Generally, you don't want to be pushing to main; instead, you want each collaborator to be working on an individual branch that later gets merged into main.

### Branches are like Save As

Writing for Hackernoon, [Kevin Cooper gives an apt analogy for creating a branch](https://web.archive.org/web/20220310152918/https://hackernoon.com/understanding-git-fcffd87c15a3)—it's like clicking ***Save As*** while working on a document. It makes sense: it's basically like creating a checkpoint.  Say you've written a paper, called "Paper.docx," and now you want to make some changes to your argument in the second section, but you're not sure how it will turn out. You click ***Save As*** and save it as "Paper-section-2-edits.docx" or maybe "Paper-*today's-date*.docx." Now, you're free to cut and paste as haphazardly as you'd like, because you can always return to Paper.docx to find your pre-edit version again.

### Commits are like Save

Continuing with the "git branches=Save As" analogy, you can think of making a git commit as clicking ***Save***. It doesn't create a whole new document for you to work on, but it represents a checkpoint you can return to, even if you close out your application and return to it later. Even better, git keeps a record of your commits—and forces you to write at least a brief message describing what you changed—so you and your collaborators can understand the steps you took in the process of building your project (it's amazing how quickly you forget even what you've done yourself!). You can also view previous commits and roll back to any of them if necessary. This is kind of like the ***Version History*** feature in Google Docs.