import * as path from 'node:path';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

//нормалізація шляху (проставляє \ вфдповідно до системи)
//const contactPath = path.join(process.cwd(),"src","db", "db-contats.json")

//const contactPath = path.resolve("src", "db", "db-contats.json");
