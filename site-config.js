/**
 * Active site configuration — replace with your Canvas domain and join codes.
 * For a clean repo, keep secrets out of version control and copy from site-config.example.js.
 */
(function () {
  "use strict";

  window.ASDRP_CANVAS_CONFIG = {
    siteTitle: "ASDRP Mini-Course Catalog",
    siteSubtitle: "Pick a course below to enroll in Canvas.",
    subtitlePrefix: "Choose your next ",
    subtitleRotateWords: ["courses", "adventure", "path", "mentors", "discovery", "community", "journey"],
    /** Footer: use footerContactEmail (+ optional lines) for a styled block with mailto link */
    footerCopyright: "© 2026 ASDRP",
    footerSupportText: "Issues or questions?",
    footerContactEmail: "diego.martinez@asdrp.org",
    enrollBaseUrl: "https://asdrp.instructure.com/enroll/",
    /**
     * Set each `code` to the Canvas self-enrollment join code for that course.
     * Placeholder below is only until you paste the real codes from Canvas.
     */
    courses: [
      {
        title: "Mathematical Modeling and Simulation",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Joseph Laurienzo",
        advisorUrl: "https://asdrp.org/laurienzo",
      },
      {
        title: "Machine Learning with Python",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Viktoriia Liu",
        advisorUrl: "https://asdrp.org/vliu",
      },
      {
        title: "Computer Vision with Python",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Viktoriia Liu",
        advisorUrl: "https://asdrp.org/vliu",
      },
      {
        title: "Introduction to AI",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Suresh Subramaniam",
        advisorUrl: "https://asdrp.org/subramaniam",
      },
      {
        title: "Intro to Teaching and Course Design",
        code: "6TPRWM",
        advisorName: "Clinton Cunha",
        advisorUrl: "https://asdrp.org/cunha",
      },
      {
        title: "Renewable Power Generation",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Inbay Xie",
        advisorUrl: "https://asdrp.org/xie",
      },
      {
        title: "Materials science fundamentals",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Nataliya Starostina",
        advisorUrl: "https://asdrp.org/starostina",
      },
      {
        title: "Materials characterization techniques",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Nataliya Starostina",
        advisorUrl: "https://asdrp.org/starostina",
      },
      {
        title: "Introduction to Biomembranes",
        code: "REPLACE_WITH_CANVAS_JOIN_CODE",
        advisorName: "Joseph Pazzi",
        advisorUrl: "https://asdrp.org/pazzi",
      },
    ],
  };
})();
