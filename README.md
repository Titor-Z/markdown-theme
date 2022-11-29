<link rel="stylesheet" href="/dist/dist.css">

<main class="container">

# Svelte + Vite

> 这里是测试能否自定义Blockquote

<img src="https://t7.baidu.com/it/u=2621658848,3952322712&fm=193&f=GIF" alt="">

![秃瓢](https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF)

1. <input type="checkbox" checked id="hh"> <label for="hh">哈哈哈</label>
2. <input type="checkbox" id="hei"> <label for="hei">嘿嘿嘿</label>
<p>
  <form action="#" method="post">
    <input type="text"> <br>
    <textarea></textarea> <br>
    <button type="button">提交</button>
  </form>
</p>

This <mark>template should</mark> help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you *later need the extended* capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

# 给迷茫的自学者指一条路

Jul 16, 2015 - 浏览量： - 次 | 自学 思维导图

> 不管是从零开始接触编程，还是从大学踏入社会，一个人踏入一个全新的领域时总是会产生迷茫的感觉。这篇文章的目的不在于教授自学者们学习的方法，而仅仅是把我自己的一些学习和总结的方法分享出来以供参考，希望对你们有所帮助。

> 我会以四个角度给你们介绍四个工具，XMind、Trello、Pocket 和 Evernote；我相信这些工具大家也大多耳熟能详，而我会讲述我是如何使用这些工具，以及这些工具是如何相辅相成的。可能因为我接触前端领域的知识较多，例子中也会以前端为主，但知识和方法都是相通的，所以这应该也不会成为什么大问题。

#### 建立大局观：思维导图
自学者们在没有得到指导的情况下通常会对未来行走的方向一片迷茫，此刻最重要的是建立起大局观，也就是在宏观的角度建立起未来的蓝图。 要做到这一点，思维导图 (Mind Map) 是个很好的工具。我自己比较常用的是 XMind，免费版在大多数情况已经够用了。 百度脑图 是一个在线的思维导图工具，还支持同步到百度云；如果想用于分享的话，使用百度脑图也是不错的选择。

<p contentEditable="true">
在你使用的思维导图的工具中，千万不要给你的导图添加过多的细节信息。那些细节信息应该被记录在其他的工具中，这在下文中会提到， 而思维导图的作用更多地体现在作为蓝图。通过它，你可以比较清晰地认识到你未来三个月，半年，甚至一两年内的大致的学习方向。
</p>

关于前端技术，有很多前人总结的导图，有一定的借鉴意义：

拔赤的总结
朴灵的 fks
大漠的总结
但最最重要的是，你必须建立属于你自己的思维导图！也许它一开始并不那么完整，一开始你只能做出一张很小的图，但那也就够了。 如果直接把别人的一大张图拿来作为自己的蓝图，那么你依旧是迷茫而不知所措的。任何领域的知识都是汪洋大海，你永远不能指望能够完全掌握所有知识。 所以你只需要在你学习的过程中，不断添加、修正、完善的你的导图就好，最理想的学习状态就是保持自己的节奏。

#### 知道自己该做什么：Trello
有了大局观，就要着眼于当下，踏踏实实地走出每一步了。这时我推荐你们使用 Trello， 它好处在于同时支持网页版和 App，不管在哪里都可以很方便的查看。而且 Trello 天然支持 4 层树状结构，很适合与思维导图的树状结构对应。 这四层结构主要是：Organization - Board - List - Card。



我来举个例子可能比较直观，先来看第一层结构，把 Organization 作为根节点，创建一个新的 Organization “前端学习”。 使用 Organization 作为树的根节点稍微有点 hack 的成分，不过对个人使用来说并没有大碍啦。如果你觉得你学习的终极目标只有一个根节点的话，也是可以不创建 Organization 的。

然后就可以在其中创建好多二层节点 Boards 了，就像上面这张图中，我大致创建了 7 个 Boards，大家也可以根据自己的实际情况来创建。 接着我们随便打开一个 Board，比如 JavaScript：



类似于上图的做法，你可以将你需要做的事分成几类，以便于你真正想学习时有的放矢。在每一个 Card 中，你都能添加一些详细的信息，能添加标签、描述，还能加 Checklist！ 可我还是建议你不要赋予 Trello 太多的责任，我觉得 Trello 作用应该局限于梳理待办事项，而已经得到的知识或者想要总结的东西，应该借助于下面要介绍的两个工具。

#### 对文章进行整理归类：Pocket
在学习知识的过程中，你总是会参考不少的文章，而某些非常精彩的文章，你总是会想要记录下来的。有些人会使用书签，而这是最糟糕的做法。 因为你想要检索内容的时候，你几乎没法从一堆书签的名字中找到你想要的内容，而且你也很难维护日益增长的书签数目。

我向你强烈推荐一个工具 Pocket。它支持网页版和各种移动平台，可以作为 Chrome 的扩展，使用起来也是相当的方便。



当你读完在 Trello 中记录的文章链接又觉得这篇文章带来非常大的帮助时，你就可以把它加入到 Pocket 中，并给这篇文章加上一些便于检索的标签。 也许有人会推荐使用 Evernote 的剪藏来保存网上的文章，我对此是不推荐的。

首先在我自己使用的体验上来说，Evernote 剪藏出来的文章比起 Pocket 剪辑出来的显示效果要糟糕很多； 其次，我个人也不太喜欢赋予一个工具太多职责，在用过一段时间剪藏后，我发现我的 Evernote 变得愈加混乱，有时也很难把某一篇文章简单地归类到某本笔记本中，这让我非常困扰。


#### 记录学习的体会：Evernote

最后登场的工具是大家非常熟悉的大象 Evernote，在国内的名字叫做印象笔记。其实前文也提到了， 我并不喜欢在 Evernote 中保存网上的文章，因为这会使我的笔记们显得有些混乱。Evernote 支持笔记本组和笔记本，能构成 3 层的树状结构， 因此 Evernote 也对应于思维导图的结构来创建笔记本组和笔记本。

在 Evernote 中，你可以记录你学习的过程，总结一些相似知识之间的关联，从而形成自己的观点。你还可以将一些你觉得写的比较不错的文章发布到你的博客上与大家一起分享。 另外推荐一个付费的工具 马克飞象。依靠它，你就可以使用 Markdown 来编写你的笔记啦，没用过的同学打开试试吧！~

#### 总结
今天给大家介绍的是我个人的学习方法，主要就是借助了 XMind、Trello、Pocket 和 Evernote 四个工具来管理我的知识树。 不管怎么样，希望对大家有所帮助吧！如果你有什么想法想要交流，欢迎直接在下面的评论框中留言。

</main>