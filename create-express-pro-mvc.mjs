#!/usr/bin/env node

import fs from 'fs-extra';
import chalk from 'chalk';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const currentDir = process.cwd();
const targetDir = process.argv[2];

if (!targetDir) {
  console.log(chalk.red('⚠️  Debés indicar el nombre del nuevo proyecto.'));
  console.log(chalk.yellow('Ejemplo: npx create-express-pro-mvc mi-app'));
  process.exit(1);
}

const templatePath = path.join(__dirname, 'express-pro-mvc');
const newProjectPath = path.join(currentDir, targetDir);

fs.copy(templatePath, newProjectPath)
  .then(() => {
    console.log(chalk.green(`✅ Proyecto creado en: ${newProjectPath}`));
    console.log(chalk.blue('👉 Ejecutá estos comandos:'));
    console.log(chalk.cyan(`cd ${targetDir}`));
    console.log(chalk.cyan('npm install'));
    console.log(chalk.cyan('npm run dev'));
  })
  .catch(err => {
    console.error(chalk.red('❌ Error al copiar la plantilla:'), err);
  });