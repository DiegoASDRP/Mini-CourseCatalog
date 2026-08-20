/**
 * Active site configuration - replace with your Canvas domain and join codes.
 * For a clean repo, keep secrets out of version control and copy from site-config.example.js.
 */
(function () {
  "use strict";

  window.ASDRP_CANVAS_CONFIG = {
    siteTitle: "ASDRP Mini-Course Catalog",
    siteSubtitle: "Pick a course below to enroll in Canvas.",
    subtitlePrefix: "Choose your next ",
    subtitleRotateWords: ["mini-course", "skill", "research tool", "mentor", "discovery", "Canvas course"],
    learnMoreText: "Learn more about Mini-Courses",
    learnMoreUrl: "https://sites.google.com/asdrp.org/student-training/mini-courses",
    /** Footer: use footerContactEmail (+ optional lines) for a styled block with mailto link */
    footerCopyright: "(c) 2026 ASDRP",
    footerSupportText: "Issues or questions?",
    footerContactEmail: "diego.martinez@asdrp.org",
    enrollBaseUrl: "https://asdrp.instructure.com/enroll/",
    courses: [
      {
        title: "Statistics for the Life Sciences",
        courseNumber: "MC1",
        block: "Mondays 7:30 PM - 9:00 PM PST",
        format: "Zoom",
        code: "CGMHNN",
        advisors: [{ name: "C. Cunha", url: "https://sites.google.com/asdrp.org/cunha" }],
      },
      {
        title: "Cross-Disciplinary Applications of Artificial Intelligence",
        courseNumber: "MC2",
        block: "Sundays 3:00 PM - 4:00 PM",
        format: "Zoom",
        code: "RA8Y6W",
        advisors: [{ name: "H. Qin", url: "https://sites.google.com/asdrp.org/qin" }],
      },
      {
        title: "Instrumental Analysis",
        courseNumber: "MC3",
        block: "Thursdays 7:30 PM - 9:00 PM",
        format: "Hybrid",
        code: "AB78CG",
        advisors: [{ name: "A. Yamamoto", url: "https://sites.google.com/asdrp.org/yamamoto" }],
      },
      {
        title: "Research Presentation Skills",
        block: "Sundays 1:30 PM - 3:00 PM",
        format: "In-Person",
        // enrollUrl: "https://www.asdrp.org/r?to=pyr", // TODO: uncomment this when the course is open for enrollment and remove the statusMessage
        statusMessage:
          "Research Presentation Skill sign-ups will be available after the transition period. Keep an eye in your email inbox for the announcement",
        advisors: [{ name: "E. Njoo", url: "https://www.njoolab.org/" }],
      },
    ],
  };
})();
