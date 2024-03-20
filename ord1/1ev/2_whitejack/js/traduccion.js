const palosTraduccion = {
    "HEARTS": "corazones",
    "DIAMONDS": "diamantes",
    "CLUBS": "tréboles",
    "SPADES": "picas"
};

// Ejemplo de uso:
const paloIngles = "HEARTS";
const paloEspanol = palosTraduccion[paloIngles];
console.log(`El palo en inglés "${paloIngles}" se traduce como "${paloEspanol}" en español.`);