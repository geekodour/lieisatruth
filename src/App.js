import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formData: {
        lie: '',
        options: []
      }
    }
    this.handleLie = this.handleLie.bind(this)
  }

  handleLie(event){
    this.setState({ formData: {
      ...this.state.formData,
      lie: event.target.value
    }})
  }

  handleOption = (event) => {
    if(event.target.checked){
      this.setState({ formData: {
        ...this.state.formData,
        options: [...this.state.formData.options, event.target.value]
      }})
    } else {
      this.setState({ formData: {
        ...this.state.formData,
        options: this.state.formData.options.filter((o)=>o!==event.target.value)
      }})
    }
  }

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
                  <input 
                    className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 br2-ns br--left-ns" 
                    placeholder="enter your lie" 
                    type="text" 
                    value={this.state.formData.lie}
                    onChange={this.handleLie}
                    name="lie" 
                    id="lie"/>
                </div>
              </fieldset>
              <fieldset className="cf bn ma0 pa0 mb3">
                <legend className="ttu f5 b">Check proofs to generate</legend>
                <div className="cf">
                      <div className="flex items-center mb2">
                        <input 
                          className="mr2" 
                          type="checkbox" 
                          id="potus_tweet" 
                          value="potus_tweet"
                          onChange={this.handleOption}/>
                        <label htmlFor="potus_tweet" className="lh-copy">agent orange tweet</label>
                      </div>
                      <div className="flex items-center mb2">
                        <input 
                          className="mr2" 
                          type="checkbox" 
                          id="indiapm_tweet" 
                          value="indiapm_tweet"
                          onChange={this.handleOption}/>
                        <label htmlFor="indiapm_tweet" className="lh-copy">feku tweet</label>
                      </div>
                      <div className="flex items-center mb2">
                        <input 
                          className="mr2" 
                          type="checkbox" 
                          id="wiki" 
                          value="wiki" 
                          onChange={this.handleOption}/>
                        <label htmlFor="wiki" className="lh-copy">fake god wikipedia page</label>
                      </div>
                      <div className="flex items-center mb2">
                        <input 
                          className="mr2" 
                          type="checkbox" 
                          id="cert" 
                          value="cert"
                          onChange={this.handleOption}/>
                        <label htmlFor="cert" className="lh-copy">certificate of truth</label>
                      </div>
                </div>
              </fieldset>

              <fieldset className="cf bn ma0 pa0 mb3">
                <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 br2-ns" type="submit" value="Generate"/>
              </fieldset>

            </form>
          </div>
          <span className="f6 tracked gray db">this is totally fake and is for fun only, I do not intend to spread fake news.</span>
          <span className="f6 tracked gray">by @geekodour - opensourced</span>
        </header>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure mt0-ns">
            <ul>
              <li>Donald T tweet:</li>
              <li>PM Modi tweet:</li>
              <li>Donald T tweet:</li>
              <li>Donald T tweet:</li>
              <li>Donald T tweet:</li>
            </ul>
          </p>
        </div>
      </article>
      </div>
    );
  }
}

export default App;
