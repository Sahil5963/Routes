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

const chipSetEl = document.querySelector(".mdc-chip-set");
if (chipSetEl) {
  const chipSet = new MDCChipSet(chipSetEl);

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
    });
  }

  chipSet.listen("MDCChip:removal", function (event) {
    chipSetEl.removeChild(event.detail.root);
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

function initializeSnackbar(el) {
  if (el) {
    return new MDCSnackbar(el);
  }
}

const formSubmitSuccessSnackbar = initializeSnackbar(
  document.querySelector("#form-submit-success-snackbar")
);
const formSubmitFailSnackbar = initializeSnackbar(
  document.querySelector("#form-submit-fail-snackbar")
);

if (formSubmitSuccessSnackbar) {
  window.setTimeout(() => {
    console.log("I am on");
    formSubmitSuccessSnackbar.timeoutMs = 4000;
    const div = document.createElement('div');
    div.innerHTML = `<div class="mdc-snackbar custom-sanckbar custom-sanckbar--success" id="form-submit-success-snackbar">
      <div class="mdc-snackbar__surface custom-sanckbar__surface">
        <div class="custom-sanckbar__icon">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
            <circle class="path circle" fill="#fff" cx="65.1" cy="65.1" r="62.1" />
            <polyline class="path check" fill="none" stroke="#2CB10C" stroke-width="8" stroke-linecap="round"
              stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
          </svg>
        </div>
        <div class="mdc-snackbar__label custom-sanckbar__label" role="status" aria-live="polite">
          Data Added Succesfully !
        </div>
        <div class="mdc-snackbar__actions custom-sanckbar__actions">
          <button class="mdc-icon-button mdc-snackbar__dismiss material-icons custom-sanckbar__dismiss"
            title="Dismiss">close</button>
        </div>
      </div>
    </div>`;

    console.log(div);
    formSubmitSuccessSnackbar.open();
    document.querySelector('main').appendChild(div);

  }, 1000);
}

// if (formSubmitFailSnackbar) {
//   window.setTimeout(() => {
//     console.log("I am on");
//     formSubmitFailSnackbar.timeoutMs = 4000;
//     formSubmitFailSnackbar.open();
//   }, 6000);
// }


const deleteTableRecordDialogs = [...document.querySelectorAll("#delete-table-row")].map(el => new MDCDialog(el));

const deleteTableRecordButtons = document.querySelectorAll("#delete-table-record"); // delete-table-record



if (deleteTableRecordButtons.length) {

  for (let i = 0; i < deleteTableRecordDialogs.length; i++) {
    deleteTableRecordButtons[i].addEventListener('click', e => {
      e.preventDefault();
      deleteTableRecordDialogs[i].open();
    })


  }

}