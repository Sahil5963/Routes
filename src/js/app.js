import mdcAutoInit from '@material/auto-init';

import {
  MDCTopAppBar
} from "@material/top-app-bar/index";
import {
  MDCRipple
} from "@material/ripple";
import {
  MDCTextField
} from "@material/textfield";
import {
  MDCSelect
} from "@material/select";

import {
  MDCList
} from "@material/list";
import {
  MDCNotchedOutline
} from "@material/notched-outline";

import {
  MDCFormField
} from "@material/form-field";
import {
  MDCRadio
} from "@material/radio";

import {
  MDCCheckbox
} from '@material/checkbox';

import {
  MDCDialog
} from "@material/dialog";
import {
  MDCChipSet
} from "@material/chips";
import {
  MDCSnackbar
} from "@material/snackbar";

const iconButtonRipple = [].map.call(
  document.querySelectorAll(".mdc-icon-button"),
  function (el) {
    return new MDCRipple(el);
  }
);

iconButtonRipple.forEach(iconButtonRipple => {
  iconButtonRipple.unbounded = true;
});

const dialogs = [].map.call(document.querySelectorAll(".mdc-dialog"), function (
  el
) {
  return new MDCDialog(el);
});

const radio = [].map.call(document.querySelectorAll(".mdc-radio"), function (
  el
) {
  return new MDCRadio(el);
});

const notchedOutlines = [].map.call(
  document.querySelectorAll(".mdc-notched-outline"),
  function (el) {
    return new MDCNotchedOutline(el);
  }
);

const selectFields = [].map.call(
  document.querySelectorAll(".mdc-select"),
  function (el) {
    return new MDCSelect(el);
  }
);

const lists = [].map.call(document.querySelectorAll(".mdc-list"), function (el) {
  return new MDCList(el);
});

const textFields = [].map.call(
  document.querySelectorAll(".mdc-text-field"),
  function (el) {
    return new MDCTextField(el);
  }
);

const buttonRipples = [].map.call(
  document.querySelectorAll(".mdc-button"),
  function (el) {
    return new MDCRipple(el);
  }
);

const topAppBarElement = document.querySelector(".mdc-top-app-bar");
if (topAppBarElement) {
  const topAppBar = new MDCTopAppBar(topAppBarElement);
}

// Forms Pages

// const chips = [].map.call(document.querySelectorAll('.mdc-chip-set'), function (el) {
//   new MDCChipSet(el);
// });

// const chipSetEl = document.getElementById('form-page-chip-add-seat-type');
// console.log(chipSetEl);

const formPageAddSeatValue = document.getElementById(
  "form-page-add-seat-value"
);
const formPageAddSeatBtn = document.getElementById("form-page-add-seat-btn");

// formPageAddSeatValue.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter' || event.keyCode === 13) {
//     const chipEl = document.createElement('div');
//     // ... perform operations to properly populate/decorate chip element ...
//     chipSetEl.appendChild(chipEl);
//     chipSet.addChip(chipEl);
//   }
// });

let addedSeatTypes = [];


const chipSetEl = document.querySelector("#form-page-chip-set-add-seat-type");
export const chipSet = new MDCChipSet(chipSetEl);
if (chipSetEl) {
  const addedSeatTypesInput = document.querySelector('#added-seat-types');

  if (formPageAddSeatValue && formPageAddSeatBtn) {



    formPageAddSeatBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const chipEl = document.createElement("div");
      chipEl.classList.add("mdc-chip", "add-seat-type-chip");
      chipEl.innerHTML = `<div class="mdc-chip__text">${
        formPageAddSeatValue.value
      }</div>
    <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabindex="0" role="button">cancel</i>`;

      chipSetEl.appendChild(chipEl);
      chipSet.addChip(chipEl);

      formPageAddSeatValue.value = "";

      if (addedSeatTypesInput) {
        addedSeatTypesInput.setAttribute('data-added-seat-types', chipSet.chips.map(el => el.root_.firstElementChild.textContent));
      }



    });
  }

  chipSet.listen("MDCChip:removal", function (event) {
    chipSetEl.removeChild(event.detail.root);
    if (addedSeatTypesInput) {
      addedSeatTypesInput.setAttribute('data-added-seat-types', chipSet.chips.map(el => el.root_.firstElementChild.textContent));
    }

  });





}





// Add Seat Type Chip Dialog

const initialiseDialog = dialogEl => {
  if (dialogEl) {
    return new MDCDialog(dialogEl);
  }
};

const addSeatTypeDialogEl = document.querySelector(".mdc-dialog");
const addSeatTypeDialog = initialiseDialog(addSeatTypeDialogEl);

const addSeatTypeBtn = document.getElementById("add-seat-type-btn");

if (addSeatTypeBtn) {
  addSeatTypeBtn.addEventListener("click", e => {
    e.preventDefault();
    addSeatTypeDialog.open();
  });
}



const deleteTableRecordDialogs = [
  ...document.querySelectorAll("#delete-table-row")
].map(el => new MDCDialog(el));

const deleteTableRecordButtons = document.querySelectorAll(
  "#delete-table-record"
); // delete-table-record

if (deleteTableRecordButtons.length) {
  for (let i = 0; i < deleteTableRecordDialogs.length; i++) {
    deleteTableRecordButtons[i].addEventListener("click", e => {
      e.preventDefault();
      deleteTableRecordDialogs[i].open();
    });
  }
}



// mdcAutoInit.register('MDCTextField', MDCTextField);


// window.mdcAutoInit = mdcAutoInit;


// document.addEventListener("MDCAutoInit:End", () => {
//   console.log("Initialized")
// });

// window.mdcAutoInit();