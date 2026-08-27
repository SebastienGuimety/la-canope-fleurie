# La Canopée Fleurie — Site multi-pages (version romantique)

Site vitrine **Eleventy** + **Decap CMS** (édition par la cliente) + **Netlify** (hébergement gratuit + formulaire).
Chaque catégorie a sa **page dédiée avec galerie de photos**. Design "romantique" (v1).

---

## 1. Tester en local (toi, Jean)
```bash
npm install      # une seule fois
npm start        # http://localhost:8080
```
`npm run build` génère le site final dans `_site/`.

## 2. Structure
```
src/
  index.njk            → page d'accueil (catégories = liens vers les pages)
  categorie.njk        → génère 1 page galerie par catégorie automatiquement
  merci.njk            → page après envoi du formulaire
  _includes/base.njk   → header + footer partagés
  css/base.css         → styles (repris de la v1 + styles galerie)
  _data/site.json      → coordonnées (adresse, tel, email, horaires)
  categories/          → 1 fichier = 1 catégorie (titre, prix, intro, galerie)
  images/              → logo, favicon, photos
  admin/               → interface CMS (config.yml + index.html)
```
Les pages `/mariage/`, `/deuil/`, etc. sont générées automatiquement à partir
des fichiers de `categories/`. Ajouter une catégorie = ajouter un fichier
(ou le faire depuis le CMS) : sa page se crée toute seule.

## 3. GitHub + Netlify + domaine
1. Pousser le projet sur GitHub.
2. Netlify → Import project → il lit `netlify.toml` (build `npm run build`, dossier `_site`).
3. Domaine ~8 €/an chez OVH/Gandi, pointé sur Netlify. HTTPS auto.

### Formulaire (Netlify Forms)
Déjà branché (`data-netlify="true"`, redirige vers `/merci/`).
Netlify → Forms → notifications email vers l'adresse de la cliente.

### CMS pour la cliente
Netlify → Identity → Enable + Invite only + Git Gateway → Enable.
Inviter l'email de la cliente. Elle accède à `TON-SITE/admin`.

## 4. Ce que la cliente gère depuis /admin
**Catégories de créations** — pour chaque catégorie : nom, prix, ordre,
photo principale, phrase courte, texte d'intro, et **galerie de photos**
(ajouter/retirer avec légende). Elle peut créer ou supprimer des catégories.
**Paramètres du site** — adresse, téléphone, email, horaires, Instagram.
Elle clique **Publish**, le site se régénère seul en ~2 min.

## 5. Vraies images
Déposer les photos dans `src/images/` avec les noms des fichiers `categories/*.md`
(ou via le CMS en glisser-déposer). Le logo est déjà en place.

## 6. Coût : ~8 €/an (le domaine). Tout le reste est gratuit.

---

## 7. Nouveautés de gestion (mise à jour)

**Afficher / masquer une catégorie** — dans l'admin, chaque catégorie a une
case « Afficher cette catégorie sur le site ». Décochez-la pour masquer une
catégorie (ex : Saint-Valentin hors saison) sans la supprimer : elle disparaît
de l'accueil ET sa page devient inaccessible. Recochez pour la réafficher.

**Bouquet de la semaine** — encart en avant sur l'accueil, géré dans
« Paramètres du site » : nom, prix, description, photo, et une case pour
l'afficher ou le masquer. À mettre à jour chaque semaine.

**Livraison gratuite** — le texte s'affiche en badge élégant dans le hero
(page d'accueil). Se change dans « Paramètres du site » (champ « Bandeau livraison »).

**Instagram** — mettez l'adresse complète de votre compte dans « Paramètres
du site ». Le lien apparaît dans le bandeau du haut et dans le footer.

**Cours d'art floral** — ce n'est PAS une catégorie mais un encart dédié sur
l'accueil (titre, description, prix, photo, bouton). Se gère dans « Paramètres
du site », avec une case pour l'afficher/masquer.

**Nouvelle catégorie livrée** : Bouquet sec. Se gère comme les autres.

Images à fournir : `bouquet-sec.jpg`, `cours.jpg`, `bouquet-semaine.jpg`
(des versions de démo sont déjà en place).
