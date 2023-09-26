(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",l="week",o="month",u="quarter",p="year",v="date",d="Invalid Date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},f=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:f,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),r=n-s<0,a=t.clone().add(i+(r?-1:1),o);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:p,w:l,d:a,D:v,h:r,m:s,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=h;var b=function(e){return e instanceof w},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var l=t.name;g[l]=t,s=l}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},S=m;S.l=$,S.i=b,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var f=h.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(c);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return S},f.isValid=function(){return!(this.$d.toString()===d)},f.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},f.isAfter=function(e,t){return M(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<M(e)},f.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var n=this,u=!!S.u(t)||t,d=S.p(e),c=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return u?i:i.endOf(a)},_=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,f=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case p:return u?c(1,0):c(31,11);case o:return u?c(1,f):c(0,f+1);case l:var g=this.$locale().weekStart||0,b=(h<g?h+7:h)-g;return c(u?m-b:m+(6-b),f);case a:case v:return _(y+"Hours",0);case r:return _(y+"Minutes",1);case s:return _(y+"Seconds",2);case i:return _(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var l,u=S.p(e),d="set"+(this.$u?"UTC":""),c=(l={},l[a]=d+"Date",l[v]=d+"Date",l[o]=d+"Month",l[p]=d+"FullYear",l[r]=d+"Hours",l[s]=d+"Minutes",l[i]=d+"Seconds",l[n]=d+"Milliseconds",l)[u],_=u===a?this.$D+(t-this.$W):t;if(u===o||u===p){var h=this.clone().set(v,1);h.$d[c](_),h.init(),this.$d=h.set(v,Math.min(this.$D,h.daysInMonth())).$d}else c&&this.$d[c](_);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[S.p(e)]()},f.add=function(n,u){var v,d=this;n=Number(n);var c=S.p(u),_=function(e){var t=M(d);return S.w(t.date(t.date()+Math.round(e*n)),d)};if(c===o)return this.set(o,this.$M+n);if(c===p)return this.set(p,this.$y+n);if(c===a)return _(1);if(c===l)return _(7);var h=(v={},v[s]=e,v[r]=t,v[i]=1e3,v)[c]||1,f=this.$d.getTime()+n*h;return S.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),r=this.$H,a=this.$m,l=this.$M,o=n.weekdays,u=n.months,p=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},v=function(e){return S.s(r%12||12,e,"0")},c=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:S.s(l+1,2,"0"),MMM:p(n.monthsShort,l,u,3),MMMM:p(u,l),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,o,2),ddd:p(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:S.s(r,2,"0"),h:v(1),hh:v(2),a:c(r,a,!0),A:c(r,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(_,(function(e,t){return t||h[e]||s.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,v,d){var c,_=S.p(v),h=M(n),f=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=S.m(this,h);return y=(c={},c[p]=y/12,c[o]=y,c[u]=y/3,c[l]=(m-f)/6048e5,c[a]=(m-f)/864e5,c[r]=m/t,c[s]=m/e,c[i]=m/1e3,c)[_]||m,d?y:S.a(y)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return g[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},f.clone=function(){return S.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),D=w.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",o],["$y",p],["$D",v]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,w,M),e.$i=!0),M},M.locale=$,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=g[y],M.Ls=g,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}function i(){return'\n    <ul class="trip-events__list"></ul>'}class s{getTemplate(){return i}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function r(e){return e[Math.floor(Math.random()*e.length)]}n(484);const a=["Tokyo","Singapore","Copenhagen","Stockholm","Melbourne","Hong Kong","Amsterdam","Wellington"],l=["taxi","bus","rain","ship","drive","flight","check-in","sightseeing","restaurant"],o=[{basePrice:100,dateFrom:11.01,dateTo:11.2,destination:r(a),isFavorite:!0,offers:!0,type:r(l)},{basePrice:100,dateFrom:11.01,dateTo:11.2,destination:r(a),isFavorite:!0,offers:!0,type:r(l)},{basePrice:100,dateFrom:11.01,dateTo:11.2,destination:r(a),isFavorite:!0,offers:!0,type:r(l)},{basePrice:100,dateFrom:11.01,dateTo:11.2,destination:r(a),isFavorite:!0,offers:!0,type:r(l)},{basePrice:100,dateFrom:11.01,dateTo:11.2,destination:r(a),isFavorite:!0,offers:!0,type:r(l)}];function u(){return r(o)}console.log(o.type),console.log(o);class p{constructor({points:e}){this.points=e}getTemplate(){return function(e){const{destination:t,type:n}=e;return`<li class="trip-events__item">\n                <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${n}">\n                          <label class="event__type-label  event__type-label--${n}" for="event-type-${n}-1">${n}</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" checked>\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-${n}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      Bus\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${t} list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="${t}"></option>\n                      <option value="${t}"></option>\n                      <option value="${t}"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Cancel</button>\n                </header>\n\n                <section class="event__details">\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                        <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n                      </div>\n                    </div>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.points)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'\n    <li class="trip-events__item">\n        <div class="event">\n        <time class="event__date" datetime="2019-03-18">MAR 18</time>\n        <div class="event__type">\n            <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">Taxi Amsterdam</h3>\n        <div class="event__schedule">\n            <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n            </p>\n            <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n            &euro;&nbsp;<span class="event__price-value">20</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n            <li class="event__offer">\n            <span class="event__offer-title">Order Uber</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">20</span>\n            </li>\n        </ul>\n        <button class="event__favorite-btn event__favorite-btn--active" type="button">\n            <span class="visually-hidden">Add to favorite</span>\n            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n            </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n        </button>\n        </div>\n  </li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}console.log("what");const d=document.querySelector(".page-header").querySelector(".trip-controls__filters"),c=document.querySelector(".page-body__page-main").querySelector(".trip-events"),_=new class{events=Array.from({length:3},u);getEvents(){return this.events}},h=new class{eventComponent=new s;eventListComponent=new p;constructor({eventContainer:e,eventModel:t}){this.eventContainer=e,this.eventModel=t}init(){this.eventsPoints=[...this.eventModel.getEvents()],t(this.eventComponent,this.eventContainer),t(new p,this.eventComponent.getElement());for(let e=0;e<this.eventsPoints.length;e++)t(new v({points:this.eventsPoints[e]}),this.eventComponent.getElement())}}({eventContainer:c,eventModel:_});t(new class{getTemplate(){return'\n        <form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n        </form>\n    '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},d),t(new class{getTemplate(){return'\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},c),h.init()})()})();
//# sourceMappingURL=bundle.b52a5076211c5e90fb1c.js.map