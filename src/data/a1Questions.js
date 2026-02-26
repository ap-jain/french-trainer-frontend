// Comprehensive A1 question bank organized by exercise ID
// Each exercise ID maps to an array of questions

const A1_QUESTIONS = {
  // ─── PRÉSENT: ÊTRE ───────────────────────────────────────
  'present-etre-1': [
    { id: 'pe1-1', type: 'fill', question: 'Je _____ français. (I am French)', answer: 'suis', hint: 'être – 1st person singular', explanation: '"Suis" is the first person singular form of "être" (to be).' },
    { id: 'pe1-2', type: 'fill', question: 'Tu _____ étudiant. (You are a student)', answer: 'es', hint: 'être – 2nd person singular', explanation: '"Es" is the second person singular form of "être".' },
    { id: 'pe1-3', type: 'fill', question: 'Il _____ grand. (He is tall)', answer: 'est', hint: 'être – 3rd person singular', explanation: '"Est" is the third person singular form of "être".' },
    { id: 'pe1-4', type: 'fill', question: 'Nous _____ contents. (We are happy)', answer: 'sommes', hint: 'être – 1st person plural', explanation: '"Sommes" is the first person plural form of "être".' },
    { id: 'pe1-5', type: 'fill', question: 'Vous _____ professeur. (You are a teacher)', answer: 'êtes', hint: 'être – 2nd person plural/formal', explanation: '"Êtes" is the second person plural/formal form of "être".' },
    { id: 'pe1-6', type: 'fill', question: 'Elles _____ françaises. (They are French)', answer: 'sont', hint: 'être – 3rd person plural', explanation: '"Sont" is the third person plural form of "être".' },
  ],
  'present-etre-2': [
    { id: 'pe2-1', type: 'fill', question: 'Marie _____ intelligente.', answer: 'est', hint: '3rd person singular', explanation: 'Marie = elle, so we use "est".' },
    { id: 'pe2-2', type: 'fill', question: 'Nous _____ à Paris.', answer: 'sommes', hint: '1st person plural', explanation: '"Sommes" for nous (we are).' },
    { id: 'pe2-3', type: 'fill', question: 'Je _____ fatigué(e).', answer: 'suis', hint: '1st person singular', explanation: '"Je suis fatigué(e)" = I am tired.' },
    { id: 'pe2-4', type: 'fill', question: 'Les enfants _____ à l\'école.', answer: 'sont', hint: '3rd person plural', explanation: '"Les enfants" = they, so "sont".' },
    { id: 'pe2-5', type: 'fill', question: 'Tu _____ très gentil(le).', answer: 'es', hint: '2nd person singular', explanation: '"Tu es" = you are (informal).' },
  ],
  'present-etre-3': [
    { id: 'pe3-1', type: 'mcq', question: 'Select the correct form: "Nous _____ amis."', options: ['suis', 'sommes', 'sont', 'êtes'], correct: 1, explanation: '"Nous sommes" = we are.' },
    { id: 'pe3-2', type: 'mcq', question: 'Select the correct form: "Vous _____ en retard."', options: ['es', 'est', 'êtes', 'sont'], correct: 2, explanation: '"Vous êtes" = you are (formal/plural).' },
    { id: 'pe3-3', type: 'mcq', question: 'Which sentence is correct?', options: ['Je suis content.', 'Je es content.', 'Je est content.', 'Je sommes content.'], correct: 0, explanation: '"Je suis" is the correct conjugation.'  },
    { id: 'pe3-4', type: 'mcq', question: '"Ils _____ médecins." — Choose the right form.', options: ['est', 'êtes', 'sommes', 'sont'], correct: 3, explanation: '"Ils sont" = they are.' },
  ],

  // ─── PRÉSENT: AVOIR ──────────────────────────────────────
  'present-avoir-1': [
    { id: 'pa1-1', type: 'fill', question: 'J\'_____ un chat. (I have a cat)', answer: 'ai', hint: 'avoir – 1st person singular', explanation: '"Ai" is the first person singular of "avoir" (to have). Note: J\' = Je before a vowel.' },
    { id: 'pa1-2', type: 'fill', question: 'Tu _____ deux frères. (You have two brothers)', answer: 'as', hint: 'avoir – 2nd person singular', explanation: '"As" is the second person singular of "avoir".' },
    { id: 'pa1-3', type: 'fill', question: 'Elle _____ vingt ans. (She is twenty years old)', answer: 'a', hint: 'avoir – 3rd person singular', explanation: 'In French, age uses "avoir": Elle a 20 ans = She is 20.' },
    { id: 'pa1-4', type: 'fill', question: 'Nous _____ une maison. (We have a house)', answer: 'avons', hint: 'avoir – 1st person plural', explanation: '"Avons" is the first person plural of "avoir".' },
    { id: 'pa1-5', type: 'fill', question: 'Vous _____ raison. (You are right)', answer: 'avez', hint: 'avoir – 2nd person plural', explanation: '"Avoir raison" = to be right. "Avez" for vous.' },
    { id: 'pa1-6', type: 'fill', question: 'Ils _____ faim. (They are hungry)', answer: 'ont', hint: 'avoir – 3rd person plural', explanation: '"Avoir faim" = to be hungry. "Ont" for ils/elles.' },
  ],
  'present-avoir-2': [
    { id: 'pa2-1', type: 'fill', question: 'J\'_____ soif. (I am thirsty)', answer: 'ai', hint: 'avoir + thirst expression', explanation: '"Avoir soif" = to be thirsty (literally: to have thirst).' },
    { id: 'pa2-2', type: 'fill', question: 'Pierre _____ mal à la tête. (Pierre has a headache)', answer: 'a', hint: '3rd person singular', explanation: '"Avoir mal à" = to have pain in. Pierre = il → a.' },
    { id: 'pa2-3', type: 'fill', question: 'Nous _____ besoin d\'aide. (We need help)', answer: 'avons', hint: '1st person plural', explanation: '"Avoir besoin de" = to need.' },
    { id: 'pa2-4', type: 'fill', question: 'Les filles _____ peur. (The girls are scared)', answer: 'ont', hint: '3rd person plural', explanation: '"Avoir peur" = to be afraid.' },
  ],

  // ─── PRÉSENT: ÊTRE ET AVOIR ──────────────────────────────
  'present-etre-avoir': [
    { id: 'pea-1', type: 'fill', question: 'Je _____ étudiant et j\'_____ 20 ans. (I am a student and I am 20)', answer: 'suis, ai', hint: 'être for identity, avoir for age', explanation: '"Être" for identity, "avoir" for age.' },
    { id: 'pea-2', type: 'fill', question: 'Elle _____ française et elle _____ deux enfants.', answer: 'est, a', hint: 'être + avoir', explanation: '"Est" for nationality, "a" for possession.' },
    { id: 'pea-3', type: 'mcq', question: '"Nous _____ fatigués et nous _____ sommeil." Which pair?', options: ['sommes, avons', 'avons, sommes', 'sont, ont', 'êtes, avez'], correct: 0, explanation: '"Être fatigué" (to be tired) + "avoir sommeil" (to be sleepy).' },
    { id: 'pea-4', type: 'mcq', question: 'Choose: "Tu _____ 18 ans et tu _____ lycéen."', options: ['es, as', 'as, es', 'est, a', 'a, est'], correct: 1, explanation: '"Avoir" for age, "être" for status.' },
  ],

  // ─── PRÉSENT: VERBES EN -ER ──────────────────────────────
  'present-er-verbs': [
    { id: 'per-1', type: 'fill', question: 'Je _____ français. (parler)', answer: 'parle', hint: 'Drop -er, add -e', explanation: 'For -er verbs: je → -e. Parler → je parle.' },
    { id: 'per-2', type: 'fill', question: 'Tu _____ la musique. (écouter)', answer: 'écoutes', hint: 'Drop -er, add -es', explanation: 'For -er verbs: tu → -es. Écouter → tu écoutes.' },
    { id: 'per-3', type: 'fill', question: 'Il _____ à Paris. (habiter)', answer: 'habite', hint: 'Drop -er, add -e', explanation: 'For -er verbs: il/elle → -e. Habiter → il habite.' },
    { id: 'per-4', type: 'fill', question: 'Nous _____ le football. (regarder)', answer: 'regardons', hint: 'Drop -er, add -ons', explanation: 'For -er verbs: nous → -ons. Regarder → nous regardons.' },
    { id: 'per-5', type: 'fill', question: 'Vous _____ bien. (chanter)', answer: 'chantez', hint: 'Drop -er, add -ez', explanation: 'For -er verbs: vous → -ez. Chanter → vous chantez.' },
    { id: 'per-6', type: 'fill', question: 'Elles _____ au supermarché. (aller — irregular!)', answer: 'vont', hint: 'Aller is irregular!', explanation: '"Aller" is irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
    { id: 'per-7', type: 'fill', question: 'Je _____ des crêpes. (manger)', answer: 'mange', hint: 'Regular -er verb', explanation: 'Manger → je mange.' },
    { id: 'per-8', type: 'fill', question: 'Ils _____ dans le jardin. (jouer)', answer: 'jouent', hint: 'Drop -er, add -ent', explanation: 'For -er verbs: ils/elles → -ent. Jouer → ils jouent.' },
  ],

  // ─── PRÉSENT: NÉGATION ───────────────────────────────────
  'present-negation-1': [
    { id: 'pn1-1', type: 'fill', question: 'Je _____ suis _____ français. (I am not French)', answer: 'ne, pas', hint: 'ne ... pas around the verb', explanation: 'Negation: ne + verb + pas. → Je ne suis pas français.' },
    { id: 'pn1-2', type: 'fill', question: 'Il _____ parle _____ anglais. (He doesn\'t speak English)', answer: 'ne, pas', hint: 'ne ... pas', explanation: 'Ne ... pas wraps around the conjugated verb.' },
    { id: 'pn1-3', type: 'fill', question: 'Nous n\'_____ pas de voiture. (We don\'t have a car)', answer: 'avons', hint: 'Verb "avoir" in negation', explanation: 'N\' before vowels: Nous n\'avons pas. Note: "de" replaces article in negation.' },
    { id: 'pn1-4', type: 'fill', question: 'Tu _____ manges _____. (You don\'t eat)', answer: 'ne, pas', hint: 'ne ... pas', explanation: 'Standard negation structure.' },
  ],
  'present-negation-2': [
    { id: 'pn2-1', type: 'mcq', question: 'Which is the correct negation of "Je suis content" ?', options: ['Je suis ne pas content.', 'Je ne suis pas content.', 'Je pas suis content.', 'Ne je suis pas content.'], correct: 1, explanation: 'Negation: Subject + ne + verb + pas.' },
    { id: 'pn2-2', type: 'mcq', question: '"Elle a un chat" → negative form?', options: ['Elle n\'a pas un chat.', 'Elle ne a pas un chat.', 'Elle n\'a pas de chat.', 'Elle a ne pas un chat.'], correct: 2, explanation: 'In negation, un/une/des → de/d\'. Elle n\'a pas de chat.' },
    { id: 'pn2-3', type: 'mcq', question: 'Which is NOT correct?', options: ['Il ne mange pas.', 'Nous ne parlons pas.', 'Tu ne pas chantes.', 'Elles ne sont pas là.'], correct: 2, explanation: '"pas" goes AFTER the verb, not before: Tu ne chantes pas.' },
  ],

  // ─── PRÉSENT: CONJUGATION TABLES ─────────────────────────
  'present-conjugation-etre-avoir': [
    { id: 'pcea-1', type: 'fill', question: 'Être: je _____, tu _____, il _____', answer: 'suis, es, est', hint: 'Singular forms of être', explanation: 'Être: je suis, tu es, il/elle est.' },
    { id: 'pcea-2', type: 'fill', question: 'Être: nous _____, vous _____, ils _____', answer: 'sommes, êtes, sont', hint: 'Plural forms of être', explanation: 'Être: nous sommes, vous êtes, ils/elles sont.' },
    { id: 'pcea-3', type: 'fill', question: 'Avoir: j\'_____, tu _____, il _____', answer: 'ai, as, a', hint: 'Singular forms of avoir', explanation: 'Avoir: j\'ai, tu as, il/elle a.' },
    { id: 'pcea-4', type: 'fill', question: 'Avoir: nous _____, vous _____, ils _____', answer: 'avons, avez, ont', hint: 'Plural forms of avoir', explanation: 'Avoir: nous avons, vous avez, ils/elles ont.' },
  ],
  'present-conjugation-regular': [
    { id: 'pcr-1', type: 'fill', question: 'Parler: je _____, tu _____, il _____', answer: 'parle, parles, parle', hint: '-er endings: -e, -es, -e', explanation: '-er verb endings (singular): -e, -es, -e.' },
    { id: 'pcr-2', type: 'fill', question: 'Parler: nous _____, vous _____, ils _____', answer: 'parlons, parlez, parlent', hint: '-er endings: -ons, -ez, -ent', explanation: '-er verb endings (plural): -ons, -ez, -ent.' },
    { id: 'pcr-3', type: 'fill', question: 'Finir: je _____, nous _____', answer: 'finis, finissons', hint: '-ir verb pattern', explanation: '-ir verbs add -iss- in plural: je finis, nous finissons.' },
  ],

  // ─── PRÉSENT: USES ───────────────────────────────────────
  'present-uses-1': [
    { id: 'pu1-1', type: 'mcq', question: 'The French present tense can express:', options: ['Only current actions', 'Current actions, habits, and general truths', 'Only future plans', 'Only past events'], correct: 1, explanation: 'French present tense covers habits, states, general truths, and ongoing actions.' },
    { id: 'pu1-2', type: 'mcq', question: '"Je travaille tous les jours" expresses:', options: ['A past action', 'A habit', 'A future plan', 'A condition'], correct: 1, explanation: '"Tous les jours" (every day) indicates a habitual action.' },
    { id: 'pu1-3', type: 'mcq', question: '"La Terre tourne autour du Soleil" uses present tense for:', options: ['A current action', 'A general truth', 'A future event', 'A past event'], correct: 1, explanation: 'General truths/scientific facts use the present tense.' },
  ],
  'present-uses-2': [
    { id: 'pu2-1', type: 'mcq', question: 'Present tense can replace the future in:', options: ['Formal writing', 'Informal speech with near future', 'Historical texts', 'Legal documents'], correct: 1, explanation: 'In spoken French: "Je pars demain" (I leave tomorrow) uses present for near future.' },
    { id: 'pu2-2', type: 'mcq', question: '"En 1789, la Révolution commence." This use of present is called:', options: ['Présent de narration', 'Présent continu', 'Présent habituel', 'Présent futur'], correct: 0, explanation: '"Présent de narration" (historical/narrative present) makes past events vivid.' },
  ],

  // ─── PRÉSENT: FREE EXERCISE ──────────────────────────────
  'present-free': [
    { id: 'pf-1', type: 'fill', question: 'Je _____ (être) malade aujourd\'hui.', answer: 'suis', hint: 'être – je', explanation: 'Je suis = I am.' },
    { id: 'pf-2', type: 'fill', question: 'Nous _____ (avoir) un examen demain.', answer: 'avons', hint: 'avoir – nous', explanation: 'Nous avons = we have.' },
    { id: 'pf-3', type: 'fill', question: 'Elles _____ (habiter) en France.', answer: 'habitent', hint: '-er verb, 3rd plural', explanation: 'Habiter → elles habitent.' },
    { id: 'pf-4', type: 'mcq', question: '"Vous _____ bien le français."', options: ['parle', 'parlons', 'parlez', 'parlent'], correct: 2, explanation: 'Vous parlez = you speak.' },
    { id: 'pf-5', type: 'fill', question: 'Tu _____ (aimer) le chocolat ?', answer: 'aimes', hint: '-er verb, tu', explanation: 'Aimer → tu aimes.' },
  ],

  // ─── PRÉSENT: FÉLIX ET PATRICK ───────────────────────────
  'present-felix': [
    { id: 'pfx-1', type: 'fill', question: 'Félix _____ (être) un garçon de 10 ans.', answer: 'est', hint: '3rd person singular', explanation: 'Félix = il → est.' },
    { id: 'pfx-2', type: 'fill', question: 'Patrick et Félix _____ (être) amis.', answer: 'sont', hint: '3rd person plural', explanation: 'Two names = ils → sont.' },
    { id: 'pfx-3', type: 'fill', question: 'Ils _____ (jouer) au football ensemble.', answer: 'jouent', hint: '-er verb, 3rd plural', explanation: 'Jouer → ils jouent.' },
    { id: 'pfx-4', type: 'fill', question: 'Félix _____ (aimer) aussi la musique.', answer: 'aime', hint: '-er verb, 3rd singular', explanation: 'Aimer → il aime.' },
  ],

  // ─── PRÉSENT CONTINU ─────────────────────────────────────
  'present-continu-1': [
    { id: 'pcon-1', type: 'fill', question: 'Je suis _____ _____ manger. (I am in the process of eating)', answer: 'en train de', hint: 'être + en train de + infinitive', explanation: '"Être en train de" + infinitive = progressive present (to be doing).' },
    { id: 'pcon-2', type: 'fill', question: 'Elle est en train _____ lire. (She is reading)', answer: 'de', hint: 'en train DE + infinitive', explanation: 'The construction requires "de" before the infinitive.' },
    { id: 'pcon-3', type: 'mcq', question: '"Nous sommes en train de travailler" means:', options: ['We worked', 'We will work', 'We are working (right now)', 'We work sometimes'], correct: 2, explanation: '"Être en train de" emphasizes an action happening at this moment.' },
  ],

  // ─── PASSÉ COMPOSÉ ───────────────────────────────────────
  'pc-free': [
    { id: 'pcf-1', type: 'fill', question: 'J\'ai _____ un film. (regarder)', answer: 'regardé', hint: 'Past participle of -er verb', explanation: '-er verbs → past participle -é. Regarder → regardé.' },
    { id: 'pcf-2', type: 'fill', question: 'Elle est _____ à Paris. (aller)', answer: 'allée', hint: 'Aller uses "être" – feminine agreement!', explanation: 'Aller uses être. Feminine subject → allée (with extra -e).' },
    { id: 'pcf-3', type: 'mcq', question: '"Nous avons mangé" is in which tense?', options: ['Présent', 'Imparfait', 'Passé composé', 'Futur'], correct: 2, explanation: 'Auxiliary "avoir" + past participle = passé composé.' },
  ],
  'pc-avoir-er': [
    { id: 'pcae-1', type: 'fill', question: 'J\'ai _____ (manger) une pizza.', answer: 'mangé', hint: '-er → -é', explanation: 'Past participle of manger = mangé.' },
    { id: 'pcae-2', type: 'fill', question: 'Tu as _____ (parler) à Marie.', answer: 'parlé', hint: '-er → -é', explanation: 'Past participle of parler = parlé.' },
    { id: 'pcae-3', type: 'fill', question: 'Il a _____ (travailler) hier.', answer: 'travaillé', hint: '-er → -é', explanation: 'Past participle of travailler = travaillé.' },
    { id: 'pcae-4', type: 'fill', question: 'Nous avons _____ (écouter) de la musique.', answer: 'écouté', hint: '-er → -é', explanation: 'Past participle of écouter = écouté.' },
  ],
  'pc-etre-typical': [
    { id: 'pcet-1', type: 'fill', question: 'Je suis _____ (arriver) à l\'heure. (masc.)', answer: 'arrivé', hint: 'Arriver uses être', explanation: 'Arriver uses être. Masculine → arrivé.' },
    { id: 'pcet-2', type: 'fill', question: 'Elle est _____ (partir) ce matin.', answer: 'partie', hint: 'Partir uses être – feminine!', explanation: 'Partir uses être. Feminine → partie (add -e).' },
    { id: 'pcet-3', type: 'fill', question: 'Ils sont _____ (venir) hier soir.', answer: 'venus', hint: 'Venir uses être – masculine plural!', explanation: 'Venir uses être. Masculine plural → venus (add -s).' },
    { id: 'pcet-4', type: 'mcq', question: 'Which verbs use "être" in passé composé?', options: ['manger, parler, chanter', 'aller, venir, partir, arriver', 'avoir, faire, prendre', 'lire, écrire, dire'], correct: 1, explanation: 'DR MRS VANDERTRAMP verbs use être: aller, venir, partir, arriver, etc.' },
  ],
  'pc-word-order': [
    { id: 'pcwo-1', type: 'mcq', question: 'Which is the correct word order?', options: ['J\'mangé ai une pomme.', 'J\'ai mangé une pomme.', 'J\'ai une pomme mangé.', 'Mangé j\'ai une pomme.'], correct: 1, explanation: 'Order: Subject + auxiliary + past participle + complement.' },
    { id: 'pcwo-2', type: 'mcq', question: '"She went to school" – correct?', options: ['Elle a allé à l\'école.', 'Elle est allée à l\'école.', 'Elle est allé à l\'école.', 'Elle allée est à l\'école.'], correct: 1, explanation: 'Aller uses être + agreement: elle est allée.' },
  ],
  'pc-conjugation-etre': [
    { id: 'pcce-1', type: 'fill', question: 'Aller (passé composé): je _____ allé(e)', answer: 'suis', hint: 'Auxiliary être', explanation: 'Aller uses être: je suis allé(e).' },
    { id: 'pcce-2', type: 'fill', question: 'Partir: nous _____ parti(e)s', answer: 'sommes', hint: 'Auxiliary être – nous', explanation: 'Partir uses être: nous sommes parti(e)s.' },
  ],
  'pc-conjugation-er-avoir': [
    { id: 'pcca-1', type: 'fill', question: 'Parler: j\'_____ parlé', answer: 'ai', hint: 'Auxiliary avoir', explanation: 'Most -er verbs use avoir: j\'ai parlé.' },
    { id: 'pcca-2', type: 'fill', question: 'Regarder: ils _____ regardé', answer: 'ont', hint: 'Auxiliary avoir – ils', explanation: 'Ils ont regardé = they watched.' },
  ],

  // ─── FUTUR PROCHE ────────────────────────────────────────
  'fp-free': [
    { id: 'fpf-1', type: 'fill', question: 'Je _____ manger. (I am going to eat)', answer: 'vais', hint: 'aller (je) + infinitive', explanation: 'Futur proche = aller + infinitive. Je vais manger.' },
    { id: 'fpf-2', type: 'fill', question: 'Nous _____ partir demain.', answer: 'allons', hint: 'aller (nous) + infinitive', explanation: 'Nous allons partir = we are going to leave.' },
    { id: 'fpf-3', type: 'mcq', question: '"Elle va étudier" means:', options: ['She studied', 'She studies', 'She is going to study', 'She was studying'], correct: 2, explanation: 'Aller + infinitive = near future.' },
  ],
  'fp-aller-1': [
    { id: 'fpa1-1', type: 'fill', question: 'Je _____ au cinéma ce soir. (aller)', answer: 'vais', hint: 'aller – je', explanation: 'Je vais = I go / I am going.' },
    { id: 'fpa1-2', type: 'fill', question: 'Tu _____ à l\'école. (aller)', answer: 'vas', hint: 'aller – tu', explanation: 'Tu vas = you go / you are going.' },
    { id: 'fpa1-3', type: 'fill', question: 'Il _____ chez le médecin. (aller)', answer: 'va', hint: 'aller – il', explanation: 'Il va = he goes.' },
  ],
  'fp-aller-2': [
    { id: 'fpa2-1', type: 'fill', question: 'Nous _____ en vacances. (aller)', answer: 'allons', hint: 'aller – nous', explanation: 'Nous allons = we go.' },
    { id: 'fpa2-2', type: 'fill', question: 'Vous _____ au restaurant ? (aller)', answer: 'allez', hint: 'aller – vous', explanation: 'Vous allez = you go.' },
    { id: 'fpa2-3', type: 'fill', question: 'Elles _____ à la plage. (aller)', answer: 'vont', hint: 'aller – elles', explanation: 'Elles vont = they go.' },
  ],
  'fp-aller-3': [
    { id: 'fpa3-1', type: 'fill', question: 'Tu _____ regarder un film ? (aller + infinitive)', answer: 'vas', hint: 'aller – tu', explanation: 'Tu vas regarder = you are going to watch.' },
    { id: 'fpa3-2', type: 'fill', question: 'Ils _____ jouer au tennis. (aller + infinitive)', answer: 'vont', hint: 'aller – ils', explanation: 'Ils vont jouer = they are going to play.' },
  ],
  'fp-vs-aller-1': [
    { id: 'fpva1-1', type: 'mcq', question: '"Je vais à Paris" – Is this futur proche or a movement verb?', options: ['Futur proche', 'Movement (going to Paris)', 'Both could be correct', 'Neither'], correct: 1, explanation: '"Aller à" + place = physical movement. Futur proche needs "aller + infinitive".' },
    { id: 'fpva1-2', type: 'mcq', question: '"Je vais manger" – Is this futur proche?', options: ['No, it\'s present tense', 'Yes, aller + infinitive = near future', 'No, it\'s passé composé', 'No, it\'s imperative'], correct: 1, explanation: 'Aller + infinitive = futur proche (near future).' },
  ],
  'fp-vs-aller-2': [
    { id: 'fpva2-1', type: 'mcq', question: '"Nous allons au musée" – futur proche or movement?', options: ['Futur proche', 'Physical movement', 'Conditional', 'Imperative'], correct: 1, explanation: '"Au musée" is a destination → physical movement, not futur proche.' },
    { id: 'fpva2-2', type: 'mcq', question: '"Nous allons visiter le musée" – futur proche?', options: ['No', 'Yes – aller + visiter (infinitive)', 'It\'s passé composé', 'It\'s conjunctive'], correct: 1, explanation: 'Aller + infinitive (visiter) = futur proche.' },
  ],
};

export function getExerciseQuestions(exerciseId) {
  return A1_QUESTIONS[exerciseId] || [];
}

export function getAllA1Questions() {
  const all = [];
  Object.entries(A1_QUESTIONS).forEach(([exId, qs]) => {
    qs.forEach(q => all.push({ ...q, exerciseId: exId }));
  });
  return all;
}

export default A1_QUESTIONS;
