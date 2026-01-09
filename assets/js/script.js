document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const moduleDropdownContent = document.querySelector('.sidebar .dropdown-content');

    // Apply saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    const moduleDropdownToggle = document.querySelector('.sidebar .dropdown > a');

    // Toggle dropdown on click
    if (moduleDropdownToggle) {
        moduleDropdownToggle.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdownContent = moduleDropdownToggle.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.style.display =
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // ---------------- STATIC MODULE DATA ----------------
    const modules = [
        "Course Overview", "Cloud Basics", "Cloud Challenges", "Networking Basics",
        "VPC", "Cloud Provider Comparison", "AWS Global Infrastructure", "IAM", "EC2",
        "EC2 Storage", "Load Balancing & Auto Scaling", "S3", "Snow Family",
        "Databases & Analytics", "DynamoDB", "Caching", "Containers & Serverless",
        "Lambda", "Route 53", "Global Networking", "DevOps & IaC",
        "Enterprise Storage", "Monitoring", "CloudWatch", "Messaging",
        "Advanced VPC", "AI/ML", "Security & Governance", "WAF"
    ];

    const moduleCardsContainer = document.querySelector('.module-cards');

    modules.forEach((moduleName, index) => {
        const moduleFileName = moduleName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') + '.html';
        const modulePath = `modules/${moduleFileName}`;

        if (moduleDropdownContent) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${modulePath}">${index + 1}. ${moduleName}</a>`;
            moduleDropdownContent.appendChild(li);
        }

        if (moduleCardsContainer) {
            const card = document.createElement('div');
            card.classList.add('module-card');
            card.innerHTML = `
                <h3>${index + 1}. ${moduleName}</h3>
                <p>A brief description of ${moduleName}</p>
                <a href="${modulePath}" class="start-learning-button">Start Learning</a>
            `;
            moduleCardsContainer.appendChild(card);
        }
    });

    // ---------------- SEARCH ----------------
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const searchTerm = searchBar.value.trim();
                if (searchTerm) {
                    window.location.href =
                        `search-results.html?query=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }

    // ---------------- CONTACT FORM BACKEND CONNECT ----------------
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            try {
                const response = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                }
            } catch (error) {
                alert("Backend server not running");
            }
        });
    }
});
