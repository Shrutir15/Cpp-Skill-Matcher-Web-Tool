/**
 * Function to tokenize a comma-separated skill string into a set of unique, lowercase strings.
 * This logic mimics the C++ tokenize_skills function for the web demo.
 * @param {string} skillsStr - Comma-separated skills string.
 * @returns {Set<string>} - Set of unique, normalized skills.
 */
function tokenizeSkills(skillsStr) {
    const skills = skillsStr.split(',');
    const tokenSet = new Set();
    
    skills.forEach(skill => {
        // Trim whitespace and convert to lowercase
        const normalizedSkill = skill.trim().toLowerCase();
        if (normalizedSkill) {
            tokenSet.add(normalizedSkill);
        }
    });
    return tokenSet;
}

/**
 * Provides personalized feedback based on the score AND the selected Match Type.
 */
function getFeedbackMessage(score, matches, requiredSkillsCount) {
    // 1. Get the user's selected requirement
    const matchType = document.getElementById('matchType').value;
    
    // 2. Define thresholds based on the selected Match Type
    let requiredThreshold;
    let typeDescription;

    if (matchType === 'critical') {
        requiredThreshold = 80;
        typeDescription = "a CRITICAL Match Role (e.g., Senior Engineer)";
    } else if (matchType === 'balanced') {
        requiredThreshold = 60;
        typeDescription = "a BALANCED Match Role (e.g., Mid-Level Engineer)";
    } else if (matchType === 'potential') {
        requiredThreshold = 40;
        typeDescription = "a POTENTIAL Match Role (e.g., Entry-Level/Trainee)";
    }

    // --- Core Feedback Logic ---

    if (score === 100) {
        return `✅ **Excellent!** You have a perfect 100% skill match for this role. This is a great fit for ${typeDescription}. Apply immediately!`;
    } else if (score >= requiredThreshold) {
        return `✅ **Strong Fit!** Your score of ${score}% meets the required ${requiredThreshold}% threshold for ${typeDescription}. You matched ${matches} out of ${requiredSkillsCount} key skills.`;
    } else if (score >= requiredThreshold - 20) {
        return `⚠️ **Close Match.** Your score is ${score}%. You are near the required ${requiredThreshold}% threshold for ${typeDescription}. Focus on the missing skills.`;
    } else {
        return `❌ **Skill Gap.** Your score is only ${score}%. This role (${typeDescription}) may require significant upskilling. Matched ${matches} skills.`;
    }
}

/**
 * Main function to calculate the match score, mimicking the C++ calculate_match_score.
 */
function calculateMatch() {
    // READS DYNAMIC USER INPUT from the HTML text areas
    const jobSkillsStr = document.getElementById('jobSkills').value;
    const mySkillsStr = document.getElementById('mySkills').value;

    const jobSkills = tokenizeSkills(jobSkillsStr);
    const mySkills = tokenizeSkills(mySkillsStr);

    const scoreDisplay = document.getElementById('scoreDisplay');
    const feedbackMessage = document.getElementById('feedbackMessage');
    
    const requiredSkillsCount = jobSkills.size;

    if (requiredSkillsCount === 0) {
        scoreDisplay.textContent = '100 %';
        feedbackMessage.innerHTML = "No required skills entered. That's a perfect match!";
        return;
    }

    let matchedCount = 0;
    // Check for intersection
    mySkills.forEach(skill => {
        if (jobSkills.has(skill)) {
            matchedCount++;
        }
    });

    // Calculate score
    const rawScore = (matchedCount / requiredSkillsCount) * 100;
    const score = Math.round(rawScore);

    // Update UI using the new, conditional feedback function
    scoreDisplay.textContent = `${score} %`;
    feedbackMessage.innerHTML = getFeedbackMessage(score, matchedCount, requiredSkillsCount);
}