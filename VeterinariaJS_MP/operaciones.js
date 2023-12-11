const fs = require('fs');

const registrar = (argumentos) => {
    const content = fs.readFileSync('citas.json');
    const nuevaCita = JSON.parse(content)
    nuevaCita.push({
        nombre: argumentos[1],
        edad: argumentos[2],
        tipo: argumentos[3],
        color: argumentos[4],
        enfermedad: argumentos[5]
    });
    fs.writeFileSync('citas.json', JSON.stringify(nuevaCita));
};

const leer = () => {
    const content = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(content);
};

const guia = () => {
    console.log(`
   
    En la aplicación de agendamiento de citas se pueden ejecutar los siguientes comandos:
   
    Para leer registros realizados: 
        
      ->  node index.js leer
   
    Para registrar nuevas citas: 
        
      ->  node index.js registrar 
   `);
};

const ejemplo_reg = () => {
    console.log(`
    Para agregar una nueva cita debes ingresar los siguientes datos:
      - Nombre
      - Edad
      - Tipo o especie
      - color
      - Enfermedad o sintomas

    El formato de ingreso es el siguiente: 

      ->  node index.js registrar Benito "1 años" perro blanco otitis
  `);
};

module.exports = { registrar, leer, guia, ejemplo_reg };