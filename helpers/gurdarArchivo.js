const fs = require("fs");

const Tareas = require("../models/tareas");
const archivo = "./db/data.json";

const guardarDB = (data) => {

  data = JSON.stringify(data);
  fs.writeFileSync(archivo, data);
};

const leerDB=()=>{
  if(!fs.existsSync(archivo))return null;
  const info= fs.readFileSync(archivo,{encoding:'utf-8'})
  return info
}


module.exports = {
  guardarDB,
  leerDB
};
