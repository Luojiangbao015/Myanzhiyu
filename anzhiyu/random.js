var posts=["2025/03/14/hello-world/","2025/03/14/安知鱼部署/","2025/03/15/cpp/C++数组/","2025/03/15/cpp/CMake/","2025/03/15/cpp/cpp基础/","2025/03/15/cpp/cpp数据结构/","2025/03/15/cpp/cpp模板/","2025/03/15/cpp/inGUI/","2025/03/15/cpp/关键字/","2025/03/15/python/cpp模板/","2025/03/15/cs/关键字/","2024/03/30/unity/怪物跟踪玩家/","2025/03/15/戈多/戈多社区/","2025/03/15/杂项/html/","2025/03/15/杂项/伤害计算/","2025/03/15/杂项/小说 - 副本/","2025/03/15/杂项/小说/","2025/03/15/杂项/游戏源码解析/","2025/03/15/游戏设计/游戏设计/","2024/03/30/ue5/变量/API/","2024/03/30/ue5/变量/AGS课程/","2025/03/15/ue5/变量/字典/","2024/03/30/ue5/变量/GAS系统/","2025/03/15/ue5/变量/容器/","2025/03/15/ue5/变量/数组/","2024/03/30/ue5/变量/模板/","2025/03/15/ue5/变量/属性/","2024/03/30/ue5/变量/蓝图/","2025/03/15/戈多/CSharp/CSGODOT/","2025/03/15/戈多/CSharp/CS戈多杂项/","2025/03/15/戈多/CSharp/CS基础配置代码/","2025/03/15/戈多/CSharp/cs戈多API/","2025/03/15/戈多/GDScript/Gdextension/","2025/03/15/戈多/GDScript/godot基础/","2025/03/15/戈多/GDScript/godot模板/","2025/03/15/戈多/着色器/godot着色器/","2025/03/15/戈多/通用/计算机英语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"满心记","link":"https://blog.lovelu.top/","avatar":"https://img2.imgtp.com/2024/03/29/Z2VTyxWH.png","descr":"实函斯活，驿驿其达。","siteshot":"https://img2.imgtp.com/2024/03/29/rx6Zz7zI.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };