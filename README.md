"# Teletravail" 
## Comment travailler sur Git CMD
#### Commandes classiques de tout terminal Windows (non seulement Git):
`cd <nom>` - change directory / aller vers un autre dossier qui se trouve dans le dossier ou vous etes maintenant. Pour revenir vers un dossier precendent: `cd ..`

`dir` - pour voir tous les fichiers et dossiers qui se trouvent dans le dossier ou tu es maintenant

`mkdir <nom>` - pour creer un dossier

#### Commandes de Git
`git clone https://github.com/sea-gull-diana/Teletravail` - pour mettre le dossier en ligne dans le dossier sur ton ordi et creer un lien entre les deux.

`git status` - pour voir ou tu es (dans quel branche) et quels changements tu n'as pas encore ajoute ou s'il faut faire un commit pour les derniers changements ajoutes.

`git add -A` or `git add .` - pour ajouter tous les changements que tu viens de faire dans le dossier sur ton ordi dans le log *.git* invisible qui se trouve dans le meme dossier.

`git commit -m "<message>"` - pour expliquer quels changements tu as fait et pourquoi

`git log` -  pour voir tous les commits avec les dates et le nom d'auteur. `git log --oneline` pour voir une version plus concise des logs.

`git push` - mettre tes changements sur GitHub

`git pull` - retirer la derniere version du projet de GitHub (**Commence toujours ton travail sur le avec cette commande**).

`git commit --amend --no-edit` - si tu veux ajouter les derniers changements dans le dernier _commit_ et pas faire un nouveau. (Pas exemple, si tu as juste corrigé une petite faute de frappe et ne veux pas faire un tout nouveau _commit_ pour ça). `git commit --amend -m "..."` pour remplacer le dernier _commit_ avec un nouveau message.

`git checkout -- <file_name>` - permet de restaurer le fichier si tu viens de le supprimer par accident ou annuler les derniers modifications dans un fichier (mais seulement si tu n'as pas encore fait un _commit_ pour ces modifications).

`git revert HEAD` - pour annuler les changements du dernier _commit_.

`git checkout <nom d'une branche>` - pour aller vers une autre branche du projet.

`git diff` - pour voir la différence entre la version que tu viens de créer et la version précendente. (`git diff HEAD^` pour voir la différence entre les deux derniers _commits_).

_.gitignore_ - un nouveau fichier que je viens d'ajouter. On peut y mettre les noms pu extensions de fichiers dans le dossier local que Git doit ignorer et ne pas mettre sur GitHub.

************************************

## Les notes du cours de Communication
_07/10/2021_
- 4-6 references to sources of info (voir s'il y a qqch d'utile dans la BU).
- Pour chaque reference: 3-5 mots cles (idees essentielle de l'article) + un resume de 5-6 lignes qui explique en quoi cet article alimente votre reflexion.
- Norme IEEE pour la bibliographie. Ordre alphabetique.
- Pour garder la trace des ressources consultees: utiliser un gestionnaire bibliographique comme ZOTERO.
- La bibliographie a deposer sur Moodle avant la fin de la semaine prochaine (**16 octobre**).
- Notes de bas de page avec des sources? Une page separee pour les sources?

## Structure du site
- index.html : Page d'accueil. Definition de teletravail, presentation de la controverse, l'historique, les acteurs de la controverse, les arguments pour et contre (liens vers les pages pour.html et contre.html). Lien vers le blog.
- pour.html : Les arguments pour de point de vue de chaque acteur.
- contre.html : Les contre de point de vue de chaque actuer.
- presentation.html : Presentation du site, les objectifs et les raisons pourquoi on l'a cree.
- team.html : Presentation de l'equipe dans son ensemble. Presentation des membres.

## Repartition des taches

#### Redaction du texte
- Dziyana

Pages : team.html, pour.html, contre.html.

- Jiayi

Pages : presentation.html, index.html, contact.html.

## Sources
- <https://www.youtube.com/watch?v=Mo7R98Tppfc> (video sur le developpement de teletravail dans les pays differents pendant la pandemie - 6 min)
- <https://www.bfmtv.com/replay-emissions/culture-geek/teletravail-la-visioconference-du-futur-06-10_VN-202010060163.html> (court video sur les technologies de futur qui pourriaient simplifier le teletravail - 2,5 min)
- <https://halshs.archives-ouvertes.fr/halshs-03345444> (article sur les enjeux et perspectives du teletravail: etude de la situation actuelle, analyse des avantages et inconvenients pour les salaries et empoyeurs)
- <https://www.washingtonpost.com/outlook/2021/09/24/working-home-productivity-pandemic-remote/> (article en anglais parlant des desavantages de teletravail en matiere de la productivite, creativite, chance de promotion, etc.
- <https://www.lesechos.fr/idees-debats/cercle/opinion-teletravail-vers-une-augmentation-des-inegalites-1197094> (article sur teletravail comme source des inegalites car les catégories professionnelles les plus élevées sont plus frequemment concernees par ce phenomene)
- <https://news.microsoft.com/fr-fr/2021/04/01/un-an-apres-le-travail-sest-transforme-les-drh-aussi/> (etude des opinions des DRH sur teletravail commande par Microsoft France - permet mieux comprendre les avis et les acteurs des debats)