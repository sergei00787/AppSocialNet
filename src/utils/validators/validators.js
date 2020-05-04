export const required = (value) => {
  return (value) ? undefined : "Value is required";
}

export const maxLengthCreator = (maxLength) => {
  return (value) => {
    return (value && value.length > maxLength) ? `Must be ${maxLength} characters or less` : undefined;  
  }
}  