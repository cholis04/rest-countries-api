import React from 'react';

type Props = {
  text: string;
  keyword: string;
};

const MarkText: React.FC<Props> = ({ text, keyword }) => {
  if (keyword !== '') {
    const splitterText = '___{$#(!VMV!)#$}___';
    const regExpKeyword = new RegExp(keyword, 'gi');
    const replace = text.replace(regExpKeyword, (match) => {
      return splitterText.concat(match, splitterText);
    });
    const split = replace.split(splitterText);

    return (
      <>
        {split.map((word, index) => {
          if (word.toLowerCase() === keyword)
            return <mark key={index}>{word}</mark>;
          return word;
        })}
      </>
    );
  }

  return <>{text}</>;
};

export default React.memo(MarkText);
