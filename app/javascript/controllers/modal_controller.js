import { Controller } from "@hotwired/stimulus";
import { enter, leave } from "el-transition";

export default class extends Controller {
  static targets = ["closeButton"];
  connect() {
    document.getElementById("modal").addEventListener("click", (event) => {
      const modalPanelClicked = document
        .getElementById("modal-panel")
        .contains(event.target);
      if (!modalPanelClicked && event.target.id !== "modal-trigger") {
        this.closeModal();
      }
    });

    this.closeButtonTarget.addEventListener("click", this.closeModal);
  }

  closeModal(event) {
    leave(document.getElementById("modal"));
    leave(document.getElementById("modal-backdrop"));
    leave(document.getElementById("modal-panel"));
  }

  openModal() {
    enter(document.getElementById("modal"));
    enter(document.getElementById("modal-backdrop"));
    enter(document.getElementById("modal-panel"));
  }
}
