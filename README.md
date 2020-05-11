# s.cann.i.ng

This is a GatsbyJS site built using GitHub Actions and hosted using GitHub pages. 

### How this works
The `dev` branch is the default branch and contains the source files that are used to generate the static content.  On changes to `dev` a GitHub Actions job is kicked off. The `dev` branch is built and the generated static files are  to `master` using the [Gatsby GH Pages Action](https://github.com/enriikke/gatsby-gh-pages-action "Gatsby GH Pages Action"). GitHub pages is configured on this repo and publishes the `master` branch.
