import React, { Component } from 'react';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q1: 'active',
      q2: '',
      q3: '',
      a1: 'show',
      a2: 'hide',
      a3: 'hide'
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick({ target: { dataset } }) {
    switch (dataset.target) {
      case 'q1':
        this.setState({
          q1: 'active',
          q2: '',
          q3: '',
          a1: 'show',
          a2: 'hide',
          a3: 'hide'
        });
        break;
      case 'q2':
      case 'q1':
        this.setState({
          q1: '',
          q2: 'active',
          q3: '',
          a1: 'hide',
          a2: 'show',
          a3: 'hide'
        });
        break;
      default:
      case 'q1':
        this.setState({
          q1: '',
          q2: '',
          q3: 'active',
          a1: 'hide',
          a2: 'hide',
          a3: 'show'
        });
    }
  }

  render() {
    return (
      <div className="questions">
        <div className="questions__container">
          <h5 className="questions__header u-head-primary">
            There are probably a few questions you have for me after looking at my r&eacute;sum&eacute;. I would like to address some of those below.
          </h5>
          <div className="questions__list">
            <a onClick={this.onClick} className={`questions__listItem ${this.state.q1}`} data-target="q1">
              Q: I see that you have an engineering degree in another focus, why are you looking to work as a developer/engineer?
            </a>
            <a onClick={this.onClick} className={`questions__listItem ${this.state.q2}`} data-target="q2">
              Q: Your resume shows that you worked as a developer before. Why did you leave the industry?
            </a>
            <a onClick={this.onClick} className={`questions__listItem ${this.state.q3}`} data-target="q3">
              Q: I see there is a gap in your work history at the moment, what is that about?
            </a>
          </div>

          <div>
            <div className="answers">
              <div className={`answers__item ${this.state.a1}`}>
                A: I originally earned my NanoEngineering degree from UCSD because it was a new and interesting field at that school, and seemed like it would hold some very exciting possibilities in
                the future of technology. Unfortunately, after graduating I quickly learned that there were very little jobs available in that field. You pretty much needed a PhD to work in the bigger
                labs. I was one of the only students from my graduating class to secure a position in that industry. I ended up being hired at a local nanotech company, but at the end of the day I
                decided to move on. So I gave my notice and walked away from the field. Prior to learning about the NanoEngineering program, I was planning to pursue software engineering as my major.
                So, naturally, that is where I headed. I enjoy the problem solving, and the incremental triumphs that come along with coding.
              </div>
              <div className={`answers__item ${this.state.a2}`}>
                A: I loved working as a developer! The short answer is that I got restless. I was working as a JavaScript/UI Developer, but during that time I had broke up with my girlfriend of 3
                years. At the same time a friend of mine was working as a sales manager in the mortgage industry, and was making a lot of money doing it. He was a former engineer as well. So I thought
                to myself, “Hey! I'm good with people, I can do that too!” So I gave a 30-day notice to my company, sold all of my belongings, and moved up to Orange County. It turned out that working
                in the mortgage industry didn't fit me for a few reasons. I’m glad that I had the chance to try another field, so I could realize how much I loved working as a developer. So here I am,
                back to what I enjoy doing!
              </div>
              <div className={`answers__item ${this.state.a3}`}>
                A: I knew that I was going to be getting back into development, and I had made enough income in the mortgage industry to hold me over. I'm the type of person where if I've made up my
                mind to do something, I commit to it fully. So with that, I gave my notice and decided to pour myself into preparing. I didn't want to rush into a job, so for the last few months I
                have been brushing up on my skill-set, as well as adding to it. I’ve also had to make new example applications to showcase my code, which takes time to put together. So, I have been
                creating and learning on a daily basis since before I left the mortgage industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
