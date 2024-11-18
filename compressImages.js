import { Rino } from 'rinojs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

async function compressImages()
{
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    await Rino.compressImages(path.resolve(__dirname, "./public_images"), path.resolve(__dirname, "./public/images"), 70);
}

compressImages();