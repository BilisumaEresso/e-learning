// --- ALL COURSES DATA ---
const courses = [
  {
    id: "web-design",
    title: "Web Design Course",
    subtitle: "Learn to build beautiful, responsive, modern websites",
    video: "https://www.youtube.com/embed/9bZkp7q19f0",
    shortDesc:
      "This course provides a complete introduction to web design including layouts, typography, and responsive techniques.",
    longDesc:
      "Web design is one of the most in-demand skills in the digital world. This course teaches HTML structure, CSS styling, modern UI/UX concepts, responsive layouts, grids, accessibility, typography, color theory, and real-world webpage designs.",
    instructor: {
      name: "Jane Doe",
      title: "Senior UI/UX Designer",
      photo: "https://i.pravatar.cc/70",
      bio: "Jane has 8+ years of experience designing websites and user interfaces for startups and global brands."
    },
    reviews: [
      {
        name: "Sarah L.",
        img: "https://i.pravatar.cc/60",
        text: "A very helpful introduction to web design. I built my first website after this course!"
      },
      {
        name: "Michael A.",
        img: "https://i.pravatar.cc/61",
        text: "Very clear and practical lessons. The responsive design part is amazing!"
      }
    ]
  },

  {
    id: "ui-ux",
    title: "UI/UX Design Course",
    subtitle: "Master user interface design, workflows, and usability",
    video: "https://www.youtube.com/embed/3YW65K6LcIA",
    shortDesc:
      "Learn the fundamentals of user interface and user experience design using modern tools.",
    longDesc:
      "This UI/UX course covers wireframing, user flows, prototyping, layout grids, UI patterns, usability principles, Figma workflows, and real case studies. You will learn how to design intuitive digital products people love.",
    instructor: {
      name: "Kevin Brooks",
      title: "Product Designer",
      photo: "https://i.pravatar.cc/72",
      bio: "Kevin has worked on over 50 digital products with expertise in UX research and UI systems."
    },
    reviews: [
      {
        name: "Emily R.",
        img: "https://i.pravatar.cc/62",
        text: "The assignments helped me build my UI/UX portfolio fast!"
      }
    ]
  },

  {
    id: "mobile-app",
    title: "Mobile App Development",
    subtitle: "Build Android and iOS apps using modern frameworks",
    video: "https://www.youtube.com/embed/fis26HvvDII",
    shortDesc:
      "This course teaches you how to build full mobile applications using Flutter and React Native.",
    longDesc:
      "You will learn mobile UI design, navigation, API integration, authentication, state management, and deployment to both Play Store & App Store.",
    instructor: {
      name: "Samuel Bright",
      title: "Full-Stack Mobile Developer",
      photo: "https://i.pravatar.cc/73",
      bio: "Samuel builds cross-platform apps for startups and enterprises with 6+ years of experience."
    },
    reviews: []
  },

  {
    id: "graphic-design",
    title: "Graphic Design Course",
    subtitle: "Learn visual communication and modern graphic design tools",
    video: "https://www.youtube.com/embed/FTFaQWZBqQ8",
    shortDesc:
      "A complete introduction to Adobe Photoshop, Illustrator, color theory, and branding design.",
    longDesc:
      "This course covers poster design, typography, logo creation, brand identity, layout composition, and social media content design.",
    instructor: {
      name: "Laura Sanchez",
      title: "Creative Director",
      photo: "https://i.pravatar.cc/74",
      bio: "Laura is a creative director with 10+ years of experience in digital and print design."
    },
    reviews: []
  }
];


// --- LOAD COURSE BASED ON URL ---
// example: course.html?id=web-design

const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

const course = courses.find(c => c.id === courseId);

// If course not found
if (!course) {
  document.body.innerHTML = "<h2>Course not found</h2>";
  throw new Error("Invalid course id");
}

// --- FILL THE HTML WITH DATA ---
document.getElementById("course-title").textContent = course.title;
document.getElementById("course-subtitle").textContent = course.subtitle;

document.getElementById("course-video").src = course.video;

document.getElementById("short-description").textContent = course.shortDesc;

document.getElementById("long-description").textContent = course.longDesc;

document.getElementById("instructor-img").src = course.instructor.photo;
document.getElementById("instructor-name").textContent = course.instructor.name;
document.getElementById("instructor-title").textContent = course.instructor.title;
document.getElementById("instructor-bio").textContent = course.instructor.bio;


// --- REVIEWS ---
const reviewsContainer = document.getElementById("reviews");

course.reviews.forEach(r => {
  const div = document.createElement("div");
  div.className = "review";
  div.innerHTML = `
    <img src="${r.img}" />
    <div>
      <h4>${r.name}</h4>
      <p>${r.text}</p>
    </div>
  `;
  reviewsContainer.appendChild(div);
});
