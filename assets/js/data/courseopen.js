// Get course ID from URL
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get("id");

// Select HTML elements
const titleEl = document.querySelector(".course-title h3");
const descEl = document.querySelector(".welcome-message p");
const introImageEl = document.querySelector(".intro-image img");
const sectionsContainer = document.querySelector(".course-detail-cards");

// Find course by id
const course = courses.find((c) => c.id === courseId);

// If course doesn't exist
if (!course) {
  titleEl.textContent = "Course not found";
  descEl.textContent = "The course you are looking for does not exist.";
  introImageEl.style.display = "none";
} else {
  // Fill content
  titleEl.textContent = course.title;
  descEl.textContent = course.description;

  // Show image
  introImageEl.src = course.image;

  // Insert sections
  sectionsContainer.innerHTML = course.sections
    .map(
      (section) => `
      <div class="detail-card">
        <h3>${section.title}</h3>
        <p>${section.content}</p>
      </div>
    `
    )
    .join("");
}
