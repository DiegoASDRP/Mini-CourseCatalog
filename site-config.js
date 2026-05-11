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
        title: "Organic Chemistry for Dummies",
        courseNumber: "MC1",
        session: "Session 1",
        format: "In-Person",
        code: "TN3BYC",
        advisors: [
          { name: "H. Rahn", url: "https://sites.google.com/asdrp.org/rahn" },
          { name: "E. Njoo", url: "https://www.njoolab.org/" },
        ],
      },
      {
        title: "Introduction to Biomembranes",
        courseNumber: "MC2",
        session: "Session 1",
        format: "In-Person",
        code: "YLCAL9",
        advisors: [{ name: "J. Pazzi", url: "https://sites.google.com/asdrp.org/pazzi" }],
      },
      {
        title: "Quantification of Biological Phenomena",
        courseNumber: "MC3",
        session: "Session 1",
        format: "In-Person",
        code: "MPGGDC",
        advisors: [{ name: "M. Jupelli", url: "https://www.asdrp.org/jupelli" }],
      },
      {
        title: "Strategies in Drug Design",
        courseNumber: "MC9",
        session: "Session 1",
        format: "In-Person",
        code: "XWA6T9",
        advisors: [{ name: "E. Njoo", url: "https://www.njoolab.org/" }],
      },
      {
        title: "Introduction to Data Collection from Databases",
        courseNumber: "MC10",
        session: "Session 1",
        format: "Online",
        code: "RMJREW",
        advisors: [{ name: "C. Cunha", url: "https://sites.google.com/asdrp.org/cunha" }],
      },
      {
        title: "Machine Learning with Python",
        courseNumber: "MC5",
        session: "Session 1",
        format: "Online",
        code: "BYWYAK",
        advisors: [{ name: "V. Liu", url: "https://sites.google.com/asdrp.org/liulab" }],
      },
      {
        title: "Material Science Fundamentals & Characterization",
        courseNumber: "MC6",
        session: "Session 1",
        format: "Online",
        code: "NDX4A4",
        advisors: [{ name: "N. Starostina", url: "https://sites.google.com/asdrp.org/starostina" }],
      },
      {
        title: "Absolutely Small - introduction to Quantum Mechanics",
        courseNumber: "MC7",
        session: "Session 1",
        format: "Online",
        code: "AC9AYE",
        advisors: [{ name: "L. McMahan", url: "https://sites.google.com/asdrp.org/mcmahan" }],
      },
      {
        title: "Organic Reaction Planning",
        courseNumber: "MC8",
        session: "Session 2",
        format: "In-Person",
        code: "8MF48K",
        advisors: [
          { name: "H. Rahn", url: "https://sites.google.com/asdrp.org/rahn" },
          { name: "E. Njoo", url: "https://www.njoolab.org/" },
        ],
      },
      {
        title: "AI Research Foundations: Data Engineering & Representation",
        courseNumber: "MC4",
        session: "Session 2",
        format: "Online",
        code: "W98JAN",
        advisors: [{ name: "Phil Mui", url: "https://sites.google.com/asdrp.org/mui" }],
      },
      {
        title: "Computer Vision with Python",
        courseNumber: "MC11",
        session: "Session 2",
        format: "Online",
        code: "MAKX4C",
        advisors: [{ name: "V. Liu", url: "https://sites.google.com/asdrp.org/liulab" }],
      },
      {
        title: "Introduction to Using AI",
        courseNumber: "MC12",
        session: "Session 2",
        format: "Online",
        code: "XDX7H8",
        advisors: [{ name: "S. Subramaniam", url: "https://sites.google.com/asdrp.org/subramaniam" }],
      },
      {
        title: "Mathematical Modeling and Simulation",
        courseNumber: "MC13",
        session: "Session 2",
        format: "Online",
        code: "3HRKWP",
        advisors: [{ name: "J. Laurienzo", url: "https://sites.google.com/asdrp.org/laurienzo" }],
      },
      {
        title: "Renewable Power Generation",
        courseNumber: "MC14",
        session: "Session 2",
        format: "Online",
        code: "HFPW8A",
        advisors: [{ name: "I. Xie", url: "https://www.asdrp.org/xie" }],
      },
    ],
  };
})();
