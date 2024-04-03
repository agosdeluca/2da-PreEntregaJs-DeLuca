//productos de la tienda

const todosLosProductos = [
    productosDeDormitorio = [
        { nombre: "Manta BabySkin", precio: 3000, color: ["Azul", "Rosa", "Blanco"] },
        { nombre: "Almohadón", precio: 1300, modelo: ["Estrella", "Corazón"] },
        { nombre: "Alfombra", precio: 2000, color: ["Gris", "Violeta", "Negro"] },
        { nombre: "Velador", precio: 1500 },
        { nombre: "Espejo", precio: 3000 },
        { nombre: "Vela arómatica", precio: 800 },
    ],

    productosDeBaño = [
        { nombre: "Toalla de Baño", precio: 1500, colore: ["blanco", "azul", "gris"] },
        { nombre: "Juego de Accesorios de Baño", precio: 3000, colore: ["plateado", "dorado", "negro"] },
        { nombre: "Jabón de Manos", precio: 500, colore: ["rosa", "verde", "blanco"] },
    ],

    productosDeCocina = [
        { nombre: "Juego de Cuchillos", precio: 2500, colore: ["negro", "rojo", "plateado"] },
        { nombre: "Sartén Antiadherente", precio: 2000, colore: ["negro", "gris", "azul"] },
        { nombre: "Tabla de Cortar de Bambú", precio: 1000, colore: ["marrón", "natural"] },
    ]
];

//saludo de bienvenida al usuario 

let saludo = alert("Bienvenido a IndieHome.")

// pedir al usuario que elija una categoría
const categoriaElegida = parseInt(prompt("Ingrese el número de la categoría que desea ver:\n1. Productos de Dormitorio\n2. Productos de Baño\n3. Productos de Cocina"));

// verificar la selección del usuario y mostrar los productos correspondientes
switch (categoriaElegida) {
    case 1:
        mostrarProductos(productosDeDormitorio);
        break;
    case 2:
        mostrarProductos(productosDeBaño);
        break;
    case 3:
        mostrarProductos(productosDeCocina);
        break;
    default:
        alert("Opción no válida. Por favor ingrese un número válido de categoría.");
}

// función para mostrar los productos de una categoría
function mostrarProductos(categoria) {
    let listaProductos = "Productos de la categoría:\n";
    categoria.forEach(producto => {
        listaProductos += `- ${producto.nombre}\n`;
    });
    alert(listaProductos);

    const productosElegidos = [];
    let continuarComprando = true;

    while (continuarComprando) {
        const productoElegido = prompt("Ingrese el nombre del producto que desea comprar (o 'fin' para terminar):");
        if (productoElegido.toLowerCase() === 'fin') {
            continuarComprando = false;
        } else {
            const productoEncontrado = categoria.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());
            if (productoEncontrado) {
                productosElegidos.push(productoEncontrado);
            } else {
                alert("El producto ingresado no se encuentra en la lista.");
            }
        }
    }
}