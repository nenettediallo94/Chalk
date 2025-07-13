import chalk from 'chalk';     
import direSalut from 'petitpackage'; 


console.log(chalk.blue('Texte en bleu !'));
console.log(chalk.red.bold('Texte rouge et gras !'));
console.log(chalk.green('Ceci est un message en vert.'));
console.log(chalk.yellow.bgRed('Attention : fond rouge, texte jaune !'));

direSalut('Nenette'); 