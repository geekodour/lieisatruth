import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <article className="cf ph3 ph5-ns pv5">
        <header className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2"> Lie is a Truth </h1>
          <div className="">
            <form className="bg-light-yellow mw7 center pa4 br2-ns">
              <fieldset className="cf bn ma0 pa0 mb3">
                <div className="cf">
                  <label className="clip">lie</label>
                  <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns" placeholder="enter your lie" type="text" name="lie" id="lie"/>
                </div>
              </fieldset>
              <fieldset className="cf bn ma0 pa0 mb3">
                <legend className="ttu f5 b">Check proofs to generate</legend>
                <div className="cf">
                    <div class="flex items-center mb2">
                      <input class="mr2" type="checkbox" id="spacejam" value="spacejam"/>
                      <label for="spacejam" class="lh-copy">agent orange tweet</label>
                    </div>
                    <div class="flex items-center mb2">
                      <input class="mr2" type="checkbox" id="airbud" value="airbud"/>
                      <label for="airbud" class="lh-copy">feku tweet</label>
                    </div>
                    <div class="flex items-center mb2">
                      <input class="mr2" type="checkbox" id="airbud" value="airbud"/>
                      <label for="airbud" class="lh-copy">fake god wikipedia page</label>
                    </div>
                    <div class="flex items-center mb2">
                      <input class="mr2" type="checkbox" id="airbud" value="airbud"/>
                      <label for="airbud" class="lh-copy">certificate of truth</label>
                    </div>
                </div>
              </fieldset>

              <fieldset className="cf bn ma0 pa0 mb3">
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 br2-ns" type="submit" value="Generate"/>
              </fieldset>

            </form>
          </div>
          <span className="f6 tracked gray">by @geekodour - opensourced</span>
        </header>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure mt0-ns">
            something can be read with ease, but the average reader will rebel at
            once when the type is too small or otherwise irritates the eye; both are
            signs of a certain illegibility already.
          </p>
        </div>
      </article>
      </div>
    );
  }
}

export default App;
