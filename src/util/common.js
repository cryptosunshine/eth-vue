import Web3 from "web3";
import abi from './DB.json';
const web3 = new Web3();
const address = {
  contract: '0x3399A5732F8f32510e1d835eA68B684B79bBfE0C'
}

export const initContract = () => {
  web3.setProvider(window.ethereum);
  return {
    contract: new web3.eth.Contract(abi.abi, address.contract)
  }
}
