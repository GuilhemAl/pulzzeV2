// Mock data for ecological puzzle app

export const puzzleLibrary = [
  {
    id: 'puzzle-1',
    title: 'Forest Friend',
    theme: 'Biodiversity',
    image: 'https://images.unsplash.com/photo-1531943865082-287018833410',
    difficulty: 'easy',
    pieces: 50,
    ecoFact: 'Squirrels play a vital role in forest regeneration by forgetting where they buried thousands of nuts, which then grow into new trees!',
    description: 'Discover how forest animals help nature thrive'
  },
  {
    id: 'puzzle-2',
    title: 'Ocean Guardian',
    theme: 'Ocean Conservation',
    image: 'https://images.unsplash.com/photo-1533787896899-91b040188f57',
    difficulty: 'medium',
    pieces: 75,
    ecoFact: 'Sea turtles have been around for over 100 million years! But plastic pollution threatens their survival. Every piece of plastic we recycle helps protect them.',
    description: 'Learn about protecting our ocean friends'
  },
  {
    id: 'puzzle-3',
    title: 'Recycling Heroes',
    theme: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9',
    difficulty: 'easy',
    pieces: 50,
    ecoFact: 'Recycling one aluminum can saves enough energy to power a TV for 3 hours! Imagine how much energy we save by recycling many cans.',
    description: 'Discover the power of recycling'
  },
  {
    id: 'puzzle-4',
    title: 'Solar Power',
    theme: 'Renewable Energy',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    difficulty: 'hard',
    pieces: 100,
    ecoFact: 'The sun provides enough energy in one hour to power the entire world for a year! Solar panels help us capture this clean, renewable energy.',
    description: 'Explore the future of clean energy'
  },
  {
    id: 'puzzle-5',
    title: 'Coral Kingdom',
    theme: 'Marine Biodiversity',
    image: 'https://images.unsplash.com/photo-1694661641480-d4e76d6bead3',
    difficulty: 'medium',
    pieces: 75,
    ecoFact: 'Coral reefs cover less than 1% of the ocean floor but support 25% of all marine species! They are the rainforests of the sea.',
    description: 'Dive into the colorful underwater world'
  }
];

export const achievements = [
  { id: 'first-puzzle', title: 'First Steps', description: 'Complete your first puzzle', icon: '🌱', unlocked: false },
  { id: 'speed-master', title: 'Speed Master', description: 'Complete a puzzle in under 5 minutes', icon: '⚡', unlocked: false },
  { id: 'eco-learner', title: 'Eco Learner', description: 'Read all eco-facts', icon: '📚', unlocked: false },
  { id: 'puzzle-pro', title: 'Puzzle Pro', description: 'Complete 3 puzzles', icon: '🏆', unlocked: false },
  { id: 'hard-mode', title: 'Challenge Accepted', description: 'Complete a 100-piece puzzle', icon: '💪', unlocked: false },
  { id: 'perfect-run', title: 'Perfect Run', description: 'Complete a puzzle without hints', icon: '⭐', unlocked: false }
];

export const userStats = {
  puzzlesCompleted: 0,
  totalTime: 0,
  hintsUsed: 0,
  achievements: []
};

export const soundEffects = {
  piecePlace: '/sounds/piece-place.mp3',
  puzzleComplete: '/sounds/complete.mp3',
  achievement: '/sounds/achievement.mp3',
  hint: '/sounds/hint.mp3'
};