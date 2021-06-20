import chalk from 'chalk';
import { AwesomeLogger } from './awesome-logger';
import { AwesomeChecklistLoggerState } from './logger/models/config/checklist';

// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yaaas\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yaaas\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.green(' yaaas\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yaaas\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yaaas\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yeees\nnext line\n\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yeees\nnext line\neven one more') });
// AwesomeLogger.log('text', { text: chalk.red('yee') + chalk.yellow(' yeees\nnext line\neven \none \nmore') });
// AwesomeLogger.log('text', { text: chalk.red('awdawd\nsecondline') + chalk.yellow(' awdawdawd') });

const ctrl = AwesomeLogger.log('text', { text: chalk.red('yee') });
ctrl.setText('nope');

// const spin1 = AwesomeLogger.create('spinner', {
//   text: ' My text',
//   spinnerDelay: 75,
//   spinnerFrames: ['▄', '■', '▀', '▀', '■']
// });
// const prog1 = AwesomeLogger.create('progress', { totalProgress: 100, maxWidth: 100 });

// AwesomeLogger.log('multi', { children: [spin1, prog1] });

// setInterval(() => {
//   prog1.setProgress(Math.random() * 100);
// }, 100);

const checklistLogger = AwesomeLogger.log('checklist', {
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
    return { text: `item${x}`, state: 'pending' as AwesomeChecklistLoggerState };
  })
});

setInterval(() => {
  checklistLogger.changeState(Math.round(Math.random() * 9), 'succeeded');
}, 100);
