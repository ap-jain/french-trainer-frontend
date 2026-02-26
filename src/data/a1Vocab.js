// A1 Vocabulary questions organized by exercise ID

const A1_VOCAB = {
  'cardinal-0-10': [
    { id: 'c010-1', type: 'fill', question: 'Write in French: 0', answer: 'zéro', hint: 'Starts with Z', explanation: '0 = zéro' },
    { id: 'c010-2', type: 'fill', question: 'Write in French: 3', answer: 'trois', hint: 'Starts with T', explanation: '3 = trois' },
    { id: 'c010-3', type: 'fill', question: 'Write in French: 7', answer: 'sept', hint: 'Starts with S', explanation: '7 = sept' },
    { id: 'c010-4', type: 'fill', question: 'Write in French: 5', answer: 'cinq', hint: 'Starts with C', explanation: '5 = cinq' },
    { id: 'c010-5', type: 'fill', question: 'Write in French: 9', answer: 'neuf', hint: 'Starts with N', explanation: '9 = neuf' },
  ],
  'cardinal-11-20': [
    { id: 'c1120-1', type: 'fill', question: 'Write in French: 11', answer: 'onze', hint: 'Starts with O', explanation: '11 = onze' },
    { id: 'c1120-2', type: 'fill', question: 'Write in French: 14', answer: 'quatorze', hint: 'Starts with Q', explanation: '14 = quatorze' },
    { id: 'c1120-3', type: 'fill', question: 'Write in French: 17', answer: 'dix-sept', hint: '10 + 7', explanation: '17 = dix-sept' },
    { id: 'c1120-4', type: 'fill', question: 'Write in French: 20', answer: 'vingt', hint: 'Starts with V', explanation: '20 = vingt' },
  ],
  'cardinal-free': [
    { id: 'cf-1', type: 'mcq', question: 'How do you say 71 in French?', options: ['Septante et un', 'Soixante et onze', 'Soixante-onze', 'Sept-un'], correct: 1, explanation: '71 = soixante et onze (60 + 11).' },
    { id: 'cf-2', type: 'mcq', question: 'How do you say 80 in French?', options: ['Huitante', 'Quatre-vingts', 'Soixante-vingt', 'Octante'], correct: 1, explanation: '80 = quatre-vingts (4 × 20).' },
    { id: 'cf-3', type: 'fill', question: 'Write in French: 15', answer: 'quinze', hint: 'Starts with Q', explanation: '15 = quinze.' },
  ],
  'ordinal-free': [
    { id: 'of-1', type: 'fill', question: 'Write in French: 1st (masculine)', answer: 'premier', hint: 'Irregular ordinal', explanation: '1st = premier (m) / première (f). Exception to the -ième rule.' },
    { id: 'of-2', type: 'fill', question: 'Write in French: 2nd', answer: 'deuxième', hint: 'deux + -ième', explanation: '2nd = deuxième.' },
    { id: 'of-3', type: 'mcq', question: 'How do you form ordinal numbers in French?', options: ['Add -ème', 'Add -ième', 'Add -ier', 'Add -ment'], correct: 1, explanation: 'Rule: cardinal number + -ième (except premier/première).' },
  ],
  'dates-jours': [
    { id: 'dj-1', type: 'fill', question: 'Monday in French:', answer: 'lundi', hint: 'Starts with L', explanation: 'Monday = lundi. Days are not capitalized in French.' },
    { id: 'dj-2', type: 'fill', question: 'Wednesday in French:', answer: 'mercredi', hint: 'Named after Mercury', explanation: 'Wednesday = mercredi.' },
    { id: 'dj-3', type: 'fill', question: 'Saturday in French:', answer: 'samedi', hint: 'Starts with S', explanation: 'Saturday = samedi.' },
    { id: 'dj-4', type: 'fill', question: 'Sunday in French:', answer: 'dimanche', hint: 'Starts with D', explanation: 'Sunday = dimanche.' },
  ],
  'dates-mois': [
    { id: 'dm-1', type: 'fill', question: 'January in French:', answer: 'janvier', hint: 'Starts with J', explanation: 'January = janvier.' },
    { id: 'dm-2', type: 'fill', question: 'March in French:', answer: 'mars', hint: 'Named after Mars', explanation: 'March = mars.' },
    { id: 'dm-3', type: 'fill', question: 'August in French:', answer: 'août', hint: 'Starts with A', explanation: 'August = août.' },
    { id: 'dm-4', type: 'fill', question: 'December in French:', answer: 'décembre', hint: 'Starts with D', explanation: 'December = décembre.' },
  ],
  'dates-free': [
    { id: 'df-1', type: 'mcq', question: 'How do you write "March 5th, 2024" in French?', options: ['5 mars 2024', 'Le 5 mars 2024', 'Mars 5, 2024', '5ème mars 2024'], correct: 1, explanation: 'French date format: Le + day number + month + year.' },
    { id: 'df-2', type: 'mcq', question: 'Which date uses "premier" instead of a number?', options: ['The 2nd', 'The 10th', 'The 1st', 'The 31st'], correct: 2, explanation: 'Only the 1st uses "premier": le premier janvier. All others use cardinal numbers.' },
  ],
  'time-free': [
    { id: 'tf-1', type: 'mcq', question: '"Il est quinze heures" means:', options: ['3 AM', '3 PM', '5 PM', '15 minutes'], correct: 1, explanation: 'France uses 24h clock. 15:00 = 3 PM.' },
    { id: 'tf-2', type: 'fill', question: 'Il est _____ heures. (It is 8 o\'clock)', answer: 'huit', hint: 'Number 8', explanation: '8 o\'clock = il est huit heures.' },
    { id: 'tf-3', type: 'mcq', question: '"Il est midi" means:', options: ['Midnight', 'Noon', 'Morning', 'Evening'], correct: 1, explanation: 'Midi = noon. Minuit = midnight.' },
  ],
  'countries-free': [
    { id: 'ctf-1', type: 'mcq', question: '"La France" uses which article?', options: ['le', 'la', 'les', 'l\''], correct: 1, explanation: 'France is feminine → la France.' },
    { id: 'ctf-2', type: 'mcq', question: 'Which preposition for "in France"?', options: ['au', 'en', 'à la', 'aux'], correct: 1, explanation: 'Feminine countries use "en": en France.' },
    { id: 'ctf-3', type: 'mcq', question: '"Au Japon" — why "au"?', options: ['Japan is feminine', 'Japan is masculine', 'Japan is plural', 'Japan starts with J'], correct: 1, explanation: 'Le Japon (masculine) → au Japon.' },
  ],
  'seasons-spring': [
    { id: 'sp-1', type: 'vocab', word: 'Le printemps', meaning: 'Spring', context: 'Au printemps, les fleurs poussent.', contextTranslation: 'In spring, flowers grow.' },
    { id: 'sp-2', type: 'vocab', word: 'Une fleur', meaning: 'A flower', context: 'Les fleurs sont belles au printemps.', contextTranslation: 'Flowers are beautiful in spring.' },
    { id: 'sp-3', type: 'vocab', word: 'Le jardin', meaning: 'The garden', context: 'Je travaille dans le jardin.', contextTranslation: 'I work in the garden.' },
  ],
  'seasons-summer': [
    { id: 'ss-1', type: 'vocab', word: 'L\'été', meaning: 'Summer', context: 'En été, il fait chaud.', contextTranslation: 'In summer, it is hot.' },
    { id: 'ss-2', type: 'vocab', word: 'La plage', meaning: 'The beach', context: 'Nous allons à la plage en été.', contextTranslation: 'We go to the beach in summer.' },
  ],
  'seasons-autumn': [
    { id: 'sa-1', type: 'vocab', word: 'L\'automne', meaning: 'Autumn / Fall', context: 'En automne, les feuilles tombent.', contextTranslation: 'In autumn, the leaves fall.' },
    { id: 'sa-2', type: 'vocab', word: 'Une feuille', meaning: 'A leaf', context: 'Les feuilles changent de couleur.', contextTranslation: 'The leaves change color.' },
  ],
  'seasons-winter': [
    { id: 'sw-1', type: 'vocab', word: 'L\'hiver', meaning: 'Winter', context: 'En hiver, il fait froid.', contextTranslation: 'In winter, it is cold.' },
    { id: 'sw-2', type: 'vocab', word: 'La neige', meaning: 'Snow', context: 'Il neige en hiver.', contextTranslation: 'It snows in winter.' },
  ],
  'holidays-birthday': [
    { id: 'hb-1', type: 'vocab', word: 'Un anniversaire', meaning: 'A birthday', context: 'Joyeux anniversaire !', contextTranslation: 'Happy birthday!' },
    { id: 'hb-2', type: 'vocab', word: 'Un cadeau', meaning: 'A gift / present', context: 'J\'ai un cadeau pour toi.', contextTranslation: 'I have a gift for you.' },
    { id: 'hb-3', type: 'vocab', word: 'Un gâteau', meaning: 'A cake', context: 'Le gâteau au chocolat est délicieux.', contextTranslation: 'The chocolate cake is delicious.' },
  ],
  'holidays-christmas': [
    { id: 'hc-1', type: 'vocab', word: 'Noël', meaning: 'Christmas', context: 'Joyeux Noël !', contextTranslation: 'Merry Christmas!' },
    { id: 'hc-2', type: 'vocab', word: 'Le sapin de Noël', meaning: 'Christmas tree', context: 'Nous décorons le sapin de Noël.', contextTranslation: 'We decorate the Christmas tree.' },
  ],
  'holidays-carnival': [
    { id: 'hcv-1', type: 'vocab', word: 'Le carnaval', meaning: 'Carnival', context: 'Le carnaval de Nice est célèbre.', contextTranslation: 'The Nice carnival is famous.' },
    { id: 'hcv-2', type: 'vocab', word: 'Un déguisement', meaning: 'A costume / disguise', context: 'Les enfants portent des déguisements.', contextTranslation: 'Children wear costumes.' },
  ],
  'holidays-halloween': [
    { id: 'hh-1', type: 'vocab', word: 'Une citrouille', meaning: 'A pumpkin', context: 'On sculpte des citrouilles pour Halloween.', contextTranslation: 'We carve pumpkins for Halloween.' },
  ],
  'town-restaurant': [
    { id: 'tr-1', type: 'vocab', word: 'Le menu', meaning: 'The menu', context: 'Le menu, s\'il vous plaît.', contextTranslation: 'The menu, please.' },
    { id: 'tr-2', type: 'vocab', word: 'L\'addition', meaning: 'The bill / check', context: 'L\'addition, s\'il vous plaît.', contextTranslation: 'The bill, please.' },
    { id: 'tr-3', type: 'vocab', word: 'Le serveur', meaning: 'The waiter', context: 'Le serveur apporte les plats.', contextTranslation: 'The waiter brings the dishes.' },
  ],
  'food-breakfast': [
    { id: 'fb-1', type: 'vocab', word: 'Le petit-déjeuner', meaning: 'Breakfast', context: 'Je prends le petit-déjeuner à huit heures.', contextTranslation: 'I have breakfast at 8 o\'clock.' },
    { id: 'fb-2', type: 'vocab', word: 'Un croissant', meaning: 'A croissant', context: 'Je mange un croissant avec du café.', contextTranslation: 'I eat a croissant with coffee.' },
    { id: 'fb-3', type: 'vocab', word: 'Le beurre', meaning: 'Butter', context: 'Du pain avec du beurre.', contextTranslation: 'Bread with butter.' },
  ],
};

export function getVocabQuestions(exerciseId) {
  return A1_VOCAB[exerciseId] || [];
}

export default A1_VOCAB;
