export const PRODUCT_LIST='https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI';
export const PRODUCT_DETAILS=(id)=>{ return "https://api.johnlewis.com/mobile-apps/api/v1/products/"+id};
export const HEADERS={ 
    headers: {
      "content-type":"application/json",
      "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    }};