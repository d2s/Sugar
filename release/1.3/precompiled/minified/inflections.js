var Hb=[],Ib=[],Z=[],Jb=[],Kb={},Lb,$;function Mb(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}
function Nb(a,b,c){F(b)&&Mb(Z,b);Mb(Z,c);a.unshift({k:b,u:c})}function Ob(a,b){return a==b||a=="all"||!a}function Pb(a){return Z.some(function(b){return(new t("\\b"+b+"$","i")).test(a)})}function Qb(a,b){a=F(a)?a.toString():"";return a.isBlank()||Pb(a)?a:Rb(a,b?Hb:Ib)}function Rb(a,b){J(b,function(c,d){if(a.match(d.k)){a=a.replace(d.k,d.u);return m}});return a}function Sb(a){return a.replace(/^\W*[a-z]/,function(b){return b.toUpperCase()})}
$={acronym:function(a){Kb[a.toLowerCase()]=a;a=r.keys(Kb).map(function(b){return Kb[b]});$.acronymRegExp=t(a.join("|"),"g")},plural:function(a,b){Nb(Hb,a,b)},singular:function(a,b){Nb(Ib,a,b)},irregular:function(a,b){var c=a.first(),d=a.from(1),f=b.first(),g=b.from(1),e=f.toUpperCase(),i=f.toLowerCase(),h=c.toUpperCase(),l=c.toLowerCase();Mb(Z,a);Mb(Z,b);if(h==e){$.plural(new t("({1}){2}$".assign(c,d),"i"),"$1"+g);$.plural(new t("({1}){2}$".assign(f,g),"i"),"$1"+g);$.singular(new t("({1}){2}$".assign(f,
g),"i"),"$1"+d)}else{$.plural(new t("{1}{2}$".assign(h,d)),e+g);$.plural(new t("{1}{2}$".assign(l,d)),i+g);$.plural(new t("{1}{2}$".assign(e,g)),e+g);$.plural(new t("{1}{2}$".assign(i,g)),i+g);$.singular(new t("{1}{2}$".assign(e,g)),h+d);$.singular(new t("{1}{2}$".assign(i,g)),l+d)}},uncountable:function(a){var b=s.isArray(a)?a:I(arguments);Z=Z.concat(b)},human:function(a,b){Jb.unshift({k:a,u:b})},clear:function(a){if(Ob(a,"singulars"))Ib=[];if(Ob(a,"plurals"))Hb=[];if(Ob(a,"uncountables"))Z=[];if(Ob(a,
"humans"))Jb=[];if(Ob(a,"acronyms"))Kb={}}};Lb=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"];$.plural(/$/,"s");$.plural(/s$/gi,"s");$.plural(/(ax|test)is$/gi,"$1es");$.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i");$.plural(/(census|alias|status)$/gi,"$1es");$.plural(/(bu)s$/gi,"$1ses");$.plural(/(buffal|tomat)o$/gi,"$1oes");$.plural(/([ti])um$/gi,"$1a");$.plural(/([ti])a$/gi,"$1a");$.plural(/sis$/gi,"ses");
$.plural(/f+e?$/gi,"ves");$.plural(/(cuff|roof)$/gi,"$1s");$.plural(/([ht]ive)$/gi,"$1s");$.plural(/([^aeiouy]o)$/gi,"$1es");$.plural(/([^aeiouy]|qu)y$/gi,"$1ies");$.plural(/(x|ch|ss|sh)$/gi,"$1es");$.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices");$.plural(/([ml])ouse$/gi,"$1ice");$.plural(/([ml])ice$/gi,"$1ice");$.plural(/^(ox)$/gi,"$1en");$.plural(/^(oxen)$/gi,"$1");$.plural(/(quiz)$/gi,"$1zes");$.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os");$.plural(/(craft)$/gi,"$1");
$.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2");$.singular(/s$/gi,"");$.singular(/([pst][aiu]s)$/gi,"$1");$.singular(/([aeiouy])ss$/gi,"$1ss");$.singular(/(n)ews$/gi,"$1ews");$.singular(/([ti])a$/gi,"$1um");$.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis");$.singular(/(^analy)ses$/gi,"$1sis");$.singular(/(i)(f|ves)$/i,"$1fe");$.singular(/([aeolr]f?)(f|ves)$/i,"$1f");$.singular(/([ht]ive)s$/gi,"$1");$.singular(/([^aeiouy]|qu)ies$/gi,"$1y");
$.singular(/(s)eries$/gi,"$1eries");$.singular(/(m)ovies$/gi,"$1ovie");$.singular(/(x|ch|ss|sh)es$/gi,"$1");$.singular(/([ml])(ous|ic)e$/gi,"$1ouse");$.singular(/(bus)(es)?$/gi,"$1");$.singular(/(o)es$/gi,"$1");$.singular(/(shoe)s?$/gi,"$1");$.singular(/(cris|ax|test)[ie]s$/gi,"$1is");$.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us");$.singular(/(census|alias|status)(es)?$/gi,"$1");$.singular(/^(ox)(en)?/gi,"$1");$.singular(/(vert|ind)(ex|ices)$/gi,"$1ex");
$.singular(/(matr)(ix|ices)$/gi,"$1ix");$.singular(/(quiz)(zes)?$/gi,"$1");$.singular(/(database)s?$/gi,"$1");$.singular(/ee(th?)$/gi,"oo$1");$.irregular("person","people");$.irregular("man","men");$.irregular("child","children");$.irregular("sex","sexes");$.irregular("move","moves");$.irregular("save","saves");$.irregular("save","saves");$.irregular("cow","kine");$.irregular("goose","geese");$.irregular("zombie","zombies");$.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(","));
H(v,j,m,{pluralize:function(){return Qb(this,j)},singularize:function(){return Qb(this,m)},humanize:function(){var a=Rb(this,Jb);a=a.replace(/_id$/g,"");a=a.replace(/(_)?([a-z\d]*)/gi,function(b,c,d){return(c?" ":"")+(Kb[d]||d.toLowerCase())});return Sb(a)},titleize:function(){var a=/[.:;!]$/,b,c,d;return this.spacify().humanize().words(function(f,g,e){b=a.test(f);d=g==0||g==e.length-1||b||c;c=b;return d||Lb.indexOf(f)===-1?Sb(f):f}).join(" ")},parameterize:function(a){var b=this;if(a===undefined)a=
"-";if(b.normalize)b=b.normalize();b=b.replace(/[^a-z0-9\-_]+/gi,a);if(a)b=b.replace(new t("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:T(a)}),"g"),"$1");return encodeURI(b.toLowerCase())}});v.Inflector=$;v.Inflector.acronyms=Kb;
