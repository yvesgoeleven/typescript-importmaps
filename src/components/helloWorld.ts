import { message } from '@constants';

export class HelloWorld extends HTMLElement{
    connectedCallback()
    {
        this.innerHTML = `<div>${message}</div>`
    }
}