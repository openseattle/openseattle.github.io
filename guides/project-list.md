---
layout: page
title: "Adding a project to our project list"
---

To add a project to the project list, follow these instructions:

You can edit the project list on openseattle.org in two ways:

- through GitHub.com
- on your computer using git

To get started, you'll need to fork the website repository on GitHub.

## Forking openseattle.github.io

Go to [github.com/openseattle/openseattle.github.io](https://github.com/openseattle/openseattle.github.io) and click the "Fork" button.

## Making changes on GitHub.com

Now that you've forked the repository, you can make the necessary changes in your fork. After you've made the changes you will submit those changes as a pull request to the original repository.


### Make changes to the files
You can add/edit/rename/move/delete files all through the github web interface.

For detailed guides to manipulating files through GitHub.com, go here: [help.github.com/categories/manipulating-files](https://help.github.com/categories/manipulating-files/)

To add your project you will: 

- Go to http://github.com/openseattle/openseattle.github.io
- Click the `_data` folder
- Click the `projects.yml` file
- Or go directly to that file with this url: https://github.com/openseattle/openseattle.github.io/blob/master/_data/projects.yml
- Click the pencil icon in the file's toolbar to start editing
- add your project, using this as a template:
  ```
  - name: "Your Project"
    description: "A description of your project"
    project_tags: [data, resources]
    technology_tags: [html, css]
    code_url: "https://github.com/example/example"
    github_user: "your_username"
    github_repo: "your_project_repository_name"
    public_url: "http://example.com"
    dev_status: "live"
    contributors: "Your name"
    screenshot_url: http://example.com/screenshot.png
    last_update: 1/11/2015
  ```
- Paste that entry into the file, and edit it to include your project's details. (it's ok to leave things blank if needed)
- Save your work by clicking the green button at the bottom of the page.

### Submit a pull request
After you've made all the necessary changes, click the Pull Requests tab on the right side of the page. 

On some pages it's collapsed, so all you'll see is the little icon.

### Click 'New Pull Request'

Make sure to create a pull request to submit the changes in your repository to the openseattle.org/openseattle.github.io repository.

---

## Making changes on your computer using git

These steps are very similar to the steps above. The only difference is that you'll be creating/editing files on your computer, committing the changes and pushing your work to your fork of the repository. Then you'll submit a pull request like described above.
