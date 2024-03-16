import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(PATH_ROUTER).forEach((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        }).catch((error) => {
            console.error(`Error importing module ${cleanName}:`, error);
            // Deshabilitar la ruta en caso de error
            router.use(`/${cleanName}`, (_req, res, next) => {
                res.status(500).send("Internal Server Error");
            });
        });
    }
});

export { router };
