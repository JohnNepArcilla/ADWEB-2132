import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {


  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  serviceproperty = "Service created";

  allproducts(){
    return  [{
      "id":"HOM001",
      "name": "OXGN Haikyu!! Karasuno Slim Tapered Track Pants With Graphic Print For Men (Black)",
      "details": "After you’ve cooled down from volleyball practice, these Karasuno track pants will complete your courtside outfit! The zip pockets offer a nice touch ",
      "price": "P899",
      "prodName": "assets/haikyu10.jpg"
    },
    {
      "id":"HOM002",
      "name": "OXGN Haikyu!! Hinata Crow Coin Purse With Wristlet (Navy Blue)",
      "details": "What he lacks in height, he makes up with skill and determination. Have our favorite Chibi-chan, Shoyo Hinata, with you everywhere you go with this.",
      "price": "P249",
      "prodName": "assets/haikyu2.jpg"
    },
    {
      "id":"HOM003",
      "name": "OXGN Haikyu!! Aces Unisex Graphic Pullover (Black)",
      "details": "We love to see our aces in action! Now we have all our favorite MVPs together in one graphic pullover, we can ace the day with style and comfort.",
      "price": "P749",
      "prodName": "assets/haikyu3.jpg"
    },
    {
      "id":"HOM004",
      "name": "OXGN Haikyu!! Kageyama Jersey Curved Cap With Embroidery (Navy Blue)",
      "details": "This number 9 curved cap is for Karasuno's talented setter and the King of the Court, Tobio Kageyama. This navy blue curved cap features a white .",
      "price": "P399",
      "prodName": "assets/haikyu8.jpg"
    }];
  }
}
