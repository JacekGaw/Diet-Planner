import { moment } from "moment/moment";

export const generateFile = (shoppingList, plan) => {
    let listString = "";
    shoppingList.map((listItem, index) => {
        return (
        listString += `${index + 1}. ${listItem.ingredient}: ${listItem.value}${listItem.unit}
        `
        )});
  const dateCurrent = new Date().toLocaleDateString('de-DE');
  const template = `Shopping List ${dateCurrent}

    For plan: ${plan.title}
    Created at: ${new Date(plan.date_created).toLocaleDateString('de-DE')}
        
    Ingredients to buy:
        ${listString}
    `;

  const FileSaver = require("file-saver");
  let blob = new Blob([template], { type: "text/plain;charset=utf-8" });

  FileSaver.saveAs(blob, `shoppingList${dateCurrent}.txt`);
};
