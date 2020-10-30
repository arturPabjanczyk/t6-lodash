import React from "react";
import "./App.css"
import _ from "lodash";


class WordCount extends React.Component {

  render() {
    const {wordsFromArticle} = this.props;
    const header = ["Word", "Frequency"];
    const wordsWithFrequencies = _.chain(_.uniq(wordsFromArticle))
      .map(word => [word, _.countBy(wordsFromArticle, i => i == word)["true"]])
      .map(([word, freq]) => (
        {word, freq}
      ))
      .sortBy('freq', 'word')
      .reverse()
      .value();
    return (
      <table>
        <thead>
        <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
        {wordsWithFrequencies.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.word}</td>
              <td>{value.freq}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }
}

export default WordCount;