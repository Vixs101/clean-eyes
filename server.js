const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/clean-eyes", (req, res) => {
    const name = "Elijah Victor";
    
    const slack_handle = "@Vixs";
    
    const apology = 'I sincerely apologize for the incident that occurred and the misinterpretation that followed. What happened was a genuine misunderstanding on my part, where my mind processed visual information in a way that led to an inappropriate conclusion. I take full responsibility for allowing my thoughts to wander in that direction instead of maintaining the professional mindset required during this internship. The reason my mind went that way was due to a momentary lapse in focus and perhaps post traumatic disorder from the previous cohort. I realize now that I should have been more conscious of my thought patterns and more deliberate about keeping my attention on work-related matters. This experience has taught me the critical importance of mental discipline in the workplace. Moving forward, I am committed to ensuring that my eyes and mind remain pure and focused during all internship hours. I will purify and train my mind not to see any bad thing again by implementing several strategies to prevent this from happening again, including taking regular breaks to reset my mental state, practicing mindfulness techniques to catch wandering thoughts early, and actively redirecting my attention to productive tasks whenever I notice my focus drifting. I understand that professionalism is not just about external actions but also about maintaining appropriate internal thoughts and perspectives. I am deeply committed to upholding the highest standards of conduct and will work diligently to ensure that my presence in the workplace reflects maturity, respect, and unwavering focus on the responsibilities entrusted to me during this internship.';
    
    const lesson_learned = "I will now maintain unwavering focus and professionalism by being mindful of my thoughts, taking responsibility for my mental discipline, and ensuring that my attention remains solely on productive work during internship hours.";

    const word_count = apology.split(/\s+/).filter(word => word.length > 0).length;

    const response = {
        name: name,
        slack_handle: slack_handle,
        apology: apology,
        lesson_learned: lesson_learned,
        word_count: word_count
    };

    res.json(response);
});

app.get('/', (req, res) => {
  res.send('Server is running! Visit /clean-eyes for the API endpoint.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access the endpoint at http://localhost:${PORT}/clean-eyes`);
});