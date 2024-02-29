export const getJsonLdString = (jsonLD: any) => {
  return {
    __html: JSON.stringify(jsonLD)
  }
}
