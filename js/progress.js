// Stores and retrieves lesson progress using browser localStorage.
const STORAGE_KEY = "seo-learning-progress";

// Returns all completed lesson IDs.
function getCompletedLessons() {
  const savedProgress = localStorage.getItem(STORAGE_KEY);

  // Returns an empty array when no progress has been saved.
  return savedProgress ? JSON.parse(savedProgress) : [];
}

// Marks a lesson as completed.
function markLessonCompleted(lessonId) {
  const completedLessons = getCompletedLessons();

  // Prevents the same lesson from being saved twice.
  if (!completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId);
  }

  // Saves the updated progress in the browser.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
}

// Checks whether a lesson is completed.
function isLessonCompleted(lessonId) {
  return getCompletedLessons().includes(lessonId);
}
