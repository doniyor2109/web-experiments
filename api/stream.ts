import { createReadStream } from 'fs';
import { join } from 'path';
import { VercelApiHandler } from '@vercel/node';

const main: VercelApiHandler = async (req, res) => {
  const readStream = createReadStream(join(__dirname, 'big-text.txt'));
  readStream.pipe(res);
};

module.exports = main;
