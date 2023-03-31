const yargs = require("yargs");
const { addNote, printNotes, removeNotes } = require("./notes.controller");

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      type: "string",
      describe: "Note Title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Show notes list",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    id: {
      type: "string",
      describe: "Note unique ID",
      demandOption: true,
    },
  },
  async handler({ id }) {
    removeNotes(id);
  },
});

yargs.parse();
