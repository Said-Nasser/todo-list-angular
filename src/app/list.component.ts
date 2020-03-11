import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'td-list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    items: string[];
    
    constructor() {
        this.items = [
            "item one",
            "item two"
        ]
    }
    add(event,text: string) {
        event.preventDefault()
        if (text === "" || text === " ") {
            return 
        } else {
            this.items.push(text)
            event.target[0].value = ""
        }
    }
    delete(id: number) {
        this.items = this.items.filter((item, i) => id !== i)
    }
    save([text, id]) {
        this.items = this.items.map((item, i) => {
            return id === i ? text : item
        })
    }
}