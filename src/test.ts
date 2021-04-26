import { AwesomeLogger } from './awesome-logger';
import { AwesomeChecklistLoggerState } from './logger/models/config/checklist';

// AwesomeLogger.log('text', { text: { text: 'awd', color: 'CYAN' } });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// AwesomeLogger.logText({ text: 'awd', color: 'GREEN' });
// const line1 = AwesomeLogger.create('text', {
//   text: { text: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15', color: 'GREEN' }
// });
// const line2 = AwesomeLogger.create('text', { text: { text: 'awd\nawd2awd3', color: 'GREEN' } });
// const prog1 = AwesomeLogger.create('progress', { totalProgress: 100, filledColor: 'GREEN', maxWidth: 100 });
// const spin1 = AwesomeLogger.create('spinner', {
//   text: ' My text',
//   spinnerDelay: 75,
//   spinnerFrames: ['▄', '■', '▀', '▀', '■'],
//   spinnerColor: 'MAGENTA'
// });
// const line2 = AwesomeLogger.create('text', { text: [{ text: 'awd\nawd2awd3', color: 'GREEN' }] });
// const prog2 = AwesomeLogger.create('progress', { totalProgress: 100, filledColor: 'GREEN', maxWidth: 100 });
// const spin2 = AwesomeLogger.create('spinner', {
//   text: ' My text',
//   spinnerDelay: 75,
//   spinnerFrames: ['▄', '■', '▀', '▀', '■'],
//   spinnerColor: 'MAGENTA'
// });

// AwesomeLogger.restrictedLogging = true;

// const multi1 = AwesomeLogger.log('multi', { children: [line1, line2, prog1, spin1] });
// const multi2 = AwesomeLogger.log('multi', { children: [line2, prog2, spin2] });
// const multi = AwesomeLogger.log('multi', { children: [multi1, multi2] });

// line2.setText('\n\n\n\n\ntest');

// setInterval(() => {
//   prog1.setProgress(Math.round(Math.random() * 100));
//   // prog2.setProgress(Math.round(Math.random() * 100));
// }, 1000);
// let i = 1;
// setInterval(() => {
//   line1.setText(`awdNew${`\nline${i}`.repeat(i)}`);
//   i++;
//   if (i > 5) {
//     i = 0;
//   }
// }, 2000);
// let i2 = 1;
// setInterval(() => {
//   line2.setText(`awdNew${`\nline${i2}`.repeat(i2)}`);
//   i2++;
//   if (i2 > 5) {
//     i2 = 0;
//   }
// }, 3000);
// let i3 = 0;
// setInterval(() => {
//   AwesomeLogger.interrupt('text', { text: { text: `bla${i3}`, color: 'RED' } });
//   i3++;
// }, 5000);

// const res = AwesomeLogger.prompt('text', {
//   text: 'yeeeeeeeeeee',
//   autoComplete: ['yeeeeee', 'awdware', 'nice story'],
//   fuzzyAutoComplete: true,
//   validator: (a: string) => a.endsWith('yee')
// });
// res.result.then(r => AwesomeLogger.logText({ text: r, color: 'RED' }));

const a = AwesomeLogger.prompt('toggle', {
  options: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth']
});

a.result.then(x => {
  AwesomeLogger.logText(x[0]);
});

// const checklistLogger = AwesomeLogger.log('checklist', {
//   items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
//     return { text: `item${x}`, state: 'pending' as AwesomeChecklistLoggerState };
//   })
// });

// setInterval(() => {
//   checklistLogger.changeState(Math.round(Math.random() * 9), 'succeeded');
// }, 100);

// setInterval(() => {
//   AwesomeLogger.interrupt('text', { text: { text: 'hi\nthis\nis\na\ntest' } });
// }, 200);

// let i = 0;
// const prog = AwesomeLogger.log('progress', {
//   text: { text: 'Installing stuff', color: 'BLUE' },
//   completedText: { text: 'Stuff installed successfully', color: 'GREEN' },
//   maxWidth: 30
// });

// const interval2 = setInterval(() => {
//   AwesomeLogger.interrupt('text', {
//     text: { text: `Installing chunk ${Math.random()}`, color: 'GRAY' }
//   });
// }, 40);

// const interval1 = setInterval(() => {
//   i += Math.floor(Math.random() * 10);
//   if (i >= 100) {
//     clearInterval(interval2);
//     clearInterval(interval1);
//   }
//   prog.setProgress(i >= 100 ? 100 : i);
// }, 100);
