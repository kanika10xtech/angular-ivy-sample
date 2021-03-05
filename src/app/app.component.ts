import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  version = VERSION.major;

  getClass() {
    return this.version == "11" ? "bold" : "green";
  }
}
