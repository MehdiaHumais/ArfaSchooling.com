document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        "3D Animation",
        "Scratch Programing",
        "Artificail Inteligence",
        "Video Editing",
        "After Effects",
        "Web Devolpment"
        }
    ];

    const courseList = document.getElementById("courseList");

    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
    });

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your message has been sent. We will get back to you soon.");
    });
	
	function submit(){
		window.location.href = "index2.html";
	}
});
