import React from 'react'
import Card from './components/Card'
function App() {
  let data =[
  {
  plan:"FREE",
  price:0,
  user:"Single user",
  isuser:true,
  storage:"5GB",
  isstorage:true,
  publicproducts:"Unlimited Public Products",
  ispublicproducts:true,
  community:"Community Access",
  iscommunity:true,
  privateproducts:"Unlimited Private Projects",
  isprivateproducts:true,
  phone:"Dedicated Phone Support",
  isphone:false,
  subdomain:"Free Subdomain",
  issubdomain:false,
  monthlyreports:"Monthly Status Reports",
  ismonthlyreports:false,
},
  {
  plan:"PLUS",
  price:9,
  user:"5 user",
  isuser:true,
  storage:"50GB",
  isstorage:true,
  publicproducts:"Unlimited Public Products",
  ispublicproducts:true,
  community:"Community Access",
  iscommunity:true,
  privateproducts:"Unlimited Private Projects",
  isprivateproducts:false,
  phone:"Dedicated Phone Support",
  isphone:false,
  subdomain:"Free Subdomain",
  issubdomain:false,
  monthlyreports:"Monthly Status Reports",
  ismonthlyreports:false,
 
},
  {
    plan:"PRO",
    price:49,
    user:"Single user",
    isuser:true,
    storage:"5GB",
    isstorage:true,
    publicproducts:"Unlimited Public Products",
    ispublicproducts:true,
    community:"Community Access",
    iscommunity:true,
    privateproducts:"Unlimited Private Projects",
    isprivateproducts:true,
    phone:"Dedicated Phone Support",
    isphone:true,
    subdomain:"Free Subdomain",
    issubdomain:true,
    monthlyreports:"Monthly Status Reports",
    ismonthlyreports:false,
  }
  
]
  return<><section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e,i)=>{
        return<Card data={e} key={i}/>
      })
     }
    </div>
  </div>
</section>
  </>
}

export default App
