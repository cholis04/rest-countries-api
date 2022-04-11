import React from 'react';
import styled from 'styled-components';

// Styled
const MarkHighlight = styled.mark`
  background-color: yellow;
`;

type Props = {
  text: string;
  keyword: string;
};

const MarkText: React.FC<Props> = ({ text, keyword }) => {
  if (keyword !== '') {
    const splitterText = '___{$#(!VMV!)#$}___';
    const regExpKeyword = new RegExp(keyword, 'gi');

    // Replacement with string
    const replace = text.replaceAll(
      regExpKeyword,
      `${splitterText}$&${splitterText}`
    );

    // Replacement with Function
    // const replace = text.replaceAll(regExpKeyword, (match) => {
    //   return splitterText.concat(match, splitterText);
    // });

    const split = replace.split(splitterText);

    return (
      <>
        {split.map((word, index) => {
          if (word.toLowerCase() === keyword.toLowerCase())
            return <MarkHighlight key={index}>{word}</MarkHighlight>;
          return word;
        })}
      </>
    );
  }

  return <>{text}</>;
};

export default React.memo(MarkText);
