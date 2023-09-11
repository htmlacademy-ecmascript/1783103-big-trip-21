(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",u="quarter",c="year",p="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:o,d:a,D:p,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=h;var $=function(e){return e instanceof S},b=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},D=m;D.l=b,D.i=$,D.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function h(e){this.$L=b(e.locale,null,!0),this.parse(e)}var _=h.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return D},_.isValid=function(){return!(this.$d.toString()===d)},_.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return M(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<M(e)},_.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,u=!!D.u(t)||t,d=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},v=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,_=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case c:return u?f(1,0):f(31,11);case l:return u?f(1,_):f(0,_+1);case o:var g=this.$locale().weekStart||0,$=(h<g?h+7:h)-g;return f(u?m-$:m+(6-$),_);case a:case p:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case s:return v(y+"Seconds",2);case i:return v(y+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,u=D.p(e),d="set"+(this.$u?"UTC":""),f=(o={},o[a]=d+"Date",o[p]=d+"Date",o[l]=d+"Month",o[c]=d+"FullYear",o[r]=d+"Hours",o[s]=d+"Minutes",o[i]=d+"Seconds",o[n]=d+"Milliseconds",o)[u],v=u===a?this.$D+(t-this.$W):t;if(u===l||u===c){var h=this.clone().set(p,1);h.$d[f](v),h.init(),this.$d=h.set(p,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[D.p(e)]()},_.add=function(n,u){var p,d=this;n=Number(n);var f=D.p(u),v=function(e){var t=M(d);return D.w(t.date(t.date()+Math.round(e*n)),d)};if(f===l)return this.set(l,this.$M+n);if(f===c)return this.set(c,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(p={},p[s]=e,p[r]=t,p[i]=1e3,p)[f]||1,_=this.$d.getTime()+n*h;return D.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=D.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,u=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},p=function(e){return D.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(n.monthsShort,o,u,3),MMMM:c(u,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:D.s(r,2,"0"),h:p(1),hh:p(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(e,t){return t||h[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,p,d){var f,v=D.p(p),h=M(n),_=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=D.m(this,h);return y=(f={},f[c]=y/12,f[l]=y,f[u]=y/3,f[o]=(m-_)/6048e5,f[a]=(m-_)/864e5,f[r]=m/t,f[s]=m/e,f[i]=m/1e3,f)[v]||m,d?y:D.a(y)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return g[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=b(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return D.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},h}(),w=S.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",c],["$D",p]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,S,M),e.$i=!0),M},M.locale=b,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=g[y],M.Ls=g,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return'\n    <ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var s=n(484),r=n.n(s);const a="hh:mm";function o(e){return e[Math.floor(Math.random()*e.length)]}function l(){return Math.floor(1e3*Math.random())+1}function u(e){return e?r()(e).format("YYYY-MM-DDTHH:mm"):""}function c(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}const p=Math.random()>=.5;class d{constructor({point:e,pointDestination:t,pointOffers:n}){this.point=e,this.pointDestination=t,this.pointOffers=n}getTemplate(){return function({point:e}){const{destinations:t,type:n,price:i,offers:s}=e,r=s.find((e=>e.type===n)),a=u(e.dateFrom),o=u(e.dateTo);return`<li class="trip-events__item">\n            <form class="event event--edit" action="#" method="post">\n              <header class="event__header">\n                <div class="event__type-wrapper">\n                  <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                    <span class="visually-hidden">Choose event type</span>\n                    <img class="event__type-icon" width="17" height="17" src="img/icons/${n}.png" alt="Event type icon">\n                  </label>\n                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                  <div class="event__type-list">\n                    <fieldset class="event__type-group">\n                      <legend class="visually-hidden">Event type</legend>\n\n                      ${function(e){return`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${e}</label>\n  </div>`}(n)}\n\n                    </fieldset>\n                  </div>\n                </div>\n\n                <div class="event__field-group  event__field-group--destination">\n                  <label class="event__label  event__type-output" for="event-destination-1">\n                    ${n}\n                  </label>\n                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.name}" list="destination-list-1">\n                  <datalist id="destination-list-1">\n                    <option value="${t.name}"></option>\n                    <option value="${t.name}"></option>\n                    <option value="${t.name}"></option>\n                  </datalist>\n                </div>\n\n                <div class="event__field-group  event__field-group--time">\n                  <label class="visually-hidden" for="event-start-time-1">From</label>\n                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${a}">\n                  &mdash;\n                  <label class="visually-hidden" for="event-end-time-1">To</label>\n                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o}">\n                </div>\n\n                <div class="event__field-group  event__field-group--price">\n                  <label class="event__label" for="event-price-1">\n                    <span class="visually-hidden">Price</span>\n                    &euro;\n                  </label>\n                  <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n                </div>\n\n                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                <button class="event__reset-btn" type="reset">Cancel</button>\n              </header>\n              <section class="event__details">\n              <section class="event__section  event__section--offers">\n                  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n                  <div class="event__available-offers">\n                    ${l=r,l.offers.map((({id:e,offerPrice:t,title:n})=>`<div class="event__offer-selector">\n          <input class="event__offer-checkbox  visually-hidden" id="${e}" type="checkbox" name="event-offer-luggage" checked>\n          <label class="event__offer-label" for="event-offer-luggage-1">\n            <span class="event__offer-title">${n}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${t}</span>\n          </label>\n        </div>`)).join("")}\n                  </div>\n                </section>\n              </section>\n                ${function(e){const{description:t,pictures:n,name:i}=e;return`<section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">${i}</h3>\n            <p class="event__destination-description">${t}</p>\n\n            <div class="event__photos-container">\n            <div class="event__photos-tape">\n                ${n.map((({src:e,pictureDescription:t})=>`<img class="event__photo" src="${e}" alt="${t}">`))}     \n            </div>\n            </div>\n      </section>`}(t)}\n\n            </form>\n          </li>`;var l}({point:this.point,pointDestination:this.pointDestination,pointOffers:this.pointOffers})}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class f{constructor({point:e}){this.point=e}getTemplate(){return function({point:e}){const{destinations:t,isFavorite:n,type:i,eventDate:s,dateFrom:o,dateTo:l,price:u,offers:c}=e,p=function(e){return e?r()(e).format("DD MMM"):""}(s),d=function(e){return e?r()(e).format(a):""}(o),f=function(e){return e?r()(e).format(a):""}(l),v=function(e,t){return r()(t).diff(r()(e),"minutes")}(o,l),h=n?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn event__favorite-btn--disabled",_=c.find((e=>e.type===i));return`\n    <li class="trip-events__item">\n        <div class="event">\n        <time class="event__date" datetime="2019-03-18">${p}</time>\n        <div class="event__type">\n            <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${t.name}</h3>\n        <div class="event__schedule">\n            <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">${d}</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">${f}</time>\n            </p>\n            <p class="event__duration">${v}</p>\n        </div>\n        <p class="event__price">\n            &euro;&nbsp;<span class="event__price-value">${u}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n          ${m=_,m.offers.map((e=>`<li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.offerPrice}</span>\n      </li>`)).join("")}\n        </section>\n        <button class="event__favorite-btn ${h}" type="button">\n            <span class="visually-hidden">Add to favorite</span>\n            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n            </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n        </button>\n        </div>\n  </li>`;var m}({point:this.point,pointDestination:this.pointDestination,pointOffers:this.pointOffers})}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=["Tokyo","Singapore","Copenhagen","Stockholm","Melbourne","Hong Kong","Amsterdam","Wellington"],h=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."],_=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],m=self.crypto.randomUUID(),y=c(1,10),g=document.querySelector(".page-header").querySelector(".trip-controls__filters"),$=document.querySelector(".page-body__page-main").querySelector(".trip-events"),b=new class{points=[];constructor(){this.points=this.generatePoints()}generateDestination(e){return Array.from({length:e},(()=>({id:m,description:h,name:o(v),pictures:Array.from({length:y},(()=>({src:`https://loremflickr.com/248/152?random=${l()}`,pictureDescription:m})))})))}generateOffers(e){return _.map((t=>({type:t,offers:Array.from({length:e},(()=>({id:m,title:`Offer ${t}`,offerPrice:l()})))})))}generatePoints(){return Array.from({length:4},(()=>{return{id:m,eventDate:"2019-03-18",dateFrom:"2019-03-18T10:30",dateTo:"2019-03-18T11:00",price:l(),type:o(_),isFavorite:p,offers:this.generateOffers(c(0,2)),destinations:(e=this.generateDestination(3),e[c(0,e.length-1)])};var e}))}getPoints(){return this.points}},M=new class{constructor(e){this.service=e,this.events=this.service.getPoints()}get(){return this.events}}(b),D=new class{eventComponent=new i;eventListComponent=new i;constructor({eventContainer:e,eventModel:t}){this.eventContainer=e,this.eventModel=t}init(){this.points=this.eventModel.get(),t(this.eventComponent,this.eventContainer),t(this.eventListComponent,this.eventContainer),t(new d({point:this.points[0]}),this.eventComponent.getElement()),this.points.forEach((e=>{t(new f({point:e}),this.eventComponent.getElement())}))}}({eventContainer:$,eventModel:M});t(new class{getTemplate(){return'\n        <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n    '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},g),t(new class{getTemplate(){return'\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},$),D.init()})()})();
//# sourceMappingURL=bundle.b549243e062a44a24f4e.js.map