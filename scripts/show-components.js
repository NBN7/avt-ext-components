#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

// Get the filename and directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path of the components directory (relative to the script location)
const COMPONENTS_DIR = path.resolve(__dirname, '../src/components/ui');

function listComponents(dir) {
  const files = fs.readdirSync(dir);
  const components = [];

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      components.push(...listComponents(fullPath));
    } else if (
      stat.isFile() &&
      (file.endsWith('.tsx') || file.endsWith('.jsx'))
    ) {
      // Only .tsx or .jsx files
      components.push(
        path.relative(COMPONENTS_DIR, fullPath).replace(/\.tsx|\.jsx$/, '')
      );
    }
  });

  return components;
}

function showComponents() {
  try {
    const components = listComponents(COMPONENTS_DIR);

    if (components.length > 0) {
      console.log(chalk.whiteBright('\nAvailable components:'));
      components.forEach((component, index) => {
        const isLast = index === components.length - 1;
        console.log(chalk.greenBright(`- ${component} ${isLast ? '\n' : ''}`));
      });
    } else {
      console.log('\nNo available components yet.');
    }
  } catch (error) {
    console.error(chalk.redBright('Error:', error.message));
  }
}

showComponents();
