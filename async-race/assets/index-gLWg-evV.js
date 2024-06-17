(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();function u(a){return a!=null}function d(a){return a==null?!1:a instanceof HTMLElement}function g(a,t){return t instanceof a}var J=Object.defineProperty,H=(a,t,e)=>t in a?J(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,E=(a,t,e)=>(H(a,typeof t!="symbol"?t+"":t,e),e);class i{constructor({tag:t="div",className:e="",text:n=""},...r){E(this,"_children",[]),E(this,"_node",null);const o=document.createElement(t);o.className=e,o.textContent=n,this._node=o,r&&r.length>0&&this.appendChildren(r)}append(t){var e;this._children.push(t);const n=t.getNode();n&&((e=this._node)==null||e.appendChild(n))}appendChildren(t){t.forEach(e=>{this.append(e)})}getNode(){if(d(this._node))return this._node;throw new Error("Node is not an HTMLElement")}getChildren(){return this._children}setTextContent(t){u(this._node)&&(this._node.textContent=t)}setAttribute(t,e){var n;(n=this._node)==null||n.setAttribute(t,e)}removeAttribute(t){var e;(e=this._node)==null||e.removeAttribute(t)}toggleClass(t){var e;(e=this._node)==null||e.classList.toggle(t)}addListener(t,e){var n;(n=this._node)==null||n.addEventListener(t,e)}destroyChildren(){this._children.forEach(t=>{t.destroy()}),this._children.length=0}destroy(){var t;this.destroyChildren(),(t=this._node)==null||t.remove()}}var D=Object.defineProperty,q=(a,t,e)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,y=(a,t,e)=>(q(a,typeof t!="symbol"?t+"":t,e),e);class G{constructor(t){y(this,"_parentNode"),y(this,"goToGarage",()=>{const e=document.querySelector(".winners-page");d(e)&&(e.style.display="none");const n=document.querySelector(".garage-page");d(n)&&(n.style.display="flex")}),y(this,"goToWinners",()=>{const e=document.querySelector(".garage-page");d(e)&&(e.style.display="none");const n=document.querySelector(".winners-page");d(n)&&(n.style.display="flex")}),this._parentNode=t}draw(){const t=new i({tag:"header"}),e=this.drawGarageButton(),n=this.drawWinnersButton();n.addListener("click",()=>this.disableManager(n,e)),e.addListener("click",()=>this.disableManager(e,n)),t.appendChildren([e,n]);const r=t.getNode();return this._parentNode.appendChild(r),r}drawGarageButton(){const t=new i({tag:"button",className:"garage-button",text:"TO GARAGE"});return t.setAttribute("disabled",""),t.addListener("click",()=>this.goToGarage()),t}drawWinnersButton(){const t=new i({tag:"button",className:"winners-button",text:"TO WINNERS"});return t.addListener("click",()=>this.goToWinners()),t}disableManager(t,e){const n=t.getNode();g(HTMLButtonElement,n)&&(n.disabled=!0);const r=e.getNode();g(HTMLButtonElement,r)&&(r.disabled=!1)}}class C{setInitial(){localStorage.setItem("AsyncRace",JSON.stringify({isRace:!1,racersStack:[]}))}setUpdatingCar(t){const e=localStorage.getItem("AsyncRace");if(u(e)){const n=JSON.parse(e);n.currentUpdating=t,localStorage.setItem("AsyncRace",JSON.stringify(n))}}getUpdatingCar(){const t=localStorage.getItem("AsyncRace");if(u(t)){const n=JSON.parse(t).currentUpdating;return console.log(n),n}}isRace(){const t=localStorage.getItem("AsyncRace");if(u(t))return JSON.parse(t).isRace}startRace(){const t=localStorage.getItem("AsyncRace");if(u(t)){const e=JSON.parse(t);e.isRace=!0,localStorage.setItem("AsyncRace",JSON.stringify(e))}}endRace(){const t=localStorage.getItem("AsyncRace");if(u(t)){const e=JSON.parse(t);e.isRace=!1,localStorage.setItem("AsyncRace",JSON.stringify(e))}}removeFinishers(){const t=localStorage.getItem("AsyncRace");if(u(t)){const e=JSON.parse(t);e.racersStack=[],localStorage.setItem("AsyncRace",JSON.stringify(e))}}addFinisher(t){const e=localStorage.getItem("AsyncRace");if(u(e)){const n=JSON.parse(e);n.racersStack.push(t),localStorage.setItem("AsyncRace",JSON.stringify(n))}}getWinnerLocalStorage(){const t=localStorage.getItem("AsyncRace");if(u(t))return JSON.parse(t).racersStack[0]}}class h{async getCars(t=1){try{return await(await fetch(`http://localhost:3000/garage?_page=${t}&_limit=7`)).json()}catch(e){console.log(e)}}async getAllCars(){try{return await(await fetch("http://localhost:3000/garage")).json()}catch(t){console.log(t)}}async getCar(t){try{return await(await fetch(`http://localhost:3000/garage/${t}`)).json()}catch(e){throw console.log(e),e}}async createCar(t,e){const n={name:t,color:e};if(u(n))try{return await fetch("http://localhost:3000/garage/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}catch(r){console.log(r)}}async deleteCar(t){try{return await fetch(`http://localhost:3000/garage/${t}`,{method:"DELETE"})}catch(e){console.log(e)}}async updateCar(t){const e={name:t.name,color:t.color};try{if(u(e)){const n=await fetch(`http://localhost:3000/garage/${t.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});console.log(n)}}catch(n){console.log(n)}}async startStopEngine(t){if(u(t))try{return await(await fetch(`http://localhost:3000/engine?id=${t.id}&status=${t.status}`,{method:"PATCH"})).json()}catch(e){console.error(e)}}async drive(t){if(u(t))try{const e=await fetch(`http://localhost:3000/engine?id=${t}&status=drive`,{method:"PATCH"});if(!e.ok)throw new Error(e.statusText);return await e.json()}catch(e){throw new Error("API Error: "+e)}}async getWinners(t=1,e="id",n="ASC"){try{return await(await fetch(`http://localhost:3000/winners?_page=${t}&_limit=10&_sort=${e}&_order=${n}`)).json()}catch(r){console.log(r)}}async getAllWinners(){try{return await(await fetch("http://localhost:3000/winners")).json()}catch(t){console.log(t)}}async getWinner(t){try{const e=await fetch(`http://localhost:3000/winners/${t}`);if(!e.ok)throw console.log(e.statusText),new Error(e.statusText);return await e.json()}catch(e){throw new Error("API Error: "+e)}}async createWinner(t){if(u(t))try{return await fetch("http://localhost:3000/winners",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}catch(e){console.log(e)}}async deleteWinner(t){try{return await fetch(`http://localhost:3000/winners/${t}`,{method:"DELETE"})}catch(e){console.log(e)}}async updateWinner(t,e){const n={wins:t.wins,time:t.time};try{u(n)&&await fetch(`http://localhost:3000/winners/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}catch(r){console.log(r)}}}class v{draw(){const t=new i({tag:"div",className:"cars-amount"});return this.updateCarAmount(),t}async updateCarAmount(){const n=(await new h().getAllCars()).length,r=document.querySelector(".cars-amount");d(r)&&(r.textContent=`Garage (${n})`)}}var U=Object.defineProperty,V=(a,t,e)=>t in a?U(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,K=(a,t,e)=>(V(a,typeof t!="symbol"?t+"":t,e),e);class W{constructor(t){K(this,"_color"),this._color=t}drawCar(){const t=new i({tag:"div",className:"car-container"});return t.getNode().appendChild(this.createSvg()),t}createSvg(){const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","use");return e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","./car.svg#car"),t.classList.add("car"),t.style.fill=this._color,t.append(e),t}}class T{draw(t){return new i({tag:"div",className:"car-block__button",text:t})}}class X extends T{drawRemoveButton(){const e=this.draw("REMOVE").getNode();return e.classList.add("remove-button"),e}}var j=Object.defineProperty,z=(a,t,e)=>t in a?j(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,Q=(a,t,e)=>(z(a,typeof t!="symbol"?t+"":t,e),e);class Y extends T{constructor(t){super(),Q(this,"_id"),this._id=t}drawSelecetButton(){const e=this.draw("SELECT").getNode();return this.selectCar(e),e.classList.add("select-button"),e}selectCar(t){t.addEventListener("click",()=>{const e=document.querySelector(".update-input");e instanceof HTMLInputElement&&(e.disabled=!1,new C().setUpdatingCar(this._id),this.selectCurentBlock(t,"updating-block"))})}selectCurentBlock(t,e){document.querySelectorAll(".car-block").forEach(o=>{o.classList.remove(e)});const r=t.closest(".car-block");u(r)&&r.classList.add(e)}}class Z{drawStartButton(){const t=new i({tag:"button",className:"car-block__button",text:"A"}),e=t.getNode();return this.disableButton(e),e.classList.add("start-button"),t}disableButton(t){t.addEventListener("click",()=>{if(t instanceof HTMLButtonElement&&t.disabled===!1){const e=t.nextElementSibling;e instanceof HTMLButtonElement&&(new C().isRace()||(e.disabled=!1),e.disabled=!1,t.disabled=!0)}})}}class tt{drawStopButton(){const t=new i({tag:"button",className:"car-block__button",text:"B"}),e=t.getNode();return e.setAttribute("disabled",""),e.classList.add("stop-button"),this.disableButton(e),t}disableButton(t){t.addEventListener("click",()=>{if(t instanceof HTMLButtonElement){const e=t.previousElementSibling;e instanceof HTMLButtonElement&&(e.disabled=!1,t.disabled=!0)}})}}var et=Object.defineProperty,nt=(a,t,e)=>t in a?et(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,m=(a,t,e)=>(nt(a,typeof t!="symbol"?t+"":t,e),e);class P{constructor(t,e,n){m(this,"_name"),m(this,"_color"),m(this,"_id"),m(this,"_car"),m(this,"_carSectionNode"),m(this,"_parentCarBlock"),m(this,"_removeCarBlockFromArr"),m(this,"_winnerPage"),m(this,"startCarMovement",async(r,o)=>{const c=await new h().startStopEngine({id:r,status:"started"});await this.driveAnimation(c,o,this._car)}),m(this,"isCarEverWon",async()=>{try{return await new h().getWinner(this._id),!0}catch(r){if(r==="Not Found")return!1}}),m(this,"recordWin",async r=>{const o=await this.isCarEverWon(),s=new h;if(o){const c=await s.getWinner(this._id);console.log(c);const l=c.wins+1,p=c.time,w=r.time;p>w?await s.updateWinner({wins:l,time:w},this._id):await s.updateWinner({wins:l,time:p},this._id)}else{const c={id:this._id,wins:1,time:r.time};await s.createWinner(c)}await s.getAllWinners()}),m(this,"removeButtonClickListener",()=>{this.removeThisBlock()}),this._name=t.name,this._color=t.color,this._id=t.id,this._parentCarBlock=new i({tag:"div",className:"car-block"}),this._removeCarBlockFromArr=e,this._winnerPage=n}draw(){const t=this._parentCarBlock,e=t.getNode();return this.addButtonsBlock(t),this.addCarSection(t),e}addButtonsBlock(t){const e=new i({tag:"div",className:"car-block__buttons"}),n=e.getNode(),r=new i({tag:"div",className:"car-block__name",text:this._name}),o=new Y(this._id).drawSelecetButton(),s=new X().drawRemoveButton();s.addEventListener("click",this.removeButtonClickListener),n.appendChild(o),n.appendChild(s),n.appendChild(r.getNode()),t.append(e)}addCarSection(t){const e=new i({tag:"div",className:"car-section"}),n=e.getNode();this._carSectionNode=n;const r=new Z().drawStartButton(),o=r.getNode();o.addEventListener("click",()=>{this.startCarMovement(this._id,n)});const s=new tt,c=s.drawStopButton();c.getNode().addEventListener("click",()=>{s.disableButton(o),this.stopCarMovement(this._id,this._car)}),e.append(r),e.append(c),this._car=new W(this._color).drawCar(),e.append(this._car),n.appendChild(this.addFlag()),t.append(e)}async driveAnimation(t,e,n){try{const r=t.distance/t.velocity/1e3,o=e.offsetWidth-80,s=n==null?void 0:n.getNode();if(d(s)&&(s.style.left=`${o}px`,s.style.transition=`left ${r}s linear`),await await new h().drive(this._id)){const w={finisher:this._id,time:r.toFixed(2),color:this._color},f=new C;f.isRace()&&(f.addFinisher(w),await this.showWinner(w))}}catch(r){if(r instanceof Error&&r.message==="API Error: Error: Internal Server Error"){const o=n==null?void 0:n.getNode();if(d(o)){const s=window.getComputedStyle(o).getPropertyValue("left");o.style.left=s,o.style.filter="blur(5px)",o.style.transition="left 0s linear"}}}}async stopCarMovement(t,e){await new h().startStopEngine({id:t,status:"stopped"});const r=e==null?void 0:e.getNode();d(r)&&(setTimeout(()=>r.style.filter="blur(0px)",1500),r.style.left="80px",r.style.transition="left 0s linear")}addFlag(){const t=new Image;return t.src="/red-flag.png",t.classList.add("car-block__flag"),t}async removeThisBlock(){console.log(this._removeCarBlockFromArr);const t=new h;await t.deleteCar(this._id),await t.deleteWinner(this._id),this._parentCarBlock.destroy(),this._removeCarBlockFromArr(this._id),new v().updateCarAmount(),await this._winnerPage.reloadWinnersBlock()}async showWinner(t){const e=document.querySelector(".winner-block");if(d(e)&&!e.textContent){const n=new h,r={id:this._id,time:Number(t.time)};this.recordWin(r);const c=`Winner: ${(await n.getCar(t.finisher)).name} (${t.time}s)!`;e.textContent=c,await this._winnerPage.reloadWinnersBlock("time","ASC")}}}class rt{draw(){return new i({tag:"button",className:"generate-button",text:"GENERATE 100 CARS"})}}var at=Object.defineProperty,ot=(a,t,e)=>t in a?at(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,S=(a,t,e)=>(ot(a,typeof t!="symbol"?t+"":t,e),e);class M{constructor(t,e,n){S(this,"_carBlocks"),S(this,"_winnerPage"),S(this,"_removeCarBlockFromArr"),this._carBlocks=t,this._removeCarBlockFromArr=e,this._winnerPage=n}draw(){const t=new i({tag:"div",className:"create-block"});return t.append(this.drawInput("create-input")),t.append(this.drawPalette("create-color-input")),t.append(this.drawCreateButton()),t}drawInput(t){const e=new i({tag:"input",className:t});return e.setAttribute("type","text"),e.setAttribute("required",""),e.setAttribute("minlength","1"),e.setAttribute("maxlength","20"),e}drawPalette(t){const e=new i({tag:"input",className:t});return e.setAttribute("type","color"),e.setAttribute("value","#ffffff"),e}drawCreateButton(){const t=new i({tag:"div",className:"create-button",text:"CREATE"});return this.createCar(t),t}createCar(t){t.getNode().addEventListener("click",async()=>{const n=document.querySelector(".create-input"),r=document.querySelector(".create-color-input");if(n instanceof HTMLInputElement&&r instanceof HTMLInputElement){const o=n.value,s=r.value;if(o.length>=1){const c=new h;await c.createCar(o,s);const l=await c.getCars(),p=l[l.length-1];this.addNewCarBlock(p),n.style.outline="",n.value=""}else n.style.outline="1px solid red"}})}addNewCarBlock(t){const e=document.querySelector(".cars-block");if(d(e)&&e.children.length<7){const r=new P(t,this._removeCarBlockFromArr,this._winnerPage);this._carBlocks.push(r),console.log(this._carBlocks);const o=r.draw();e.appendChild(o),new v().updateCarAmount()}}}var st=Object.defineProperty,it=(a,t,e)=>t in a?st(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,k=(a,t,e)=>(it(a,typeof t!="symbol"?t+"":t,e),e);class ct{constructor(t,e,n){k(this,"_carBlocks"),k(this,"_removeCarBlockFromArr"),k(this,"_winnerPage"),k(this,"updateCarInBlocksArr",r=>(this._carBlocks.map(o=>(o._id===r.id&&(o._name=r.name,o._color=r.color),o)),this._carBlocks=this._carBlocks.slice(),console.log(this._carBlocks),this._carBlocks)),this._carBlocks=t,this._removeCarBlockFromArr=e,this._winnerPage=n}draw(){const t=new i({tag:"div",className:"update-block"}),e=new M(this._carBlocks,this._removeCarBlockFromArr,this._winnerPage),n=e.drawInput("update-input");n.setAttribute("disabled",""),t.append(n);const r=e.drawPalette("update-color-input");return t.append(r),t.append(this.drawUpdateButton()),t}drawUpdateButton(){const t=new i({tag:"div",className:"update-button",text:"UPDATE"});return this.updateCar(t),t}updateCar(t){t.getNode().addEventListener("click",async()=>{const n=document.querySelector(".update-input"),r=document.querySelector(".update-color-input");if(n instanceof HTMLInputElement&&r instanceof HTMLInputElement){const o=n.value,s=r.value;if(!n.disabled)if(o.length>=1){const l=new C().getUpdatingCar();await new h().updateCar({name:o,color:s,id:l}),n.style.outline="",n.value="",n.disabled=!0,await this.getNewCarBlock(l)}else n.style.outline="1px solid red"}})}async getNewCarBlock(t){const n=await new h().getCar(t),r=document.querySelector(".updating-block");if(d(r)){const o=r.querySelector(".car"),s=r.querySelector(".car-block__name");console.log(n),u(o)&&d(s)&&(o.setAttribute("style",`fill: ${n.color};`),s.textContent=n.name),r.classList.remove("updating-block"),this.updateCarInBlocksArr(n)}}}var lt=Object.defineProperty,dt=(a,t,e)=>t in a?lt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,A=(a,t,e)=>(dt(a,typeof t!="symbol"?t+"":t,e),e);class ut{constructor(t,e,n){A(this,"_carBlocks"),A(this,"_removeCarBlockFromArr"),A(this,"_winnerPage"),this._carBlocks=t,this._removeCarBlockFromArr=e,this._winnerPage=n}draw(){const t=new i({tag:"div",className:"inputs-block"}),e=new M(this._carBlocks,this._removeCarBlockFromArr,this._winnerPage).draw(),n=new ct(this._carBlocks,this._removeCarBlockFromArr,this._winnerPage).draw();return t.append(e),t.append(n),t}}class O{drawCounter(){const t=new i({tag:"div",className:"pagination-counter"}),e=t.getNode();return e.textContent="Page #1",t}drawPaginationButtonsBlock(t,e){const n=new i({tag:"div",className:"pagination-buttons"});n.appendChildren(e),t.append(n)}drawPrevButton(){const t=new i({tag:"button",className:"pagination-button",text:"prev"});return t.setAttribute("disabled",""),t}async drawNextButton(t){const e=new i({tag:"button",className:"pagination-button",text:"next"});return(await new h().getAllCars()).length<=t&&e.setAttribute("disabled",""),e}}class ht{draw(){const t=new i({tag:"button",className:"race-button",text:"RACE"});return this.disableButton(t.getNode()),t}disableButton(t){t.addEventListener("click",async()=>{t instanceof HTMLButtonElement&&(t.disabled=!0)})}}class pt{draw(){const t=new i({tag:"button",className:"restart-button",text:"RESTART"});return this.restart(t.getNode()),t}restart(t){t.addEventListener("click",()=>{const e=document.querySelector(".race-button");e instanceof HTMLButtonElement&&(e.disabled=!1),t instanceof HTMLButtonElement&&(t.disabled=!0)})}}var gt=Object.defineProperty,wt=(a,t,e)=>t in a?gt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t,e)=>(wt(a,typeof t!="symbol"?t+"":t,e),e);class mt{constructor(t){x(this,"_carBlocks"),x(this,"_restartButton"),this._carBlocks=t}draw(){const t=new i({tag:"div",className:"race-block"}),e=new ht().draw();e.getNode().addEventListener("click",()=>{g(HTMLButtonElement,this._restartButton)&&(this._restartButton.disabled=!0);const c=this._carBlocks.map(l=>l.stopCarMovement(l._id,l._car));Promise.allSettled(c).then(()=>{this.startRace(this._carBlocks)}),setTimeout(()=>{u(this._restartButton)&&(this._restartButton.disabled=!0)},5e3)});const r=new pt().draw(),o=r.getNode();o instanceof HTMLButtonElement&&(this._restartButton=o);const s=this.drawWinnerBlock();return o.addEventListener("click",async()=>{this.restartGame(this._carBlocks),this.cleanWinnerBlock(s)}),t.appendChildren([e,r,s]),t}async restartGame(t){t.forEach(async n=>{await n.stopCarMovement(n._id,n._car)}),new C().endRace()}async startRace(t){const e=new C;e.startRace(),e.removeFinishers(),t.forEach(async n=>{u(n._carSectionNode)&&await n.startCarMovement(n._id,n._carSectionNode)})}drawWinnerBlock(){return new i({tag:"div",className:"winner-block"})}cleanWinnerBlock(t){const e=t.getNode();e.textContent!==""&&(e.innerText="")}}const Bt=()=>{const a=["#ffffff","#FFAEBC","#A0E7E5","#B4F8C8","#FBE7C6","#74BDCB","#E7F2F8","#4EC33D","#353643","#F0C9B3"],t=Math.floor(Math.random()*a.length);return`${a[t]}`},_t=()=>{const a=["Tesla","Ford","Seat","Fiat","BMW","Chery","Lada","Dacia","KIA","Toyota"],t=["Compact","S","Comfort","Speed","Family","Off-road","4X4","Nitro","Basic","Gold"],e=Math.floor(Math.random()*a.length),n=Math.floor(Math.random()*t.length);return`${a[e]} ${t[n]}`},$=a=>new i({tag:"div",className:"page-name",text:a});var ft=Object.defineProperty,bt=(a,t,e)=>t in a?ft(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,B=(a,t,e)=>(bt(a,typeof t!="symbol"?t+"":t,e),e);class Ct{constructor(t,e){B(this,"_parentNode"),B(this,"_winnerPage"),B(this,"_carBlocksArr",[]),B(this,"_currentPage",1),B(this,"_carsBlock"),B(this,"prevButtonClickListener",()=>{this._currentPage-=1,this.cleanCarBlocks(),this.addCars(this._currentPage,this._carsBlock),this.updatePaginatinCounter();const n=document.querySelector(".prev-button");this._currentPage===1&&g(HTMLButtonElement,n)&&(n.disabled=!0);const r=document.querySelector(".next-button");g(HTMLButtonElement,r)&&(r.disabled=!1);const o=document.querySelector(".race-button");g(HTMLButtonElement,o)&&(o.disabled=!1)}),B(this,"nextButtonClickListener",async()=>{this._currentPage+=1,this.cleanCarBlocks(),this.addCars(this._currentPage,this._carsBlock),this.updatePaginatinCounter();const n=document.querySelector(".prev-button");if(g(HTMLButtonElement,n)&&(n.disabled=!1),await this.isLastCarPage()){const s=document.querySelector(".next-button");g(HTMLButtonElement,s)&&(s.disabled=!0)}const o=document.querySelector(".race-button");g(HTMLButtonElement,o)&&(o.disabled=!1)}),B(this,"generateButtonListener",async()=>{for(let o=0;o<100;o+=1){const s=_t(),c=Bt();await this.generateCarData(s,c)}const n=document.querySelector(".next-button");g(HTMLButtonElement,n)&&(n.disabled=!1),await new v().updateCarAmount()}),B(this,"generateCarData",async(n,r)=>{const o=new h;await o.createCar(n,r);const s=await o.getAllCars(),c=s[s.length-1];console.log(c),this.addNewCarBlock(c)}),B(this,"addCars",async(n,r)=>{(await new h().getCars(n)).forEach(c=>{const l=new P(c,this.removeCarBlockFromArr,this._winnerPage),p=l.draw();this._carBlocksArr.push(l),r==null||r.appendChild(p)})}),B(this,"removeCarBlockFromArr",n=>{console.log(n),this._carBlocksArr=this._carBlocksArr.filter(r=>r._id!==n)}),this._parentNode=t,this._winnerPage=e}async draw(){const t=new i({tag:"div",className:"garage-page"}),e=$("GARAGE");t.append(e);const n=new ut(this._carBlocksArr,this.removeCarBlockFromArr,this._winnerPage).draw(),r=new rt().draw();r.addListener("click",this.generateButtonListener),t.append(r);const s=new mt(this._carBlocksArr).draw(),c=new v().draw(),l=new O,p=l.drawCounter();t.appendChildren([n,s,c,p]);const w=t.getNode();this.addCarsBlock(w),this._parentNode.appendChild(w);const f=l.drawPrevButton();f.getNode().classList.add("prev-button"),f.addListener("click",this.prevButtonClickListener);const N=await l.drawNextButton(7);N.addListener("click",this.nextButtonClickListener),N.getNode().classList.add("next-button"),l.drawPaginationButtonsBlock(t,[f,N])}addNewCarBlock(t){var e,n;const r=(e=this._carsBlock)==null?void 0:e.children.length;if(u(r)&&r<7){const o=new P(t,this.removeCarBlockFromArr,this._winnerPage);this._carBlocksArr.push(o);const s=o.draw();(n=this._carsBlock)==null||n.appendChild(s)}}async isLastCarPage(){const n=(await new h().getAllCars()).length,r=this._currentPage*7;return!(n-r>0)}updatePaginatinCounter(){const t=document.querySelector(".pagination-counter");d(t)&&(t.textContent=`Page #${this._currentPage}`)}cleanCarBlocks(){var t;for(this._carBlocksArr.length=0;(t=this._carsBlock)!=null&&t.firstChild;)this._carsBlock.removeChild(this._carsBlock.firstChild)}async addCarsBlock(t){const n=new i({tag:"div",className:"cars-block"}).getNode();this._carsBlock=n,this==null||this.addCars(this._currentPage,n),t.appendChild(n)}}var Nt=Object.defineProperty,kt=(a,t,e)=>t in a?Nt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t,e)=>(kt(a,typeof t!="symbol"?t+"":t,e),e);class vt{constructor(t,e){b(this,"_winnerData"),b(this,"_currentNumber"),b(this,"draw",async()=>{const n=new i({tag:"div",className:"winner__block"}),r=this.addNumberBlock(),o=await this.addCarBlock(),s=await this.addNameBlock(),c=this.addWinsBlock(),l=this.addTimeBlock();return n.appendChildren([r,o,s,c,l]),n}),b(this,"addCarBlock",async()=>{const n=new i({tag:"div",className:"winner__item"}),o=await new h().getCar(this._winnerData.id),s=new W(o.color).drawCar();return s.getNode().style.position="relative",s.getNode().style.left="0",n.append(s),n}),b(this,"addNameBlock",async()=>{const n=new i({tag:"div",className:"winner__item"}),o=await new h().getCar(this._winnerData.id);return n.getNode().textContent=o.name,n}),b(this,"addWinsBlock",()=>{const n=new i({tag:"div",className:"winner__item"});return n.getNode().textContent=String(this._winnerData.wins),n}),b(this,"addTimeBlock",()=>{const n=new i({tag:"div",className:"winner__item"}),r=n.getNode();return r.textContent=String(this._winnerData.time),r.style.width="32%",n}),this._winnerData=t,this._currentNumber=e}addNumberBlock(){const t=new i({tag:"div",className:"winner__item"});return t.getNode().textContent=String(this._currentNumber+1),t}}class I{draw(){const t=new i({tag:"div",className:"winners-amount"});return this.updateWinnersAmount(),t}async updateWinnersAmount(){const n=(await new h().getAllWinners()).length,r=document.querySelector(".winners-amount");d(r)&&(r.textContent=`Winners (${n})`)}}class yt{draw(){const t=new i({tag:"div",className:"winners-header"}),e=this.addNumberBlock(),n=this.addCarBlock(),r=this.addNameBlock();return t.appendChildren([e,n,r]),t}addNumberBlock(){return new i({tag:"div",className:"winners-header__item",text:"Number"})}addCarBlock(){return new i({tag:"div",className:"winners-header__item",text:"Car"})}addNameBlock(){return new i({tag:"div",className:"winners-header__item",text:"Name"})}addWinsBlock(){return new i({tag:"div",className:"winners-header__item",text:"Wins"})}addTimesBlock(){const t=new i({tag:"div",className:"winners-header__item",text:"Best time (secounds)"});return t.getNode().classList.add("winners-header__time"),t}}var St=Object.defineProperty,At=(a,t,e)=>t in a?St(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,_=(a,t,e)=>(At(a,typeof t!="symbol"?t+"":t,e),e);class Pt{constructor(t,e){_(this,"_parentNode"),_(this,"_currentPage",1),_(this,"_winnerItemsBlock"),_(this,"prevButtonClickListener",()=>{this._currentPage-=1,this.cleanWinnerItemsBlock(),d(this._winnerItemsBlock)&&this.addWinners(this._currentPage,this._winnerItemsBlock),this.updatePaginatinCounter();const n=document.querySelector(".winners-prev-button");this._currentPage===1&&g(HTMLButtonElement,n)&&(n.disabled=!0);const r=document.querySelector(".winners-next-button");g(HTMLButtonElement,r)&&(r.disabled=!1)}),_(this,"reloadWinnersBlock",async(n="id",r="DESC")=>{if(this.cleanWinnerItemsBlock(),await new I().updateWinnersAmount(),d(this._winnerItemsBlock)&&this.addWinners(this._currentPage,this._winnerItemsBlock,n,r),await this.isLastCarPage()){const s=document.querySelector(".winners-next-button");g(HTMLButtonElement,s)&&(s.disabled=!0)}}),_(this,"nextButtonClickListener",async()=>{this._currentPage+=1,this.cleanWinnerItemsBlock(),d(this._winnerItemsBlock)&&this.addWinners(this._currentPage,this._winnerItemsBlock),this.updatePaginatinCounter();const n=document.querySelector(".winners-prev-button");if(console.log(n),this._currentPage!==1&&g(HTMLButtonElement,n)&&(n.disabled=!1),await this.isLastCarPage()){const o=document.querySelector(".winners-next-button");g(HTMLButtonElement,o)&&(o.disabled=!0)}}),_(this,"addWinnersBlock",async n=>{const r=new i({tag:"div",className:"winners-block"}),o=new yt,s=o.draw();r.append(s);const c=o.addWinsBlock(),l=c.getNode(),p=o.addTimesBlock(),w=p.getNode(),f=this.addWinnerItemsBlock();s.appendChildren([c,p]),p.addListener("click",()=>this.sortByTimeslistener(w,l)),c.addListener("click",()=>this.sortByWinnerslistener(l,w)),r.append(f),n.append(r)}),_(this,"sortByWinnerslistener",(n,r)=>{r.classList.remove("sort-arrow-up"),r.classList.remove("sort-arrow-down"),n.classList.toggle("wins-desc"),n.classList.contains("wins-desc")?(this.reloadWinnersBlock("wins","DESC"),n.classList.add("sort-arrow-down"),n.classList.remove("sort-arrow-up")):(this.reloadWinnersBlock("wins","ASC"),n.classList.add("sort-arrow-up"),n.classList.remove("sort-arrow-down"))}),_(this,"sortByTimeslistener",(n,r)=>{n.classList.toggle("time-desc"),r.classList.remove("sort-arrow-up"),r.classList.remove("sort-arrow-down"),n.classList.contains("time-desc")?(this.reloadWinnersBlock("time","DESC"),n.classList.add("sort-arrow-down"),n.classList.remove("sort-arrow-up")):(this.reloadWinnersBlock("time","ASC"),n.classList.add("sort-arrow-up"),n.classList.remove("sort-arrow-down"))}),_(this,"addWinnerItemsBlock",()=>{const n=new i({tag:"div",className:"winner-items-block"}),r=n.getNode();return this._winnerItemsBlock=r,this.addWinners(this._currentPage,r),n}),_(this,"addWinners",async(n,r,o="id",s="ASC")=>{const l=await new h().getWinners(n,o,s);for(let p=0;p<l.length;p++){const w=l[p];if(d(r)){const R=await(await new vt(w,p).draw()).getNode();r.appendChild(R)}}}),this._parentNode=t,this._currentPage=e}async draw(){const t=new i({tag:"div",className:"winners-page"}),e=t.getNode();this._parentNode.appendChild(e);const n=$("WINNERS"),r=new I().draw(),o=new O,s=o.drawCounter();s.getNode().classList.add("winners-pagination-couneter"),t.appendChildren([n,r,s]),this.addWinnersBlock(t);const c=o.drawPrevButton();c.getNode().classList.add("winners-prev-button"),c.addListener("click",this.prevButtonClickListener);const l=await o.drawNextButton(10);l.getNode().classList.add("winners-next-button"),l.addListener("click",this.nextButtonClickListener),o.drawPaginationButtonsBlock(t,[c,l])}cleanWinnerItemsBlock(){if(d(this._winnerItemsBlock))for(;this._winnerItemsBlock.firstChild;)this._winnerItemsBlock.removeChild(this._winnerItemsBlock.firstChild)}updatePaginatinCounter(){const t=document.querySelector(".winners-pagination-couneter");d(t)&&(t.textContent=`Page #${this._currentPage}`)}async isLastCarPage(){const n=(await new h().getAllWinners()).length,r=this._currentPage*10;return!(n-r>0)}}const Lt=1,Et=new C;Et.setInitial();const L=document.body,xt=new G(L);xt.draw();const F=new Pt(L,Lt);F.draw();const It=new Ct(L,F);It.draw();
