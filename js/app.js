// Confirms that the website JavaScript is loaded.
console.log("SEO Learning Portal is ready!");

// Gets the total lesson count from the HTML.
const lessonsSection = document.getElementById("lessons");

const totalLessons = Number(lessonsSection?.dataset.totalLessons) || 0;

// Updates the learning progress displayed on the homepage.
function updateLearningProgress() {
  const completedLessons = getCompletedLessons();

  const completedCount = Math.min(completedLessons.length, totalLessons);

  // Calculates the completion percentage safely.
  const percentage =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  // Finds the progress section elements.
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  // Stops if the progress elements are unavailable.
  if (!progressText || !progressBar) {
    return;
  }

  // Updates the progress text and progress bar.
  progressText.textContent = `${completedCount} of ${totalLessons} lessons completed (${percentage}%)`;

  progressBar.value = completedCount;
  progressBar.max = totalLessons;
}

// Updates progress when the homepage loads.
updateLearningProgress();
