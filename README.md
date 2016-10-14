# marquee

使用CSS3.0的animation属性实现的文字左右滑动，类似于原<marquee>标签的功能

其实现原理是，使用js，向styleSheets中插入一个新的styleSheet，并在这个里面定义keyframe，然后为对象添加animation属性，根据具体的长度设定动画时间，原生js实现，无依赖，当然不支持CSS3.0的浏览器无法正常使用


注：只有在内容长度超出容器长度的时候，才会有效果，否则无效果。


用法：

js部分
new marquee("divId");

divId为需要滚动效果的div

html部分需要引入marquee.js和marquee.css
