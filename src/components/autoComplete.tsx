import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

interface AutoCompleteInputProps {
  suggestions: string[];
  onChange: (event: React.FormEvent, params: { newValue: string }) => void;
  value: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  suggestions,
  onChange,
  value,
}) => {
  const [suggestionValue, setSuggestionValue] = useState("");

  const getSuggestions = (inputValue: string) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValueLowerCase)
    );
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    //@ts-ignore
    onChange(value);
  };

  const onSuggestionSelected = (
    event: React.FormEvent,
    { suggestionValue }: { suggestionValue: string }
  ) => {
    setSuggestionValue(suggestionValue);
  };

  const inputProps = {
    placeholder: "Enter a location",
    value,
    onChange: onChange,
  };

  return (
    <Autosuggest
      suggestions={getSuggestions(value)}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={(suggestion) => <div>{suggestion}</div>}
      inputProps={inputProps}
    />
  );
};

export default AutoCompleteInput;
