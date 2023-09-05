(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",f="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},_=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},m={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,a=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:o,d:a,D:f,h:r,m:s,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=h;var $=function(t){return t instanceof O},b=function t(e,n,i){var s;if(!e)return g;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,s=o}return!i&&s&&(g=s),s||!i&&g},D=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},M=m;M.l=b,M.i=$,M.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function h(t){this.$L=b(t.locale,null,!0),this.parse(t)}var _=h.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return M},_.isValid=function(){return!(this.$d.toString()===d)},_.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return D(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<D(t)},_.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,u=!!M.u(e)||e,d=M.p(t),p=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return u?i:i.endOf(a)},v=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,_=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case c:return u?p(1,0):p(31,11);case l:return u?p(1,_):p(0,_+1);case o:var y=this.$locale().weekStart||0,$=(h<y?h+7:h)-y;return p(u?m-$:m+(6-$),_);case a:case f:return v(g+"Hours",0);case r:return v(g+"Minutes",1);case s:return v(g+"Seconds",2);case i:return v(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var o,u=M.p(t),d="set"+(this.$u?"UTC":""),p=(o={},o[a]=d+"Date",o[f]=d+"Date",o[l]=d+"Month",o[c]=d+"FullYear",o[r]=d+"Hours",o[s]=d+"Minutes",o[i]=d+"Seconds",o[n]=d+"Milliseconds",o)[u],v=u===a?this.$D+(e-this.$W):e;if(u===l||u===c){var h=this.clone().set(f,1);h.$d[p](v),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[M.p(t)]()},_.add=function(n,u){var f,d=this;n=Number(n);var p=M.p(u),v=function(t){var e=D(d);return M.w(e.date(e.date()+Math.round(t*n)),d)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===a)return v(1);if(p===o)return v(7);var h=(f={},f[s]=t,f[r]=e,f[i]=1e3,f)[p]||1,_=this.$d.getTime()+n*h;return M.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},f=function(t){return M.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:f(1),hh:f(2),a:p(r,a,!0),A:p(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||h[t]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,f,d){var p,v=M.p(f),h=D(n),_=(h.utcOffset()-this.utcOffset())*t,m=this-h,g=M.m(this,h);return g=(p={},p[c]=g/12,p[l]=g,p[u]=g/3,p[o]=(m-_)/6048e5,p[a]=(m-_)/864e5,p[r]=m/e,p[s]=m/t,p[i]=m/1e3,p)[v]||m,d?g:M.a(g)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return y[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},_.clone=function(){return M.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),S=O.prototype;return D.prototype=S,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",f]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,O,D),t.$i=!0),D},D.locale=b,D.isDayjs=$,D.unix=function(t){return D(1e3*t)},D.en=y[g],D.Ls=y,D.p={},D}()}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}function e(t,e,n="beforeend"){e.insertAdjacentElement(n,t.getElement())}class i{getTemplate(){return'\n    <ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}var s=n(484),r=n.n(s);const a="hh:mm";function o(t){return t[Math.floor(Math.random()*t.length)]}function l(){return Math.floor(1e3*Math.random())+1}function u(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}const c=["Tokyo","Singapore","Copenhagen","Stockholm","Melbourne","Hong Kong","Amsterdam","Wellington"],f=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],d=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],p=self.crypto.randomUUID(),v=u(1,10),h=u(1,10),_=u(1,10),m=v;function g(t){const{offers:e,type:n,id:i,title:s,offerPrice:r,point:a}=t;return console.log(e),`<section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="${i}" type="checkbox" name="event-offer-luggage" checked>\n            <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">${s}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${r}</span>\n            </label>\n          </div>\n        </div>\n      </section>`}const y={id:p,eventDate:null,eventPrice:0,destination:o(c),dateFrom:null,dateTo:null,isFavorite:!1,type:o(d),offers:[]};function $(t){return`<div class="event__type-item">\n    <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n    <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${t}</label>\n  </div>`}class b{constructor({point:t=y,pointDestination:e,pointOffers:n}){this.point=t,this.pointDestination=e,this.pointOffers=n}getTemplate(){return function({point:t,pointDestination:e,pointOffers:n}){const{destination:i,isFavorite:s,type:r,id:a,eventPrice:o,eventDate:l,dateFrom:u,dateTo:c,price:f,hasOffers:d,offers:p}=t;return $(r),console.log(t,i),`<li class="trip-events__item">\n            <form class="event event--edit" action="#" method="post">\n              <header class="event__header">\n                <div class="event__type-wrapper">\n                  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                    <span class="visually-hidden">Choose event type</span>\n                    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                  </label>\n                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                  <div class="event__type-list">\n                    <fieldset class="event__type-group">\n                      <legend class="visually-hidden">Event type</legend>\n\n                      ${$(r)}\n\n                    </fieldset>\n                  </div>\n                </div>\n\n                <div class="event__field-group  event__field-group--destination">\n                  <label class="event__label  event__type-output" for="event-destination-1">\n                    ${r}\n                  </label>\n                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${i}" list="destination-list-1">\n                  <datalist id="destination-list-1">\n                    <option value="${i}"></option>\n                    <option value="${i}"></option>\n                    <option value="${i}"></option>\n                  </datalist>\n                </div>\n\n                <div class="event__field-group  event__field-group--time">\n                  <label class="visually-hidden" for="event-start-time-1">From</label>\n                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${u}">\n                  &mdash;\n                  <label class="visually-hidden" for="event-end-time-1">To</label>\n                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${c}">\n                </div>\n\n                <div class="event__field-group  event__field-group--price">\n                  <label class="event__label" for="event-price-1">\n                    <span class="visually-hidden">Price</span>\n                    &euro;\n                  </label>\n                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n                </div>\n\n                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                <button class="event__reset-btn" type="reset">Cancel</button>\n              </header>\n              <section class="event__details">\n                ${g({pointOffers:n,offers:p})}\n                ${function(t){const{destinations:e,description:n,pictures:i,name:s,id:r}=t;function a(){return`<img class="event__photo" src="${i}" alt="{destinationPicturesAlt}">`}return console.log(e),a(),`<section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">${s}</h3>\n            <p class="event__destination-description">${n}</p>\n\n            <div class="event__photos-container">\n            <div class="event__photos-tape">\n                ${a()}     \n            </div>\n            </div>\n      </section>`}({pointDestination:e})}\n\n            </form>\n          </li>`}({point:this.point,pointDestination:this.pointDestination,pointOffers:this.pointOffers})}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}class D{constructor({point:t,pointDestination:e,pointOffers:n}){this.point=t,this.pointDestination=e,this.pointOffers=n}getTemplate(){return function({point:t,pointDestination:e,pointOffers:n}){const{destination:i,isFavorite:s,type:o,id:l,eventPrice:u,eventDate:c,dateFrom:f,dateTo:d,price:p,hasOffers:v,offers:h}=t,_=function(t){return t?r()(t).format("DD MMM"):""}(t.eventDate),m=function(t){return t?r()(t).format(a):""}(t.dateFrom),y=function(t){return t?r()(t).format(a):""}(t.dateTo),$=void r()(void 0).diff(r()(void 0),"minutes"),b=s?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn event__favorite-btn--disabled";console.log(i,h,t);const D=h.find((t=>t.type===o));return console.log(D),`\n    <li class="trip-events__item">\n        <div class="event">\n        <time class="event__date" datetime="2019-03-18">${_}</time>\n        <div class="event__type">\n            <img class="event__type-icon" width="42" height="42" src="img/icons/${o}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${o} ${i.name}</h3>\n        <div class="event__schedule">\n            <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${m}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${y}</time>\n            </p>\n            <p class="event__duration">${$}</p>\n        </div>\n        <p class="event__price">\n            &euro;&nbsp;<span class="event__price-value">${p}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${g({pointOffers:n,offers:h})}\n        <button class="event__favorite-btn ${b}" type="button">\n            <span class="visually-hidden">Add to favorite</span>\n            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n            </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n        </button>\n        </div>\n  </li>`}({point:this.point,pointDestination:this.pointDestination,pointOffers:this.pointOffers})}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}}const M=document.querySelector(".page-header").querySelector(".trip-controls__filters"),O=document.querySelector(".page-body__page-main").querySelector(".trip-events"),S=new class{destinations=[];offers=[];points=[];constructor(){this.destinations=this.generateDestination(),this.offers=this.generateOffers(),this.points=this.generatePoints()}getDestinations(){return this.destinations}getOffers(){return this.offers}getPoints(){return this.points}generateDestination(){return Array.from({length:h},(()=>({id:p,description:f,name:o(c),pictures:[{src:`https://loremflickr.com/248/152?random=${l()}`,pictureDescription:p}]})))}generateOffers(){return d.map((t=>({type:t,offers:Array.from({length:_},(()=>({id:p,title:`Offer ${t}`,offerPrice:l()})))})))}generatePoints(){return Array.from({length:m},(()=>{return{id:p,eventDate:"2019-03-18",dateFrom:"2019-03-18T10:30",dateTo:"2019-03-18T11:00",price:l(),type:o(d),isFavorite:!1,hasOffers:u(0,1),offers:this.offers.slice(u(0,_)),destination:(t=this.destinations,t[u(0,t.length-1)])};var t}))}},w=new class{constructor(t){this.service=t,this.points=this.service.getPoints()}get(){return this.points}}(S),T=new class{eventComponent=new i;eventListComponent=new i;constructor({eventContainer:t,eventModel:e}){this.eventContainer=t,this.eventModel=e,this.points=[...e.get()]}init(){e(this.eventComponent,this.eventContainer),e(this.eventListComponent,this.eventContainer),e(new b({points:this.points[0],pointDestination:this.destination,pointOffers:this.offers}),this.eventComponent.getElement()),this.points.forEach((t=>{e(new D({point:t,pointDestination:this.destination,pointOffers:this.offers}),this.eventComponent.getElement())}))}}({eventContainer:O,eventModel:w});e(new class{getTemplate(){return'\n        <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n    '}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},M),e(new class{getTemplate(){return'\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>'}getElement(){return this.element||(this.element=t(this.getTemplate())),this.element}removeElement(){this.element=null}},O),T.init()})()})();
//# sourceMappingURL=bundle.973d92d84affc6f7538a.js.map