export const ExpirationDateFormatter = (expirationDate: string | undefined) => {
    if (expirationDate === undefined) return null;

    const dateObj = new Date(expirationDate);
  
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const hours = ('0' + dateObj.getHours()).slice(-2);
    const minutes = ('0' + dateObj.getMinutes()).slice(-2);
  
    const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}`;
  
    return formattedTimestamp;
  };
  