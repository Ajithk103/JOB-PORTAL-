const jobs = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Full Stack Developer"
];

// LOGIN
function login(){
  const emailInput=document.getElementById("email").value;
  const passwordInput=document.getElementById("password").value;
  const msg=document.getElementById("msg");
  if(emailInput==="ajithkizhuveettil04@gmail.com" && passwordInput==="ajith"){
    document.getElementById("login").style.display="none";
    document.getElementById("header").style.display="flex";
    document.getElementById("home").style.display="block";
    renderJobs();
  } else {
    msg.style.color="red";
    msg.innerText="Invalid credentials";
  }
}

// RENDER JOBS
function renderJobs(list=jobs){
  const jobList=document.getElementById("jobList");
  jobList.innerHTML="";
  list.forEach(job=>{
    const div=document.createElement("div");
    div.className="job";
    div.innerHTML=`<h3>${job}</h3><p>Click to view details</p>`;
    div.onclick=()=>openJob(job);
    jobList.appendChild(div);
  });
}

// FILTER JOBS
function filterJobs(){
  const value=document.getElementById("search").value.toLowerCase();
  renderJobs(jobs.filter(j=>j.toLowerCase().includes(value)));
}

// OPEN JOB DETAILS
function openJob(job){
  document.getElementById("home").style.display="none";
  document.getElementById("details").style.display="block";
  document.getElementById("jobTitle").innerText=job;
}

// BACK TO HOME
function goHome(){
  document.getElementById("details").style.display="none";
  document.getElementById("home").style.display="block";
}

// SHOW PROFILE
function showProfile(){
  document.getElementById("home").style.display="none";
  document.getElementById("profile").style.display="block";
}

// LOGOUT
function logout(){
  location.reload();
}
function goBack() {
  // If profile page is visible
  if (document.getElementById("profile").style.display === "block") {
    document.getElementById("profile").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
  // If job details page is visible
  else if (document.getElementById("details").style.display === "block") {
    document.getElementById("details").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
  // Optional: if home page is visible, go back to login
  else if (document.getElementById("home").style.display === "block") {
    document.getElementById("home").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("header").style.display = "none";
  }
}

