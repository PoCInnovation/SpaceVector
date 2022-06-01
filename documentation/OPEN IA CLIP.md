# Learning Transferable Visual Models From Natural Language Supervision

L'usage des labels dans les données d'apprentissage et de test est très important pour la réalisation de modèles de transfert de visuels. Et c'est ce qui permet aujourd'hui d'obtenir des modèles de transfert de visuels qui sont très performants.

Suite à l'arrivée du Text-to-Text, il n'y a plus forcément besoin d'entrainer sur des données nouvelles sauf pour des données non traduites encore. Et cependant les modèles reste très performants sur des nouvelles tâches.

Ils cherchent à créer un modèle qui apprend du texte à partir du web, pour essayer après grâce à cela d'apprendre à un autre modèle.

Au fur à mesure des années de nouveaux papiers de recherche sortent et montrent des avancées telles que des prédictions de phrases.

CLIP a été formé à la base à partir d'un jeu de données de 400 millions de paires (Images/textes)

CLIP est très rapidement devenu plus performant que le modèle ImageNet public.

Les systèmes de vision par ordinateur consomment beaucoup de ressources et de temps.

Le transformateur de texte à poser des problèmes lors de sa creation à cause de son temps de calcul.

En passant sur un objectif d'encodage d'un sac de mot et non de chaque mot, la performance à augmenter de x4.

En 2020 il n'est gardé que l'encodage d'une phrase, car la plus par des paires ne contient que des phrases uniques.

CLIP est composé de deux modèles :

    - Le modèle de transfert de visuels qui est un modèle de réseau de neurones convolutifs.
    - Le modèle de transfert de texte qui est un modèle de réseau de neurones de texte.

CLIP contient 63 millions de paramètres, 12 couches et une 512 neurones de sortie.

Pour des meilleurs de résultats, ils n'ont pas augmentés leur nombre de couches. Ils ont augmenté leur nombre de calculs.

Pour l'encodeur de texte, c'est la largeur du modèle qui est proportionnelle au nombre de caractères.

### Entrainement

32 epochs pour l'entrainement des modèles de Transformers

Le modèle utilisé pour tous les entrainements est ViT-L/14@336px.

CLIP est pré-entraîné pour prédire si une image et un extrait de texte sont appariés dans son jeu de données.

Le manque de contexte a aussi été un problème lorsque les mots avaient plusieurs sens.

À la base CLIP était le moins performant sur les images satellites et les objets.

Aussi sur le fait de compter des objets ou la voiture autonome.

Grâce au classificateur linéaire CLIP peut estimer l'efficacité dans un contexte

### Chevauchement des données

CLIP fait une analyse du chevauchement des données.

### Limites

Le matériel pour entrainer n'est pas encore assez poussé.

Pour les tâches plus abstraites, CLIP a encore du mal, comme les différents modèles de voitures.

### Biais

Ils ont fait des tests sur le dénigrement dans certains dataset en ajoutant des labels.

Par exemple certains hommes classés dans la catégorie voleur ou criminel.

Et cela aussi par rapport à leur âge.

Sur les tests avec la différence de sexe certains corps de métier ressortait plus selon le sexe de la personne sur l'image.

### Surveillance

Ils cherchent à suivre si CLIP n'a pas d'impact sur les potentiels futurs modèles de transfert de visuels.

Ils ont aussi pris des images de vidéo de surveillance. En effectuant des tests grossiers et fins.
