//RESUELVE LOS EJERCICIOS AQUI

// Array methods: map

/* 1.Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10],
crea una función elevados que devuelva un array con el cuadrado
de cada uno de los elementos. */
const numbers =  [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    // Elevar a la misma potencia que número
    const resultado = numbers.map(num => num ** num
    );
    return resultado;
}

const resultado = elevados();  // Llamada a la función y guardar el resultado
console.log(resultado);  // Imprimir el resultado

/* 2.Dado el array foodList
con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'],
generar un segundo array que consiga generar de salida
el resultado esperado.
 */

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const phrases = [
    'Como soy de Italia, amo comer ',
    'Como soy de Japón, amo comer ',
    'Como soy de Valencia, amo comer ',
    'Aunque no como carne, el '
];

// Generamos el nuevo array usando un map y lo llamamos result2
const result2 = foodList.map((food, index) => {
    return phrases[index] + food + (index === 3 ? ' es sabroso' : '');
});

console.log(result2);


/* 3.Dado el array staff, crear un segundo array
que forme frases como en el ejemplo accediendo
a las propiedades del objeto proporcionado: */

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result3 = staff.map( persona => {
    const hobbies = persona.hobbies.join(' y ');
    return `${persona.name} es ${persona.role} y le gusta ${hobbies}`;
});

console.log(result3);

// Array methods: filter


/*
 4.Crea un segundo array result4 a partir del array numbers2
 que devuelva solo los impares
*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(number => number % 2 !== 0);

console.log(result4);

/*
5.Dado el array foodList2,
genera un segundo array result5
que filtre los platos veganos y saque una sentencia como la del ejemplo
['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']
*/
const foodList2 = [
  {
    name: 'Tempeh',
    isVeggie: true
  },
  {
    name: 'Cheesbacon burguer',
    isVeggie: false
  },
  {
    name: 'Tofu burguer',
    isVeggie: true
  },
  {
    name: 'Entrecot',
    isVeggie: false
  }
];

let result5 = foodList2
            .filter(food => food.isVeggie)  // Filtra solo los platos veganos
            .map(food => {
              // Determina si el nombre del plato es femenino o masculino para usar "rico" o "rica"
              let genero = food.name.toLowerCase().includes('burguer') ? 'rica' : 'rico';
              return `Que ${genero} ${food.name} me voy a comer!`;
            });
console.log(result5);

/*
6.Dado el array inventory, devolver un array
con los nombres de los elementos que valgan más de 300 euros.
*/

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  
  const result6 = inventory
    .filter(({ price }) => price > 300)
    .map(({ name }) => name);
    console.log(result6);

// Array methods: reduce

/*
7.Dado el siguiente array numeros [39, 2, 4, 25, 62],
obten la multiplicación de todos los elementos del array
*/

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acumulador, valorActual) => acumulador * valorActual, 1);

console.log(result7);

/* 8.Concatena todos los elementos del array
con reduce para que devuelva una sola frase */

const sentenceElements = [
    'Me',
    'llamo',
    'Juan José',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  
  const createSentence = (elements) => {
    return elements.reduce((accumulator, current) => {
      return accumulator + ' ' + current;
    }).trim(); // Eliminar espacios al inicio y al final
  };
  
  const result8 = createSentence(sentenceElements);
  console.log(result8); // Resultado

  /*
  9.Obtener el montón total de los elementos
  que pertenecen a catergory "code"
  en el siguiente array.
   */

  const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  
  const result9 = books
  .filter(book => book.category === 'code')
  .reduce((total, book) => total + book.price, 0);
  console.log(result9); //Resultado 60