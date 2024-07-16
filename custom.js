// var printbtn = document.getElementById("dlbtn");
// printbtn.addEventListener('click',function(){
//     print();
// });

var nm_1,nm_2,mob_no,orde,pro,retu,mandap,mandap_day,man_p,t_p_m,vasn,vasn_day,vasn_p,t_p_v,gadla,gadla_p,gadla_day,gadla_p,
t_p_g,chadr,chadr_day,chadr_p,t_p_ch,takiya,takiya_day,takiya_p,t_takiya,t_p_tak,karpat,karpat_day,karpat_p,t_karpat,t_p_kar,
khurshi,khurshi_day,khurshi_p,t_khu,t_p_khu,tab_s,tab_s_day,tab_s_p,t_tab_s,t_p_table_s,tab_k,tab_k_day,tab_k_p,t_tab_k,
t_p_table_k,tab_jk,tab_jk_day,tab_jk_p,t_tab_jk,t_p_table_jk,total_all_price;

nm_1 = prompt("નામ:- ");
nm_2 = prompt("સરનામુ:- ");
mob_no = parseInt(prompt("મોબાઇલ નંબર:-"));
orde = prompt("ઓર્ડર લખાવ્યા તા:- ");
pro = prompt("પોગ્રામ તા:- ");
retu = prompt("પરત તા:- ");

document.getElementById("name-1").innerHTML = nm_1;
document.getElementById("name-2").innerHTML = nm_2;
document.getElementById("mobi-nu").innerHTML = mob_no;
document.getElementById("or").innerHTML = orde;
document.getElementById("po").innerHTML = pro;
document.getElementById("pa").innerHTML = retu;

// mandap
mandap = parseInt(prompt("કેટલા મંડપ:- "));
mandap_day= parseInt(prompt("કેટલા દિવસ"));
man_p = parseInt(prompt("મંડપ નો ભાવ"));
document.getElementById("mandap").innerHTML = mandap;
document.getElementById("m-day").innerHTML = mandap_day;
// kull ng mandap
t_ma = mandap * mandap_day;
document.getElementById("t-ng-m").innerHTML = t_ma;
document.getElementById("p-m").innerHTML = man_p;
// total price mandap
t_p_m = t_ma * man_p;
document.getElementById("total-p-m").innerHTML = t_p_m;

// vasan
vasn = parseInt(prompt("કેટલા માણસ નુ વાસણ:- "));
vasn_day= parseInt(prompt("કેટલા દિવસ"));
vasn_p = parseInt(prompt("વાસણ નો ભાવ"));
document.getElementById("vasn").innerHTML = vasn;
document.getElementById("v-days").innerHTML = vasn_day;
// kull ng vasan
t_va = vasn * vasn_day;
document.getElementById("t-ng-va").innerHTML = t_va;
document.getElementById("p-va").innerHTML = vasn_p;
// total price vasan
t_p_v = t_va * vasn_p;
document.getElementById("total-p-va").innerHTML = t_p_v;

// gadla
gadla = parseInt(prompt("કેટલા ગાદલા:- "));
gadla_day= parseInt(prompt("કેટલા દિવસ"));
gadla_p = parseInt(prompt("ગાદલા નો ભાવ"));
document.getElementById("gadla").innerHTML = gadla;
document.getElementById("ga-days").innerHTML = gadla_day;
// kull ng gadla
t_gadla = gadla * gadla_day;
document.getElementById("t-ng-ga").innerHTML = t_gadla;
document.getElementById("p-ga").innerHTML = gadla_p;
// total price gadla
t_p_g = t_gadla * gadla_p;
document.getElementById("total-p-ga").innerHTML = t_p_g;

// chadr
chadr = parseInt(prompt("કેટલી ચાદર:- "));
chadr_day= parseInt(prompt("કેટલા દિવસ"));
chadr_p = parseInt(prompt("ચાદર નો ભાવ"));
document.getElementById("chadr").innerHTML = chadr;
document.getElementById("ch-days").innerHTML = chadr_day;
// kull ng chadr
t_chadr = chadr * chadr_day;
document.getElementById("t-ng-ch").innerHTML = t_chadr;
document.getElementById("p-ch").innerHTML = chadr_p;
// total price chadr
t_p_ch = t_chadr * chadr_p;
document.getElementById("total-p-ch").innerHTML = t_p_ch;

//takiya
takiya = parseInt(prompt("કેટલા ગોળ તકિયા:- "));
takiya_day= parseInt(prompt("કેટલા દિવસ"));
takiya_p = parseInt(prompt("ગોળ તકિયા નો ભાવ"));
document.getElementById("takiya").innerHTML = takiya;
document.getElementById("d-takiya").innerHTML = takiya_day;
// kull ng takiya
t_takiya = takiya * takiya_day;
document.getElementById("t-ng-tak").innerHTML = t_takiya;
document.getElementById("p-tk").innerHTML = takiya_p;
// total price takiya
t_p_tak = t_takiya * takiya_p;
document.getElementById("total-p-tk").innerHTML = t_p_tak;

//karpat
karpat = parseInt(prompt("કેટલા કાર્પેટ:- "));
karpat_day= parseInt(prompt("કેટલા દિવસ"));
karpat_p = parseInt(prompt("કાર્પેટ નો ભાવ"));
document.getElementById("karpet").innerHTML = karpat;
document.getElementById("d-kar").innerHTML = karpat_day;
// kull ng takiya
t_karpat = karpat * karpat_day;
document.getElementById("t-ng-kar").innerHTML = t_karpat;
document.getElementById("p-ka").innerHTML = karpat_p;
// total price takiya
t_p_kar = t_karpat * karpat_p;
document.getElementById("total-p-kar").innerHTML = t_p_kar;

//khurshi
khurshi = parseInt(prompt("કેટલી ખુરશી:- "));
khurshi_day= parseInt(prompt("કેટલા દિવસ"));
khurshi_p = parseInt(prompt("ખુરશી નો ભાવ"));
document.getElementById("khurshi").innerHTML = khurshi;
document.getElementById("d-khu").innerHTML = khurshi_day;
// kull ng takiya
t_khu = khurshi * khurshi_day;
document.getElementById("t-ng-khu").innerHTML = t_khu;
document.getElementById("p-khu").innerHTML = khurshi_p;
// total price takiya
t_p_khu = t_khu * khurshi_p;
document.getElementById("total-p-khu").innerHTML = t_p_khu;

//table s
tab_s = parseInt(prompt("કેટલા ટેબલ(સાદા):- "));
tab_s_day= parseInt(prompt("કેટલા દિવસ"));
tab_s_p = parseInt(prompt("ટેબલ(સાદા) નો ભાવ"));
document.getElementById("table-1").innerHTML = tab_s;
document.getElementById("d-tab-1").innerHTML = tab_s_day;
// kull ng takiya
t_tab_s = tab_s * tab_s_day;
document.getElementById("t-ng-tab-1").innerHTML = t_tab_s;
document.getElementById("p-tab-s").innerHTML = tab_s_p;
// total price takiya
t_p_table_s = t_tab_s * tab_s_p;
document.getElementById("total-p-tab-1").innerHTML = t_p_table_s;

//table k
tab_k = parseInt(prompt("કેટલા ટેબલ(કાગળ):- "));
tab_k_day= parseInt(prompt("કેટલા દિવસ"));
tab_k_p = parseInt(prompt("ટેબલ(કાગળ) નો ભાવ"));
document.getElementById("table-2").innerHTML = tab_k;
document.getElementById("d-tab-2").innerHTML = tab_k_day;
// kull ng takiya
t_tab_k = tab_k * tab_k_day;
document.getElementById("t-ng-tab-2").innerHTML = t_tab_k;
document.getElementById("p-tab-k").innerHTML = tab_k_p;
// total price takiya
t_p_table_k = t_tab_k * tab_k_p;
document.getElementById("total-p-tab-2").innerHTML = t_p_table_k;

//table jk
tab_jk = parseInt(prompt("કેટલા ટેબલ(જાલર+કાગળ):- "));
tab_jk_day= parseInt(prompt("કેટલા દિવસ"));
tab_jk_p = parseInt(prompt("ટેબલ(જાલર+કાગળ) નો ભાવ"));
document.getElementById("table-3").innerHTML = tab_jk;
document.getElementById("d-tab-3").innerHTML = tab_jk_day;
// kull ng takiya
t_tab_jk = tab_jk * tab_jk_day;
document.getElementById("t-ng-tab-3").innerHTML = t_tab_jk;
document.getElementById("p-tab-jk").innerHTML = tab_jk_p;
// total price takiya
t_p_table_jk = t_tab_jk * tab_jk_p;
document.getElementById("total-p-tab-3").innerHTML = t_p_table_jk;

total_all_price = t_p_m + t_p_v + t_p_g + t_p_ch + t_p_tak + t_p_kar + t_p_khu + t_p_table_s + t_p_table_k + t_p_table_jk;

document.getElementById("total").innerHTML = total_all_price; 