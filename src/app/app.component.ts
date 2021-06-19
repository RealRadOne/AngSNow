import { Component } from '@angular/core';
import { FavoriteComponent } from 'src/app/favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'AngSNow';
  //Defining a POST Object
  post = {
    title: "title",
    isFavorite: true
  }

  onFavoriteChange(){
    console.log("Favourite");
  }
}
