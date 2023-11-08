const Lagartijas = {
    nombre: 'Lagartijas',
    color: 'Amarillo',
    autor: 'A.J.Perez',
    nPaginas: 110,
    editorial: 'Deusto',
    comprar: function() { console.log(`Libro de aventuras del autor ${this.autor} comprado`)},
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
const Mariposas = {
    nombre: 'Mariposas',
    color: 'Verde',
    autor: 'J.K álvarez',
    nPaginas: 500,
    editorial: 'SM',
    comprar: function() { console.log(`Libro de aventuras del autor ${this.autor} comprado`)},
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
const Margaritas = {
    nombre: 'Margaritas',
    color: 'Rojo',
    autor: 'I. P. Ramírez',
    nPaginas: 368,
    editorial: 'SM',
    comprar: function() { console.log(`Libro de aventuras del autor ${this.autor} comprado`)},
    forrado: false,
    cover_url: 'https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}
const Petunias = {
    nombre: 'Petunias',
    color: 'Azul',
    autor: 'Tolkien',
    nPaginas: 368,
    editorial: 'SM',
    comprar: function() { console.log(`Libro de aventuras del autor ${this.autor} comprado`)},
    forrado: false,   
    cover_url: 'https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

const checkPaginas = ({nPaginas}) => nPaginas >= 150;
const checkLibro = (titulo, biblio) => biblio.includes(titulo);


let biblio = [Lagartijas, Mariposas, Petunias]

console.log("Compramos todos los libros:");
biblio.forEach(libro=>libro.comprar());

console.log(`Petunias es un ${checkPaginas(Petunias)?"Libro largo":"Libro corto"}`);

console.log("Se ha encontrado Margaritas: " + checkLibro(Margaritas, biblio));
console.log("Se ha encontrado Petunias: " + checkLibro(Petunias, biblio));

biblio=[...biblio, Margaritas];
console.log("Después de añadir Margaritas");

console.log("Se ha encontrado Margaritas: " + checkLibro(Margaritas, biblio));
console.log("Se ha encontrado Petunias: " + checkLibro(Petunias, biblio));
