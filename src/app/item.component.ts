import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'td-item',
    templateUrl: 'item.component.html'
})

export class ItemComponent {
    @Input() itemText: string;
    @Input() index: number;
    @Output() delete = new EventEmitter();
    @Output() add = new EventEmitter();
    @Output() save = new EventEmitter();

    editing: boolean;
    constructor() {
        this.editing = false
    }


    onDelete() {
        this.delete.emit(this.index)
    }
    onAdd() {
        this.add.emit()
    }
    onEdit() {
        this.editing = true
    }
    onSave(newText, index) {
        this.editing = false
        this.save.emit([newText, index])
    }
    toggleDone(event) {
        let p = event.target.parentNode.parentNode.querySelector('p')
        if (event.target.checked) {
            p.style.textDecoration = 'line-through'
            p.style.textDecorationColor = '#adb5bd'
            p.style.color =  '#adb5bd'
        } else {
            p.style.textDecoration = 'none'
            p.style.color =  '#000'
        }
    }

}
