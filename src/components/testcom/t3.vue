<template>
  <div>
    <input type="button" value="硬盘序列号@" @click="disk"> 
  </div>
</template>
<script>
export default {
  name: "t3",
  methods:{
     disk() {//硬盘序列号 信息
　　　var locator = new ActiveXObject ("WbemScripting.SWbemLocator");
　　　var service = locator.ConnectServer(".");
　　　var properties = service.ExecQuery("SELECT * FROM Win32_DiskDrive");
　　　var e = new Enumerator (properties);
　　　document.write("<table border=1>");
　　　for (;!e.atEnd();e.moveNext ())
　　　{
　　　　　　var p = e.item ();
　　　　　　document.write("<tr>");
　　　　　　document.write("<td>" + p.signature + "</td>");
　　　　　　document.write("</tr>");
　　　}
　　　document.write("</table>");
    } 
  }
};
</script>
<style>
</style>
