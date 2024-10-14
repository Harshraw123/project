const jokes = {
    happy: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    sad: "Why don’t scientists trust atoms? Because they make up everything!",
    angry: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    bored: "Why don’t skeletons fight each other? They don’t have the guts.",
    stressed: "I’m on a whiskey diet. I’ve lost three days already!",
    adventurous: "Why don’t we ever tell secrets on a farm? Because the potatoes have eyes!",
    romantic: "Are you a magician? Because whenever I look at you, everyone else disappears.",
    nostalgic: "What did one wall say to the other wall? I'll meet you at the corner!"
};

document.querySelectorAll('.mood-button').forEach(button => {
    button.addEventListener('click', function() {
        const selectedMood = this.getAttribute('data-mood');
        const suggestionDiv = document.getElementById('suggestion');
        const moodSections = document.querySelectorAll('.mood-section');
        const jokeDiv = document.getElementById('joke');

        // Clear previous suggestions and moods
        suggestionDiv.innerHTML = '';
        moodSections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
            section.style.opacity = 0; // Reset opacity
            section.style.transform = 'translateY(20px)'; // Reset position
        });

        // Show selected mood section
        const moodSection = document.querySelector(`.mood-section[data-mood="${selectedMood}"]`);
        if (moodSection) {
            moodSection.style.display = 'flex'; // Use flexbox for better layout
            moodSection.style.flexWrap = 'wrap'; // Allow items to wrap
            moodSection.style.opacity = 1; // Show section
            moodSection.style.transform = 'translateY(0)'; // Reset position

            // Optional: Add transition for a smoother effect
            setTimeout(() => {
                moodSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, 0);

            suggestionDiv.innerHTML = `You might enjoy: ${moodSection.querySelector('h3').innerText}`;
        }

        // Show the joke with animation
        jokeDiv.innerText = jokes[selectedMood];
        jokeDiv.style.opacity = 0;
        jokeDiv.style.transform = 'translateY(-20px)';
        jokeDiv.style.display = 'block';

        // Animate joke appearance
        setTimeout(() => {
            jokeDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            jokeDiv.style.opacity = 1;
            jokeDiv.style.transform = 'translateY(0)';
        }, 0);

        // Fade out joke after 5 seconds
        setTimeout(() => {
            jokeDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            jokeDiv.style.opacity = 0;
            jokeDiv.style.transform = 'translateY(-20px)';
        }, 7000);
    });
});


// Rating functionality
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-value');
        stars.forEach(s => {
            s.classList.remove('selected');
            if (s.getAttribute('data-value') <= ratingValue) {
                s.classList.add('selected');
            }
        });
        document.getElementById('feedbackMsg').innerText = `Thank you for rating ${ratingValue} star(s)!`;
    });
});

// Smooth scrolling
const navbarLinks = document.querySelectorAll('nav ul li a');
navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').innerText = 'Your message has been sent!';
        this.reset(); // Reset the form
    } else {
        document.getElementById('formResponse').innerText = 'Please fill out all fields.';
    }
});
