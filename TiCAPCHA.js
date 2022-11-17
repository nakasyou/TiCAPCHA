function TiCAPCHA(selector,toUrl,time){
const random={
  rand:Math.random,
  chose:lst=>{
    var len=lst.length
    var site=Math.floor(Math.random()*lst.length)
    return lst[site]
  }
}
$(selector).html(`<div class="iAmNot"><div class="riaju" style="padding: 0px; margin-bottom: 0px; border: 0.1px solid #333333;background-color:#fff;position:fixed;bottom:0;right:0;width:100%;height:100%;"><div id="hanbetumondai" style="padding:10px;margin-bottom:10px;background-color:#77f;color:#fff;">直感的に選んでください<br></div><div id="gazoumondai" style="background-color:#fff"></div><br><a id="tugihe" href="javascript:void(0)" style="color:#000">次へ</a></div><div class="kenti" style="padding: 10px; margin-bottom: 10px; border: 0.1px solid #0b0; border-radius: 10px;background-color:#fff;"><span id="okh"><img src="https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/ok.png" style="height:20px;" id="ok-r"> <img src="https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/no.png" style="height:20px;" id="no-r"> </span><span>私はリア充ではありません</span><br><span id="riaer" style="color:#f00"></span></div></div>`)
$(".iAmNot .kenti #okh #ok-r").hide()
$(".iAmNot .riaju").hide()
$('.iAmNot .kenti #okh #no-r').click(function() {
    
    var no=[
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/42B8F588-9932-447D-90C4-D4650A233197.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/42CDA309-4596-4251-A1E1-82C2E2D76C13.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/46B5F016-53B8-4231-B067-7053EC46C603.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/48AAA801-5D9D-4225-BBB3-148E5FB8A9C6.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/765C1670-0438-4F06-A862-4B9E1E76B669.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/A502B1EF-AE9A-4451-9A7E-0E21888CCA02.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/BB1C494E-0B83-432D-917E-1110E97D5C35.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/BF98051C-7062-44E0-9B04-7B721B260724.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/C301BE07-9046-428D-B061-4EF237E9F759.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/f/FC3DF2B6-152A-481F-8878-D57C8C03F07A.jpeg",
    ]
    var ye=[
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/07CE3054-9A3A-4D19-947F-794DE536D3B3.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/1CD5DD46-AF58-4EFA-ADE3-D7C40A04B92C.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/4E18F0A3-4396-4190-86CF-57B11378E0FB.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/50FB4555-3FE8-4CEC-9B16-5AE6280D3635.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/A914C9EA-5B8A-4718-915C-199EA3AB631C.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/B3494039-4ACA-4972-8682-B5E3ADACB5A1.jpeg",
      "https://cdn.jsdelivr.net/gh/nakasyou/TiCAPCHA@main/ast/t/E674C71C-B0EE-49E8-B66A-AA3658805B11.jpeg",
    ]
    var al=ye.concat(no)
    let isRiaju="return ye.includes(url)"
    let isriaju=new Function("ye","url",isRiaju)
    
    
      $(".iAmNot .riaju").show()
      let imgcase=$(".iAmNot .riaju #gazoumondai")
      let noN=0
      imgcase.html("")
      for(let i=0;i!=9;i++){
        
        var url=random.chose(al)
        if(!isriaju(ye,url)){
          noN++
        }
        imgcase.append(`<img src="${url}" id="rt${i}" border="0">`)
        $(".iAmNot .riaju #rt"+i).click(new Function(`
        function isriaju(url){
          ${isRiaju}
        }
        var i=${i}
        var url="${url}"
        var ye=JSON.parse('${JSON.stringify(ye)}')
        var c=$(".iAmNot .riaju #rt${i}")
        if(c.attr("border")!="0"){
          c.attr("border","0")
        }else{
          c.attr("border","8")
        }
        `))
        if(i%3==2){
          imgcase.append("<br>")
        }
      }
      var imgs=$(".iAmNot .riaju #gazoumondai img")
      imgs.css("width","30%")
      imgs.css("height","15%")
      imgs.css("object-fit","cover")
      $(".iAmNot .riaju #tugihe").click(()=>{
        useN=0
        useNn=0
        for(let i=0;i!=9;i++){
          let se=$(".iAmNot .riaju #rt"+i)
          if(se.attr("border")!="0"){
            if(!isriaju(ye,se.attr("src"))){
              useN++
            }else{
              useNn++
            }
          }
        }
        let c=noN-useN//ほんらいえらぶべき
        let score=(useN-useNn-c)/noN
        if(score<0.5){
          $(".iAmNot .kenti #riaer").text("エラーが発生しました。あなたはリア充の可能性があります。")
        }else{
          $(".iAmNot .kenti #riaer").text()
          $(".iAmNot .kenti #okh #no-r").hide()
          $(".iAmNot .kenti #okh #ok-r").show()
          if(toUrl!=null){
            if(time==null){
              time=0
            }
            setTimeout(() => {
            	window.location = toUrl;
            }, time);
            
          }
        }
        console.log(score)
        
        $(".iAmNot .riaju").hide()
        
      })
    
    
})
}
