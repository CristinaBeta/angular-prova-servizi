import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';

@Component({
  selector: 'app-typeahead-search',
  templateUrl: './typeahead-search.component.html',
  styleUrls: ['./typeahead-search.component.css']
})
export class TypeaheadSearchComponent implements OnInit {

  public search1 = '';
  public search2 = '';
  public url = 'http://localhost:5000/dropdown';
  public search4 = '';

  public myLocalList = [
    "Burgers",
    "Sandwiches",
    "French Fries",
    "Milkshakes",
    "Taco",
    "Biscuit",
    "Cookies",
    "Hot Dog",
    "Pizza",
    "Pancake"
  ];
 
  public myLocalDataList2 = [
    {
      name: "Burgers", 
      description: "A flat round cake of minced beef that is fried or grilled and typically served in a bread roll; a hamburger."
    }, {
      name: "Sandwiches", 
      description: "an item of food consisting of two pieces of bread with a filling between them, eaten as a light meal."
    }, {
      name: "French Fries", 
      description: "French fries, or simply fries; chips, finger chips, or french-fried potatoes are batonnet or allumette-cut deep-fried potatoes"
    }, {
      name: "Milkshakes", 
      description: "a cold drink made of milk, a sweet flavouring such as fruit or chocolate"
    }, {
      name: "Taco", 
      description: "a Mexican dish consisting of a folded or rolled tortilla filled with various mixtures, such as seasoned mince, chicken, or beans."
    }, {
      name: "Biscuit", 
      description: "a small baked unleavened cake, typically crisp, flat, and sweet."
    }, {
      name: "Cookies", 
      description: "a sweet biscuit."
    }, {
      name: "Hot Dog", 
      description: "The hot dog or dog is a grilled or steamed link-sausage sandwich where the sausage is served in the slit of a partially sliced bun."
    }, {
      name: "Pizza", 
      description: "Pizza is a savory dish of Italian origin."
    }, {
      name: "Pancake", 
      description: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter."
    }
  ];

  public myDataList = []

  constructor(private getService: GetService) { }

  ngOnInit(): void {
    this.getService.ottieniDati()
    .subscribe(result => {
      this.myDataList=result;
    });
  }
  
  selectedStatic(result: string) {
    this.search1 = result;
  }

  selectedTempStatic(item: string) {
    this.search2 = item;
  }

  listaDaJson(item: string) {   
    this.search4 = item;
  }

  //esempio con matAutocomplete
  //https://stackblitz.com/angular/yoborgpykbm?file=src%2Fapp%2Fautocomplete-plain-input-example.ts
}
