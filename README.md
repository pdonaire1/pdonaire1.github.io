# Pablo Alejandro González Donaire

**Senior Full Stack Software Engineer** · Valencia, Carabobo, Venezuela

Ruby on Rails · React · TypeScript · Node.js · Python/Django · AWS · AI tooling (Claude Code, MCP)

[pdonaire@sweetcharts.com](mailto:pdonaire@sweetcharts.com) · [pdonaire1@gmail.com](mailto:pdonaire1@gmail.com) · [LinkedIn](https://www.linkedin.com/in/pdonaire1) · [GitHub](https://github.com/pdonaire1) · [Stack Overflow](https://stackoverflow.com/users/4717331/pablo-alejandro)

[<img width="215" height="30" alt="Open the résumé at pdonaire1.github.io" src="https://github.com/user-attachments/assets/32df1126-33f7-48c7-868b-6e2d2e42ef9b" />](https://pdonaire1.github.io/)

## Professional Summary

Full Stack Software Engineer with 13+ years of experience designing, building and maintaining web, API and mobile products for healthcare, fintech, e-commerce, recruitment and government clients. Currently developing a HIPAA-compliant healthcare (EHR) platform with Ruby on Rails, React, TypeScript and Next.js, and founder of SweetCharts.com, a trading-chart analysis platform built with Django, React, Redis and the Binance and BingX APIs. Strong background in REST and GraphQL APIs, microservices on AWS (Lambda, S3, EC2), relational and NoSQL databases (PostgreSQL, MySQL, MongoDB, DynamoDB, Redis) and payment integrations (Stripe, PayPal, Conekta). Daily user of AI-assisted development tools (Claude Code, Cursor, OpenCode) and builder of MCP servers, agent skills and LLM-powered features. Comfortable owning Full Stack features, from data model to UI, in remote, English-speaking teams.

## Skills

| Area | Skills |
|---|---|
| **Languages** | JavaScript, TypeScript, Ruby, Python, PHP, SQL, HTML5, CSS3, Sass, Less |
| **AI & Agentic Tooling** | AI-assisted development, Claude Code, Cursor, OpenCode, Agent Skills, MCP servers (Model Context Protocol), MCP tool development, LLM API integration (Claude API), AI agents & agentic workflows, Prompt engineering, AI chatbots |
| **Frontend** | React, Next.js, MobX, Angular, AngularJS, Ionic, Vue.js, jQuery, Material UI, Bootstrap, Responsive Design |
| **Backend & APIs** | Ruby on Rails, Node.js, Django, Django REST Framework, REST APIs, GraphQL, Microservices, Swagger / OpenAPI, Alexa Skills Kit |
| **Cloud & DevOps** | AWS Lambda, AWS EC2, AWS S3, Heroku, Git, GitHub, CI/CD |
| **Databases** | PostgreSQL, MySQL, SQLite, MongoDB, DynamoDB, Redis, Elasticsearch |
| **Payments, Trading & Integrations** | Stripe, PayPal, Conekta, Binance API, BingX API, Third-party APIs, Chatbots (Facebook Messenger) |
| **Practices** | Unit Testing, HIPAA Compliance, Technical Analysis / Trading Strategies, Code Review, Agile / Scrum, Remote Collaboration |

Full work history, projects and education: **[pdonaire1.github.io](https://pdonaire1.github.io/)** · [Download PDF](https://docs.google.com/document/d/1aaf2mRCG3LjAEdPWWZEIWAtIWsc3vc2Gnj5SJJiWNok/export?format=pdf)

---

## About this repo

Source for [pdonaire1.github.io](https://pdonaire1.github.io/). The source lives on `master`; GitHub Pages serves the built site from the `gh-pages` branch.

- **Résumé** (`public/index.html`): a standalone, dependency-free page that renders `public/resumeData.json`, in English and Spanish. Printing it (Ctrl+P) gives a clean single-column, ATS-friendly PDF. The **Download PDF** button downloads the Google Docs version (`main.resumepdf` in the JSON).
- **Interactive portfolio** ([`/portfolio.html`](https://pdonaire1.github.io/portfolio.html)): the original React site, reading the same JSON. `scripts/postbuild.js` points it at the hashed bundle after a build.

Edit `public/resumeData.json` to update both pages. Spanish text lives in the matching `*_es` fields.

### Development

The React toolchain is `react-scripts` 1.x, which needs **Node 16** (`nvm use` reads `.nvmrc`).

```bash
nvm install 16 && nvm use     # once
npm install
npm start                     # http://localhost:3000 (résumé), /portfolio.html (React portfolio)
```

Only need the résumé page? It has no build step:

```bash
cd public && python3 -m http.server 8000   # http://localhost:8000/
```

Build and deploy:

```bash
npm run build                 # postbuild wires build/portfolio.html to the hashed bundle
npm run deploy                # publishes ./build to the gh-pages branch, served at https://pdonaire1.github.io/
npm run deploy:legacy         # optional: also refresh the old copy at /pdonaire1/ (pdonaire1/pdonaire1 gh-pages)
```

### Credits

- Base template: [Tim Baker](https://react-resume-template.herokuapp.com/)
- HTML design template: [Ceevee by Styleshout](https://www.styleshout.com/free-templates/ceevee/)
- Header photo: [Casey Horner](https://unsplash.com/@mischievous_penguins?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge) on Unsplash
- Testimonial photo: [Samuel Zeller](https://unsplash.com/@samuelzeller?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge) on Unsplash
