#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";
import chalk from "chalk";

// get the filename of the current module
const __filename = fileURLToPath(import.meta.url);

// get the directory name of the current module
const __dirname = path.dirname(__filename);

// create an interface for reading and writing to the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to ask a question to the user
function askQuestion(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function installTableComponent() {
  // path to the source component file
  const sourcePath = path.resolve(__dirname, "../src/components/ui/table.tsx");

  // destination path for the component
  const targetPath = process.cwd();
  const targetComponentPath = path.join(
    targetPath,
    "src/components/ui/table.tsx"
  );

  try {
    // verify if the component already exists
    if (fs.existsSync(targetComponentPath)) {
      // ask the user to overwrite the component
      const answer = await askQuestion(
        `${chalk.whiteBright(
          "\nComponent table already exists."
        )} ${chalk.greenBright("Would you like to overwrite?")} ${chalk.gray(
          "» (y/N): "
        )}`
      );

      if (answer.toLowerCase() !== "y") {
        console.log(
          chalk.blueBright(
            "Skipped table. To overwrite, run the command again.\n"
          )
        );
        rl.close();
        return;
      }
    }

    // check if path exists, if not create it
    await fs.ensureDir(path.dirname(targetComponentPath));

    // copy the file to the destination
    await fs.copyFile(sourcePath, targetComponentPath);

    console.log(chalk.greenBright("\nDone! Table component installed.\n"));
  } catch (error) {
    console.error(
      chalk.redBright("\nError installing table component:", error)
    );
  } finally {
    rl.close();
  }
}

// execute the function
installTableComponent();
