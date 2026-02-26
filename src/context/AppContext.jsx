import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext(null);

const STORAGE_KEY = 'french-trainer-state';

const BADGES = [
  { id: 'first_lesson', name: 'Premier Pas', icon: '🎯', description: 'Complete your first lesson', condition: (s) => s.totalAnswered >= 1 },
  { id: 'streak_3', name: 'Trois Jours', icon: '🔥', description: '3-day streak', condition: (s) => s.streak >= 3 },
  { id: 'streak_7', name: 'Une Semaine', icon: '⭐', description: '7-day streak', condition: (s) => s.streak >= 7 },
  { id: 'streak_30', name: 'Un Mois', icon: '👑', description: '30-day streak', condition: (s) => s.streak >= 30 },
  { id: 'perfect_10', name: 'Parfait', icon: '💎', description: '10 correct in a row', condition: (s) => s.perfectStreak >= 10 },
  { id: 'vocab_master', name: 'Vocabulaire', icon: '📚', description: 'Learn 50 vocabulary words', condition: (s) => s.vocabLearned >= 50 },
  { id: 'polyglot', name: 'Polyglotte', icon: '🌍', description: 'Practice all topics', condition: (s) => s.topicsCompleted >= 12 },
  { id: 'centurion', name: 'Centurion', icon: '🏆', description: 'Answer 100 questions', condition: (s) => s.totalAnswered >= 100 },
  { id: 'xp_500', name: 'Étoile Montante', icon: '🌟', description: 'Earn 500 XP', condition: (s) => s.xp >= 500 },
  { id: 'xp_2000', name: 'Expert', icon: '🎖️', description: 'Earn 2000 XP', condition: (s) => s.xp >= 2000 },
];

const initialState = {
  xp: 0,
  level: 1,
  streak: 0,
  lastPracticeDate: null,
  totalAnswered: 0,
  totalCorrect: 0,
  perfectStreak: 0,
  maxPerfectStreak: 0,
  vocabLearned: 0,
  topicsCompleted: 0,
  topicProgress: {},
  badges: [],
  recentActivity: [],
  aiMode: false,
  selectedLevel: null,
  dailyGoal: 20,
  dailyProgress: 0,
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...initialState, ...parsed };
    }
  } catch (e) {
    console.error('Failed to load state:', e);
  }
  return initialState;
}

function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function checkBadges(state) {
  const newBadges = [];
  BADGES.forEach(badge => {
    if (!state.badges.includes(badge.id) && badge.condition(state)) {
      newBadges.push(badge.id);
    }
  });
  return newBadges;
}

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function reducer(state, action) {
  let newState;

  switch (action.type) {
    case 'ANSWER_QUESTION': {
      const { correct, topicId, questionId, questionType } = action.payload;
      const xpGain = correct ? (questionType === 'pronunciation' ? 15 : 10) : 2;
      const today = getToday();
      const isNewDay = state.lastPracticeDate !== today;
      const streak = isNewDay
        ? (state.lastPracticeDate === getPreviousDay(today) ? state.streak + 1 : 1)
        : state.streak;
      const perfectStreak = correct ? state.perfectStreak + 1 : 0;

      const topicProgress = { ...state.topicProgress };
      if (!topicProgress[topicId]) {
        topicProgress[topicId] = { answered: 0, correct: 0, questionsAnswered: [] };
      }
      topicProgress[topicId] = {
        ...topicProgress[topicId],
        answered: topicProgress[topicId].answered + 1,
        correct: topicProgress[topicId].correct + (correct ? 1 : 0),
        questionsAnswered: [...new Set([...topicProgress[topicId].questionsAnswered, questionId])],
      };

      const activity = {
        date: new Date().toISOString(),
        type: 'answer',
        correct,
        topicId,
        xpGain,
      };

      newState = {
        ...state,
        xp: state.xp + xpGain,
        level: calculateLevel(state.xp + xpGain),
        streak,
        lastPracticeDate: today,
        totalAnswered: state.totalAnswered + 1,
        totalCorrect: state.totalCorrect + (correct ? 1 : 0),
        perfectStreak,
        maxPerfectStreak: Math.max(state.maxPerfectStreak, perfectStreak),
        vocabLearned: state.vocabLearned + (questionType === 'vocab' && correct ? 1 : 0),
        topicProgress,
        dailyProgress: isNewDay ? 1 : state.dailyProgress + 1,
        recentActivity: [activity, ...state.recentActivity].slice(0, 50),
      };
      break;
    }
    case 'COMPLETE_TOPIC': {
      newState = {
        ...state,
        topicsCompleted: state.topicsCompleted + 1,
        xp: state.xp + 50,
        level: calculateLevel(state.xp + 50),
      };
      break;
    }
    case 'TOGGLE_AI_MODE': {
      newState = { ...state, aiMode: !state.aiMode };
      break;
    }
    case 'SET_LEVEL': {
      newState = { ...state, selectedLevel: action.payload };
      break;
    }
    case 'SET_DAILY_GOAL': {
      newState = { ...state, dailyGoal: action.payload };
      break;
    }
    case 'RESET_PROGRESS': {
      newState = { ...initialState };
      break;
    }
    default:
      return state;
  }

  // Check for new badges
  const earnedBadges = checkBadges(newState);
  if (earnedBadges.length > 0) {
    newState = { ...newState, badges: [...newState.badges, ...earnedBadges] };
  }

  return newState;
}

function getPreviousDay(dateStr) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Check if streak should reset
  useEffect(() => {
    const today = getToday();
    if (state.lastPracticeDate && state.lastPracticeDate !== today) {
      const yesterday = getPreviousDay(today);
      if (state.lastPracticeDate !== yesterday && state.streak > 0) {
        // Streak broken - but don't reset until they practice again
      }
    }
    // Reset daily progress for a new day
    if (state.lastPracticeDate !== today && state.dailyProgress > 0) {
      dispatch({ type: 'ANSWER_QUESTION', payload: { correct: false, topicId: '_reset', questionId: '_reset', questionType: 'mcq' } });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, BADGES }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
