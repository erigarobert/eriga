ERIGA ROBERT - PORTFOLIO WEBSITE
================================
Open index.html in any browser to view the site.

FOLDERS
  index.html          - page content (text, sections)
  css/style.css       - colours, layout, animations
  js/main.js          - projects list, chatbot answers, contact form, settings
  images/profile.jpg  - your profile photo
  images/projects/    - put your project photos here
  cv/                 - put your CV here, named  Eriga_Robert_CV.pdf  (for the "Download CV" button)

1) SOCIAL LINKS
   Facebook, Instagram and X links are already set (index.html and js/main.js).

2) MESSAGES TO GMAIL
   The contact form and CV request use Web3Forms (free, https://web3forms.com).
   The access key is set in js/main.js (CONFIG.formKey). Messages arrive at erigarobert2@gmail.com.
   Check the Spam folder the first time.
   NOTE: the form only works when the site is hosted online (not when opened as a local file).

3) PROJECT PHOTOS (permanent, seen by every visitor)
   Copy photos into images/projects/ then in js/main.js add them to the project, e.g.
       photos: ["images/projects/sierra-leone-1.jpg", "images/projects/sierra-leone-2.jpg"],
   The camera button on the website only saves photos in YOUR OWN browser (for previewing).

4) IEEE PAPER LINK
   In js/main.js set  publicationUrl: "https://doi.org/..."

5) CHATBOT
   Answers are in js/main.js, in the KB list. Edit the text or add new {k:[keywords], a:"answer"} entries.

6) PUBLISH FOR FREE
   - Netlify Drop: go to app.netlify.com/drop and drag the whole cv_profile folder in.
   - or GitHub Pages: upload the folder to a GitHub repository, then Settings > Pages.
