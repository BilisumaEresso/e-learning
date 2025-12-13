// course-data.js
const coursesData = {
  "web-design": {
    title: "Web Design Fundamentals",
    introParagraph:
      "This course introduces you to the fundamentals of web design. You'll learn how to create visually appealing and functional websites using HTML and CSS, while understanding core design principles.",
    image: "assets/images/web-design.jpg",
    sections: [
      {
        number: "01",
        title: "Introduction to HTML",
        lessons: [
          {
            title: "HTML Basics and Structure",
            lessonNo: "Lesson 01",
            duration: "45 Minutes",
          },
          {
            title: "HTML Elements and Tags",
            lessonNo: "Lesson 02",
            duration: "1 hour",
          },
          {
            title: "Forms and Input Elements",
            lessonNo: "Lesson 03",
            duration: "50 Minutes",
          },
        ],
      },
      {
        number: "02",
        title: "Styling with CSS",
        lessons: [
          {
            title: "CSS Selectors and Properties",
            lessonNo: "Lesson 01",
            duration: "45 Minutes",
          },
          {
            title: "Box Model and Layout",
            lessonNo: "Lesson 02",
            duration: "2 Hours",
          },
          {
            title: "Colors, Fonts, and Backgrounds",
            lessonNo: "Lesson 03",
            duration: "30 Minutes",
          },
        ],
      },
      {
        number: "03",
        title: "Responsive Design Basics",
        lessons: [
          {
            title: "Media Queries and Breakpoints",
            lessonNo: "Lesson 01",
            duration: "50 Minutes",
          },
          {
            title: "Flexbox Fundamentals",
            lessonNo: "Lesson 02",
            duration: "1.5 Hours",
          },
          {
            title: "Grid Layout System",
            lessonNo: "Lesson 03",
            duration: "40 Minutes",
          },
        ],
      },
      {
        number: "04",
        title: "Design Principles for Web",
        lessons: [
          {
            title: "Typography in Web Design",
            lessonNo: "Lesson 01",
            duration: "55 Minutes",
          },
          {
            title: "Color Theory and Psychology",
            lessonNo: "Lesson 02",
            duration: "1.6 Hours",
          },
          {
            title: "Visual Hierarchy and Spacing",
            lessonNo: "Lesson 03",
            duration: "41 Minutes",
          },
        ],
      },
      {
        number: "05",
        title: "Design tools and Software",
        lessons: [
          {
            title: "figma basics",
            lessonNo: "Lesson 01",
            duration: "53 Minutes",
          },
          {
            title: "Adobe XD Overview",
            lessonNo: "Lesson 02",
            duration: "1.9 Hours",
          },
          {
            title: "Sketch for Web Design",
            lessonNo: "Lesson 03",
            duration: "35 Minutes",
          },
        ],
      },
    ],
  },
  "ui-ux": {
    title: "UI/UX Design Course",
    introParagraph:
      "Welcome to the UI/UX Design Course! This comprehensive program covers everything from user research to prototyping and testing. You'll learn how to create designs that are both beautiful and functional.",
    image: "assets/images/ui.jpg",
    sections: [
      {
        number: "01",
        title: "Introduction to UI/UX Design",
        lessons: [
          {
            title: "Understanding UI/UX Design Principles",
            lessonNo: "Lesson 01",
            duration: "1.1 hours",
          },
          {
            title: "Importance of User-Centered Design",
            lessonNo: "Lesson 02",
            duration: "1 hour",
          },
          {
            title: "The Role of UI/UX in Product Development",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
      {
        number: "02",
        title: "User Research and Analysis",
        lessons: [
          {
            title: "Conducting User Interviews",
            lessonNo: "Lesson 01",
            duration: "54 Minutes",
          },
          {
            title: "Creating User Personas",
            lessonNo: "Lesson 02",
            duration: "1.2 Hours",
          },
          {
            title: "Analyzing User Journey Maps",
            lessonNo: "Lesson 03",
            duration: "23 Minutes",
          },
        ],
      },
      {
        number: "03",
        title: "Wireframing and Prototyping",
        lessons: [
          {
            title: "Low-fidelity Wireframing",
            lessonNo: "Lesson 01",
            duration: "25 Minutes",
          },
          {
            title: "High-fidelity Prototyping",
            lessonNo: "Lesson 02",
            duration: "1.3 Hours",
          },
          {
            title: "Interactive Prototyping Tools",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
      {
        number: "04",
        title: "Visual Design and Branding",
        lessons: [
          {
            title: "Color Theory in UI Design",
            lessonNo: "Lesson 01",
            duration: "59 Minutes",
          },
          {
            title: "Typography and Readability",
            lessonNo: "Lesson 02",
            duration: "1 hour",
          },
          {
            title: "Creating Design Systems",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
      {
        number: "05",
        title: "Usability Testing and Iteration",
        lessons: [
          {
            title: "Understanding UI/UX Design Principles",
            lessonNo: "Lesson 01",
            duration: "45 Minutes",
          },
          {
            title: "Importance of User-Centered Design",
            lessonNo: "Lesson 02",
            duration: "1 hour",
          },
          {
            title: "The Role of UI/UX Design in Product Development",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
    ],
  },
  "mobile-dev": {
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile applications. Learn React Native and Flutter for comprehensive mobile development skills.",
    introParagraph:
      "This course takes you through the complete process of mobile app development. From setting up your development environment to publishing on app stores, you'll gain hands-on experience building real applications.",
    image: "assets/images/mobile-dev.jpg",
    author: "Michael Chen",
    duration: "8 Weeks",
    level: "Intermediate",
    sections: [
      {
        number: "01",
        title: "Mobile Development Basics",
        lessons: [
          {
            title: "Native vs Cross-platform",
            lessonNo: "Lesson 01",
            duration: "45 Minutes",
          },
          {
            title: "Setting Up Development Environment",
            lessonNo: "Lesson 02",
            duration: "11 Minutes",
          },
          {
            title: "Mobile App Architecture",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
      {
        number: "02",
        title: "React Native Fundamentals",
        lessons: [
          {
            title: "React Native Components",
            lessonNo: "Lesson 01",
            duration: "35 Minutes",
          },
          {
            title: "Navigation and Routing",
            lessonNo: "Lesson 03",
            duration: "1.6 Hours",
          },
          {
            title: "State Management in React Native",
            lessonNo: "Lesson 03",
            duration: "42 Minutes",
          },
        ],
      },
      {
        number: "03",
        title: "Flutter Development",
        lessons: [
          {
            title: "Dart Programming Basics",
            lessonNo: "Lesson 01",
            duration: "4 hours",
          },
          {
            title: "Flutter Widgets and Layouts",
            lessonNo: "Lesson 02",
            duration: "3 hours",
          },
          {
            title: "Building UI with Flutter",
            lessonNo: "Lesson 03",
            duration: "45 Minutes",
          },
        ],
      },
      {
        number: "04",
        title: "App Deployment",
        lessons: [
          {
            title: "Testing Mobile Applications",
            lessonNo: "Lesson 01",
            duration: "59 Minutes",
          },
          {
            title: "App Store Guidelines",
            lessonNo: "Lesson 02",
            duration: "33 Minutes",
          },
          {
            title: "Publishing to Stores",
            lessonNo: "Lesson 03",
            duration: "49 Minutes",
          },
        ],
      },
      {
        number: "05",
        title: "App optimization",
        lessons: [
          {
            title: "how optimized your app is",
            lessonNo: "Lesson 01",
            duration: "45 Minutes",
          },
          {
            title: "optmization detail",
            lessonNo: "Lesson 02",
            duration: "1 hour",
          },
          {
            title: "finalizing your app",
            lessonNo: "Lesson 03",
            duration: "23 Minutes",
          },
        ],
      },
    ],
  },
};


// 1. Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
// console.log(  urlParams)

const courseId = urlParams.get("id");
// 2. Load the correct course dynamically
const course = coursesData[courseId];

// 3. Fallback if ID not found
if (!course) {
  document.body.innerHTML = "<h2>Course not found</h2>";
  throw new Error("Invalid course ID: " + courseId);
}

// -------------------------
// Top Section
// -------------------------
document.querySelector(".course-title h3").textContent = course.title;
document.querySelector(".welcome-message p").textContent = course.introParagraph;

const introImage = document.querySelector(".intro-image img");
introImage.src = course.image;
// -------------------------
// Correct Section Containers 
// -------------------------
const sectionContainers = document.querySelectorAll(
  ".topicOne, .topicTwo, .topicThree, .topicFour, .topicFive"
);
console.log(sectionContainers)

// -------------------------
// Fill All Sections
// -------------------------
course.sections.forEach((section, index) => {
  const htmlSection = sectionContainers[index];

  htmlSection.querySelector(".course-topic-no").textContent = section.number;
  htmlSection.querySelector(".course-topic").textContent = section.title;

  const lessonContainers = htmlSection.querySelectorAll(".topic-item-info");
  section.lessons.forEach((lesson, lessonIndex) => {
    const lessonBox = lessonContainers[lessonIndex];

    lessonBox.querySelector(".topic-item").textContent = lesson.title;
    lessonBox.querySelector(".lesson-no").textContent = lesson.lessonNo;
    lessonBox.querySelector(".course-length p").textContent = lesson.duration;
  });
});
