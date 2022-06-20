
const yargs = require('yargs');
const notes = require('./notes');
//customize yargs version....
yargs.version('1.0.0');

// creat or add commands
yargs.command({
   command: 'add',
   describe: 'Add a new Note',
   builder: {
      title: {
         describe: 'title of Notes',
         type: 'string',
         demandOption: 'true'
      },
      body: {
         describe: 'body of Note',
         type: 'string',
         demandOption: 'true'
      }
   },
   handler: function (argv) {
      notes.addnotes(argv.title, argv.body);
   }
})

yargs.command({
   command: "delete",
   describe: "Delete's the  Notes",
   builder: {
      title: {
         describe: 'title of Notes',
         type: 'string',
         demandOption: 'true'
      },
   },
   handler(argv) {
      notes.deletenotes(argv.title);
   }
})

yargs.command({
   command:"list",
   describe:"List ur Notes",
  handler(){
     notes.listnotes();
  }
})

yargs.command({
   command:"read",
   describe:"Read ur Notes",
   builder: {
      title: {
         describe: 'title of Notes',
         type: 'string',
         demandOption: 'true'
      },
   },
   handler(argv){
      notes.readnotes(argv.title);
   }
})

// yargs.argv;  or
yargs.parse();
// console.log(yargs.argv);