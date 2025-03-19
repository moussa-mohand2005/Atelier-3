let text = "Voici un texte. Il doit être divisé en lignes";
let result = text.split(". ").map(line => line.toUpperCase()).filter(line => line.includes("I"));
console.log(result);
