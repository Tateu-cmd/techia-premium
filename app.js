/* ============================================
   Tech & IA Premium — Application Script
   ============================================ */

(function() {
  'use strict';

  // ----- DATA : 3 Articles longs -----
  const ARTICLES = [
    {
      id: 'deepseek-gratuit',
      title: 'Comment utiliser les modèles DeepSeek gratuitement en 2026',
      slug: 'deepseek-gratuit',
      category: 'ia',
      badge: 'IA Générative',
      emoji: '🤖',
      date: '3 juin 2026',
      readTime: '9 min',
      excerpt: 'DeepSeek a secoué le monde de l\'IA avec des modèles performants et surtout gratuits. Guide complet pour exploiter tout leur potentiel sans dépenser un centime.',
      content: [
        { type: 'h2', text: 'Pourquoi DeepSeek a changé la donne dans le monde de l\'IA' },
        { type: 'p', text: 'En 2025, DeepSeek a dévoilé son modèle R1, un LLM open source dont les performances rivalisent avec les meilleurs modèles propriétaires comme GPT-4 ou Claude 3. La surprise générale ? Il était entièrement gratuit, sans abonnement, sans limite de messages, sans aucun paiement caché. En 2026, la gamme s\'est considérablement élargie avec DeepSeek V3, DeepSeek Coder, DeepSeek R1 distillée, et des modèles spécialisés pour la finance, la médecine et le droit. Ce qui rend DeepSeek véritablement unique, c\'est sa philosophie fondamentale : rendre l\'IA de pointe accessible à tous, partout dans le monde, sans barrière financière ni technique.' },
        { type: 'p', text: 'Contrairement à OpenAI ou Anthropic qui facturent leurs modèles les plus puissants plusieurs centaines de dollars par mois pour un accès illimité, DeepSeek propose ses meilleurs modèles gratuitement via plusieurs canaux complémentaires. Que vous soyez développeur en full-remote, chercheur en laboratoire, étudiant dans une université, ou simple curieux passionné de technologie, voici précisément comment exploiter tout le potentiel de DeepSeek dès aujourd\'hui sans dépenser le moindre euro.' },
        { type: 'highlight', text: 'DeepSeek R1 a été entraîné pour seulement 5,6 millions de dollars, soit 10 à 50 fois moins que les modèles concurrents. Cette prouesse technique démontre que l\'efficacité et l\'innovation dans l\'optimisation des ressources priment sur les dépenses massives.' },

        { type: 'h2', text: '1. DeepSeek Chat : l\'accès web gratuit et illimité' },
        { type: 'p', text: 'Le moyen le plus simple et le plus direct d\'utiliser DeepSeek est leur interface web officielle accessible sur chat.deepseek.com. L\'inscription prend moins de trente secondes avec une adresse email, et aucune vérification bancaire n\'est demandée.' },
        { type: 'p', text: 'L\'interface propose trois modèles distincts que vous pouvez sélectionner selon vos besoins : DeepSeek V3 est le modèle généraliste le plus puissant, idéal pour la rédaction, les analyses complexes et les questions-réponses. DeepSeek R1 est spécialisé dans le raisonnement logique, les mathématiques et la résolution de problèmes complexes étape par étape. DeepSeek Coder est optimisé spécifiquement pour la programmation, la compréhension de code legacy et la génération d\'applications complètes.' },
        { type: 'p', text: 'La version gratuite offre un contexte impressionnant d\'un million de tokens, ce qui représente l\'équivalent de trois romans complets comme Le Comte de Monte-Cristo. Cela signifie que vous pouvez littéralement coller des livres entiers dans la conversation et poser des questions détaillées sur leur contenu. DeepSeek peut analyser des fichiers PDF, des documents Word, des feuilles Excel, et même extraire et traiter des images intégrées dans ces documents.' },
        { type: 'p', text: 'Contrairement à ChatGPT qui limite le nombre de messages par heure sur sa version gratuite, DeepSeek ne semble pas avoir de limite de requêtes connue. Des utilisateurs rapportent des sessions de travail continues de plusieurs heures sans aucune restriction, ce qui en fait l\'outil idéal pour les professionnels qui ont besoin d\'une assistance IA constante tout au long de leur journée de travail.' },

        { type: 'h2', text: '2. API DeepSeek : intégration dans vos outils de développement' },
        { type: 'p', text: 'DeepSeek propose une API REST compatible avec le format OpenAI, ce qui constitue un avantage technique considérable. Concrètement, vous pouvez utiliser vos applications et outils préférés comme Cursor, Continue.dev, Open Interpreter, ou même des scripts Python maison, en changeant simplement l\'URL de base de l\'API et la clé d\'authentification.' },
        { type: 'p', text: 'Pour commencer, créez un compte gratuit sur platform.deepseek.com. Une fois connecté, rendez-vous dans la section API Keys pour générer votre clé personnelle. Les modèles disponibles via l\'API sont deepseek-chat pour les conversations générales et deepseek-coder pour les tâches de programmation. La configuration est triviale dans la plupart des outils : il suffit de définir l\'URL de base à https://api.deepseek.com.' },
        { type: 'p', text: 'En termes de coûts, DeepSeek est environ quarante à cinquante fois moins cher qu\'OpenAI. Pour vous donner un ordre d\'idée, un million de tokens d\'entrée coûte environ 0,14 dollar chez DeepSeek contre 5 dollars chez GPT-4. Les nouveaux comptes reçoivent même des crédits gratuits pour tester l\'API sans aucun engagement.' },
        { type: 'pre', text: '# Configuration avec curl\ncurl https://api.deepseek.com/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer VOTRE_CLE_API" \\\n  -d \'{\n    "model": "deepseek-chat",\n    "messages": [\n      {"role": "system", "content": "Tu es un expert en développement web."},\n      {"role": "user", "content": "Explique-moi le concept de Server Components en React 20"}\n    ],\n    "stream": true\n  }\'' },

        { type: 'h2', text: '3. DeepSeek en local avec Ollama pour une confidentialité totale' },
        { type: 'p', text: 'Pour les développeurs et entreprises soucieux de la confidentialité de leurs données, DeepSeek peut tourner entièrement en local sur votre propre machine via Ollama, le gestionnaire de modèles open source le plus populaire. DeepSeek existe en plusieurs tailles de distillation, de 1,5 milliard de paramètres (modèle léger pour smartphone ou Raspberry Pi) jusqu\'à 70 milliards de paramètres (nécessite un serveur dédié).' },
        { type: 'p', text: 'Un ordinateur portable moderne avec 8 Go de RAM peut faire tourner confortablement le modèle 7B, qui offre déjà des performances impressionnantes pour la plupart des usages quotidiens. Avec 16 Go de RAM, le modèle 14B devient accessible. Et avec 32 Go, vous pouvez faire fonctionner le modèle 70B quantifié qui se rapproche des performances de la version cloud.' },
        { type: 'p', text: 'L\'installation est simple : téléchargez Ollama depuis ollama.ai, puis exécutez la commande ollama run deepseek-r1:7b dans votre terminal. Vous pouvez aussi utiliser LM Studio ou GPT4All pour une interface graphique plus conviviale. L\'avantage du local est absolu : vos données ne quittent jamais votre machine, ce qui est indispensable pour le traitement de documents confidentiels, de code propriétaire ou d\'informations personnelles sensibles.' },

        { type: 'h2', text: '4. DeepSeek sur Hugging Face : le couteau suisse du chercheur' },
        { type: 'p', text: 'Tous les modèles DeepSeek sont disponibles gratuitement sur Hugging Face, la plateforme de référence pour le machine learning open source. Vous pouvez télécharger les poids des modèles, les exécuter via les Spaces gratuits de Hugging Face, ou les intégrer dans vos notebooks Python avec la bibliothèque Transformers.' },
        { type: 'p', text: 'Les Google Colab gratuits avec GPU fonctionnent parfaitement pour exécuter les versions distillées de DeepSeek. C\'est la solution idéale pour les chercheurs et étudiants qui veulent expérimenter sans investir dans du matériel coûteux. Vous trouverez sur Hugging Face des dizaines de notebooks prêts à l\'emploi qui couvrent des cas d\'usage variés : analyse de sentiment, traduction automatique, génération de code, résumé de documents.' },

        { type: 'h2', text: '5. Astuces avancées pour maximiser l\'utilisation gratuite' },
        { type: 'p', text: 'La stratégie optimale consiste à combiner intelligemment plusieurs canaux selon vos besoins. Utilisez l\'interface web pour les tâches quotidiennes comme la rédaction d\'emails, le brainstorming ou la recherche d\'informations. Réservez l\'API pour vos projets de développement et l\'automatisation. Et utilisez les modèles locaux pour tout ce qui concerne les données confidentielles ou lorsque vous travaillez hors ligne.' },
        { type: 'p', text: 'Un conseil important : DeepSeek Coder excelle particulièrement en programmation et surpasse souvent GPT-4 sur les benchmarks de code comme HumanEval et MBPP. Pour les tâches de développement, privilégiez systématiquement le modèle Coder plutôt que le modèle généraliste. De même, DeepSeek R1 donne des résultats impressionnants sur les problèmes de mathématiques et de logique grâce à son mécanisme de chaîne de raisonnement qui décompose les problèmes complexes en étapes élémentaires.' },
        { type: 'highlight', text: 'Astuce clé : Utilisez DeepSeek R1 pour le raisonnement complexe (mathématiques, algorithmes, débogage logique) et DeepSeek V3 pour la rédaction créative, les analyses générales et la synthèse d\'informations. La combinaison intelligente des deux modèles couvre 95% de vos besoins quotidiens en matière d\'IA.' },

        { type: 'h2', text: 'Conclusion : l\'IA gratuite de qualité est une réalité' },
        { type: 'p', text: 'DeepSeek représente un tournant historique dans la démocratisation de l\'intelligence artificielle. En 2026, avoir accès gratuitement à un modèle dont les performances rivalisent avec les systèmes les plus coûteux du marché était littéralement impensable il y a seulement deux ans. Aujourd\'hui, c\'est une réalité concrète qui change profondément la donne pour les développeurs, les étudiants, les chercheurs et les entrepreneurs du monde entier.' },
        { type: 'p', text: 'La barrière à l\'entrée pour exploiter l\'IA de pointe n\'a jamais été aussi basse. Que vous souhaitiez coder plus vite, analyser des données complexes, rédiger du contenu de qualité ou simplement explorer les possibilités de l\'intelligence artificielle, DeepSeek vous donne les moyens de le faire sans contrainte financière. Dans un monde où la connaissance est le principal avantage compétitif, DeepSeek met le savoir au pouvoir de tous.' }
      ],
      tags: ['DeepSeek', 'IA Gratuite', 'Open Source', 'Tutoriel'],
      views: 0,
      likes: 0
    },
    {
      id: 'outils-ia-code-2x',
      title: 'Top 5 des outils IA pour coder 2x plus vite en 2026',
      slug: 'outils-ia-code-2x',
      category: 'code',
      badge: 'Développement',
      emoji: '⚡',
      date: '1 juin 2026',
      readTime: '8 min',
      excerpt: 'L\'IA a transformé le développement web. Voici les 5 outils qui vont littéralement doubler votre productivité, avec des comparatifs et astuces concrètes.',
      content: [
        { type: 'h2', text: 'Pourquoi ces outils sont devenus indispensables en 2026' },
        { type: 'p', text: 'En 2026, coder sans assistance IA, c\'est comme conduire une voiture à cheval sur une autoroute à huit voies. Les outils d\'IA pour le code ont connu une amélioration si spectaculaire que la question pertinente n\'est plus "faut-il utiliser l\'IA pour coder ?" mais plutôt "quelle combinaison d\'outils IA utiliser pour chaque type de tâche ?".' },
        { type: 'p', text: 'J\'ai testé personnellement une vingtaine d\'outils et d\'extensions pendant plus de six mois dans des conditions de production réelles. J\'ai chronométré les gains de productivité, évalué la qualité du code généré, et analysé les courbes d\'apprentissage. Voici les cinq outils qui ont réellement transformé ma façon de coder et qui méritent une place permanente dans votre environnement de développement.' },

        { type: 'h2', text: '1. Cursor IDE : le nouveau standard des environnements de développement intelligents' },
        { type: 'p', text: 'Cursor a détrôné VS Code comme l\'éditeur préféré des développeurs début 2026, et ce n\'est pas un hasard. Forké depuis VS Code, il conserve toute la richesse de son écosystème d\'extensions tout en ajoutant une couche d\'intelligence artificielle profondément intégrée qui transforme littéralement l\'expérience de programmation.' },
        { type: 'p', text: 'Les fonctionnalités qui font la différence : la complétion Tab ne se contente pas de suggérer la ligne suivante comme le faisaient les premiers autocomplete. Elle comprend le contexte global de votre projet, l\'architecture de votre base de code, et peut générer des fonctions entières, des classes complètes, voire des fichiers entiers avec une précision bluffante. La fonction Ctrl+K vous permet de modifier votre code en langage naturel : sélectionnez un bloc, appuyez sur le raccourci, tapez "transforme cette fonction en version asynchrone avec gestion d\'erreurs", et le tour est joué.' },
        { type: 'p', text: 'Le mode Chat intégré comprend votre projet dans son ensemble. Vous pouvez lui poser des questions comme "où est définie la fonction authenticateUser ?" ou "explique-moi le flux de données entre le frontend et l\'API" et il vous répond avec des références précises aux fichiers concernés. Cursor utilise automatiquement le meilleur modèle pour chaque tâche : Claude pour la compréhension de code complexe, GPT-4o pour la génération créative, DeepSeek pour l\'optimisation de performances.' },
        { type: 'pre', text: '// Exemple concret dans Cursor\n// Tapez ce commentaire :\n// "fonction qui valide un email, retourne {valid, reason}, gère les cas limites"\n\n// Cursor génère instantanément :\ntype EmailValidation = { valid: boolean; reason?: string };\n\nfunction validateEmail(email: string): EmailValidation {\n  if (!email || typeof email !== "string") {\n    return { valid: false, reason: "Email invalide ou manquant" };\n  }\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  const disposableDomains = ["yopmail.com", "tempmail.com"];\n  if (!emailRegex.test(email)) {\n    return { valid: false, reason: "Format d\'email incorrect" };\n  }\n  const domain = email.split("@")[1].toLowerCase();\n  if (disposableDomains.includes(domain)) {\n    return { valid: false, reason: "Les emails jetables ne sont pas acceptés" };\n  }\n  return { valid: true };\n}' },

        { type: 'h2', text: '2. Claude Code : l\'agent IA qui clone votre cerveau dans le terminal' },
        { type: 'p', text: 'Anthropic a frappé un grand coup avec Claude Code, un agent IA qui opère directement depuis votre terminal et qui comprend votre projet à un niveau d\'abstraction bien supérieur à celui d\'un simple assistant de codage. Contrairement à un IDE qui travaille fichier par fichier, Claude Code a une vision globale de votre architecture logicielle.' },
        { type: 'p', text: 'Son avantage concurrentiel principal est sa capacité à gérer des contextes de 200 000 tokens, ce qui représente environ cent cinquante mille mots ou l\'équivalent du code source d\'un projet de taille moyenne. Concrètement, vous pouvez lui demander de refactorer complètement une API REST en architecture microservices, et il va lire tous les fichiers concernés, comprendre les dépendances, générer les nouveaux fichiers, et même migrer les tests correspondants.' },
        { type: 'p', text: 'Claude Code peut exécuter des commandes shell, créer des fichiers, modifier du code, lancer des tests, et même créer des Pull Requests directement. Il est particulièrement efficace pour le débogage : vous lui montrez le message d\'erreur, il analyse la stack trace, comprend le contexte, et propose une correction avec explication. Son taux de succès sur les bugs complexes dépasse les 70% en première tentative.' },
        { type: 'ul', items: ['Refactoring automatique de code legacy avec compréhension architecturale complète', 'Migration de frameworks : Express vers Hono, React Classes vers Hooks, Vue 2 vers Vue 4', 'Debugging assisté avec exécution réelle, analyse de stack trace et correction proposée', 'Génération de tests unitaires, d\'intégration et E2E avec couverture de code ciblée', 'Documentation automatique : génération de README, JSDoc, diagrammes d\'architecture'] },

        { type: 'h2', text: '3. GitHub Copilot Enterprise : l\'assistant qui connaît votre code par coeur' },
        { type: 'p', text: 'Copilot reste incontournable dans sa version Enterprise, notamment grâce à son intégration native profonde avec l\'écosystème GitHub. La nouvelle fonctionnalité Copilot Workspace permet de décrire une fonctionnalité entière en langage naturel et d\'obtenir une implémentation complète avec les fichiers modifiés, les tests, et même une estimation de l\'impact sur les performances.' },
        { type: 'p', text: 'Ce qui distingue Copilot Enterprise de ses concurrents, c\'est sa connaissance intime de votre codebase et de son historique. Il analyse non seulement le code actuel mais aussi l\'historique des commits et des Pull Requests pour comprendre les décisions d\'architecture, les patterns de codage de votre équipe, et les conventions internes. Le modèle est désormais entraîné sur du code de qualité open source rigoureusement filtré, ce qui a réduit les suggestions médiocres de 60% par rapport à la version précédente.' },
        { type: 'p', text: 'Pour les développeurs open source, Copilot est inclus gratuitement, ce qui en fait un outil accessible à tous. Les entreprises apprécient particulièrement les garanties de confidentialité et la possibilité de former le modèle sur leur code propriétaire sans que les données ne soient utilisées pour l\'entraînement global.' },

        { type: 'h2', text: '4. Continue.dev : la liberté et la confidentialité open source' },
        { type: 'p', text: 'Continue est l\'alternative open source à Copilot qui gagne du terrain rapidement. Extension disponible pour VS Code et JetBrains, il vous donne un contrôle total sur votre assistant de codage : vous choisissez le modèle que vous voulez utiliser, qu\'il soit local avec Ollama, ou distant via n\'importe quel fournisseur d\'API compatible.' },
        { type: 'p', text: 'L\'avantage décisif de Continue est la confidentialité absolue. En utilisant des modèles locaux comme DeepSeek Coder ou Qwen 2.5, votre code ne quitte jamais votre machine. C\'est un argument rédhibitoire pour les entreprises qui travaillent sur du code sensible, des algorithmes propriétaires ou des applications classifiées. Et avec les progrès des modèles quantifiés, la qualité des suggestions locales est aujourd\'hui comparable à celle des solutions cloud.' },
        { type: 'p', text: 'Continue est aussi incroyablement personnalisable : vous pouvez configurer des "slash commands" personnalisées, des flux de travail spécifiques à votre stack technique, et même des règles de validation de code qui s\'appliquent automatiquement à chaque suggestion.' },

        { type: 'h2', text: '5. v0.dev et Bolt.new : le prototypage ultra-rapide' },
        { type: 'p', text: 'Ces deux outils ont littéralement créé une nouvelle catégorie : le développement no-code assisté par IA générative. v0.dev de Vercel et Bolt.new de StackBlitz permettent de décrire une application complète en langage naturel et d\'obtenir un résultat fonctionnel en quelques secondes.' },
        { type: 'p', text: 'Bolt.new va le plus loin avec un environnement d\'exécution complet intégré au navigateur. Tapez "crée un dashboard de monitoring avec des graphiques en temps réel, des alertes configurables, et un mode sombre" et vous obtenez une application React fonctionnelle avec routage, état global, et API mockée. Vous pouvez itérer en temps réel, modifier le design, ajuster les fonctionnalités, et exporter le code quand vous êtes satisfait.' },
        { type: 'p', text: 'Ces outils ne remplacent pas un développement professionnel pour des applications complexes, mais ils sont imbattables pour les prototypes, les MVP, et les preuves de concept. Un fondateur de startup peut valider une idée en une après-midi au lieu de deux semaines.' },

        { type: 'highlight', text: 'Le workflow optimal pour un développeur en 2026 :\n1. Idéation avec ChatGPT ou Claude pour explorer les approches possibles\n2. Prototypage rapide avec Bolt.new pour valider les concepts techniques\n3. Développement principal avec Cursor + Claude Code pour la productivité quotidienne\n4. Code review assistée par Copilot Enterprise pour la qualité et la sécurité\n5. Tests et expérimentations avec Continue en local pour la confidentialité' },

        { type: 'h2', text: 'Conclusion : l\'ère du développeur augmenté' },
        { type: 'p', text: 'Ces cinq outils ne sont pas en concurrence car ils brillent dans des domaines complémentaires. L\'astuce consiste à les orchestrer intelligemment : Cursor pour l\'édition quotidienne, Claude Code pour les tâches complexes nécessitant une compréhension globale, Continue pour les projets confidentiels, et Bolt.new pour l\'exploration rapide et le prototypage.' },
        { type: 'p', text: 'Investir du temps pour maîtriser ces outils représente le meilleur retour sur investissement possible pour un développeur en 2026. Ceux qui les adoptent gagnent un facteur 2 à 3 sur leur productivité quotidienne, et surtout, ils se libèrent du temps pour se concentrer sur les tâches à plus haute valeur ajoutée : l\'architecture, la créativité et la résolution de problèmes complexes.' }
      ],
      tags: ['Développement', 'IA', 'Productivité', 'Outils'],
      views: 0,
      likes: 0
    },
    {
      id: 'predictions-ia-2026',
      title: 'Prédictions IA 2026 : open source vs propriétaire — qui va gagner ?',
      slug: 'predictions-ia-2026',
      category: 'actus',
      badge: 'Actualités',
      emoji: '🔮',
      date: '30 mai 2026',
      readTime: '10 min',
      excerpt: 'L\'année 2026 marque un tournant décisif dans la guerre entre l\'IA open source et propriétaire. Analyse des forces en présence et prédictions pour les mois à venir.',
      content: [
        { type: 'h2', text: 'Le grand basculement de 2026' },
        { type: 'p', text: 'Si 2025 était l\'année de la découverte et de l\'émerveillement face aux capacités de l\'IA générative, 2026 est indiscutablement l\'année de la guerre ouverte entre les deux camps qui se disputent la suprématie de l\'intelligence artificielle. D\'un côté, les géants propriétaires bien établis : OpenAI avec son très attendu GPT-5, Google avec Gemini 3 intégré à tout son écosystème, et Anthropic avec Claude 4 qui mise sur la sécurité et la fiabilité.' },
        { type: 'p', text: 'De l\'autre côté, l\'armée open source, disparate mais redoutablement efficace : DeepSeek et ses modèles révolutionnaires venus de Chine, Meta avec Llama 4 qui bénéficie du plus vaste écosystème d\'outils de fine-tuning, le français Mistral AI avec ses modèles efficaces et souverains, Qwen d\'Alibaba qui impressionne sur les longs contextes, et une multitude de modèles spécialisés qui émergent chaque semaine sur Hugging Face.' },
        { type: 'p', text: 'Ce qui était impensable il y a seulement deux ans est devenu une réalité incontestable : les meilleurs modèles open source égalent ou surpassent désormais les modèles propriétaires sur un nombre croissant de benchmarks standardisés. L\'écard de performance, qui était encore de 20 à 30% fin 2024, s\'est réduit à moins de 5% sur la plupart des tâches courantes, et continue de se resserrer chaque mois un peu plus.' },

        { type: 'h2', text: 'Le camp propriétaire : la puissance brute et l\'intégration verticale' },
        { type: 'p', text: 'OpenAI reste incontestablement le leader en termes de polyvalence et de maturité de son écosystème. GPT-5, sorti en février 2026, a franchi plusieurs caps technologiques majeurs : un raisonnement véritablement capable de planification stratégique, une mémoire à long terme qui persiste entre les sessions, et une multimodalité native qui lui permet de traiter simultanément texte, images, audio, vidéo et même des flux en temps réel.' },
        { type: 'p', text: 'Google mise tout sur l\'intégration verticale avec son écosystème unique. Gemini 3 est directement connecté à Google Search, Gmail, Google Docs, YouTube et Google Cloud. L\'avantage est colossal : un contexte de 10 millions de tokens lui permet d\'analyser des bibliothèques entières de documents, et sa capacité à comprendre des heures de vidéo en fait l\'outil idéal pour la veille médiatique et l\'analyse de contenu audiovisuel en entreprise.' },
        { type: 'p', text: 'Anthropic a pris un virage stratégique différent en misant sur la sécurité et les marchés réglementés avec Claude 4. Son argument de vente principal : la fiabilité contractuelle, avec des garanties de taux d\'hallucination inférieur à 1%, une traçabilité complète des décisions, et des assurances en cas de litige. Une approche qui séduit particulièrement les secteurs de la finance, de la santé et de l\'assurance où les erreurs ont des conséquences graves.' },
        { type: 'ul', items: ['OpenAI : meilleur rapport qualité/prix général, écosystème le plus mature', 'Google Gemini : intégration produit unique au monde, contexte de 10M tokens', 'Anthropic Claude : sécurité et fiabilité contractuelle pour les entreprises', 'Points faibles communs : coût élevé, dépendance au fournisseur, impossibilité de personnalisation profonde'] },

        { type: 'h2', text: 'Le camp open source : la liberté, la spécialisation et l\'innovation communautaire' },
        { type: 'p', text: 'DeepSeek R1 a été le catalyseur qui a changé la donne. En prouvant qu\'un modèle entraîné pour seulement 5,6 millions de dollars pouvait rivaliser avec des modèles ayant coûté cent fois plus, DeepSeek a démontré que l\'optimisation et l\'ingéniosité technique pouvaient compenser des budgets massifs. Cette révélation a déclenché une réaction en chaîne dans tout l\'écosystème open source.' },
        { type: 'p', text: 'Meta a répondu avec Llama 4, son modèle le plus performant à ce jour, publié sous licence Llama Community qui autorise un usage commercial large mais impose des restrictions pour les très grandes entreprises. Llama 4 bénéficie du plus vaste écosystème d\'outils de fine-tuning, de quantification et de déploiement jamais vu autour d\'un modèle open source.' },
        { type: 'p', text: 'Mistral AI, le champion européen, a pris une approche résolument différente. Ses modèles sont ouverts, optimisés pour l\'efficacité énergétique (un point crucial face aux préoccupations environnementales), avec un focus particulier sur le multilinguisme et la protection des données. Leur modèle Mistral Large 2 égale GPT-4o sur la plupart des benchmarks tout en étant trois fois plus efficace en termes de consommation de ressources.' },
        { type: 'p', text: 'La communauté open source a également produit des innovations que les laboratoires propriétaires n\'ont pas encore reproduites : des modèles spécialisés à l\'extrême pour la médecine, le droit, la finance ou la musique ; la capacité de fine-tuning local avec des données privées sans jamais les exposer ; et une transparence totale sur les données d\'entraînement et l\'architecture, permettant une véritable auditabilité des modèles.' },
        { type: 'ul', items: ['DeepSeek : rapport performance/coût qui a changé l\'industrie', 'Llama 4 : écosystème d\'outils et de fine-tuning le plus riche', 'Mistral : efficacité énergétique record, souveraineté et protection des données', 'Qwen : innovations majeures sur les très longs contextes'] },

        { type: 'h2', text: 'Les trois enjeux qui décideront de l\'issue du conflit' },
        { type: 'p', text: 'Le premier enjeu est réglementaire. L\'AI Act européen, entré en vigueur en 2025, impose des règles strictes de transparence, de traçabilité et de documentation pour les modèles d\'IA propriétaires. Ces contraintes réglementaires avantagent naturellement l\'open source qui, par sa nature transparente, satisfait plus facilement aux exigences de documentation et d\'auditabilité.' },
        { type: 'p', text: 'Le second enjeu est économique. Les coûts d\'inférence (le coût de chaque requête à un modèle) ont chuté de façon vertigineuse, divisés par cinquante en deux ans grâce à l\'optimisation des architectures, la quantification et les puces spécialisées. Cette chute des coûts réduit considérablement l\'avantage des grands modèles propriétaires qui justifiaient leurs prix élevés par la qualité supérieure de leurs infrastructures.' },
        { type: 'p', text: 'Le troisième enjeu est technique et peut-être le plus décisif. Les techniques de distillation, de quantification à 2 bits et d\'optimisation d\'architecture permettent désormais à des modèles open source de tourner sur du matériel grand public avec une qualité proche des modèles cloud. Un MacBook M4 équipé de 64 Go de RAM peut faire tourner un modèle de 70 milliards de paramètres quantifié, offrant des performances qui rivalisent avec GPT-4 pour la plupart des usages quotidiens.' },
        { type: 'highlight', text: 'Prédiction clé pour fin 2026 : 70% des déploiements d\'IA en production utiliseront des modèles open source comme socle, éventuellement sur-fine-tunés sur des données propriétaires. Les modèles propriétaires garderont une longueur d\'avance sur la recherche fondamentale (nouveaux algorithmes, nouvelles architectures) et les applications critiques où la fiabilité absolue est requise, comme le diagnostic médical assisté ou le pilotage autonome.' },

        { type: 'h2', text: 'Qui va gagner la guerre de l\'IA ?' },
        { type: 'p', text: 'La réponse est plus nuancée et subtile qu\'une victoire nette d\'un camp sur l\'autre. Nous nous dirigeons vers un modèle hybride et complémentaire : l\'open source dominera l\'infrastructure de base, les applications de masse et les déploiements en production, tandis que le propriétaire conservera la recherche fondamentale de pointe et les marchés hautement réglementés où la garantie contractuelle est indispensable.' },
        { type: 'p', text: 'Pour le développeur comme pour l\'entreprise, la stratégie gagnante est de ne pas mettre tous ses œufs dans le même panier technologique. Utilisez l\'open source pour vos applications cœur où vous avez besoin de contrôle total, de personnalisation et d\'absence de dépendance envers un fournisseur. Utilisez les API propriétaires pour les tâches spécifiques qui nécessitent une fiabilité extrême ou des capacités de pointe non encore disponibles en open source.' },
        { type: 'p', text: 'La bonne nouvelle dans tout cela, c\'est que cette compétition féroce profite à tout le monde, utilisateurs comme développeurs. Les baisses de prix des API propriétaires sont historiques : OpenAI a divisé ses tarifs par dix en seulement dix-huit mois sous la pression de la concurrence. Parallèlement, la qualité des modèles open source ne cesse de croître grâce aux contributions de milliers de chercheurs et développeurs dans le monde entier. En 2026, l\'intelligence artificielle de pointe n\'a jamais été aussi accessible, aussi diversifiée et aussi performante pour le plus grand nombre.' }
      ],
      tags: ['IA', 'Open Source', 'Prédictions', 'Analyse'],
      views: 0,
      likes: 0
    },
    {
      id: 'meilleures-pratiques-python-2026',
      title: 'Les meilleures pratiques Python en 2026 pour du code professionnel',
      slug: 'meilleures-pratiques-python-2026',
      category: 'code',
      badge: 'Développement',
      emoji: '🐍',
      date: '28 mai 2026',
      readTime: '8 min',
      excerpt: 'Python continue d\'évoluer. Voici les pratiques et les outils que tout développeur Python devrait connaître en 2026 pour écrire du code maintenable et performant.',
      content: [
        { type: 'h2', text: 'Python en 2026 : un écosystème mature mais en mouvement' },
        { type: 'p', text: 'Python est devenu le langage le plus populaire au monde selon l\'indice TIOBE 2026, et son écosystème n\'a jamais été aussi riche. Mais avec cette popularité vient une responsabilité : celle d\'écrire du code qui soit non seulement fonctionnel, mais aussi performant, maintenable et sécurisé. Les pratiques recommandées ont considérablement évolué depuis Python 3.12, et les outils se sont sophistiqués.' },
        { type: 'p', text: 'Que vous débutiez en Python ou que vous soyez un développeur expérimenté, voici les pratiques indispensables à adopter en 2026 pour produire un code professionnel qui résiste à l\'épreuve du temps et des revues de code.' },
        { type: 'h2', text: '1. Typage statique partout avec enforcement automatique' },
        { type: 'p', text: 'En 2026, écrire du Python sans annotations de type est considéré comme une pratique amateur. Le typage statique avec la syntaxe PEP 484 est devenu la norme, et des outils comme Pyright et mypy sont intégrés dans tous les pipelines CI/CD. La bonne pratique consiste à typer systématiquement les signatures de fonctions, les attributs de classes et les structures de données complexes avec les generics, TypedDict et les unions modernes.' },
        { type: 'pre', text: '# Exemple de typage moderne\nfrom typing import TypedDict, Optional\nfrom datetime import datetime\n\nclass UserProfile(TypedDict):\n    id: int\n    name: str\n    email: str\n    created_at: datetime\n    is_active: bool\n\nasync def fetch_user(user_id: int, include_inactive: bool = False) -> Optional[UserProfile]:\n    """Récupère un profil utilisateur."""' },
        { type: 'h2', text: '2. Async partout, synchrone seulement quand nécessaire' },
        { type: 'p', text: 'Python 3.14 a apporté des améliorations significatives à asyncio, rendant la programmation asynchrone plus naturelle et performante. La règle générale : utilisez async/await par défaut pour toute opération I/O, et réservez le synchrone pour le calcul pur ou les scripts simples. Des frameworks comme FastAPI et Litestar exploitent pleinement l\'asynchrone.' },
        { type: 'h2', text: '3. Gestion de projet moderne avec uv' },
        { type: 'p', text: 'L\'écosystème Python a enfin trouvé un gestionnaire de paquets digne de ce nom : uv. Développé par Astral, uv est écrit en Rust et est 100 fois plus rapide que pip. La configuration de projet se fait exclusivement via pyproject.toml, qui remplace définitivement setup.py et requirements.txt.' },
        { type: 'h2', text: '4. Tests : la qualité avant la quantité' },
        { type: 'p', text: 'Pytest reste le framework de test roi, avec des plugins comme pytest-asyncio intégré nativement. L\'objectif de couverture recommandé est passé à 90%, mais avec un accent sur la qualité des tests plutôt que leur simple présence. Les générateurs de tests assistés par IA dans Cursor et Copilot réduisent le temps d\'écriture des tests de 60%.' },
        { type: 'h2', text: '5. Performance : profiling systématique avant optimisation' },
        { type: 'p', text: 'Python 3.14 a introduit le JIT Just-In-Time compilation expérimental, améliorant les performances de 20 à 50%. Les outils de profiling comme py-spy, Scalene et le profiler intégré de Python permettent d\'identifier précisément les goulots d\'étranglement avant d\'optimiser.' },
        { type: 'h2', text: 'Conclusion' },
        { type: 'p', text: 'Python a mûri en un langage professionnel avec des outils modernes et des pratiques éprouvées. Le typage, l\'asynchrone, les tests automatisés et le profiling sont devenus des compétences de base. Les développeurs qui adoptent ces pratiques produisent un code plus fiable et plus maintenable.' }
      ],
      tags: ['Python', 'Développement', 'Meilleures Pratiques', 'Tutoriel'],
      views: 0,
      likes: 0
    },
    {
      id: 'ia-generative-entreprise-guide',
      title: 'Guide complet : intégrer l\'IA générative dans votre entreprise en 2026',
      slug: 'ia-generative-entreprise-guide',
      category: 'actus',
      badge: 'Actualités',
      emoji: '🏢',
      date: '25 mai 2026',
      readTime: '9 min',
      excerpt: 'Comment déployer l\'IA générative en entreprise : stratégie, outils, formation, sécurité et retour sur investissement. Guide pratique pour les décideurs.',
      content: [
        { type: 'h2', text: 'Pourquoi les entreprises doivent adopter l\'IA générative maintenant' },
        { type: 'p', text: 'En 2026, l\'IA générative n\'est plus une option technologique à explorer dans un laboratoire d\'innovation. C\'est un impératif concurrentiel qui redéfinit les règles du jeu dans tous les secteurs. Les entreprises qui ont tardé commencent à ressentir un retard significatif sur leurs concurrents.' },
        { type: 'p', text: 'Selon une étude McKinsey de mars 2026, les entreprises ayant intégré l\'IA générative dans au moins trois processus métier constatent en moyenne +25% de productivité et -30% de coûts opérationnels. Ces chiffres expliquent pourquoi 78% des entreprises du CAC 40 ont un projet IA en production.' },
        { type: 'h2', text: '1. Définir une stratégie IA alignée sur le métier' },
        { type: 'p', text: 'La première erreur est de vouloir "faire de l\'IA" sans objectif métier clair. Partez des problématiques concrètes, identifiez les processus où l\'IA apporte le plus de valeur. Les meilleurs ROI sont : support client (-40% de coûts), génération de contenu marketing (gain de 60%), analyse de documents (précision +35%), assistance aux développeurs (+30% de productivité).' },
        { type: 'h2', text: '2. Choisir les bons outils' },
        { type: 'p', text: 'Les API propriétaires (OpenAI, Anthropic) sont idéales pour un déploiement rapide. Les modèles open source (DeepSeek, Mistral) sont préférables pour les données sensibles. Les plateformes cloud (Azure AI, Vertex AI) facilitent le déploiement à grande échelle.' },
        { type: 'h2', text: '3. Sécurité et conformité' },
        { type: 'p', text: 'L\'AI Act européen impose des obligations strictes. Les amendes peuvent atteindre 7% du chiffre d\'affaires. Mettez en place une charte d\'utilisation, formez les équipes, et désignez un responsable IA pour garantir la conformité.' },
        { type: 'h2', text: '4. Formation des équipes' },
        { type: 'p', text: 'Le plus grand frein est humain, pas technologique. Investissez dans la formation au prompt engineering pour tous les collaborateurs. Les entreprises les plus avancées créent des "centres de compétence IA" internes qui mutualisent l\'expertise.' },
        { type: 'h2', text: '5. Mesurer le ROI' },
        { type: 'p', text: 'Mesurez le temps gagné, la réduction des coûts, et l\'amélioration de la qualité. Communiquez ces résultats pour justifier les investissements et identifier les prochains domaines d\'application.' },
        { type: 'h2', text: 'Conclusion' },
        { type: 'p', text: 'L\'intégration de l\'IA est un processus continu. Commencez avec un projet pilote bien défini, itérez en apprenant de chaque expérience, et construisez une culture d\'innovation. Les entreprises qui réussissent sont celles qui alignent leur stratégie IA sur leurs objectifs métier.' }
      ],
      tags: ['Entreprise', 'IA', 'Stratégie', 'Guide'],
      views: 0,
      likes: 0
    },
    {
      id: 'comparatif-modeles-ia-2026',
      title: 'Comparatif 2026 : quel modèle d\'IA choisir selon vos besoins ?',
      slug: 'comparatif-modeles-ia-2026',
      category: 'ia',
      badge: 'IA Générative',
      emoji: '⚖️',
      date: '22 mai 2026',
      readTime: '8 min',
      excerpt: 'GPT-4o, Claude 4, Gemini 3, DeepSeek R1, Mistral Large 2, Llama 4 : lequel est fait pour vous ? Comparatif complet des performances, prix et cas d\'usage.',
      content: [
        { type: 'h2', text: 'Le guide d\'achat de l\'IA en 2026' },
        { type: 'p', text: 'Avec la multiplication des modèles, choisir celui qui correspond à vos besoins est un casse-tête. Ce comparatif analyse les forces et faiblesses de chaque modèle selon six critères : performance, coût, rapidité, confidentialité, spécialisation et écosystème.' },
        { type: 'h2', text: 'GPT-4o : le couteau suisse' },
        { type: 'p', text: 'GPT-4o reste la référence pour la polyvalence. Il excelle partout sans être le meilleur dans un domaine spécifique. Points forts : compréhension contextuelle imbattable, écosystème riche. Points faibles : coût élevé, confidentialité limitée.' },
        { type: 'h2', text: 'Claude 4 : la fiabilité avant tout' },
        { type: 'p', text: 'Claude 4 d\'Anthropic est le modèle des applications critiques. Contexte de 200K tokens, taux d\'hallucination le plus bas du marché. Idéal pour l\'analyse juridique, la recherche, les documents longs.' },
        { type: 'h2', text: 'Gemini 3 : l\'intégration Google' },
        { type: 'p', text: 'Gemini 3 mise sur l\'intégration avec l\'écosystème Google. Contexte de 10 millions de tokens pour analyser des bibliothèques entières. Idéal pour les utilisateurs Google Workspace.' },
        { type: 'h2', text: 'DeepSeek : le rapport qualité/prix imbattable' },
        { type: 'p', text: 'Modèles gratuits et open source. DeepSeek R1 excelle en raisonnement logique, DeepSeek V3 est un excellent généraliste. Disponible en local pour une confidentialité totale.' },
        { type: 'h2', text: 'Mistral Large 2 : l\'excellence européenne' },
        { type: 'p', text: 'Mistral allie performance et souveraineté numérique. Excellent en multilingue, particulièrement en français. Idéal pour les entreprises européennes soumises au RGPD.' },
        { type: 'h2', text: 'Comment choisir ?' },
        { type: 'p', text: 'La stratégie la plus intelligente est d\'utiliser plusieurs modèles selon les tâches : DeepSeek pour le quotidien, Claude pour l\'analyse approfondie, GPT-4o pour la création de contenu premium. Cette approche multicouche vous offre le meilleur de chaque monde.' }
      ],
      tags: ['Comparatif', 'IA', 'Modèles', 'Guide'],
      views: 0,
      likes: 0
    },
    {
      id: 'seo-ia-2026-strategies',
      title: 'SEO en 2026 : comment l\'IA a changé le référencement pour toujours',
      slug: 'seo-ia-2026-strategies',
      category: 'actus',
      badge: 'Actualités',
      emoji: '📈',
      date: '19 mai 2026',
      readTime: '7 min',
      excerpt: 'Les moteurs de recherche intègrent massivement l\'IA. Découvrez comment adapter votre stratégie SEO pour rester visible dans les résultats de recherche en 2026.',
      content: [
        { type: 'h2', text: 'Le SEO tel que nous le connaissions a pris fin' },
        { type: 'p', text: 'L\'arrivée de Google SGE a marqué le plus grand bouleversement du référencement depuis la création de Google. En 2026, les réponses générées par IA en haut des résultats ont réduit le taux de clics traditionnel de 35% en moyenne.' },
        { type: 'p', text: 'La nouvelle réalité : l\'autorité et l\'expertise sont devenues le facteur de classement numéro un. Le contenu original et approfondi est privilégié. La présence dans les sources citées par les IA est devenue aussi importante que le classement traditionnel.' },
        { type: 'h2', text: 'Les stratégies qui fonctionnent' },
        { type: 'p', text: 'Devenez une source citée par les IA en produisant un contenu original, bien sourcé, reconnu comme autorité. Optimisez pour les réponses enrichies avec des données structurées schema.org. Diversifiez vos canaux : newsletter, réseaux sociaux, podcasts.' },
        { type: 'h2', text: 'Données structurées : le facteur critique' },
        { type: 'p', text: 'Les données structurées schema.org sont un facteur de classement critique. Sans elles, vos chances d\'être cité par une IA chutent drastiquement. Priorisez les types Article, FAQ, HowTo, Product et Organization.' },
        { type: 'h2', text: 'Recherche vocale et multimodale' },
        { type: 'p', text: 'La recherche vocale représente 35% des recherches. Les requêtes sont plus longues et conversationnelles. La recherche multimodale (texte + image + voix) gagne du terrain. Optimisez vos images avec des descriptions riches.' },
        { type: 'h2', text: 'Conseils pratiques pour 2026' },
        { type: 'p', text: 'Écrivez pour les sujets, pas pour les mots-clés. Publiez régulièrement et de manière cohérente. Mesurez votre visibilité dans les réponses génératives avec Semrush ou Ahrefs qui ont ajouté le suivi SGE.' },
        { type: 'h2', text: 'Conclusion' },
        { type: 'p', text: 'Le SEO n\'est pas mort, il a évolué. Ce n\'est plus une question de manipulation d\'algorithmes mais de création de contenu de qualité et de construction d\'audience. Si vous êtes un expert dans votre domaine et que vous produisez un contenu utile et original, les nouvelles règles jouent en votre faveur.' }
      ],
      tags: ['SEO', 'Référencement', 'IA', 'Stratégie'],
      views: 0,
      likes: 0
    }
  ];

  // ----- State -----
  const state = {
    theme: localStorage.getItem('tia-theme') || 'dark',
    articles: ARTICLES,
    filteredArticles: [...ARTICLES],
    currentCategory: 'all',
    searchQuery: '',
    currentArticle: null,
    popularArticles: [],
    likedArticles: JSON.parse(localStorage.getItem('tia-liked') || '{}'),
    articleViews: JSON.parse(localStorage.getItem('tia-views') || '{}')
  };

  // ----- DOM References -----
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  let els = {};

  function cacheDom() {
    els = {
      themeToggle: $('#themeToggle'),
      html: document.documentElement,
      grid: $('#articlesGrid'),
      categoryBtns: $$('.category-btn'),
      searchInput: $('#searchInput'),
      articleView: $('#articleView'),
      articleViewContent: $('#articleViewContent'),
      articleViewOverlay: $('#articleViewOverlay'),
      articleViewClose: $('#articleViewClose'),
      popularGrid: $('#popularGrid'),
      hamburger: $('#hamburger'),
      mobileNav: $('#mobileNav'),
      newsletterForm: $('#newsletterForm'),
      toast: $('#toast'),
      loadingState: $('#loadingState'),
      emptyState: $('#emptyState'),
      articleCount: $('#articleCount'),
      popularCount: $('#popularCount')
    };
  }

  // ----- Theme -----
  function applyTheme(theme, save = true) {
    state.theme = theme;
    if (theme === 'light') {
      els.html.classList.add('light');
      els.themeToggle.textContent = '🌙';
    } else {
      els.html.classList.remove('light');
      els.themeToggle.textContent = '☀️';
    }
    if (save) localStorage.setItem('tia-theme', theme);
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(state.theme === 'light' ? 'Thème clair activé' : 'Thème sombre activé');
  }

  // ----- View Tracking -----
  function trackView(articleId) {
    state.articleViews[articleId] = (state.articleViews[articleId] || 0) + 1;
    localStorage.setItem('tia-views', JSON.stringify(state.articleViews));
    const article = state.articles.find(a => a.id === articleId);
    if (article) article.views = state.articleViews[articleId];
    updatePopularArticles();
  }

  // ----- Like System -----
  function toggleLike(articleId) {
    const liked = state.likedArticles[articleId];
    if (liked) {
      delete state.likedArticles[articleId];
      showToast('Like retiré');
    } else {
      state.likedArticles[articleId] = true;
      showToast('Article ajouté aux favoris ❤️');
    }
    localStorage.setItem('tia-liked', JSON.stringify(state.likedArticles));
    renderGrid();
    renderPopular();
  }

  // ----- Popular Articles -----
  function updatePopularArticles() {
    const scored = state.articles.map(a => ({
      ...a,
      score: (a.views || 0) * 2 + (state.likedArticles[a.id] ? 5 : 0)
    }));
    scored.sort((a, b) => b.score - a.score);
    state.popularArticles = scored.slice(0, 5);
  }

  // ----- Search & Filter -----
  function filterArticles() {
    let filtered = [...state.articles];

    if (state.currentCategory !== 'all') {
      filtered = filtered.filter(a => a.category === state.currentCategory);
    }

    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    state.filteredArticles = filtered;
    renderGrid();
  }

  // ----- Render Functions -----
  function renderGrid() {
    const { filteredArticles } = state;

    if (els.loadingState) els.loadingState.style.display = 'none';

    if (filteredArticles.length === 0) {
      if (els.emptyState) {
        els.emptyState.style.display = 'block';
        els.emptyState.innerHTML = `
          <div style="font-size: 48px; margin-bottom: 16px;">🔍</div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Aucun article trouvé</h3>
          <p style="color: var(--text-secondary);">Essayez un autre terme de recherche ou catégorie.</p>
        `;
      }
      els.grid.innerHTML = '';
      return;
    }

    if (els.emptyState) els.emptyState.style.display = 'none';

    els.grid.innerHTML = filteredArticles.map(article => {
      const catColor = article.category === 'ia' ? 'badge-ia' : article.category === 'code' ? 'badge-code' : 'badge-actus';
      const isLiked = !!state.likedArticles[article.id];
      const views = article.views || state.articleViews[article.id] || 0;

      return `
        <article class="article-card" data-id="${article.id}">
          <div class="article-card-image" onclick="app.openArticle('${article.id}')">
            <span>${article.emoji}</span>
            <div class="gradient-overlay"></div>
            <span class="article-card-badge ${catColor}">${article.badge}</span>
          </div>
          <div class="article-card-body" onclick="app.openArticle('${article.id}')">
            <div class="article-card-meta">
              <span>${article.date}</span>
              <span class="dot"></span>
              <span>${article.readTime}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
          </div>
          <div class="article-card-footer">
            <div class="article-card-stats">
              <span>👁️ ${views}</span>
              <button onclick="event.stopPropagation(); app.toggleLike('${article.id}')" class="${isLiked ? 'liked' : ''}">
                ${isLiked ? '❤️' : '🤍'} <span>${state.likedArticles[article.id] ? '1' : '0'}</span>
              </button>
            </div>
            <span onclick="app.openArticle('${article.id}')" style="cursor:pointer; font-weight:500; font-size:13px; color:var(--accent-1);">Lire →</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderPopular() {
    if (!els.popularGrid) return;
    const popular = state.popularArticles.slice(0, 5);

    els.popularGrid.innerHTML = popular.map((article, i) => {
      const views = article.views || state.articleViews[article.id] || 0;
      return `
        <div class="popular-card" onclick="app.openArticle('${article.id}')">
          <div class="popular-card-rank">${i + 1}</div>
          <div class="popular-card-content">
            <h4>${article.title}</h4>
            <span>👁️ ${views} vues • ${article.readTime}</span>
          </div>
        </div>
      `;
    }).join('');

    if (els.popularCount) {
      els.popularCount.textContent = `${state.articles.reduce((s, a) => s + (a.views || state.articleViews[a.id] || 0), 0)} vues totales`;
    }
  }

  // ----- Article View (Modal) -----
  function renderArticleView(articleId) {
    const article = state.articles.find(a => a.id === articleId);
    if (!article) return;

    state.currentArticle = article;
    trackView(articleId);
    renderGrid();
    renderPopular();

    const tags = article.tags.map(t => `<span>${t}</span>`).join('');

    let bodyHTML = '';
    article.content.forEach(block => {
      switch (block.type) {
        case 'h2': bodyHTML += `<h2>${block.text}</h2>`; break;
        case 'h3': bodyHTML += `<h3>${block.text}</h3>`; break;
        case 'p': bodyHTML += `<p>${block.text}</p>`; break;
        case 'highlight': bodyHTML += `<div class="highlight-box"><p>${block.text.replace(/\n/g, '</p><p>')}</p></div>`; break;
        case 'ul': bodyHTML += `<ul>${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`; break;
        case 'ol': bodyHTML += `<ol>${block.items.map(i => `<li>${i}</li>`).join('')}</ol>`; break;
        case 'pre': bodyHTML += `<pre>${block.text}</pre>`; break;
      }
    });

    els.articleViewContent.innerHTML = `
      <button class="article-view-close" id="articleViewCloseInner">✕</button>
      <div class="article-view-header">
        <div class="meta">
          <span class="article-card-badge ${article.category === 'ia' ? 'badge-ia' : article.category === 'code' ? 'badge-code' : 'badge-actus'}">${article.badge}</span>
          <span>${article.date}</span>
          <span class="dot"></span>
          <span>${article.readTime}</span>
          <span class="dot"></span>
          <span>👁️ ${article.views || state.articleViews[article.id] || 0} vues</span>
        </div>
        <h1>${article.emoji} ${article.title}</h1>
        <p class="excerpt">${article.excerpt}</p>
      </div>
      <div class="article-view-body">
        ${bodyHTML}
        <div style="min-height:250px;display:flex;align-items:center;justify-content:center;background:var(--bg-elevated);border-radius:12px;margin:24px 0;">
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1274274105630723" data-ad-slot="XXXXXXXXX" data-ad-format="auto"></ins>
        </div>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
      <div class="article-view-footer">
        <div class="article-view-tags">${tags}</div>
        <div class="article-view-share">
          <button onclick="navigator.clipboard.writeText(window.location.href); app.showToast('Lien copié !')">🔗</button>
          <button onclick="window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent('${article.title}')+'&url='+encodeURIComponent(window.location.href))">𝕏</button>
          <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href))">in</button>
        </div>
      </div>
    `;

    els.articleView.classList.add('open');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('articleViewCloseInner');
    if (closeBtn) closeBtn.addEventListener('click', closeArticleView);

    // Update URL
    history.pushState({ articleId }, '', `#${article.slug}`);

    // Scroll to top
    els.articleView.scrollTop = 0;
  }

  function closeArticleView() {
    els.articleView.classList.remove('open');
    document.body.style.overflow = '';
    history.pushState({ articleId: null }, '', window.location.pathname);
  }

  // ----- Toast -----
  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(els.toast._timeout);
    els.toast._timeout = setTimeout(() => {
      els.toast.classList.remove('show');
    }, 2500);
  }

  // ----- Newsletter -----
  function handleNewsletter(e) {
    e.preventDefault();
    const input = els.newsletterForm.querySelector('input');
    if (input && input.value.trim()) {
      showToast('✅ Merci pour votre inscription !');
      input.value = '';
    }
  }

  // ----- URL Hash Handling -----
  function handleHash() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const article = state.articles.find(a => a.slug === hash);
      if (article) {
        // Delay for DOM readiness
        setTimeout(() => renderArticleView(article.id), 100);
      }
    }
  }

  // ----- Keyboard Navigation -----
  function handleKeydown(e) {
    if (e.key === 'Escape' && els.articleView.classList.contains('open')) {
      closeArticleView();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (els.searchInput) els.searchInput.focus();
    }
  }

  // ----- Init -----
  function init() {
    cacheDom();
    applyTheme(state.theme, false);

    // Init views
    state.articles.forEach(a => {
      a.views = state.articleViews[a.id] || 0;
    });

    updatePopularArticles();

    // Render
    renderGrid();
    renderPopular();

    if (els.articleCount) {
      els.articleCount.textContent = `${state.articles.length} articles`;
    }

    // Show loading briefly for effect
    if (els.loadingState) {
      setTimeout(() => {
        els.loadingState.style.display = 'none';
      }, 400);
    }

    // --- Event Listeners ---
    if (els.themeToggle) els.themeToggle.addEventListener('click', toggleTheme);

    // Category buttons
    els.categoryBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        els.categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        state.currentCategory = this.dataset.category;
        filterArticles();
      });
    });

    // Search
    if (els.searchInput) {
      els.searchInput.addEventListener('input', function() {
        state.searchQuery = this.value;
        filterArticles();
      });
    }

    // Article view close
    if (els.articleViewOverlay) els.articleViewOverlay.addEventListener('click', closeArticleView);
    if (els.articleViewClose) els.articleViewClose.addEventListener('click', closeArticleView);

    // Hamburger
    if (els.hamburger) {
      els.hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        els.mobileNav.classList.toggle('open');
      });

      els.mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          els.hamburger.classList.remove('active');
          els.mobileNav.classList.remove('open');
        });
      });
    }

    // Newsletter
    if (els.newsletterForm) els.newsletterForm.addEventListener('submit', handleNewsletter);

    // Keyboard
    document.addEventListener('keydown', handleKeydown);

    // Popstate (browser back)
    window.addEventListener('popstate', function(e) {
      if (els.articleView.classList.contains('open') && !e.state?.articleId) {
        closeArticleView();
      }
    });

    // Hash on load
    handleHash();

    console.log(`%c Tech & IA Premium %c v1.0 `, 'background:#7c3aed;color:white;font-weight:bold;padding:4px 8px;border-radius:4px 0 0 4px;', 'background:#06b6d4;color:white;padding:4px 8px;border-radius:0 4px 4px 0;');
    console.log(`📊 ${state.articles.length} articles chargés`);
  }

  // Expose to global for onclick handlers
  window.app = {
    openArticle: renderArticleView,
    closeArticle: closeArticleView,
    toggleLike,
    showToast
  };

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
