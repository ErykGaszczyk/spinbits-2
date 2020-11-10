import axios from 'axios';
const run = async () => {
  try{
    const { data } = await axios.post('http://localhost:1337/auth/local', {
      identifier: 'api@spinbits.io',
      password: 'RE}C2fzd-[JW%-Wh',
    });
    return data;
  }catch (error){
    console.log(error.message);
  }
};

run().then((data)=>{console.log(data);});
