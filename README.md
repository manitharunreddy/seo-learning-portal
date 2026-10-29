# SEO Zero to Hero 🚀

A beginner-friendly, structured SEO learning portal designed to help learners understand Search Engine Optimization (SEO) from fundamentals to practical website auditing.

The project provides step-by-step lessons covering keyword research, on-page SEO, technical SEO, website performance, local SEO, analytics, and SEO auditing.

## 🌐 Live Demo

**Website:** [SEO Zero to Hero](https://manitharunreddy.github.io/seo-learning-portal/)

**GitHub Repository:** [seo-learning-portal](https://github.com/manitharunreddy/seo-learning-portal)

> Note: The live website will be accessible once GitHub Pages deployment is configured successfully.

---

## ✨ Features

- 📚 **Structured Learning:** 24 SEO lessons organized in a progressive learning path.
- 🎯 **Beginner-Friendly Content:** Simple definitions, practical examples, and explanations.
- 📈 **SEO Fundamentals:** Learn how search engines discover, crawl, and index web pages.
- 🔍 **Keyword Research:** Understand search intent, long-tail keywords, and keyword mapping.
- 📝 **On-Page SEO:** Learn title tags, meta descriptions, headings, URLs, and internal linking.
- ⚙️ **Technical SEO:** Explore HTTP status codes, robots.txt, XML sitemaps, canonical tags, and mobile SEO.
- 🚀 **Performance Optimization:** Learn image optimization, Core Web Vitals, and website speed optimization.
- 🔗 **Off-Page SEO:** Understand backlinks and link-building fundamentals.
- 📍 **Local SEO:** Learn the fundamentals of improving local search visibility.
- 📊 **SEO Analytics:** Understand Google Search Console, SEO metrics, and reporting.
- 🛠️ **Practical SEO Audit:** Apply your knowledge through a website audit project.
- ✅ **Progress Tracking:** Mark lessons as completed and save progress using browser localStorage.
- 📱 **Responsive Design:** Learn through a website designed to support different screen sizes.

---

## 📚 Course Curriculum

The project contains 24 lessons.

| No. | Lesson | Topic |
|---:|---|---|
| 01 | What Is SEO? | SEO fundamentals and importance |
| 02 | How Search Engines Work | Crawling, indexing, and ranking |
| 03 | Types of SEO | Different SEO approaches |
| 04 | How Google Finds Websites | Website discovery and crawling |
| 05 | Keyword Research | Finding relevant search keywords |
| 06 | Search Intent | Understanding what users want |
| 07 | Long-Tail Keywords | Targeting specific search queries |
| 08 | Keyword Mapping | Mapping keywords to website pages |
| 09 | Title Tags & Meta Descriptions | Optimizing search-result information |
| 10 | Headings & Content Structure | Organizing content for users and search engines |
| 11 | SEO-Friendly URLs | Creating clear and descriptive URLs |
| 12 | Internal Linking | Connecting relevant website pages |
| 13 | HTTP Status Codes | Understanding HTTP responses and SEO |
| 14 | Robots.txt & XML Sitemaps | Managing crawling guidance and URL discovery |
| 15 | Canonical Tags | Handling duplicate and similar URLs |
| 16 | Mobile SEO | Improving mobile search experience |
| 17 | Image SEO | Optimizing images for performance and accessibility |
| 18 | Core Web Vitals | Measuring user experience |
| 19 | Website Speed Optimization | Improving page loading performance |
| 20 | Backlinks & Link Building | Understanding links from other websites |
| 21 | Local SEO | Improving local search visibility |
| 22 | Google Search Console | Monitoring search performance and indexing |
| 23 | SEO Analytics & Reporting | Measuring results and identifying opportunities |
| 24 | SEO Audit Project | Applying SEO concepts in a practical audit |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and lesson content |
| CSS3 | Styling, layout, and responsive presentation |
| JavaScript | Interactivity and lesson progress tracking |
| localStorage | Saving completed lessons in the browser |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Pages | Static website deployment |

---

## 📂 Project Structure

```text
seo-learning-portal/
│
├── index.html
├── README.md
│
├── assets/
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   └── progress.js
│
└── lessons/
    ├── what-is-seo.html
    ├── how-search-engines-work.html
    ├── types-of-seo.html
    ├── how-google-finds-websites.html
    ├── keyword-research.html
    ├── search-intent.html
    ├── long-tail-keywords.html
    ├── keyword-mapping.html
    ├── title-tags-meta-descriptions.html
    ├── headings-content-structure.html
    ├── seo-friendly-urls.html
    ├── internal-linking.html
    ├── http-status-codes.html
    ├── robots-txt-xml-sitemaps.html
    ├── canonical-tags.html
    ├── mobile-seo.html
    ├── image-seo.html
    ├── core-web-vitals.html
    ├── website-speed-optimization.html
    ├── backlinks-link-building.html
    ├── local-seo.html
    ├── google-search-console.html
    ├── seo-analytics-reporting.html
    └── seo-audit-project.html
```

---

## 🚀 Run the Project Locally

This is a static website, so you do not need Node.js, a backend server, or a database to run it.

### Option 1: Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

### Option 2: Use Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website should open in your browser.

---

## 🌐 Deploy with GitHub Pages

You can host this project for free using GitHub Pages.

### Step 1: Push the Project to GitHub

Run these commands from the project directory:

```bash
git add .
git commit -m "Update project documentation"
git push origin main
```

### Step 2: Configure GitHub Pages

1. Open the GitHub repository.
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` as the branch.
5. Select `/(root)` as the folder.
6. Click **Save**.

### Step 3: Open the Website

After GitHub Pages successfully deploys the project, visit:

https://manitharunreddy.github.io/seo-learning-portal/

You can monitor the deployment under the repository's **Actions** tab.

---

## 💾 How Progress Tracking Works

The project uses browser `localStorage` to save completed lesson IDs.

When a learner clicks **Mark as Completed**:

1. JavaScript identifies the lesson.
2. The lesson ID is saved in browser storage.
3. The completion button changes to indicate that the lesson is completed.
4. The saved state can be restored when the learner returns using the same browser storage.

**Important limitations:**

- Progress is stored locally in the browser.
- Progress is not synchronized between devices or browsers.
- Clearing the browser's site data can remove saved progress.
- No user account or server-side progress storage is currently required.

---

## 🎯 Learning Objectives

After completing the course, learners should be able to:

- Explain the fundamentals of SEO.
- Understand how search engines discover and index websites.
- Perform basic keyword research and keyword mapping.
- Improve page titles, headings, URLs, images, and internal links.
- Identify common technical SEO issues.
- Understand mobile SEO and website performance.
- Interpret basic Google Search Console metrics.
- Prepare a basic SEO report.
- Perform a structured SEO audit and prioritize improvements.

SEO results depend on many factors, and completing the lessons does not guarantee specific search rankings or traffic.

---

## 🔮 Future Enhancements

Potential future improvements include:

- Interactive SEO quizzes and assessments.
- Course completion certificates.
- A progress dashboard.
- Search and filtering for lessons.
- More practical SEO case studies.
- Downloadable SEO audit checklists.
- Additional advanced SEO lessons.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the website locally.
5. Submit a pull request describing your changes.

---

## 📄 License

No license has been specified yet. If you plan to allow others to reuse, modify, or distribute this project, consider adding an appropriate open-source license.

---

## 👨‍💻 Author

**Manitharun Reddy**

GitHub: [@manitharunreddy](https://github.com/manitharunreddy)

---

**Learn SEO. Practise SEO. Grow your skills.** 🚀