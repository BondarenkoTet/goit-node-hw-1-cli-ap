const {program} = require("commander");
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
    case "list":
        const allContacts = await contacts.listContacts();
        console.table(allContacts);
    break;

    case "get":
        const oneContacts = await contacts.getContactById(id);
        return console.log(oneContacts);

    case "add":
        const newContact = await contacts.addContact({name, email, phone}); 
        return console.log(newContact);

    case "remove":
        const delContact = await contacts.removeContact(id);
        return console.log(delContact);

    default:
        console.warn("\x1B[31m Unknown action type!");
    }
}

program
.option("-a, --action, <type>")
.option("-i, --id, <type>")
.option("-n, --name, <type>")
.option("-e, --email, <type>")
.option("-p, --phone, <type>")

program.parse();

const options = program.opts()
invokeAction(options);

//const arr = hideBin(process.argv);
//const {argv} = yargs(arr);
//invokeAction(argv);

invokeAction({action: "list"})
//invokeAction({action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw"})
//invokeAction({action: "add", name: "Den", email: "mattis@nonenimMauris.net", phone: "(542) 451-56565"})
//invokeAction({action: "remove", id:"05olLMgyVQdWRwgKfg5J6"})

//console.log(process.argv);