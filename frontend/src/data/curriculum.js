// Full curriculum structure following the TCF/CEFR learning path
// Only A1 exercises are active; A2, B1, B2 are marked "coming soon"

export const CATEGORIES = [
  { id: 'grammar', label: 'Grammar', labelFr: 'Grammaire', icon: '📐', color: '#6478fc' },
  { id: 'vocabulary', label: 'Vocabulary', labelFr: 'Vocabulaire', icon: '📚', color: '#fbbf24' },
  { id: 'listening-reading', label: 'Listening / Reading', labelFr: 'Compréhension', icon: '🎧', color: '#34d399' },
  { id: 'test', label: 'Test', labelFr: 'Test', icon: '📝', color: '#f87171' },
];

export const LEVELS = [
  { id: 'A1', label: 'A1 – Beginner', color: '#34d399', active: true },
  { id: 'A2', label: 'A2 – Elementary', color: '#60a5fa', active: false },
  { id: 'B1', label: 'B1 – Intermediate', color: '#fbbf24', active: false },
  { id: 'B2', label: 'B2 – Upper Intermediate', color: '#f87171', active: false },
];

// ─── GRAMMAR CURRICULUM ────────────────────────────────────────
export const GRAMMAR_SECTIONS = [
  {
    id: 'tenses-indicative',
    title: 'Tenses – Indicative',
    titleFr: 'Temps de l\'indicatif',
    icon: '⏳',
    topics: [
      {
        id: 'present',
        title: 'Présent',
        titleEn: 'Present Tense',
        icon: '🔵',
        level: 'A1',
        exercises: [
          { id: 'present-free', title: 'Le présent – Free Exercise', type: 'mixed' },
          { id: 'present-conjugation-etre-avoir', title: 'Le présent – tableau de conjugaison (être/avoir)', type: 'fill' },
          { id: 'present-conjugation-regular', title: 'Le présent – tableau de conjugaison (verbes réguliers)', type: 'fill' },
          { id: 'present-etre-1', title: 'Le présent – être (1)', type: 'fill' },
          { id: 'present-etre-2', title: 'Le présent – être (2)', type: 'fill' },
          { id: 'present-etre-3', title: 'Le présent – être (3)', type: 'mcq' },
          { id: 'present-avoir-1', title: 'Le présent – avoir (1)', type: 'fill' },
          { id: 'present-avoir-2', title: 'Le présent – avoir (2)', type: 'fill' },
          { id: 'present-etre-avoir', title: 'Le présent – être et avoir', type: 'fill' },
          { id: 'present-er-verbs', title: 'Le présent – verbes en -er', type: 'fill' },
          { id: 'present-negation-1', title: 'Le présent – négation (1)', type: 'fill' },
          { id: 'present-negation-2', title: 'Le présent – négation (2)', type: 'mcq' },
          { id: 'present-uses-1', title: 'Le présent – emplois du présent (1)', type: 'mcq' },
          { id: 'present-uses-2', title: 'Le présent – emplois du présent (2)', type: 'mcq' },
          { id: 'present-felix', title: 'Le présent – Félix et Patrick', type: 'fill' },
          { id: 'present-continu-1', title: 'Le présent – présent continu (1)', type: 'fill' },
        ],
      },
      {
        id: 'passe-compose',
        title: 'Passé composé',
        titleEn: 'Present Perfect',
        icon: '🟢',
        level: 'A1',
        exercises: [
          { id: 'pc-free', title: 'Le passé composé – Free Exercise', type: 'mixed' },
          { id: 'pc-avoir-er', title: 'Le passé composé – avec avoir (verbes en -er)', type: 'fill' },
          { id: 'pc-etre-typical', title: 'Le passé composé – avec être (verbes typiques)', type: 'fill' },
          { id: 'pc-word-order', title: 'Le passé composé – place des mots (affirmation)', type: 'mcq' },
          { id: 'pc-conjugation-etre', title: 'Le passé composé – tableau de conjugaison (avec être)', type: 'fill' },
          { id: 'pc-conjugation-er-avoir', title: 'Le passé composé – tableau de conjugaison (-er avec avoir)', type: 'fill' },
        ],
      },
      {
        id: 'imparfait',
        title: 'Imparfait',
        titleEn: 'Imperfect',
        icon: '🟡',
        level: 'A2',
        comingSoon: true,
        exercises: [
          { id: 'imparfait-free', title: 'L\'imparfait – Free Exercise', type: 'mixed' },
        ],
      },
      {
        id: 'imparfait-pc',
        title: 'Imparfait/Passé composé',
        titleEn: 'Imperfect vs Present Perfect',
        icon: '🔶',
        level: 'A2',
        comingSoon: true,
        exercises: [
          { id: 'imparfait-pc-free', title: 'Imparfait/Passé composé – Free Exercise', type: 'mixed' },
        ],
      },
      {
        id: 'passe-recent',
        title: 'Passé récent',
        titleEn: 'Recent Past',
        icon: '🔸',
        level: 'A2',
        comingSoon: true,
        exercises: [
          { id: 'passe-recent-free', title: 'Le passé récent – Free Exercise', type: 'mixed' },
          { id: 'passe-recent-venir-present', title: 'Le passé récent – semi-auxiliaire venir (présent)', type: 'fill' },
          { id: 'passe-recent-venir-impf', title: 'Le passé récent – semi-auxiliaire venir (imparfait)', type: 'fill' },
        ],
      },
      {
        id: 'passe-simple',
        title: 'Passé simple',
        titleEn: 'Simple Past',
        icon: '🔴',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'passe-simple-free', title: 'Le passé simple – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'plus-que-parfait',
        title: 'Plus-que-parfait',
        titleEn: 'Past Perfect',
        icon: '🟣',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'pqp-free', title: 'Le plus-que-parfait – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'passe-anterieur',
        title: 'Passé antérieur',
        titleEn: 'Past Anterior',
        icon: '⚫',
        level: 'B2',
        comingSoon: true,
        exercises: [{ id: 'pa-free', title: 'Le passé antérieur – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'futur-proche',
        title: 'Futur proche',
        titleEn: 'Near Future',
        icon: '🔹',
        level: 'A1',
        exercises: [
          { id: 'fp-free', title: 'Le futur proche – Free Exercise', type: 'mixed' },
          { id: 'fp-vs-aller-1', title: 'Le futur proche – futur proche ou verbe aller seul ? (1)', type: 'mcq' },
          { id: 'fp-vs-aller-2', title: 'Le futur proche – futur proche ou verbe aller seul ? (2)', type: 'mcq' },
          { id: 'fp-aller-1', title: 'Le futur proche – aller (1)', type: 'fill' },
          { id: 'fp-aller-2', title: 'Le futur proche – aller (2)', type: 'fill' },
          { id: 'fp-aller-3', title: 'Le futur proche – aller (3)', type: 'fill' },
        ],
      },
      {
        id: 'futur-simple',
        title: 'Futur simple',
        titleEn: 'Simple Future',
        icon: '🔷',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'fs-free', title: 'Le futur simple – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'futur-anterieur',
        title: 'Futur antérieur',
        titleEn: 'Future Perfect',
        icon: '💠',
        level: 'B2',
        comingSoon: true,
        exercises: [{ id: 'fa-free', title: 'Le futur antérieur – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'verbs',
    title: 'Verbs',
    titleFr: 'Verbes',
    icon: '🔧',
    topics: [
      {
        id: 'avoir-etre',
        title: 'Avoir/Être',
        titleEn: 'To Have / To Be',
        icon: '⚙️',
        level: 'A1',
        exercises: [
          { id: 'ae-free', title: 'Avoir/Être – Free Exercise', type: 'mixed' },
          { id: 'ae-avoir-tables', title: 'Avoir – tableaux de conjugaison (présent et imparfait)', type: 'fill' },
          { id: 'ae-etre-tables', title: 'Être – tableaux de conjugaison (présent et imparfait)', type: 'fill' },
          { id: 'ae-uses', title: 'Avoir/Être – emplois', type: 'mcq' },
          { id: 'ae-main-verb-1', title: 'Avoir/Être – verbe principal (1)', type: 'fill' },
        ],
      },
      {
        id: 'infinitif',
        title: 'Infinitif',
        titleEn: 'Infinitive',
        icon: '📌',
        level: 'A2',
        comingSoon: true,
        exercises: [
          { id: 'inf-free', title: 'Infinitif – Free Exercise', type: 'mixed' },
          { id: 'inf-forms-1', title: 'Infinitif – formes (1)', type: 'fill' },
        ],
      },
      {
        id: 'participe-gerondif',
        title: 'Participe/Gérondif',
        titleEn: 'Participle/Gerund',
        icon: '🔗',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'pg-free', title: 'Participe/Gérondif – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'verbes-pronominaux',
        title: 'Verbes pronominaux',
        titleEn: 'Pronominal Verbs',
        icon: '🔄',
        level: 'A2',
        comingSoon: true,
        exercises: [
          { id: 'vp-free', title: 'Pronominal Verbs – Free Exercise', type: 'mixed' },
          { id: 'vp-reflexive-1', title: 'Verbes pronominaux – pronoms réfléchis (1)', type: 'fill' },
        ],
      },
      {
        id: 'passif',
        title: 'Passif',
        titleEn: 'Passive Voice',
        icon: '↩️',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'passif-free', title: 'Passif – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'imperatif',
        title: 'Impératif',
        titleEn: 'Imperative',
        icon: '❗',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'imp-free', title: 'Impératif – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'conditionnel',
        title: 'Conditionnel',
        titleEn: 'Conditional',
        icon: '❓',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'cond-free', title: 'Conditionnel – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'subjonctif',
        title: 'Subjonctif',
        titleEn: 'Subjunctive',
        icon: '💭',
        level: 'B2',
        comingSoon: true,
        exercises: [{ id: 'subj-free', title: 'Subjonctif – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'nouns',
    title: 'Nouns',
    titleFr: 'Noms',
    icon: '🏷️',
    topics: [
      {
        id: 'noms',
        title: 'Noms',
        titleEn: 'Nouns',
        icon: '🏷️',
        level: 'A1',
        exercises: [
          { id: 'noms-free', title: 'Noms – Free Exercise', type: 'mixed' },
          { id: 'noms-commun-propre-1', title: 'Les noms – nom commun ou propre ? (1)', type: 'mcq' },
          { id: 'noms-commun-propre-2', title: 'Les noms – nom commun ou propre ? (2)', type: 'mcq' },
          { id: 'noms-genre-1', title: 'Les noms – genre (1)', type: 'mcq' },
          { id: 'noms-genre-2', title: 'Les noms – genre (2)', type: 'mcq' },
          { id: 'noms-nombre-1', title: 'Les noms – nombre (1)', type: 'fill' },
        ],
      },
      {
        id: 'genre-grammatical',
        title: 'Grammatical Gender',
        titleEn: 'Grammatical Gender',
        icon: '⚥',
        level: 'A1',
        exercises: [
          { id: 'genre-free', title: 'Grammatical Gender – Free Exercise', type: 'mixed' },
          { id: 'genre-mix-1', title: 'Le genre – mélange (1)', type: 'mcq' },
          { id: 'genre-mix-2', title: 'Le genre – mélange (2)', type: 'mcq' },
          { id: 'genre-metiers-1', title: 'Le genre – les métiers (1)', type: 'mcq' },
          { id: 'genre-metiers-2', title: 'Le genre – les métiers (2)', type: 'fill' },
          { id: 'genre-pays', title: 'Le genre – les pays', type: 'mcq' },
          { id: 'genre-famille', title: 'Le genre – la famille', type: 'mcq' },
          { id: 'genre-vetements', title: 'Le genre – les vêtements', type: 'mcq' },
          { id: 'genre-animaux', title: 'Le genre – les animaux', type: 'mcq' },
          { id: 'genre-meteo', title: 'Le genre – la météo', type: 'mcq' },
        ],
      },
      {
        id: 'pluriel',
        title: 'Plural',
        titleEn: 'Plural',
        icon: '➕',
        level: 'A1',
        exercises: [
          { id: 'pluriel-free', title: 'Plural – Free Exercise', type: 'mixed' },
          { id: 'pluriel-mix-1', title: 'Le pluriel – mélange (1)', type: 'fill' },
          { id: 'pluriel-mix-2', title: 'Le pluriel – mélange (2)', type: 'fill' },
          { id: 'pluriel-noms-adj', title: 'Le pluriel – pluriel des noms et des adjectifs', type: 'fill' },
          { id: 'pluriel-structure', title: 'Le pluriel – structure de la phrase', type: 'mcq' },
        ],
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles',
    titleFr: 'Articles',
    icon: '📰',
    topics: [
      {
        id: 'articles',
        title: 'Articles',
        titleEn: 'Articles',
        icon: '📰',
        level: 'A1',
        exercises: [
          { id: 'articles-free', title: 'Articles – Free Exercise', type: 'mixed' },
          { id: 'articles-def-1', title: 'L\'article – article défini (1)', type: 'fill' },
          { id: 'articles-def-2', title: 'L\'article – article défini (2)', type: 'fill' },
          { id: 'articles-def-3', title: 'L\'article – article défini (3)', type: 'mcq' },
          { id: 'articles-indef-1', title: 'L\'article – article indéfini (1)', type: 'fill' },
          { id: 'articles-indef-2', title: 'L\'article – article indéfini (2)', type: 'fill' },
          { id: 'articles-prepositions', title: 'L\'article – article et prépositions', type: 'fill' },
          { id: 'articles-partitif-1', title: 'L\'article – article partitif (1)', type: 'fill' },
          { id: 'articles-mix', title: 'L\'article – mélange', type: 'mixed' },
        ],
      },
    ],
  },
  {
    id: 'pronouns',
    title: 'Pronouns & Determiners',
    titleFr: 'Pronoms et déterminants',
    icon: '👤',
    topics: [
      {
        id: 'personal-pronouns',
        title: 'Personal Pronouns',
        titleEn: 'Personal Pronouns',
        icon: '👤',
        level: 'A1',
        exercises: [
          { id: 'pp-free', title: 'Personal Pronouns – Free Exercise', type: 'mixed' },
          { id: 'pp-subject', title: 'Les pronoms personnels – formes/pronoms sujets', type: 'fill' },
          { id: 'pp-tonic', title: 'Les pronoms personnels – formes/pronoms toniques sujets', type: 'fill' },
          { id: 'pp-use-1', title: 'Les pronoms personnels – emploi/pronoms sujets', type: 'mcq' },
        ],
      },
      {
        id: 'possessive-pronouns',
        title: 'Possessive Pronouns and Determiners',
        titleEn: 'Possessive Pronouns',
        icon: '🏠',
        level: 'A1',
        exercises: [
          { id: 'poss-free', title: 'Possessive Pronouns – Free Exercise', type: 'mixed' },
          { id: 'poss-det-forms', title: 'Les déterminants possessifs – formes', type: 'fill' },
          { id: 'poss-det-use-1', title: 'Les déterminants possessifs – emploi (1)', type: 'fill' },
          { id: 'poss-det-use-2', title: 'Les déterminants possessifs – emploi (2)', type: 'mcq' },
        ],
      },
      {
        id: 'reflexive-pronouns',
        title: 'Reflexive Pronouns',
        titleEn: 'Reflexive Pronouns',
        icon: '🔁',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'refl-free', title: 'Reflexive Pronouns – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'relative-pronouns',
        title: 'Relative Pronouns',
        titleEn: 'Relative Pronouns',
        icon: '🔗',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'rel-free', title: 'Relative Pronouns – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'demonstrative-pronouns',
        title: 'Demonstrative Pronouns and Determiners',
        titleEn: 'Demonstrative Pronouns',
        icon: '👈',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'demo-free', title: 'Demonstrative Pronouns – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'interrogative-pronouns',
        title: 'Interrogative Pronouns and Determiners',
        titleEn: 'Interrogative Pronouns',
        icon: '❔',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'inter-free', title: 'Interrogative Pronouns – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    titleFr: 'Adjectifs',
    icon: '🎨',
    topics: [
      {
        id: 'adj-endings',
        title: 'Endings of Adjectives',
        titleEn: 'Adjective Endings',
        icon: '✂️',
        level: 'A1',
        exercises: [
          { id: 'adj-end-free', title: 'Endings – Free Exercise', type: 'mixed' },
          { id: 'adj-end-sing-1', title: 'Les terminaisons – singulier (1)', type: 'fill' },
          { id: 'adj-end-sing-2', title: 'Les terminaisons – singulier (2)', type: 'fill' },
          { id: 'adj-end-special-1', title: 'Les terminaisons – singulier/cas particuliers (1)', type: 'fill' },
          { id: 'adj-end-special-2', title: 'Les terminaisons – singulier/cas particuliers (2)', type: 'mcq' },
          { id: 'adj-end-plural', title: 'Les terminaisons – pluriel', type: 'fill' },
          { id: 'adj-end-aude', title: 'Les terminaisons – Aude déménage', type: 'fill' },
        ],
      },
      {
        id: 'adj-comparative',
        title: 'Comparatives & Superlatives',
        titleEn: 'Comparatives & Superlatives',
        icon: '📊',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'adj-comp-free', title: 'Comparative – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'adj-position',
        title: 'Position of Adjectives',
        titleEn: 'Adjective Placement',
        icon: '📍',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'adj-pos-free', title: 'Placement – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'adverbs',
    title: 'Adverbs',
    titleFr: 'Adverbes',
    icon: '💫',
    topics: [
      {
        id: 'adv-types',
        title: 'Types of Adverbs',
        titleEn: 'Types of Adverbs',
        icon: '📋',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'adv-types-free', title: 'Types – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    titleFr: 'Prépositions',
    icon: '📎',
    topics: [
      {
        id: 'prepositions',
        title: 'Prepositions',
        titleEn: 'Prepositions',
        icon: '📎',
        level: 'A1',
        exercises: [
          { id: 'prep-free', title: 'Prepositions – Free Exercise', type: 'mixed' },
          { id: 'prep-use-1', title: 'Les prépositions – emploi (1)', type: 'fill' },
          { id: 'prep-use-2', title: 'Les prépositions – emploi (2)', type: 'mcq' },
          { id: 'prep-temporal-1', title: 'Les prépositions – prépositions temporelles (1)', type: 'fill' },
          { id: 'prep-spatial-1', title: 'Les prépositions – prépositions spatiales (1)', type: 'fill' },
          { id: 'prep-a-de-1', title: 'Les prépositions – à, de (1)', type: 'fill' },
        ],
      },
    ],
  },
  {
    id: 'sentence-structure',
    title: 'Sentence Structure',
    titleFr: 'Structure de la phrase',
    icon: '🏗️',
    topics: [
      {
        id: 'declarative',
        title: 'Simple Declarative Sentences',
        titleEn: 'Declarative Sentences',
        icon: '📝',
        level: 'A1',
        exercises: [
          { id: 'decl-free', title: 'Declarative Sentences – Free Exercise', type: 'mixed' },
          { id: 'decl-affirmative-1', title: 'Structure de la phrase – phrase affirmative (1)', type: 'mcq' },
          { id: 'decl-affirmative-2', title: 'Structure de la phrase – phrase affirmative (2)', type: 'fill' },
        ],
      },
      {
        id: 'negative',
        title: 'Simple Negative Sentences',
        titleEn: 'Negative Sentences',
        icon: '🚫',
        level: 'A1',
        exercises: [
          { id: 'neg-free', title: 'Simple Negative Sentences – Free Exercise', type: 'mixed' },
        ],
      },
      {
        id: 'interrogative',
        title: 'Interrogative (Questions)',
        titleEn: 'Questions',
        icon: '❓',
        level: 'A1',
        exercises: [
          { id: 'quest-free', title: 'Questions – Free Exercise', type: 'mixed' },
          { id: 'quest-types', title: 'La phrase interrogative – types et formes d\'interrogation', type: 'mcq' },
          { id: 'quest-total-partiel', title: 'La phrase interrogative – totale ou partielle ?', type: 'mcq' },
          { id: 'quest-sans-mot', title: 'La phrase interrogative – sans mot interrogatif', type: 'fill' },
          { id: 'quest-quel', title: 'La phrase interrogative – quel/lequel', type: 'fill' },
        ],
      },
      {
        id: 'exclamative',
        title: 'Exclamative Sentences',
        titleEn: 'Exclamations',
        icon: '❗',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'excl-free', title: 'La forme exclamative – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'complex-sentences',
        title: 'Complex Sentences',
        titleEn: 'Complex Sentences',
        icon: '🔀',
        level: 'B1',
        comingSoon: true,
        exercises: [{ id: 'complex-free', title: 'Complex Sentences – Free Exercise', type: 'mixed' }],
      },
      {
        id: 'indirect-speech',
        title: 'Indirect Speech',
        titleEn: 'Indirect Speech',
        icon: '💬',
        level: 'B2',
        comingSoon: true,
        exercises: [{ id: 'indirect-free', title: 'Indirect Speech – Free Exercise', type: 'mixed' }],
      },
    ],
  },
];

// ─── VOCABULARY CURRICULUM ─────────────────────────────────────
export const VOCABULARY_SECTIONS = [
  {
    id: 'numbers-dates-time',
    title: 'Numbers, Dates & Time',
    titleFr: 'Nombres, dates et heure',
    icon: '🔢',
    topics: [
      {
        id: 'cardinal-numbers',
        title: 'Cardinal Numbers',
        titleEn: 'Cardinal Numbers',
        icon: '🔢',
        level: 'A1',
        exercises: [
          { id: 'cardinal-free', title: 'Cardinal Numbers – Free Exercise', type: 'mixed' },
          { id: 'cardinal-0-10', title: 'Les nombres cardinaux – chiffres en lettres (0 à 10)', type: 'fill' },
          { id: 'cardinal-11-20', title: 'Les nombres cardinaux – chiffres en lettres (11 à 20)', type: 'fill' },
          { id: 'cardinal-61-70', title: 'Les nombres cardinaux – chiffres en lettres (61 à 70)', type: 'fill' },
          { id: 'cardinal-71-80', title: 'Les nombres cardinaux – chiffres en lettres (71 à 80)', type: 'fill' },
          { id: 'cardinal-81-90', title: 'Les nombres cardinaux – chiffres en lettres (81 à 90)', type: 'fill' },
          { id: 'cardinal-91-100', title: 'Les nombres cardinaux – chiffres en lettres (91 à 100)', type: 'fill' },
          { id: 'cardinal-tens', title: 'Les nombres cardinaux – chiffres en lettres (dizaines)', type: 'fill' },
          { id: 'cardinal-hundreds', title: 'Les nombres cardinaux – chiffres en lettres (centaines)', type: 'fill' },
          { id: 'cardinal-thousands', title: 'Les nombres cardinaux – chiffres en lettres (milliers)', type: 'fill' },
          { id: 'cardinal-letters-1000', title: 'Les nombres cardinaux – lettres en chiffres (1 à 1 000)', type: 'mcq' },
          { id: 'cardinal-letters-100k', title: 'Les nombres cardinaux – lettres en chiffres (1 000 à 100 000)', type: 'mcq' },
          { id: 'cardinal-millions', title: 'Les nombres cardinaux – lettres en chiffres (les millions)', type: 'mcq' },
          { id: 'cardinal-mix-1', title: 'Les nombres cardinaux – mélange (1)', type: 'mixed' },
          { id: 'cardinal-mix-2', title: 'Les nombres cardinaux – mélange (2)', type: 'mixed' },
        ],
      },
      {
        id: 'ordinal-numbers',
        title: 'Ordinal Numbers',
        titleEn: 'Ordinal Numbers',
        icon: '🥇',
        level: 'A1',
        exercises: [
          { id: 'ordinal-free', title: 'Ordinal Numbers – Free Exercise', type: 'mixed' },
        ],
      },
      {
        id: 'dates-days-months',
        title: 'Dates, Days & Months',
        titleEn: 'Dates, Days & Months',
        icon: '📅',
        level: 'A1',
        exercises: [
          { id: 'dates-free', title: 'Dates, Days & Months – Free Exercise', type: 'mixed' },
          { id: 'dates-jours', title: 'La date – les jours de la semaine', type: 'fill' },
          { id: 'dates-mois', title: 'La date – les mois', type: 'fill' },
          { id: 'dates-standard', title: 'La date – modèle standard', type: 'fill' },
          { id: 'dates-jour-mois-1', title: 'La date – le jour et le mois (1)', type: 'fill' },
          { id: 'dates-jour-mois-2', title: 'La date – le jour et le mois (2)', type: 'mcq' },
          { id: 'dates-jour-mois-3', title: 'La date – le jour et le mois (3)', type: 'mcq' },
          { id: 'dates-annees-1', title: 'La date – les années (1)', type: 'fill' },
          { id: 'dates-annees-2', title: 'La date – les années (2)', type: 'fill' },
        ],
      },
      {
        id: 'time',
        title: 'Time',
        titleEn: 'Telling Time',
        icon: '🕐',
        level: 'A1',
        exercises: [
          { id: 'time-free', title: 'Time – Free Exercise', type: 'mixed' },
          { id: 'time-formal-hour', title: 'L\'heure – manière formelle (heure pile)', type: 'fill' },
          { id: 'time-formal-half', title: 'L\'heure – manière formelle (demi-heure)', type: 'fill' },
          { id: 'time-formal-quarter', title: 'L\'heure – manière formelle (quart d\'heure)', type: 'fill' },
          { id: 'time-informal-hour', title: 'L\'heure – manière informelle (heure pile)', type: 'fill' },
          { id: 'time-formal-informal-1', title: 'L\'heure – formel/informel (1)', type: 'mcq' },
          { id: 'time-formal-informal-2', title: 'L\'heure – formel/informel (2)', type: 'mcq' },
        ],
      },
      {
        id: 'fractions',
        title: 'Fractions',
        titleEn: 'Fractions',
        icon: '➗',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'fractions-free', title: 'Fractions – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'themed-vocabulary',
    title: 'Themed Vocabulary',
    titleFr: 'Vocabulaire thématique',
    icon: '🎭',
    topics: [
      {
        id: 'seasons',
        title: 'Les saisons',
        titleEn: 'Seasons',
        icon: '🌸',
        level: 'A1',
        exercises: [
          { id: 'seasons-spring', title: 'Le printemps – Vocabulary Test', type: 'vocab' },
          { id: 'seasons-summer', title: 'L\'été – Vocabulary Test', type: 'vocab' },
          { id: 'seasons-autumn', title: 'L\'automne – Vocabulary Test', type: 'vocab' },
          { id: 'seasons-winter', title: 'L\'hiver – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'holidays',
        title: 'Jours de fêtes',
        titleEn: 'Holidays & Celebrations',
        icon: '🎉',
        level: 'A1',
        exercises: [
          { id: 'holidays-carnival', title: 'Le carnaval – Vocabulary Test', type: 'vocab' },
          { id: 'holidays-birthday', title: 'L\'anniversaire – Vocabulary Test', type: 'vocab' },
          { id: 'holidays-halloween', title: 'Halloween – Vocabulary Test', type: 'vocab' },
          { id: 'holidays-christmas', title: 'Noël – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'in-town',
        title: 'En ville',
        titleEn: 'In Town',
        icon: '🏙️',
        level: 'A1',
        exercises: [
          { id: 'town-restaurant', title: 'Au restaurant – Vocabulary Test', type: 'vocab' },
          { id: 'town-park', title: 'Au parc – Vocabulary Test', type: 'vocab' },
          { id: 'town-construction', title: 'Sur le chantier – Vocabulary Test', type: 'vocab' },
          { id: 'town-hairdresser', title: 'Chez le coiffeur – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'body',
        title: 'Le corps humain',
        titleEn: 'The Human Body',
        icon: '🧍',
        level: 'A1',
        exercises: [
          { id: 'body-1', title: 'Le corps humain (1) – Vocabulary Test', type: 'vocab' },
          { id: 'body-head', title: 'La tête – Vocabulary Test', type: 'vocab' },
          { id: 'body-2', title: 'Le corps humain (2) – Vocabulary Test', type: 'vocab' },
          { id: 'body-face', title: 'Le visage – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'clothing',
        title: 'Les vêtements',
        titleEn: 'Clothing',
        icon: '👗',
        level: 'A1',
        exercises: [
          { id: 'clothing-winter', title: 'Les vêtements d\'hiver – Vocabulary Test', type: 'vocab' },
          { id: 'clothing-party', title: 'La tenue de fête – Vocabulary Test', type: 'vocab' },
          { id: 'clothing-laundry', title: 'Jour de lessive – Vocabulary Test', type: 'vocab' },
          { id: 'clothing-shoes', title: 'L\'étagère à chaussures – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'home',
        title: 'La maison',
        titleEn: 'The Home',
        icon: '🏠',
        level: 'A1',
        exercises: [
          { id: 'home-house', title: 'La maison – Vocabulary Test', type: 'vocab' },
          { id: 'home-living', title: 'Le salon – Vocabulary Test', type: 'vocab' },
          { id: 'home-bedroom', title: 'La chambre – Vocabulary Test', type: 'vocab' },
          { id: 'home-bathroom', title: 'La salle de bain – Vocabulary Test', type: 'vocab' },
        ],
      },
      {
        id: 'food',
        title: 'Les aliments',
        titleEn: 'Food',
        icon: '🍎',
        level: 'A1',
        exercises: [
          { id: 'food-fruit', title: 'La salade de fruits – Vocabulary Test', type: 'vocab' },
          { id: 'food-breakfast', title: 'Le petit-déjeuner – Vocabulary Test', type: 'vocab' },
          { id: 'food-campfire', title: 'Autour du feu de camp – Vocabulary Test', type: 'vocab' },
          { id: 'food-vegetables', title: 'Les légumes – Vocabulary Test', type: 'vocab' },
        ],
      },
    ],
  },
  {
    id: 'countries',
    title: 'Countries',
    titleFr: 'Les pays',
    icon: '🌍',
    topics: [
      {
        id: 'countries',
        title: 'Countries',
        titleEn: 'Countries',
        icon: '🌍',
        level: 'A1',
        exercises: [
          { id: 'countries-free', title: 'Countries – Free Exercise', type: 'mixed' },
        ],
      },
    ],
  },
  {
    id: 'confusing-words',
    title: 'Confusing Words',
    titleFr: 'Mots confus',
    icon: '🔄',
    topics: [
      {
        id: 'word-pairs',
        title: 'Word Pairs',
        titleEn: 'Confusing Word Pairs',
        icon: '🔄',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'wp-free', title: 'Word Pairs – Free Exercise', type: 'mixed' }],
      },
    ],
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    titleFr: 'Conjonctions',
    icon: '🔗',
    topics: [
      {
        id: 'conjunctions',
        title: 'Conjunctions',
        titleEn: 'Conjunctions',
        icon: '🔗',
        level: 'A2',
        comingSoon: true,
        exercises: [{ id: 'conj-free', title: 'Conjunctions – Free Exercise', type: 'mixed' }],
      },
    ],
  },
];

// ─── HELPER FUNCTIONS ──────────────────────────────────────────

/** Get all A1 (active) topics across all sections */
export function getActiveTopics() {
  const all = [];
  const addFromSections = (sections) => {
    sections.forEach(section => {
      section.topics.forEach(topic => {
        if (!topic.comingSoon) {
          all.push({ ...topic, sectionId: section.id, sectionTitle: section.title });
        }
      });
    });
  };
  addFromSections(GRAMMAR_SECTIONS);
  addFromSections(VOCABULARY_SECTIONS);
  return all;
}

/** Get all topics (including coming soon) */
export function getAllTopics() {
  const all = [];
  const addFromSections = (sections) => {
    sections.forEach(section => {
      section.topics.forEach(topic => {
        all.push({ ...topic, sectionId: section.id, sectionTitle: section.title });
      });
    });
  };
  addFromSections(GRAMMAR_SECTIONS);
  addFromSections(VOCABULARY_SECTIONS);
  return all;
}

/** Count exercises for a topic */
export function getExerciseCount(topicId) {
  const topics = getAllTopics();
  const t = topics.find(t => t.id === topicId);
  return t ? t.exercises.length : 0;
}

/** Get total A1 exercise count */
export function getA1ExerciseCount() {
  return getActiveTopics().reduce((sum, t) => sum + t.exercises.length, 0);
}
