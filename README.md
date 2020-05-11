# s.cann.i.ng

This is a GatsbyJS site built using GitHub Actions and hosted using GitHub pages. 

### How this works
The `master` branch contains the static, built website. The `dev` branch contains the source files that are used to generate the static content.  On changes to `dev` a GitHub Actions job is kicked off. The `dev` branch is built and committed to `master`using the [Gatsby GH Pages Action](https://github.com/enriikke/gatsby-gh-pages-action "Gatsby GH Pages Action").
