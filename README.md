# nuxt_ai

nuxt_ai

## start up

根据 [.env.example](.env.example) 建立 `.env` 文件

```bash
pnpm i
pnpm db:up # 启动docker 的数据库和redis，初始化数据库表
pnpm db:generate # 如果数据结构已经在数据库中了，执行这个把数据库结构的orm代码生成
pnpm dev
```

一些系统级的第三方服务配置，请在系统运行时在 [config](http://localhost:3000/lab/config) 中配置

本地修改了数据结构后运行

```bash
pnpm db:update # 修改数据库的数据结构
```

当要上测试库的时候如果这次有修改数据结构需要先生成数据结构迁移脚本

```bash
pnpm db:migrate:dev # 修改数据库的数据结构
```

上线时如果这次有修改数据结构需要在线上数据库执行

```bash
pnpm db:migrate:deploy # 把数据结构迁移脚本运行
```

这步应该在`cicd`中自动执行，如果已实现请删除

### nuxt推荐的vscode 插件

[nuxtr-vscode](https://github.com/nuxtrdev/nuxtr-vscode#what-does-nuxtr-do)

## 相关资料

[nuxt](https://nuxt.com)

[naiveui](https://www.naiveui.com)

[vue3](https://cn.vuejs.org)

[prisma](https://www.prisma.io/)

[trpc](https://trpc.io)

[trpc-nuxt](https://trpc-nuxt.vercel.app/get-started/installation)

[icon](https://icon-sets.iconify.design/devicon/google/)

[vueuse](https://vueuse.org/)

[authjs](https://authjs.dev)

[authjs-nuxt](https://authjs-nuxt.pages.dev)

[vercel-ai](https://github.com/vercel/ai)

[openai-node](https://github.dev/openai/openai-node/blob/master/src/index.ts)
