let css = document.createElement("style");
css.innerHTML=`
@media (prefers-color-scheme:light){ :root{ 
    --card-bg:rgba(255,255,255,0.35);
    --font-color:#000 } }
    @media (prefers-color-scheme:dark){ :root{ 
    --card-bg:rgba(0,0,0,0.65);
    --font-color:#fff } }
    :root{ --radius:.5rem }
    div.wrapper, div.content-wrapper{ background:transparent }
    body{ background-repeat:no-repeat; background-size:cover;background-position:center }
    .card,.callout,.form-control,.main-footer,.main-header{ background-color:var(--card-bg);color:var(--font-color);backdrop-filter:blur(2px) }
    .main-header,.main-footer{ border:none }
    .card,.callout,.form-control,.alert,.btn{ border-radius:var(--radius) }
    .card-header,.card-header:first-child{ border-top-left-radius:var(--radius);border-top-right-radius:var(--radius) }
    #toggle-dark-mode{ display:none }
    .callout{ border:none;position:relative;padding-left:1.3rem }
    .callout::before{ background:var(--blue);width:.3em;position:absolute;content:'';top:1rem;bottom:1rem;display:inline-block;left:.3rem;border-radius:1rem }
    canvas{ border-radius:var(--radius) }
    .card-body.p-0{ padding:1rem !important }
    .hp-wrapper{ background:none !important }
    .card-outline::before{ background:var(--blue);height:.3em;position:absolute;content:'';top:.3rem;display:inline-block;left:.5rem;right:.5rem;border-radius:1rem }
    .card-outline{ border-top:none !important;padding-top:.3rem }
    input.form-control{ border:none }
    .form-control:focus{ background:var(--card-bg);color:var(--font-color) }
    .callout a {color:var(--font-color)}
    
    .table tbody>tr{background:transparent}
    .table tbody>tr:hover{ background:var(--card-bg);color:var(--font-color)}
    .table td{border-top:none}
`;
document.querySelector("head").appendChild(css);