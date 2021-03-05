import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  version = VERSION.major;

  tasks: any[] = [];
  hasTask = false;
  constructor() {}
  getClass() {
    return this.version == "11" ? "bold" : "green";
  }

  generateTaskList() {
    this.tasks = [];
    for (var i = 1; i < 12; i++) {
      this.tasks.push("Task" + i);
    }
    this.hasTask = this.tasks.length > 0;
  }
}
