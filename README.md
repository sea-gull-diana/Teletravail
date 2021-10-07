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
`git commit --amend --no-edit` - si tu veux ajouter les derniers changements dans le dernier _commit_ et pas faire un nouveau. (Pas exemple, si tu as juste corrigé une petite faute de frappe et ne veux pas faire un tout nouveau _commit_ pour ça).
`git checkout -- <file_name>` - permet de restaurer le fichier si tu viens de le supprimer par accident ou annuler les derniers modifications dans un fichier (mais seulement si tu n'as pas encore fait un _commit_ pour ces modifications).
`git revert HEAD` - pour annuler les changements du dernier _commit_.
`git checkout <nom d'une branche>` - pour aller vers une autre branche du projet
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