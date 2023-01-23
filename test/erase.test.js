// this piece of code will make sure that my test will run on jsdom environment
/**
 * @jest-environment jsdom
 */

import { erase } from '../src/erase.js'; 
import expect from 'expect';

describe('Erase function', () => {
  it('should reset the form and clear the canvas', () => {
    // create an html elements that will use for mocking
    document.body.innerHTML = `
      <form id="myForm"></form>
      <canvas id="result"></canvas>
      <button id="download"></button>
    `;

    // this variable will be use for checking
    const spy = jest.spyOn(document, 'getElementById');
    
    const canvas = document.getElementById('result');
    
    // this variable will mock html element canvas and its method
    const mockContext = {
        clearRect: jest.fn()
      };
      canvas.getContext = jest.fn(() => mockContext);

    erase();
    
    // checking if the element form, canvas, and button with their given ID is being called or used.
    expect(spy).toHaveBeenCalledWith('myForm');
    expect(spy).toHaveBeenCalledWith('result');
    expect(spy).toHaveBeenCalledWith('download');

    // checking if the object canvas with the method of getContext has '2d' value.
    expect(canvas.getContext).toHaveBeenCalledWith("2d");
 
    // checking if the button with the id of download has a html attribute hidden.
    expect(download.getAttribute("hidden")).toBe("hidden");

    // checking if the canvas has clearRect with the given value. or it is in default display.
    expect(canvas.getContext().clearRect).toHaveBeenCalledWith(0,0, canvas.width, canvas.height);
  });
});



//This is test case reference that I've got from chatGPT
// import { erase, hideButton, canvas } from '../index.js';

// describe('Erase function', () => {
//   beforeEach(() => {
//     document.body.innerHTML = `
//       <form id="myForm"></form>
//       <canvas id="canvas"></canvas>
//       <button id="hideButton"></button>
//     `;
//     canvas = document.getElementById('canvas');
//     hideButton = document.getElementById('hideButton');
//     const mockContext = {
//       clearRect: jest.fn()
//     };
//     canvas.getContext = jest.fn(() => mockContext);
//   });

//   it('should reset the form and clear the canvas', () => {
//     const spy = jest.spyOn(document, 'getElementById');
//     erase();

//     expect(spy).toHaveBeenCalledWith('myForm');
//     expect(spy).toHaveBeenCalledWith('canvas');
//     expect(spy).toHaveBeenCalledWith('hideButton');
//     expect(canvas.getContext).toHaveBeenCalledWith("2d");

//     expect(hideButton.getAttribute("hidden")).toBe("hidden");
//     expect(canvas.getContext().clearRect).toHaveBeenCalledWith(0,0, canvas.width, canvas.height);
//   });
// });