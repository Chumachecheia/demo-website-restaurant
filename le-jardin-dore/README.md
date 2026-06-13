# Le Jardin Doré — Site vitrine (exemple/preview)

Site multi-pages pour un restaurant gastronomique fictif à Genève, basé sur le skill `elegant-restaurant-site` (palette sombre + or, serif Baskervville, sans-serif Prompt).

## Voir le site en local

```bash
cd C:\Users\chuma\le-jardin-dore
python -m http.server 8123
```

Puis ouvrir : http://localhost:8123/index.html

## Pages

| Page | Fichier |
|------|---------|
| Accueil | [index.html](index.html) |
| À propos | [about.html](about.html) |
| Menu (La Carte + Cave) | [menu.html](menu.html) |
| Menu du jour | [menudujour.html](menudujour.html) |
| Contact | [contact.html](contact.html) |
| Réservation | [reservation.html](reservation.html) |

## Structure

```
le-jardin-dore/
├── index.html
├── about.html
├── menu.html
├── menudujour.html
├── contact.html
├── reservation.html
└── assets/
    ├── css/style.css   (design system, variables CSS)
    └── js/main.js      (preloader, nav, sliders, reveals, formulaires)
```

## ⚠️ À personnaliser avant mise en ligne

- **Toutes les images** sont des placeholders `picsum.photos` → remplacer par de vraies photos du restaurant.
- **Nom, adresse, téléphone, chef, équipe, plats, prix** sont fictifs ("Le Jardin Doré", 12 Quai du Mont-Blanc, +41 22 345 67 89, Étienne/Camille Rochat...).
- **Témoignages** sont fictifs → remplacer par de vrais avis clients.
- **Formulaires** (`#resa-form`, `#contact-form`) ont `action="#"` → à connecter via Formspree.
- **Domaine** `lejardindore.ch` est un placeholder dans les balises canonical/OG.

## Déploiement

Site statique, prêt pour GitHub Pages ou Vercel sans configuration.
