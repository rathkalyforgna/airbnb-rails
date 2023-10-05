import { Controller } from "@hotwired/stimulus";
import { enter, leave, toggle } from "el-transition";

export default class extends Controller {
  static targets = ["dropdownBtn"];

  connect() {
    this.dropdownBtnTarget.addEventListener("click", this.toggleDropdownMenu);
  }

  toggleDropdownMenu() {
    toggle(document.getElementById("dropdown-menu"));
  }
}
