
alert("Éste algoritmo muestra los resultados por console.log")

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const producto1 = new Producto("Teclado Gamer", 12000);
  const producto2 = new Producto("PC de escritorio", 240000);
  const producto3 = new Producto("Televisor 50 pulgadas", 80000);
  const producto4 = new Producto("Placa de video", 190000);
  const producto5 = new Producto("Monitor Gamer", 65000);
  const producto6 = new Producto("Notebook", 260000);
  const producto7 = new Producto("Auriculares Gamer", 8000);
  const producto8 = new Producto("Mouse Gamer", 17000);


  const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7,producto8];
  

  const productosMayuscula = productos.map((producto) => {
    return producto.nombre.toUpperCase();
  });
  
  console.log("Nombres de los productos transformados a mayúsculas con funcion .map:", productosMayuscula);
  
  const productosMayoresA20k = productos.filter((producto) => {
    return producto.precio > 20000;
  });
  

  
 
  console.log("Nombres y precios de los productos mayores a $20.000 usando forEach:");
  productosMayoresA20k.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio);
  });

