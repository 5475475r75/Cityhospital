export const isLogin = () => {
  const ddata =  localStorage.getItem('data');
  if(ddata === "1234"){
    return true
  }else{
    return false
  }
}