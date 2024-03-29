import * as model from "./model.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import listView from "./views/listView.js";
import formView from "./views/formView.js";
import themeView from "./views/themeView.js";

const controlDownload = function () {
  if (!model.state.ingredientsList[0]) return;

  // Create a new style element
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
    .list__shopping-list, .list__item { color: black; background-color: white; }
    .list__options { display: none; }
  `;
  document.head.appendChild(style);

  const opt = {
    margin: 1,
    filename: "shoppingList.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Generate PDF
  html2pdf()
    .set(opt)
    .from(listView.listToDownload)
    .toPdf()
    .get("pdf")
    .save()
    .then(function () {
      // Remove the injected style after generating the PDF
      document.head.removeChild(style);
    });
};

const controlList = function () {
  if (!model.state.ingredientsList[1]) return;
  listView.render(model.state.ingredientsList);
};

const controlClearList = function (view) {
  // if (!model.state.ingredientsList[1]) return;
  model.clearIngredients();

  if (view === "listView") listView.renderMessageInsideList();

  if (view === "formView") formView.clearForm();
};

const controlResetList = function () {
  // if (!model.state.ingredientsList[1]) return;
  model.clearIngredients();

  formView.clearForm();
  listView.render(model.state.ingredientsList);
  listView.renderMessageInsideList();
};

const controlCheckItem = function (ingredient) {
  // console.log(ingredient);
  model.removeIngredient(ingredient);

  if (!model.state.ingredientsList[1]) {
    listView.renderMessageInsideList();
    return;
  }
  listView.render(model.state.ingredientsList);
};

const controlEditList = function () {
  if (!model.state.ingredientsList[1]) {
    formView.render(["", ""]);
    return;
  }
  formView.render(model.state.ingredientsList);
};

const controlRemoveItem = function (item) {
  formView.removeListItem(item);
};

const controlAddItem = function () {
  formView.addListItem();
};

const controlSubmitForm = function (formData) {
  // console.log(formData);
  model.submitListData(formData);

  if (!model.state.ingredientsList[1]) {
    listView.renderMessageInsideList();
    return;
  }
  listView.render(model.state.ingredientsList);
};

const controlTheme = function (actualTheme) {
  let newTheme = "light";
  if (actualTheme === "light") newTheme = "dark";
  model.changeTheme(newTheme);
  themeView.setTheme(newTheme);
};

const initTheme = function () {
  themeView.setTheme(model.state.theme);
};

const init = function () {
  listView.addHandlerRenderList(controlList);
  listView.addHandlerCheck(controlCheckItem);
  listView.addHandlerDownload(controlDownload);
  listView.addHandlerEditList(controlEditList);
  listView.addHandlerClear(controlClearList);
  listView.addHandlerReset(controlResetList);
  formView.addHandlerClear(controlClearList);
  formView.addHandlerAddItem(controlAddItem);
  formView.addHandlerRemoveItem(controlRemoveItem);
  formView.addHandlerSubmit(controlSubmitForm);

  formView.addHandlerDragover();
  formView.addHandlerDragstart();
  formView.addHandlerDragend();
  formView.addHandlerOnFocus();
  formView.addHandlerOnBlur();
  themeView.addHandlerChangeTheme(controlTheme);
  initTheme();
};
init();
