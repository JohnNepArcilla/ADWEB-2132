import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
studentArr: any[] = [{
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
},
{
  "id":"HOM005",
  "name": "OXGN Haikyu!! Karasuno Track Shorts With Graphic Print For Men (Black)",
  "details": "Complete your sports outfit with with these fashionable and comfy pair of Karasuno shorts! The number “10” is the jersey number of the team’s strongest decoy.",
  "price": "P799",
  "prodName": "assets/haikyu9.jpg"
},
{
  "id":"HOM006",
  "name": "OXGN Haikyu!! Karasuno Bum Bag With Tubing Waist Pack For Men (Black)",
  "details": "Show your love for Karasuno, a former powerhouse which flew its way back to the top, by keeping this bum bag with you. This bag features a graphic print on the front panel.",
  "price": "P449",
  "prodName": "assets/Haikyu7.jpg"
}];
trackByData(index:number, studentArr: { id: number; }){
  return studentArr.id;
}
}
