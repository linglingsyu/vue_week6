import{_ as g,k as v,l as F,E as S,m as y,d as w,r as i,o as c,c as m,b as e,a as s,F as h,e as x,t as o,w as C,i as L,v as E}from"./index-f8331039.js";import{C as b}from"./CartStore-c25f684e.js";const q={data(){return{message:"",simpleSchema:{email:"required|email",name:"required",address:"required",tel:"required"}}},mounted(){this.getCartList()},components:{vForm:v,Field:F,ErrorMessage:S},methods:{...y(b,["getCartList","addOrder"]),async onSubmit(t,{resetForm:l}){if(this.carts.length===0)return!1;const _={user:t,message:this.message};await this.addOrder(_),l()}},computed:{...w(b,["isLoading","carts"]),total(){return this.carts.reduce((t,l)=>(t+=l.final_total,t),0)}}},k=e("h1",null,"this is cart page",-1),M={class:"vl-parent"},V={class:"table-responsive"},B={class:"table"},D=e("thead",null,[e("tr",null,[e("th",null,"品名"),e("th",null,"數量"),e("th",null,"單價"),e("th",null,"小計")])],-1),N=e("td",{colspan:"3"},"總計",-1),O={class:"my-5 row justify-content-center"},j={class:"mb-3"},A=e("label",{for:"email",class:"form-label"},"Email",-1),T={class:"mb-3"},U=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),z={class:"mb-3"},G=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),H={class:"mb-3"},I=e("label",{for:"address",class:"form-label"},"收件人地址",-1),J={class:"mb-3"},K=e("label",{for:"message",class:"form-label"},"留言",-1),P=["disabled"];function Q(t,l,_,R,d,u){const f=i("isLoading"),n=i("Field"),r=i("ErrorMessage"),p=i("vForm");return c(),m(h,null,[k,e("div",M,[s(f,{active:t.isLoading},null,8,["active"]),e("div",V,[e("table",B,[D,e("tbody",null,[(c(!0),m(h,null,x(t.carts,a=>(c(),m("tr",{key:a.id},[e("th",null,o(a.product.title),1),e("td",null,o(a.qty),1),e("td",null,o(a.product.price),1),e("td",null,o(a.final_total),1)]))),128)),e("tr",null,[N,e("td",null,o(u.total),1)])])])]),e("div",O,[s(p,{"validation-schema":d.simpleSchema,onSubmit:u.onSubmit},{default:C(()=>[e("div",j,[A,s(n,{id:"email",name:"email",class:"form-control"}),s(r,{class:"text-danger",name:"email"})]),e("div",T,[U,s(n,{id:"name",name:"name",class:"form-control"}),s(r,{class:"text-danger",name:"name"})]),e("div",z,[G,s(n,{id:"tel",name:"tel",class:"form-control"}),s(r,{class:"text-danger",name:"tel"})]),e("div",H,[I,s(n,{id:"address",name:"address",class:"form-control"}),s(r,{class:"text-danger",name:"address"})]),e("div",J,[K,L(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":l[0]||(l[0]=a=>d.message=a)},null,512),[[E,d.message]])]),e("button",{disabled:!t.carts.length,type:"submit",class:"btn btn-danger"}," 送出訂單 ",8,P)]),_:1},8,["validation-schema","onSubmit"])])])],64)}const Y=g(q,[["render",Q]]);export{Y as default};