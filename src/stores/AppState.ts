import { BehaviorSubject } from "rxjs";

class AppState {
  hoveredIconObservable = new BehaviorSubject<boolean>(false);

  public get hoveredIcon() {
    return this.hoveredIconObservable.value;
  }

  public set hoveredIcon(value: boolean) {
    this.hoveredIconObservable.next(value);
  }
}

export default new AppState();
