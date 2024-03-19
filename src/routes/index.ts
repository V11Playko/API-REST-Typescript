import { Router } from "express";
import { readdirSync } from "fs";
import { resolve } from "path";

const ROUTES_DIR = resolve(__dirname);

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split(".").shift();
    return file;
};

readdirSync(ROUTES_DIR).forEach((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName && cleanName !== "index") {
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