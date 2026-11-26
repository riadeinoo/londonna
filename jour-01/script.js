let articles = [
  { id: 1, titre: "Bague solitaire or 18K", categorie: "bague", prix: 4200, stock: 3, date: "2026-09-12" },
  { id: 2, titre: "Collier perles", categorie: "collier", prix: 1850, stock: 0, date: "2026-10-03" },
  { id: 3, titre: "Bracelet argent", categorie: "bracelet", prix: 650, stock: 12, date: "2026-08-21" },
  { id: 4, titre: "Bague alliance", categorie: "bague", prix: 2900, stock: 5, date: "2026-11-01" },
  { id: 5, titre: "Boucles d'oreilles émeraude", categorie: "boucles", prix: 5600, stock: 1, date: "2026-07-15" },
  { id: 6, titre: "Collier or jaune", categorie: "collier", prix: 7300, stock: 2, date: "2026-10-28" },
  { id: 7, titre: "Bracelet jonc or", categorie: "bracelet", prix: 3400, stock: 0, date: "2026-09-30" },
  { id: 8, titre: "Bague saphir", categorie: "bague", prix: 6100, stock: 0, date: "2026-11-10" },
  { id: 9, titre: "Collier main de Fatma", categorie: "collier", prix: 980, stock: 7, date: "2026-08-05" },
  { id: 10, titre: "Créoles argent", categorie: "boucles", prix: 720, stock: 9, date: "2026-10-18" }
];


// 1. Quels articles sont des bagues ? -> filter
const bagues = articles.filter(article => article.categorie === "bague");
console.log("1. Bagues :", bagues);

// 2. Quels sont les titres des articles en rupture de stock (stock === 0) ? -> filter puis map
const titresRupture = articles
  .filter(article => article.stock === 0)
  .map(article => article.titre);
console.log("2. Titres en rupture de stock :", titresRupture);

// 3. Quel est l'article dont l'id vaut 7 ? -> find
const articleId7 = articles.find(article => article.id === 7);
console.log("3. Article id 7 :", articleId7);

// 4. Y a-t-il au moins un article à plus de 5 000 DH ? -> some
const auMoinsUnCher = articles.some(article => article.prix > 5000);
console.log("4. Au moins un article > 5000 DH :", auMoinsUnCher);

// 5. Tous les articles sont-ils en stock (stock > 0) ? -> every
const tousEnStock = articles.every(article => article.stock > 0);
console.log("5. Tous en stock :", tousEnStock);