import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { uz } from "./data/uz"
import { ru } from "./data/ru"
import { eng } from "./data/eng"
import { alldatasuz } from "./data/all"
import { alldatasru } from "./data/all"
import { useState } from "react";
import Header from "./components/Header";
import Register from "./components/Register";
import Payment from "./components/Payment";
import CheckOut from "./components/CheckOut";



function App() {

  
  const [home, setHome] = useState(uz)
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")
  const [image, setImage] = useState('')
  const [logoname, setLogoname] = useState("")
  const [servicetype, setServicetype] = useState("")
  const [number, setNumber] = useState("")


  const payment = home === ru ? alldatasru.result : alldatasuz.result

  console.log(uz)
  console.log(payment)
  return (
    <div style={{overflow: "hidden"}}>

      <BrowserRouter>
        <Header home={home} setHome={setHome} uz={uz} eng={eng} ru={ru}/>

        <Routes>
         <Route index element={<Home home={home} setInput1={setInput1} setInput2={setInput2} setImage={setImage} setLogoname={setLogoname}/>}/>
         <Route path="/register" element={<Register home={home}/>} />
         <Route path="/payment" element={<Payment home={home} payment={payment} setInput1={setInput1} setInput2={setInput2}  setImage={setImage} setLogoname={setLogoname} setServicetype={setServicetype} setNumber={setNumber}/>} />
         <Route path="/checkout" element={<CheckOut home={home} payment={payment} phoneNumber={input1} summa = {input2} image={image} logoname={logoname} servicetype={servicetype} number={number} />} />
        </Routes>
      </BrowserRouter> 

  

    </div>
  );
}

export default App;
