import React, { Component } from 'react';
import Promise from 'bluebird';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/lib/fa';
import quotes from './quotes.json';
import styles from './jumboQuote.css';

class JumboQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {}
    };
  }

  componentDidMount() {
    Promise.try(
      () => quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)]
    ).then((quote) => {
      this.setState({ quote });
    });
  }

  render() {
    return (
      <div className={styles.quotes}>
        <h4 className={styles.quoteBody}>
          <FaQuoteLeft className={styles.quoteIcon} />
          {this.state.quote.body}
          <FaQuoteRight className={styles.quoteIcon} />
        </h4>
        <h5 className={styles.quoteAuthor}>{this.state.quote.author} </h5>
      </div>
    );
  }
}

export default JumboQuote;
