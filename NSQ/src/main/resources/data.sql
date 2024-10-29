INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (1, 'Admin', 'qwer', 'admin', 0);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (2, 'Jean', 'qwer', 'Joueur', 2);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (3, 'Rose', 'qwer', 'Joueur', 4);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (4, 'Robert', 'qwer', 'Joueur', 1);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (5, 'Sarah', 'qwer', 'Joueur', 0);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (6, 'Paul', 'qwer', 'Joueur', 2);
INSERT INTO PLAYER (ID, USERNAME, PASSWORD, ROLE, QUIZ_COUNT)
VALUES (7, 'Loretta', 'qwer', 'Joueur', 11);


INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (1, 'Short Code', 'Fortran', 'Assembly', 'Algol', 'Quel était le premier langage de programmation numérique de l’histoire?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (2, '1983', '1979', '1988', '1989', 'En quelle année a été créé le langage C++?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (3, 'Visual Basic', 'Java', 'Javascript', 'C#', 'Lequel des quatre langages suivants est le plus ancien?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (4, 'Rawdon', 'Brainfuck', 'Actor', 'Coq', 'Lequel des langages de programmation suivants n’existe pas?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (5, 'Python', 'Ruby', 'C++', 'Java', 'Quel est le langage de programmation le plus utilisé par les ingénieurs logiciels et développeurs?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (6, 'Le C ne supporte pas les classes et les objets', 'Le C++ ne supporte pas les boucles logiques',
        'Le C ne supporte pas les variables de type ‘char’', 'Le C++ ne supporte pas les variables booléennes',
        'Quelle est la différence majeure entre le langage C et le langage C++?');

INSERT INTO QUIZ (ID_QUIZ, CATEGORIE, DESCRIPTION, DIFFICULTE, TITRE)
VALUES (1, 'Informatique', 'Quiz sur les langages de programmation', 'Facile', 'Les langages de programmation');
INSERT INTO QUIZ (ID_QUIZ, CATEGORIE, DESCRIPTION, DIFFICULTE, TITRE)
VALUES (2, 'Culture', 'Quiz sur les capitales des grands pays', 'Facile', 'Capitales');
INSERT INTO QUIZ (ID_QUIZ, CATEGORIE, DESCRIPTION, DIFFICULTE, TITRE)
VALUES (3, 'Informatique', 'Quiz sur HTML et CSS', 'Moyen', 'HTML / CSS');

INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 1);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 2);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 3);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 4);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 5);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (1, 6);


INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (7, 'World Wide Web Consortium', 'Microsoft Corporation', 'IBM Corporation', 'Apple Inc.',
        'Quelle organisation définit les standards Web?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (8, 'Langage de balisage', 'Langage de haut niveau', 'Langage POO', 'Langage de programmation',
        'HTML est considéré comme ______ ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (9, '1990', '2000', '1995', '1980', 'HTML a été proposé pour la première fois l’année ___');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (10, 'Microsoft Bing', 'Mozilla Firefox', 'Netscape', 'Opéra',
        'Lequel des éléments suivants n’est pas un exemple de navigateur?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (11, 'Tim Berners-Lee', 'Brendan Eich', 'Développeur web', 'Google Inc', 'Qui est l’auteur principal du HTML?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (12, 'id', 'text', 'class', 'name',
        'Si nous souhaitons définir le style d’un seule élément, quel sélecteur css utiliserons-nous?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (13, 'Style', 'Design', 'Modify', 'Define',
        'La balise HTML qui spécifie un style CSS intégré dans un élément est appelée ____?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (14, 'HTML 5', 'HTML 1', 'HTML 3', 'HTML 7',
        'La norme HTML qui n’exige pas des double quotes autour des valeurs d’un attribut est dite ______?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (15, 'XHTML', 'DHTML', 'XML', 'HTML', 'Un type de document HTML plus strict est connu sous ______ ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (16, 'Balises fixes définis par le langage', 'Balises uniquement pour les liens', 'Balises prédéfinis',
        'Balises définis par l’utilisateur', 'HTML utilise des ______?');

INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 7);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 8);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 9);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 10);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 11);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 12);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 13);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 14);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 15);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (3, 16);

INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (17, 'Royaume-Uni', 'Bahamas', 'Andorre', 'Chine', 'De quel pays Londres est-elle la capitale ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (18, 'Dublin', 'Berlin', 'Belfast', 'Édimbourg', 'La capitale de l’Irlande est ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (19, 'Lisbonne', 'Braga', 'Porto', 'Bilbao', 'Quelle est la capitale du Portugal ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (20, 'Liban', 'Syrie', 'Irak', 'Algerie', 'De quel pays Beyrouth est-elle la capitale ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (21, 'Bruxelles', 'Londres', 'Paris', 'Madrid', 'Quelle est la capitale de la Belgique ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (22, 'Paris', 'Bruxelles', 'Londres', 'Rome', 'Quelle est la capitale de la France ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (23, 'Madrid', 'Londres', 'Rome', 'Bruxelles', 'Quelle est la capitale de l’Espagne ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (24, 'Rome', 'Londres', 'Bruxelles', 'Madrid', 'Quelle est la capitale de l’Italie ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (25, 'Mexico', 'Guadalajara', 'Madrid', 'Bruxelles', 'Quelle est la capitale du Mexique ?');
INSERT INTO QUESTION (ID_QUESTION, ANSWER, OPTION1, OPTION2, OPTION3, QUESTION)
VALUES (26, 'Stockholm', 'Helsinki', 'Oslo', 'Berlin', 'Quelle est la capitale de la Suède ?');


INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 17);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 18);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 19);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 20);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 21);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 22);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 23);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 24);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 25);
INSERT INTO QUIZ_QUESTIONS_LIST (QUIZ_ID_QUIZ, QUESTIONS_LIST_ID_QUESTION) VALUES (2, 26);
