import { Component, OnInit } from '@angular/core';

import { PHRASES } from '../core/data/phrases';
import { IPhrase } from '../core/models/Iphrase';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  phrases: IPhrase[] = PHRASES.slice();
  objPhrase: IPhrase = { value: "", language: "" };

  constructor() {}

  ngOnInit(): void {}

  pushDataToArray(language: string, value: string): void {
    let tempObj: IPhrase = {value, language};
    this.phrases.push(tempObj);
    this.setDefaultObj(this.objPhrase);
  }

  setDefaultObj(obj: IPhrase): void {
    obj.value = "";
    obj.language = "";
  }
}
