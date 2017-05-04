# Byemess-基于React&redux的在线Todo应用

为什么又是Todo，全世界的初学者都在做todo吗？可能很多人要问这句话，其实这句话可以等同于：

- 为什么你做了个云音乐播放器？
- 为什么你做了个新闻阅读APP？
- 为什么你做了个VUE/REACT版本的CNODE？

究其本质，这几个应用都是data-map模式，哈哈哈哈这是我自己创的词，意思就是说，本质都是拿到一组数据，然后就像遍历数组一样将这些数据遍历渲染，这类project都可以算是pure-data-driven的。     

至于我为什么做了Todo，答案很简单，我初学react&redux时接触的例子就是Todo，将这个app进行功能拓展，将会使用到react和redux的各种特性。    

这个App的UI直接参考了知乎[@黄玄](https://www.zhihu.com/people/huxpro/answers)的Vue写的TodoApp，已经获得他本人的许可。设计活儿太磨人，本着熟练react&redux的项目实战的目的，UI和交互就没有想花太多时间去设计，直接照着样子写了一个，他的代码我可一个字都没看过，别喷我山寨哈哈哈。


## 已部署版本（2017.05.04更新
heroku国内太卡了，还是直接用了Leancloud。    
[点这里点这里：Byemess](https://byemess.leanapp.cn/)

## 源代码
[Github](https://github.com/kylewh/NoMess)    
如果对你有有所启发或者帮助，送我一个star吧 :)    

## 预览

### Login
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-135825.jpg)

### Logged
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-140119.jpg)

### Main
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-135850.jpg)

### Add Todo
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-140021.jpg)

### Responsive
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-135938.jpg)

### Drawer
哈哈哈用drawer来插入一下自我推广的信息貌似是常用套路？主要的页面导航使用bottomBar去切换，这样切换起来更加方便。
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-140211.jpg)  

## 目录结构
![](http://om8hmotom.bkt.clouddn.com/2017-05-02-144625.jpg)

标准目录结构，有两个地方提一下：

1. styled 用来存储所有经过styled-components进行装饰后的组件，清一色presentational components，所以移入components目录下是没有问题的，但考虑到它的feature，在项目存在潜在规模扩大可能时，通过Feature进行分类更好，所以就没有进行合并。

2. 对于components 和 container的分类市面上真是五花八门，对我而言，我更倾向跟随redux作者（真是帅啊）的定义： `It's up to whether the component is aware of Redux`，通俗点说，不需要connect至store的组件都不是container. 这样的确make sense， 不过在组件的分配上会显得有点奇怪，这就比较考功力和经验了。

## Function

- Single Page App
- 在线注册账号，数据存储于leanCloud。
- todoItem增删改，数据同步到云
- 根据完成情况切换视图
- 添加日期标签，所有item按日期分组

## TechStack
- **React**： 全套ES6及以上语法，生命周期函数，ref操作，动态渲染，应有尽有。
- **Redux**： 采用最佳实践，针对不同的逻辑state管理进行拆分，然后combine之. 采用Thunk处理Action，控制异步操作。
- **React-Routerv4**：跟以前的版本有显著变化，构建单页APP利器。
- **Styled-Components**: 强推，什么BEM，什么CSS-Module，通通靠边，结合Helper: Styled-props，彻底解决css组件化方案。告别预处理器，避免创造更多学习成本。
- **Webpack**： 自动化构建，采用chunkhash方式分类打包文件，优化用户缓存策略。
- **CSS3**: 结合CSSTransitionGroup，创建组件过场动画，优化体验。    
- **underscore**: 用它还是用lodash都行，我只是需要用一下里面的debounce，用来控制edit todoItem时API通信的频率。其实自己手写一个helper也行，在学习redux的练手项目里我就手写= = 。

后续可能优化使用的:

- **reselect**: 再也不用手写那么多重复的state selector了！
- **immutable**： 感受函数式的威力。
- **redux saga**: 2017年了，还不使用generator的异步action控制体系。

## Problem

1. `state`的设计主要针对数据的获取与查找策略，模拟数据库的方式，建立`LookupTable`，存储目标id，遍历id进行数据拉取。这样的方式好处是在分状态显示todoItems时只需要操作id，而不需要操作数据实体，提高性能。 但是同时也遇到一个问题： 针对查找策略对应确定的api层构造相对耦合，数据拉取方式无法本地模仿，因此让我放弃了使用`LocalStorage`的进行离线状态的支持。 黄玄的策略是优先进行本地操作，用户可以选择上传或者下载数据，这个方式不错，对我有所启发。 过度对数据模型进行装饰的结果便是高耦合，这跟我初衷是基于在线存储数据有关。 算是一个教训。

2. 之前想要给登录成功页面添加延时跳转的功能，以便使用户体验更加完整，但是尝试未果，原因是login页面和list页面本质上是两个`route`下的组件，进行切换时会进行拉取数据 => `Re-render`，一旦我登录后再次进入login页面，无论我在login组件里如何尝试记录上一次的状态进行比对（`componentWillReceiveProps`)，都是徒劳。 后来想到根目录下App组件可以进行connect保存一个登录的flag，以此来确保第一次从未登录状态进入登录状态时时才会进行跳转。但是我没有这样做，我实在不想污染APP这个root组件，除非再包一层...

3. 跳转部分React-router并没有提供更多API，其`Redirect`的时间上的可操控性不高，只能依赖注入`BrowserHistory`属性来进行人工push地址，略为丑陋。鄙人才疏学浅，相信不久后能找到更优雅的方式。

## 总结

### 我的不足
- **耗费时长**：从学习React&Redux开始，花费了相对**较多的时间**在学习相关的综合知识（组件设计，结构设计，reducer，action的结构最佳实践等等），使得我的项目迟迟未能开工，个人可能更习惯有所深度的学习后再进行实践，也是贪了想少走弯路的念头。然后习惯性被炫酷的技术吸引，研究了两天react-motion（膜拜@chengmo大神啊，咱们中国小伙有智慧），因为当时想要实现drag Sortable List的效果，后来回过神来，先做出基本再说！这个APP从做出原型到重构修改总工时粗略计算大概不到8天，如果撸起袖子直接干，应该可以压缩到6天。当然了学习成本不可忽略，我给自己的时长计算时从0了解到输出成品。

- **App效果**： 给自己打7分，可优化拓展的东西太多。还记得我说的`data-map`模型吗？我完全可以把这个App打造成一个工作台，把之前那些满地飞的项目都囊括进来，可以加大练习技术的力度，这样我就可以终结满知乎闹的什么“为何vue的demo比react多”之类的无聊话题，纯属Vue好上手！文档亲切直白如私教！各大中文网示例重构demo多到不行好吗！光是react这**英文环境**就够国内60%程序猿吃一壶了。（扯远了哈哈哈）

### 夸夸自己
- **及时总结**： 学习的时候容易懵逼容易记忆断片怎么办！？这一度让我很苦恼，为了加速学习进程，唯有： 总结！梳理！写博客！于是诞生了这俩货：（新手朋友们看一看对概念原理理解一定会有帮助）
	- [我的第一本Redux小书（基础部分）](https://kylewh.github.io/2017/04/21/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%ACredux%E5%B0%8F%E4%B9%A6/)
	- [Redux上手思维导图](https://kylewh.github.io/2017/04/21/Redux%E5%B0%8F%E4%B9%A6%E7%B3%BB%E5%88%97-Redux%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE/)
- **自学上手效率**： 曾经一度不是很自信，当然了都是老大徒伤悲云云，对自己的真实实力还是有一定自信，我相信我能够短时间接受并运用甚至拓展所学知识，我也的确做到了。由于一开始便对react有迷之好感（这辈子第一次对一个技术生态有这种感觉），加上自己英语无压力，阅读了许多关于react技术栈的文章，了解了刀耕火种到现在一片大繁荣的react体系下的技术变迁，对知识体系有了一个宏观的把控，这个阶段大概一周，期间还看着网上的教程写了几个小demo用来针对训练一些技术点：比如`父子双向通信`，`生命周期函数使用场景`，`异步action处理方案`，`模拟redux内部核心功能`：[github（1）](https://github.com/kylewh/Dive_Into_React_Redux)，[github（2）](https://github.com/kylewh/redux_mastering)。 我个人的思维很发散，容易噼里啪啦想到很远很歪，导致了以前学习过程中缺乏统一的节奏，一下捣鼓一下动画队列，一下看看源码，没有很持久的去做一件事，这次算是圆满啦。不过这次能上手这么快，也得益于以前javascript的基础，细节不保证全部能回忆，但是思想和经验都沉淀进了自己的脑子，接下来要去找工作，还得把基础好好过一遍，重中之重！

- **解决实际问题的能力**： 现在自己解决问题的感觉越来越好，可以快速定位问题的症结，擅用搜索引擎（我真的好久好久没有用过baidu了...)，specific的问题会一股脑先用文字输出的形式描述一遍，这样让问题的结构在脑中有个印象，然后过一会儿回来自己就萌发idea，然后尝试 -> 解决。 最后一句： **靠自己。**

## 最后的最后，求star，求支持，本人小硕应届，求推荐深圳的工作 :)

