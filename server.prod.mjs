import path from 'path';
import cors from 'cors';
import express from 'express';

const APP = express();
const PORT = 8080;
const HOST = '0.0.0.0';
const CURRENT_WORKING_DIRECTORY = process.cwd();

APP.use(cors());
APP.use(express.static(path.join(CURRENT_WORKING_DIRECTORY, './build')));

APP.get('*', (req, res) => {
  res.sendFile(path.join(CURRENT_WORKING_DIRECTORY, './build/index.html'));
});

APP.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.info(`Production server running at: http://localhost:${PORT}/`);
});
