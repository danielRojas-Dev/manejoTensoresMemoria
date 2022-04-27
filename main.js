import * as tf from "@tensorflow/tfjs";

// Crear array de tensores
// Mostrar cuantos tensores y cuanta memoria se usa
// Crear otros 4 tensores dentro de un tf.tidy()
// Mostrar cuantos tensores y cuanta memoria se usa
// Marcar un tensor para que no se elimine al terminar el tidy
// Finalizar tidy
// Mostrar cuantos tensores y cuanta memoria se usa
// Eliminar un tensor con tf.dispose
// Mostrar cuantos tensores y cuanta memoria se usa
// Eliminar todo
// Mostrar cuantos tensores y cuanta memoria se usa

const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([4, 5, 6]);
const c = tf.tensor1d([7, 8, 9]);

console.log("a");
console.log("La cantidad de tensores es: ", tf.memory().numTensors);
console.log("La cantidad de memoria usada es: ", tf.memory().numBytes, "bytes");

tf.tidy(() => {
  const d = tf.tensor1d([10, 11, 12]);
  const e = tf.tensor1d([13, 14, 15]);
  const f = tf.tensor1d([16, 17, 18]);
  const g = tf.tensor1d([19, 20, 21]);

  console.log("b");

  console.log("La cantidad de tensores es: ", tf.memory().numTensors);
  console.log(
    "La cantidad de memoria usada es: ",
    tf.memory().numBytes,
    "bytes"
  );

  tf.keep(d);
  e.dispose();

  console.log("c");

  console.log("La cantidad de tensores es: ", tf.memory().numTensors);
  console.log(
    "La cantidad de memoria usada es: ",
    tf.memory().numBytes,
    "bytes"
  );
});
