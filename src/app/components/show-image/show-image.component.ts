import { Component } from '@angular/core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent {
  iconsNames: string[] = Object.keys(Icons);
  iconProp = Icons.fa0;
  hidden = true;


  ngOnInit() {}

  constructor() {}

  showRandomImage() {
    setTimeout(() => {
      if (this.hidden) {
        this.hidden = false;
      }
      const randomNumber = Math.floor(Math.random() * this.iconsNames.length);
      const iconName = this.iconsNames[randomNumber];
      this.iconProp = Icons[iconName];
    }, 3000);
  }
}

