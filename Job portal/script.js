// Job Data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    description: "HTML, CSS, JavaScript, React skills required"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Amazon",
    location: "Bangalore",
    description: "Node.js, Express, MongoDB required"
  }
];

// Load Jobs Dynamically
function loadJobs() {
  const jobContainer = document.getElementById("job-list");
  if (!jobContainer) return;

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>Company: ${job.company}</p>
      <p>Location: ${job.location}</p>
      <a href="job-details.html?id=${job.id}">View Details</a>
    `;
    jobContainer.appendChild(div);
  });
}

// Job Details Page
function loadJobDetails() {
  const params = new URLSearchParams(window.location.search);
  const jobId = parseInt(params.get("id"));
  const job = jobs.find(j => j.id === jobId);

  if (!job) return;

  document.getElementById("title").innerText = job.title;
  document.getElementById("company").innerText = job.company;
  document.getElementById("location").innerText = job.location;
  document.getElementById("description").innerText = job.description;
}

// Apply Job
function applyJob() {
  alert("✅ Job Applied Successfully!");
}

// Login Validation
function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("❌ Please fill all fields");
  } else {
    alert("✅ Login Successful");
    window.location.href = "index.html";
  }
}

// Auto load
document.addEventListener("DOMContentLoaded", () => {
  loadJobs();
  loadJobDetails();
});