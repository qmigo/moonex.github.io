var arr=[];

arr[1]={
    title:"Filter Test Dust",
    desc:"Arizona sand including Arizona Test Dust, Arizona Road Dust, Arizona Silica, AC Fine and AC Coarse Test Dusts, SAE Fine and Coarse Test Dusts, J726 Test Dusts, ISO 12103-1 A1 Ultrafine Test Dust, ISO 12103-1, A2 Fine Test Dust, ISO 12103-1, A3 Medium Test Dusts and ISO 12103-1, A4 Coarse Test Dust, MIL-STD 810F Blowing Dust."
}

arr[0]={
    title:"JIS Test Powders1 (JIS Z 8901) (Class 1,2,3 Quartz Sand)",
    SiO2:"95 min.",
    Fe2O3:"5 max.",
    Particle_density:"2.6～2.7g/cm3",
    Material_used:"Quartz sand"
}

for(let i=0;i<2;i++)
{
    var str=JSON.stringify(arr[i]);
    localStorage.setItem(`p${i+1}`,str);
}