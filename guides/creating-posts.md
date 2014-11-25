---
layout: page
title: "Creating posts on codeforseattle.org"
---

The Code for Seattle website is hosted on [GitHub pages](https://pages.github.com/) and uses [Jekyll, a static site generator](http://jekyllrb.com/).

You can create a post on codeforseattle.org in two ways:

- through GitHub.com
- on your computer using git

To get started, you'll need to fork the website repository on GitHub.

## Forking codeforseattle.github.com

Go to [github.com/codeforseattle/codeforseattle.github.com](https://github.com/codeforseattle/codeforseattle.github.com) and click the "Fork" button.

## Making changes on GitHub.com

Now that you've forked the repository, you can make the necessary changes in your fork. After you've made the changes you will submit those changes as a pull request to the original repository.


### Make changes to the files
You can add/edit/rename/move/delete files all through the github web interface.

For detailed guides to manipulating files through GitHub.com, go here: [help.github.com/categories/manipulating-files](https://help.github.com/categories/manipulating-files/)

To create a post you will navigate to the `_posts` folder and click the plus symbol `+` above the list of files.

The post must be named using a pattern like this:

```
2014-11-24-title-of-post.md
```

The date and title must be all lowercase and separated with dashes.

Next, because we're using Jekyll, you'll place YAML frontmatter in the first lines of the post.

This is a good template for the YAML frontmatter:

```
---
title: "Art + Civics + Code roundup"
published: false
layout: page
---
```

Make sure to set published to `true` when you're ready to make the post go live.

[Take a look at this post as an example.](https://github.com/codeforseattle/codeforseattle.github.com/blob/master/_posts/2014-11-18-art-civics-code-roundup.md)

### Submit a pull request
After you've made all the necessary changes, click the Pull Requests tab on the right side of the page. 

On some pages it's collapsed, so all you'll see is the little icon.

#### Click 'New Pull Request'

Make sure to create a pull request to submit the changes in your repository to the codeforseattle.org/codeforseattle.github.com repository.

---

## Making changes on your computer using git

These steps are very similar to the steps above. The only difference is that you'll be creating/editing files on your computer, committing the changes and pushing your work to your fork of the repository. Then you'll submit a pull request like described above.
