# Student Life at BUE

Responsive one-page webpage concept for the Senior Web Designer & Editor assessment, built with Bootstrap 5 and custom CSS.

## Live URL

Planned custom subdomain:

`https://student-life-bue.lamiaibrahim.site`

## Concept

The page proposes a refreshed Student Services / Student Journey experience titled **Student Life at BUE**. It keeps the structure and tone close to the current BUE website while making the content more editorial, easier to scan, and more conversion-focused for prospective and current students.

## Sections

- Hero with clear headline, supporting copy and calls to action
- Engagement statistics from the BUE Student Activities page
- Campus culture introduction
- Clubs and societies categories
- Student activities and campus highlights
- Student testimonials adapted from the BUE testimonials page
- Get involved call to action

## Technology

- HTML5
- Bootstrap 5.0.2, loaded from the same BUE asset path used on the current website
- Section-based custom CSS for BUE-inspired visual direction
- Small vanilla JavaScript enhancement for testimonials

## File Structure

```text
student-life-bue/
  index.html
  script.js
  README.md
  CNAME
  .nojekyll
  assets/
    css/
      main.css
      sections/
        header.css
        hero.css
        stats.css
        intro.css
        clubs.css
        activities.css
        testimonials.css
        footer.css
```

## UX and Accessibility Notes

- Semantic HTML landmarks and heading hierarchy
- Skip link for keyboard users
- Responsive navigation
- High-contrast buttons and readable text sizes
- Descriptive link text and image alt text
- Mobile-first layout adjustments

## Sources Used

- BUE homepage: https://www.bue.edu.eg/
- Clubs & Organisations: https://www.bue.edu.eg/clubs-organisations
- Engagement and Student Activities: https://www.bue.edu.eg/student-activities-welfare-team
- Student Testimonials: https://www.bue.edu.eg/student-testimonials-

## Deployment

This is a static site and can be deployed directly on GitHub Pages.

1. Create a GitHub repository, for example `student-life-bue`.
2. Upload these files to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Set the source to deploy from the `main` branch root.
5. Add the custom domain `student-life-bue.lamiaibrahim.site`.
6. In the domain DNS settings, add a `CNAME` record:

```text
Name: student-life-bue
Value: YOUR-GITHUB-USERNAME.github.io
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.
