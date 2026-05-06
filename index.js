import{a as d,b as f}from"./assets/vendor-g2R8VuMk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function l(t){return t.map(({poster_path:o,original_title:r,release_date:i,vote_average:e,id:s})=>`
    <li class="movie-card">
    <img src="https://image.tmdb.org/t/p/w300${o}" alt="${r}" data-id="${s}"/>
    <div class="movie-info">
    <h2>${r}</h2>
    <p>Release Date: ${i}</p>
    <p>Vote Average: ${e}</p>
    </div>
    </li>
      `).join("")}const u="523f83d921c0f7bebd45415c65ab8c3c",g="https://api.themoviedb.org/3";async function m(t){const o=t.target.dataset.id;if(o)try{const{data:r}=await d(`${g}/movie/${o}`,{params:{api_key:u}});f.create(`
  <img src="https://image.tmdb.org/t/p/w780${r.backdrop_path}" alt="${r.original_title}"/>
 <div class="movie-info-modal">
    <p>Overview: ${r.overview}</p>
 </div>
`).show()}catch(r){console.log(r)}}const h="523f83d921c0f7bebd45415c65ab8c3c",v="https://api.themoviedb.org/3",b="/trending/movie/week",y={root:null,rootMargin:"300px",scrollMargin:"0px",threshold:0},$=new IntersectionObserver(_,y);let c=1;L();const a=document.querySelector(".js-movie-list"),w=document.querySelector(".observer");a.addEventListener("click",m);async function p(t=1){try{const{data:o}=await d(`${v}${b}`,{params:{api_key:h,page:t}});return o}catch(o){console.log(o.message)}}async function L(){try{const t=await p(c);a.insertAdjacentHTML("beforeend",l(t.results)),t.page<t.total_pages&&$.observe(w)}catch(t){console.log(t.message)}}function _(t,o){t.forEach(async r=>{if(r.isIntersecting){c++;try{const i=await p(c);a.insertAdjacentHTML("beforeend",l(i.results)),i.page>=i.total_pages&&o.unobserve(r.target)}catch(i){console.log(i)}}})}
//# sourceMappingURL=index.js.map
