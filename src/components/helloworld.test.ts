import { expect } from 'chai';
import { HelloWorld } from '@helloWorld';

describe('hello world component', () => {
  it('should render hello world', () => {
   
    customElements.define("hello-world", HelloWorld);

    var sut = document.createElement("hello-world");
    document.body.append(sut);

    expect(sut.innerHTML).to.equal("<div>Hello World</div>");
  });
});