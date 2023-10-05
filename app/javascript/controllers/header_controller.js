import { Controller } from "@hotwired/stimulus";
import { toggle } from "el-transition";

export default class extends Controller {
  static targets = ["dropdownBtn", "authBtn"];

  connect() {
    this.dropdownBtnTarget.addEventListener("click", this.toggleDropdownMenu);

    this.authBtnTargets.forEach((target) => {
      target.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("modal-trigger").click();
      });
    });
  }

  toggleDropdownMenu() {
    toggle(document.getElementById("dropdown-menu"));
  }
}
