// this piece of code will make sure that my test will run on jsdom environment
/**
 * @jest-environment jsdom
 */

import { prev } from '../src/prev.js'; 
import expect from 'expect';
import { jest } from '@jest/globals';

describe('Prev Function', () => {
    it('should preview the data to canvas', () => {
      // create an html elements that will use for mocking
      document.body.innerHTML = `
        <form id="myForm"></form>
        <label>Company Name:</label>
            <input type="text" id="inCompany" placeholder="">
            <label>Name:</label>
            <input type="text" id="inName" placeholder="">
            <label>Position:</label>
            <input type="text" id="inPosition" placeholder="">
            <label>Email:</label>
            <input type="text" id="inEmail" placeholder="">
            <label>Phone Number:</label>
            <input type="text" id="inPhoneNumber" placeholder="">
        
        <canvas id="result">
            <div class="content">
                <header id="head">
                    <div class="camp">
                        <h4 id="company">Company</h4>
                    </div>
                </header>
            <img src="pp.png" id="imgDisplayed">
                <ul>
                Name: <li id="nameOwner"></li>
                Position: <li id="position"></li>
                Email: <li id="email"></li>
                Phone Number: <li id="phoneNumber"></li>
                </ul>  
            </div>
        </canvas>
        <button id="download"></button>
      `;
  
      // this variable will be use for checking
      const spy = jest.spyOn(document, 'getElementById');
      
      const image = document.getElementById("imgDisplayed");
      const canvas = document.getElementById('result');
      
      // this variable will mock html element canvas and its method
      const mockContext = {
          clearRect: jest.fn(),
          fillRect: jest.fn(),
          rect: jest.fn(),
          fill: jest.fn(),
          fillText: jest.fn(),
          drawImage: jest.fn()
        };
        canvas.getContext = jest.fn(() => mockContext);

    
    document.getElementById('inCompany').value = 'HirayaMNL';
    document.getElementById('inName').value = 'Justine';
    document.getElementById('inPosition').value = 'QA';
    document.getElementById('inEmail').value = 'paragasjustine@gmail.com';
    document.getElementById('inPhoneNumber').value = '09461982337';

    prev();
      
    // checking if the element form, canvas, and button with their given ID is being called or used.
    expect(spy).toHaveBeenCalledWith('inCompany');
    expect(spy).toHaveBeenCalledWith('inName');
    expect(spy).toHaveBeenCalledWith('inPosition');
    expect(spy).toHaveBeenCalledWith('inEmail');
    expect(spy).toHaveBeenCalledWith('inPhoneNumber');
    
    expect(spy).toHaveBeenCalledWith('company');
    expect(spy).toHaveBeenCalledWith('nameOwner');
    expect(spy).toHaveBeenCalledWith('position');
    expect(spy).toHaveBeenCalledWith('email');
    expect(spy).toHaveBeenCalledWith('phoneNumber');
  
    // checking if the object canvas with the method of getContext has '2d' value.
    expect(canvas.getContext).toHaveBeenCalledWith("2d");
   
    // checking if the button with the id of download hasn't a html attribute hidden.
    expect(download.getAttribute("hidden")).toBe(null);
  
    // checking if the canvas has all the fills that function Prev inputted.
    expect(canvas.getContext().fillRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
      
    expect(canvas.getContext().fillText).toHaveBeenCalledWith('HirayaMNL', 10, 25);
    expect(canvas.getContext().fillText).toHaveBeenCalledWith('Name: Justine', 90, 80);
    expect(canvas.getContext().fillText).toHaveBeenCalledWith('Position: QA', 90, 105);
    expect(canvas.getContext().fillText).toHaveBeenCalledWith('Email: paragasjustine@gmail.com', 90, 130);
    expect(canvas.getContext().fillText).toHaveBeenCalledWith('Phone Number: 09461982337', 90, 155);
    expect(canvas.getContext().drawImage).toHaveBeenCalledWith(image, 10, 65, 70, 95);
    });
  });
  