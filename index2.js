alert("我们接下来玩一个游戏！");
alert("游戏的名字叫做变大变大变大！");
alert("名字是有些无聊，但是游戏更无聊！");
confirm("准备好了我们就开始吧~");
let user = {};
user.名字 = prompt("你叫什么名字?", "张三");
user.年纪 = prompt("你的年纪是多少？（岁）", "16");
alert("别急我不会泄露你的隐私的~");
user.身高 = prompt("你的身高有多高？（厘米）", "170");
alert("哇比我还高~");
user.体重 = prompt("你的体重有多重？（斤）", "100");
alert("没事多吃点，你不用减肥！");
let option = prompt(
  "你最想变大的是那个？（年纪、身高、体重）\n请输入上面括号里的三个选项。",
  "年纪"
);
let factor = prompt("你想变大多少倍呢？\n输入存数字。", "2");
confirm("奇迹即将出现准备好了吗？");
user[option] *= factor;
let result =
  "你好" +
  user.名字 +
  "！\n你的" +
  option +
  "神奇的变大了。\n目前的你的" +
  option +
  "变成了" +
  user[option];
alert("没事多吃点，你不用减肥！");
confirm(result);
