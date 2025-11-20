#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <set>
#include <algorithm>
#include <cctype>
#include <cmath> // Required for round() function

using namespace std;

// Function to convert a string to lowercase
string to_lower(const string& s) {
    string lower_s = s;
    transform(lower_s.begin(), lower_s.end(), lower_s.begin(),
        [](unsigned char c){ return tolower(c); });
    return lower_s;
}

// Function to tokenize skills from a comma-separated string into a set of unique, lowercase strings
set<string> tokenize_skills(const string& skills_str) {
    set<string> tokens;
    stringstream ss(skills_str);
    string token;

    while (getline(ss, token, ',')) {
        // Remove leading/trailing whitespace
        token.erase(0, token.find_first_not_of(" \t\n\r\f\v"));
        token.erase(token.find_last_not_of(" \t\n\r\f\v") + 1);

        if (!token.empty()) {
            tokens.insert(to_lower(token));
        }
    }
    return tokens;
}

/**
 * @brief Calculates the skill match percentage.
 * @param job_skills_str Comma-separated string of required skills.
 * @param your_skills_str Comma-separated string of your skills.
 * @return The match percentage (0 to 100).
 */
int calculate_match_score(const string& job_skills_str, const string& your_skills_str) {
    set<string> job_skills = tokenize_skills(job_skills_str);
    set<string> your_skills = tokenize_skills(your_skills_str);

    if (job_skills.empty()) {
        return 100; // Edge case: No skills required means 100% match
    }

    // Find the intersection (overlapping skills)
    int matched_count = 0;
    for (const string& skill : your_skills) {
        if (job_skills.count(skill)) {
            matched_count++;
        }
    }

    // Score is (Matches / Total Required Skills) * 100
    double score = (static_cast<double>(matched_count) / job_skills.size()) * 100.0;

    return static_cast<int>(round(score)); 
}

// Main function updated to accept dynamic input via command line arguments
// Usage: ./matcher "Required skills list" "Your skills list"
int main(int argc, char* argv[]) {
    // Check if the user provided exactly two arguments (the required and my skills)
    if (argc != 3) {
        cerr << "Usage Error: Program requires exactly two skill strings as arguments." << endl;
        cerr << "Example: ./matcher \"C++, AI, Git\" \"C++, HTML, JavaScript\"" << endl;
        return 1; // Return a non-zero exit code to signal an error
    }

    // argv[1] is the first argument (Job Skills)
    string required = argv[1];
    
    // argv[2] is the second argument (My Skills)
    string mine = argv[2];

    int score = calculate_match_score(required, mine);
    
    // Output only the score. This makes it easy for another program to read the result.
    cout << score << endl; 

    // Optional detailed output (redirected to cerr so it doesn't interfere with the score output):
    cerr << "Job Required: " << required << endl;
    cerr << "My Skills: " << mine << endl;
    cerr << "Match Score: " << score << "%" << endl;

    return 0;
}