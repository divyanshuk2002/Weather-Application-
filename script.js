const apikey="";
const apiurl = "";


async function check_weather(){

  const response = await fetch(apiurl + `&appid=${apikey}`);
  const data = await response.json();

  console.log(data);

}
check_weather();
