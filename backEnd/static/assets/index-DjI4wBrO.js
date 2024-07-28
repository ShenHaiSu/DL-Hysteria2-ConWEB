import{B as t,l as n,a as o,k as p,$ as r,m as i}from"./index-BEx53xAQ.js";var s=function(e){var a=e.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    left: 0.75rem;
    color: `.concat(a("floatlabel.color"),`;
    transition-duration: `).concat(a("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(textarea) label {
    top: 1rem;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: -.75rem;
    font-size: 12px;
    color: `).concat(a("floatlabel.focus.color"),`;
}

.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel > .p-invalid + label {
    color: `).concat(a("floatlabel.invalid.color"),`;
}
`)},c={root:"p-floatlabel"},f=t.extend({name:"floatlabel",theme:s,classes:c}),b={name:"BaseFloatLabel",extends:n,props:{},style:f,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},u={name:"FloatLabel",extends:b,inheritAttrs:!1};function d(l,e,a,h,m,v){return o(),p("span",i({class:l.cx("root")},l.ptmi("root")),[r(l.$slots,"default")],16)}u.render=d;export{u as default};
