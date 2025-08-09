const copyToClipboard = async (text : string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    if (err instanceof Error) {
      console.log('Failed to copy text: ', err.message);
    } else {
      console.log('unexpected error: ', err);
    }
  }
}

export default copyToClipboard