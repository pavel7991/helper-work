const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err : any) {
    console.error('Failed to copy text: ', err.message);
  }
}

export default copyToClipboard