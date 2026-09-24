# Pablo Alejandro González Donaire (System Engineer)
![ReactJS Resume Website Template](https://raw.githubusercontent.com/pdonaire1/pdonaire1.github.io/master/public/images/portfolio/demo.png "ReactJS Resume Website pdonaire1")
### <a href="https://pdonaire1.github.io/">RESUME (main page)</a>
### <a href="https://pdonaire1.github.io/portfolio.html">Interactive portfolio</a>

The résumé (`public/index.html`) is a standalone, dependency-free page that renders `public/resumeData.json`. The React portfolio lives at `public/portfolio.html` (`scripts/postbuild.js` points it at the hashed bundle after a build). Edit the JSON to update both pages. The **Download PDF** button downloads the Google Docs version of the résumé (`main.resumepdf` in the JSON); printing the page (Ctrl+P) gives a clean single-column, ATS-friendly PDF of the site itself.


## Description
I'm Pablo González System Engineer - FullStack Software Developer. I've participated in software innovations, Web Development, Android, IOS, API Rest Services, with knowledge to solve any problem. This repo contains my personal résumé website with some projects and examples, published at https://pdonaire1.github.io/.

## Development

The source lives on `master`; GitHub Pages serves the built site from the `gh-pages` branch.

The React toolchain is `react-scripts` 1.x, which needs **Node 16** for the dev server (`nvm use` reads `.nvmrc`).

```bash
nvm install 16 && nvm use     # once
npm install
npm start                     # http://localhost:3000 (résumé), /portfolio.html (React portfolio)
```

Only need the résumé page? It has no build step:

```bash
cd public && python3 -m http.server 8000   # http://localhost:8000/resume.html
```

Production build and deploy to GitHub Pages (works on Node 16; on Node 17+ prefix with `NODE_OPTIONS=--openssl-legacy-provider`):

```bash
npm run build                 # postbuild wires build/portfolio.html to the hashed bundle
npm run deploy                # publishes ./build to this repo's gh-pages branch, served at https://pdonaire1.github.io/
npm run deploy:legacy         # optional: also refresh the old copy at /pdonaire1/ (pdonaire1/pdonaire1 gh-pages)
```

## Credits
##### Base Template
<a href="https://react-resume-template.herokuapp.com/">Tim Baker</a>

#### HTML Design Template
<a href="https://www.styleshout.com/free-templates/ceevee/">Ceevee Template by Styleshout</a>

##### Header photo credit
<a href="https://unsplash.com/@mischievous_penguins?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Casey Horner</a>

##### Testimonial photo credit
<a href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Samuel Zeller</a>

[<img width="215" height="30" alt="image" src="https://github.com/user-attachments/assets/32df1126-33f7-48c7-868b-6e2d2e42ef9b" />](https://github.com/pdonaire1/pdonaire1.github.io)
