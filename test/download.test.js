/**
 * @jest-environment jsdom
 */

import { save } from '../src/download'; 
import expect from 'expect';
import { jest } from '@jest/globals';

describe('Save Function', () => {
    it('should download the canvas', () => {
      // create an html elements that will use for mocking
      document.body.innerHTML = `
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

      // this variable will be use for checking on console log
      const logMessage = jest.spyOn(global.console, 'log');

    save();
      
    // checking if the element form, canvas, and button with their given ID is being called or used.
    expect(spy).toHaveBeenCalledWith('result');
    expect(logMessage).toHaveBeenCalledWith('Download Successfull');
    expect(logMessage.mock.calls).toContainEqual(['Download Successfull']);
    
    logMessage.mockRestore();
    });
  });