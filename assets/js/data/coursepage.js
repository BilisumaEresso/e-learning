const coursePages = {
  "web-design": {
    // coursePageId: "web-design-coursePage",
    title: "Web Design Fundamentals",
    subtitle: "Learn the basics of HTML, CSS & Website Layouts",
    video: "https://www.youtube.com/embed/pQN-pnXPaVg",
    about: `
      This course teaches you the fundamentals of HTML, CSS, and website layout structure.
      You will learn how modern websites are built and how to design clean, responsive interfaces.
    `,
    description: `
      Web Design Fundamentals introduces you to the essential tools and concepts used
      to build beautiful, functional websites. You will learn how HTML structures
      content, how CSS styles it, and how layouts and grids are designed.
    `,
    points: [
      "HTML structure, tags, and semantic layout",
      "CSS styling, colors, typography, and spacing",
      "Responsive design using Flexbox and Grid",
      "Media queries and breakpoint design",
      "Building fully responsive pages"
    ],
    reviews: [
      {
        name: "Selam F.",
        img: "https://i.pravatar.cc/71",
        comment: `"The best beginner-friendly course! Helped me build my first webpage!"`
      },
      {
        name: "Abel G.",
        img: "https://i.pravatar.cc/72",
        comment: `"Very practical examples and great explanations. Loved the projects!"`
      }
    ],
    instructor: {
      name: "Michael Green",
      img: "https://i.pravatar.cc/90",
      title: "Senior Frontend Developer",
      bio: `
        Michael is a frontend engineer with 10+ years experience designing
        and developing responsive web interfaces across global companies.
      `
    }
  },

  "ui-ux": {
    // coursePageId: "ui-ux-coursePage",
    title: "UI/UX Design Course",
    subtitle: "Master user research, interface design & prototyping",
    video: "https://www.youtube.com/embed/3JluqTojuME",
    about: `
      This course teaches the foundations of user experience design and
      user interface principles. You will learn how to create intuitive,
      beautiful, user-centered interfaces.
    `,
    description: `
      UI/UX Design covers the full product design workflow—from research,
      wireframing, and prototyping to usability testing. You will learn
      how to design meaningful digital experiences that users love.
    `,
    points: [
      "User research, personas & journey maps",
      "Wireframes: low & high-fidelity",
      "Figma & design prototyping tools",
      "Color theory, typography & branding",
      "Usability testing & iteration"
    ],
    reviews: [
      {
        name: "Sara L.",
        img: "https://i.pravatar.cc/73",
        comment: `"This course helped me start a UI/UX career. Excellent!"`
      },
      {
        name: "Kidan B.",
        img: "https://i.pravatar.cc/74",
        comment: `"Great examples and practical Figma lessons!"`
      }
    ],
    instructor: {
      name: "Laura Adams",
      img: "https://i.pravatar.cc/91",
      title: "Product Designer",
      bio: `
        Laura has over 7 years of experience designing user-centered products,
        specializing in UI systems, visual identity, and interactive prototyping.
      `
    }
  },

  "mobile-dev": {
    // coursePageId: "mobile-dev-coursePage",
    title: "Mobile App Development Course",
    subtitle: "Learn to build powerful Android & iOS apps from scratch",
    video: "https://www.youtube.com/embed/mXjZQX3UzOs",
    about:"This course teaches you how mobile apps are built using modern tools and best practices. Learn the full workflow from UI creation to APIs.",
    description: `
      Mobile app development is one of the most in-demand tech skills.
      In this course, you'll learn how apps work behind the scenes and
      how to build full applications using Flutter or React Native.
    `,
    points: [
      "Building UI screens using widgets/components",
      "Navigation & multi-screen app structure",
      "Working with APIs & JSON data",
      "State management best practices",
      "Responsive layouts for any phone size"
    ],
    reviews: [
      {
        name: "Daniel K.",
        img: "https://i.pravatar.cc/72",
        comment: `"This course helped me build my first Android app. Very practical!"`
      },
      {
        name: "Hanna M.",
        img: "https://i.pravatar.cc/73",
        comment: `"Great explanations. The API lessons were super helpful!"`
      }
    ],
    instructor: {
      name: "John Smith",
      img: "https://i.pravatar.cc/80",
      title: "Senior Mobile App Developer",
      bio: `
        John has 9+ years of experience building mobile apps for startups and
        enterprise companies. He specializes in cross-platform development.
      `
    }
  }
};


// 1. Read course ID
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("coursePageId");

// 2. Get course
const course = coursePages[courseId];

if (!course) {
  document.body.innerHTML = "<h2>Course not found</h2>";
  throw new Error("Invalid Course ID");
}

// ----------------------------------------
// SELECT HTML ELEMENTS
// ----------------------------------------
const headerTitle = document.querySelector(".header h1");
const headerSubtitle = document.querySelector(".header .subtitle");

const videoFrame = document.querySelector(".video-wrapper iframe");

const shortDescTitle = document.querySelectorAll(".card h2")[0];
const shortDescText = document.querySelectorAll(".card p")[0];

const fullDescTitle = document.querySelectorAll(".card h2")[1];
const fullDescMainText = document.querySelectorAll(".card p")[1];
const descListItems = document.querySelectorAll(".desc-list li");
const lastDescParagraph = document.querySelectorAll(".card p")[2];

const reviewSectionTitle = document.querySelectorAll(".card h2")[2];
const reviewBlocks = document.querySelectorAll(".review");

const instructorTitle = document.querySelector(".instructor-card h2");
const instructorImage = document.querySelector(".instructor img");
const instructorName = document.querySelector(".instructor h4");
const instructorRole = document.querySelector(".instructor p");
const instructorText = document.querySelector(".instr-text");

// ----------------------------------------
// FILL HEADER
// ----------------------------------------
headerTitle.textContent = course.title;
headerSubtitle.textContent = course.subtitle;

// ----------------------------------------
// VIDEO
// ----------------------------------------
videoFrame.src = course.video;

// ----------------------------------------
// SHORT DESCRIPTION (use "about")
// ----------------------------------------
shortDescTitle.textContent = "Course Overview";
shortDescText.textContent = course.about;

// ----------------------------------------
// FULL DESCRIPTION (use description + points)
// ----------------------------------------
fullDescTitle.textContent = "Course Details";
fullDescMainText.textContent = course.description;

// points list
course.points.forEach((detailPoints, index) => {
 descListItems[index].textContent = detailPoints;
});

// last paragraph (you can use description again or write static text)
lastDescParagraph.textContent = "This course will fully prepare you for real-world projects.";

// ----------------------------------------
// STUDENT REVIEWS
// ----------------------------------------
reviewSectionTitle.textContent = "Student Reviews";

course.reviews.forEach((review, index) => {
  // if (!reviewBlocks[index]) return;

  const img = reviewBlocks[index].querySelector("img");
  const name = reviewBlocks[index].querySelector("h4");
  const text = reviewBlocks[index].querySelector("p");

  img.src = review.img;    // FIXED (was review.image)
  name.textContent = review.name;
  text.textContent = review.comment;
});

// ----------------------------------------
// INSTRUCTOR INFO
// ----------------------------------------
instructorTitle.textContent = "Instructor";

instructorImage.src = course.instructor.img;  // FIXED
instructorName.textContent = course.instructor.name;
instructorRole.textContent = course.instructor.title; // FIXED
instructorText.textContent = course.instructor.bio;   // FIXED
