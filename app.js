const { guardarDB, leerDB } = require("./helpers/gurdarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  opt = 10;
  const tareas = new Tareas(leerDB );
  do {
    console.clear();
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
 
        break;
      case 2:
        console.log(tareas.listadoArr);
        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt != 0);
};
main();
